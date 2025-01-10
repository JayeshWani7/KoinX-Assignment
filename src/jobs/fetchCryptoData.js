const axios = require("axios");
const CryptoData = require('../models/CryptoData'); // Assuming the CryptoData model exists

// Array of the coins to fetch data for
const coins = ['bitcoin', 'ethereum', 'matic-network'];

const fetchCoinData = async (coin) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coin}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-7jTNLz7ozomPzB8En9QdAZe6', 
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      // Extract the relevant data
      const cryptoData = {
        coin: coin,
        price: data.market_data.current_price.usd,
        marketCap: data.market_data.market_cap.usd,
        change24h: data.market_data.price_change_percentage_24h,
        timestamp: new Date(),
      };

      // Store the data in the database
      await CryptoData.create(cryptoData);
      console.log(`${coin.toUpperCase()} data stored successfully`);
    } else {
      console.error(`${coin.toUpperCase()} Data fetch failed:`, data);
    }
  } catch (err) {
    console.error(`Error fetching data for ${coin}:`, err);
  }
};

// Fetch data for each coin and store it in the database
const fetchCryptoData = async () => {
  for (let coin of coins) {
    await fetchCoinData(coin);
  }
};

module.exports = fetchCryptoData;
