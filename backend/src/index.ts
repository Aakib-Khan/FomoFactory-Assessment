import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import schedule from 'node-schedule';
import cors from 'cors';
import { fetchData } from './services/fetchData';
import { connectDB } from './DB';
import cryptoRoute from './routes/cryptoRoute'
const app = express();
const PORT = process.env.PORT || 3000;// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Stock and Crypto Data Service is running');
});
app.use("/api/v1/crypto", cryptoRoute);


// Connect to the database
connectDB();

// Schedule the data fetching every 50 seconds
schedule.scheduleJob('*/50 * * * * *', fetchData);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
