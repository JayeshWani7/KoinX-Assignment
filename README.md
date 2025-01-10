# Crypto Data Fetcher

This is a server-side application built with Node.js and MongoDB, which fetches cryptocurrency data (price, market cap, and 24h change) from the CoinGecko API every 2 hours, stores it in a MongoDB database, and provides APIs to retrieve the data.

## Features

- **Background Job**: Fetches data for Bitcoin, Ethereum, and Matic every 2 hours from the CoinGecko API.
- **API Endpoints**:
  - `/stats`: Retrieves the latest data (price, market cap, and 24h change) for a specified cryptocurrency.
  - `/deviation`: Calculates and returns the standard deviation of the price for the last 100 records of a specific cryptocurrency.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing the cryptocurrency data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **node-fetch**: Library for making HTTP requests.
- **cron**: Scheduler for running the data fetching job at regular intervals.
- **dotenv**: Environment variable management.

## API Endpoints

### 1. `/stats`
Retrieves the latest data (price, market cap, and 24h change) for a specified cryptocurrency.

#### Query Params:
- `coin`: One of `bitcoin`, `ethereum`, or `matic-network`.

#### Sample Request:
\`\`\`bash
GET http://localhost:3001/stats?coin=bitcoin
\`\`\`

#### Sample Response:
\`\`\`json
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
\`\`\`

### 2. `/deviation`
Calculates and returns the standard deviation of the price for the last 100 records of a specified cryptocurrency.

#### Query Params:
- `coin`: One of `bitcoin`, `ethereum`, or `matic-network`.

#### Sample Request:
\`\`\`bash
GET http://localhost:3001/deviation?coin=bitcoin
\`\`\`

#### Sample Response:
\`\`\`json
{
  "deviation": 4082.48
}
\`\`\`

## Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine.

\`\`\`bash
git clone https://github.com/yourusername/crypto-data-fetcher.git
cd crypto-data-fetcher
\`\`\`

### 2. Install Dependencies
Make sure you have Node.js and MongoDB installed. Run the following command to install the necessary dependencies:

\`\`\`bash
npm install
\`\`\`

### 3. Set Up Environment Variables
Create a `.env` file in the root of the project and add your MongoDB connection string:

\`\`\`env
MONGODB_URI=mongodb+srv://<your-mongodb-credentials>
\`\`\`

Replace `<your-mongodb-credentials>` with your actual MongoDB connection string.

### 4. Run the Application
Start the server:
To start the server, run:

\`\`\`bash
node server.js
\`\`\`

The server will be running on http://localhost:3001. The background job will fetch data every 2 hours, and you can access the API endpoints.

### 5. Verify the Data Fetching Job
To verify that the background job is working correctly, you can check the database (CryptoData collection) for the stored cryptocurrency data.

### 6. Testing the API
You can test the API endpoints using any API client (e.g., Postman or cURL).

To get the latest data for a coin (e.g., Bitcoin):

\`\`\`bash
GET http://localhost:3001/stats?coin=bitcoin
\`\`\`

To get the standard deviation of Bitcoin's price for the last 100 records:

\`\`\`bash
GET http://localhost:3001/deviation?coin=bitcoin
\`\`\`

### 7. Cron Job
The background job runs every 2 hours and fetches the data from the CoinGecko API. You can check the job's logs or database to verify it's being executed correctly.

