import { Crypto } from "../models/Crypto";

export const processCryptoData = async (asset: any) => {
  try {
    const filter = { code: asset.code }; // Filter to find the document by code
    const update = {
      name: asset.name,
      symbol: asset.symbol,
      rank: asset.rank,
      age: asset.age,
      color: asset.color,
      png32: asset.png32,
      png64: asset.png64,
      webp32: asset.webp32,
      webp64: asset.webp64,
      exchanges: asset.exchanges,
      markets: asset.markets,
      pairs: asset.pairs,
      categories: asset.categories,
      allTimeHighUSD: asset.allTimeHighUSD,
      circulatingSupply: asset.circulatingSupply,
      totalSupply: asset.totalSupply,
      maxSupply: asset.maxSupply,
      links: asset.links,
      code: asset.code,
      rate: asset.rate,
      volume: asset.volume,
      cap: asset.cap,
      delta: asset.delta,
      timestamp: new Date(),
    };

    // Upsert option ensures that if document with filter doesn't exist, create a new one
    const options = { upsert: true };

    // Update the document or insert a new one
    const result = await Crypto.updateOne(filter, update, options);

    if (result) {
      console.log(`New data for ${asset.code} inserted at ${new Date()}`);
    } else {
      console.log(`Data for ${asset.code} updated at ${new Date()}`);
    }
  } catch (error) {
    console.error(`Error updating/inserting data: ${error}`);
  }
};
