import mongoose, { Document, Schema } from 'mongoose';

interface Delta {
  hour: number;
  day: number;
  week: number;
  month: number;
  quarter: number;
  year: number;
}

interface Links {
  website?: string;
  whitepaper?: string;
  twitter?: string;
  reddit?: string;
  telegram?: string;
  discord?: string;
  medium?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  linkedin?: string;
  twitch?: string;
  spotify?: string;
  naver?: string;
  wechat?: string;
  soundcloud?: string;
}

interface CryptoInterface extends Document {
  name?: string;
  symbol?: string;
  rank?: number;
  age?: number;
  color?: string;
  png32?: string;
  png64?: string;
  webp32?: string;
  webp64?: string;
  exchanges?: number;
  markets?: number;
  pairs?: number;
  categories?: string[];
  allTimeHighUSD?: number;
  circulatingSupply?: number;
  totalSupply?: number;
  maxSupply?: number;
  links?: Links;
  code?: string;
  rate?: number;
  volume?: number;
  cap?: number;
  delta?: Delta;
  timestamp?: Date;
}

const LinksSchema: Schema = new Schema({
  website: { type: String, default: null },
  whitepaper: { type: String, default: null },
  twitter: { type: String, default: null },
  reddit: { type: String, default: null },
  telegram: { type: String, default: null },
  discord: { type: String, default: null },
  medium: { type: String, default: null },
  instagram: { type: String, default: null },
  tiktok: { type: String, default: null },
  youtube: { type: String, default: null },
  linkedin: { type: String, default: null },
  twitch: { type: String, default: null },
  spotify: { type: String, default: null },
  naver: { type: String, default: null },
  wechat: { type: String, default: null },
  soundcloud: { type: String, default: null },
});

const DeltaSchema: Schema = new Schema({
  hour: { type: Number },
  day: { type: Number },
  week: { type: Number },
  month: { type: Number },
  quarter: { type: Number },
  year: { type: Number },
});

const DataSchema: Schema = new Schema({
  name: { type: String },
  symbol: { type: String },
  rank: { type: Number },
  age: { type: Number },
  color: { type: String },
  png32: { type: String },
  png64: { type: String },
  webp32: { type: String },
  webp64: { type: String },
  exchanges: { type: Number },
  markets: { type: Number },
  pairs: { type: Number },
  categories: { type: [String] },
  allTimeHighUSD: { type: Number },
  circulatingSupply: { type: Number },
  totalSupply: { type: Number },
  maxSupply: { type: Number },
  links: { type: LinksSchema },
  code: { type: String },
  rate: { type: Number },
  volume: { type: Number },
  cap: { type: Number },
  delta: { type: DeltaSchema },
  timestamp: { type: Date, default: Date.now },
});

export const Crypto = mongoose.model<CryptoInterface>('crypto', DataSchema);
