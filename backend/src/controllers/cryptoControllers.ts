import { Request, Response } from "express";
import { Crypto } from "../models/Crypto";

export const getLatestCryptoData = async (req: Request, res: Response) => {
  try {
    const { names } = req.body;
    console.log("names", names);

    let filter = {};
    if (names && names.length > 0) {
      filter = { name: { $in: names } };
    }

    const latestData = await Crypto.find(filter, {
      _id: 1,
      name: 1,
      code: 1,
      allTimeHighUSD: 1,
      rank: 1,
      rate: 1,
      webp64: 1,
    }).limit(20);

    // Return the data as a JSON response
    res.json(latestData);
  } catch (error) {
    console.error(`Error fetching latest crypto data: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCryptoDropDownList = async (req: Request, res: Response) => {
  try {
    const cryptoNames = await Crypto.find(
      {},
      {
        name: 1,
      }
    );

    // Return the data as a JSON response
    res.json(cryptoNames);
  } catch (error) {
    console.error(`Error fetching latest crypto data: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
