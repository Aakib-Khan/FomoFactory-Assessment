import axios from 'axios';
import { processCryptoData } from './processData';

const API_URL = 'https://api.livecoinwatch.com/coins/list';
const API_KEY = process.env.API_KEY || ''

export const fetchData = async () => {
  try {
    const response = await axios.post(API_URL, {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        // limit: 20,
        meta: true
      }, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY
        }
      });

    const data = response.data;
    console.log("data",data);
    if (data && Array.isArray(data)) {
      for (const asset of data) {
        await processCryptoData(asset);
      }
    } else {
      console.error('Invalid data format from API');
    }
   
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
};
