// redux/types.ts
export interface Delta {
  hour: number;
  day: number;
  week: number;
  month: number;
  quarter: number;
  year: number;
  _id: string;
}

export interface Links {
  website: string;
  whitepaper: string;
  twitter: string | null;
  reddit: string;
  telegram: string | null;
  discord: string | null;
  medium: string | null;
  instagram: string | null;
  tiktok: string | null;
  youtube: string | null;
  linkedin: string | null;
  twitch: string | null;
  spotify: string | null;
  naver: string | null;
  wechat: string | null;
  soundcloud: string | null;
  _id: string;
}

export interface CryptoDropDownData {
  name: string;

}

export interface CryptoData {
  _id: string;
  code: string;
  __v: number;
  age: number;
  allTimeHighUSD: number;
  cap: number;
  categories: string[];
  circulatingSupply: number;
  color: string;
  delta: Delta;
  exchanges: number;
  links: Links;
  markets: number;
  maxSupply: number;
  name: string;
  pairs: number;
  png32: string;
  png64: string;
  rank: number;
  rate: number;
  symbol: string;
  timestamp: string;
  totalSupply: number;
  volume: number;
  webp32: string;
  webp64: string;
}

export interface CryptoState {
  data: CryptoData[];
  isDialogOpen: boolean;
  selectedCryptos: string[];
  cryptoDropDownList: CryptoDropDownData[];
}
