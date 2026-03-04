// ========== Exchange Types ==========
export type ExchangeId = "hashkey" | "bullish" | "osl" | "vdx";

export interface Exchange {
  id: ExchangeId;
  name: string;
  color: string;
  assets: number;
  status: "active" | "maintenance";
}

export const EXCHANGES: Record<ExchangeId, Exchange> = {
  hashkey: { id: "hashkey", name: "HashKey", color: "#2962FF", assets: 45678, status: "active" },
  bullish: { id: "bullish", name: "Bullish", color: "#00BFA5", assets: 12345, status: "active" },
  osl: { id: "osl", name: "OSL", color: "#FF6D00", assets: 8901, status: "active" },
  vdx: { id: "vdx", name: "VDX", color: "#7C4DFF", assets: 3456, status: "maintenance" },
};

// ========== Asset Class ==========
export type AssetClass = "crypto" | "hk_stock" | "us_stock" | "forex";

export const ASSET_CLASSES: { id: AssetClass; label: string }[] = [
  { id: "crypto", label: "加密货币" },
  { id: "hk_stock", label: "港股" },
  { id: "us_stock", label: "美股" },
  { id: "forex", label: "外汇" },
];

// ========== Market Data ==========
export interface MarketItem {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  exchange: ExchangeId;
  assetClass: AssetClass;
  sparkline: number[];
  isFavorite?: boolean;
}

// Static sparkline data (hardcoded to avoid server/client hydration mismatch)
const S = {
  btc:  [64736,64890,65200,65580,65900,66100,65800,65950,66300,66700,66500,66800,67000,66700,66900,67100,67300,67000,67200,67100,67400,67250,67500,67300,67432],
  eth:  [3318,3340,3360,3380,3400,3420,3410,3430,3450,3470,3490,3480,3460,3440,3420,3430,3450,3460,3470,3460,3450,3440,3450,3460,3457],
  sol:  [171,170,172,173,175,174,176,177,175,174,176,177,178,176,175,177,178,176,177,178,179,177,178,179,178],
  doge: [0.158,0.157,0.156,0.155,0.156,0.155,0.154,0.155,0.153,0.154,0.153,0.152,0.153,0.154,0.153,0.152,0.151,0.152,0.153,0.152,0.151,0.152,0.153,0.152,0.152],
  bnb:  [585,584,586,587,585,586,587,588,586,587,588,589,587,588,589,590,588,589,590,589,588,589,590,589,589],
  xrp:  [0.516,0.515,0.517,0.518,0.516,0.517,0.519,0.520,0.518,0.519,0.521,0.522,0.520,0.521,0.522,0.523,0.521,0.522,0.523,0.522,0.521,0.522,0.523,0.523,0.523],
  ada:  [0.467,0.466,0.464,0.465,0.463,0.462,0.463,0.461,0.460,0.461,0.459,0.460,0.458,0.459,0.457,0.458,0.456,0.457,0.458,0.457,0.456,0.457,0.456,0.457,0.457],
  avax: [34.3,34.5,34.7,34.9,34.8,35.0,35.2,35.1,35.3,35.4,35.2,35.3,35.5,35.4,35.6,35.5,35.7,35.6,35.8,35.7,35.6,35.7,35.6,35.7,35.67],
  dot:  [6.82,6.80,6.78,6.79,6.77,6.78,6.76,6.77,6.79,6.78,6.76,6.77,6.78,6.79,6.77,6.78,6.76,6.77,6.78,6.79,6.78,6.77,6.78,6.79,6.78],
  matic:[0.712,0.714,0.716,0.715,0.717,0.718,0.716,0.717,0.719,0.720,0.718,0.719,0.721,0.720,0.722,0.721,0.723,0.722,0.721,0.722,0.723,0.722,0.724,0.723,0.723],
  link: [13.9,14.0,14.1,14.0,14.2,14.1,14.3,14.2,14.4,14.3,14.2,14.3,14.4,14.3,14.5,14.4,14.3,14.4,14.5,14.4,14.5,14.6,14.5,14.6,14.56],
  uni:  [10.05,10.0,9.98,9.96,9.95,9.97,9.94,9.92,9.93,9.91,9.90,9.92,9.89,9.88,9.90,9.87,9.89,9.86,9.88,9.87,9.85,9.87,9.86,9.88,9.87],
  atom: [8.35,8.37,8.38,8.40,8.39,8.41,8.42,8.40,8.41,8.43,8.42,8.44,8.43,8.45,8.44,8.43,8.44,8.45,8.44,8.46,8.45,8.44,8.45,8.46,8.45],
  near: [4.82,4.85,4.88,4.90,4.92,4.95,4.93,4.96,4.98,5.00,5.02,5.05,5.03,5.06,5.08,5.10,5.08,5.12,5.10,5.14,5.16,5.18,5.20,5.22,5.23],
  apt:  [9.30,9.25,9.22,9.20,9.18,9.15,9.12,9.10,9.08,9.05,9.03,9.00,8.98,8.96,8.95,8.92,8.90,8.92,8.94,8.92,8.90,8.91,8.92,8.90,8.91],
  tx:   [374,375,376,375,377,376,378,377,376,377,378,377,379,378,377,378,379,378,377,378,379,378,377,378,379],
  ali:  [83.2,83.0,82.8,82.9,82.7,82.6,82.8,82.5,82.6,82.4,82.5,82.3,82.4,82.2,82.3,82.4,82.5,82.3,82.4,82.3,82.2,82.3,82.4,82.3,82.35],
  aapl: [188.5,188.8,189.0,188.9,189.1,189.0,189.2,189.1,189.3,189.2,189.4,189.3,189.5,189.4,189.3,189.4,189.5,189.4,189.3,189.4,189.5,189.4,189.3,189.4,189.45],
  nvda: [858,860,863,866,868,870,868,872,874,870,872,875,873,876,878,875,877,880,878,876,878,880,878,876,875],
  eur:  [1.082,1.083,1.083,1.084,1.083,1.084,1.084,1.085,1.084,1.085,1.084,1.085,1.084,1.085,1.084,1.085,1.084,1.085,1.084,1.085,1.084,1.085,1.084,1.085,1.085],
  jpy:  [154.7,154.6,154.5,154.6,154.5,154.4,154.5,154.4,154.3,154.4,154.3,154.4,154.3,154.2,154.3,154.4,154.3,154.2,154.3,154.4,154.3,154.2,154.3,154.4,154.32],
};

export const MARKET_DATA: MarketItem[] = [
  { id: "btc-usdt", symbol: "BTC/USDT", name: "Bitcoin", price: 67432.50, change24h: 2.34, volume24h: 28_500_000_000, high24h: 68100, low24h: 65800, exchange: "hashkey", assetClass: "crypto", sparkline: S.btc, isFavorite: true },
  { id: "eth-usdt", symbol: "ETH/USDT", name: "Ethereum", price: 3456.78, change24h: -1.23, volume24h: 15_200_000_000, high24h: 3520, low24h: 3410, exchange: "hashkey", assetClass: "crypto", sparkline: S.eth, isFavorite: true },
  { id: "sol-usdt", symbol: "SOL/USDT", name: "Solana", price: 178.45, change24h: 5.67, volume24h: 4_800_000_000, high24h: 182, low24h: 168, exchange: "bullish", assetClass: "crypto", sparkline: S.sol },
  { id: "doge-usdt", symbol: "DOGE/USDT", name: "Dogecoin", price: 0.1523, change24h: -3.45, volume24h: 2_100_000_000, high24h: 0.158, low24h: 0.148, exchange: "osl", assetClass: "crypto", sparkline: S.doge },
  { id: "bnb-usdt", symbol: "BNB/USDT", name: "BNB", price: 589.32, change24h: 0.89, volume24h: 1_800_000_000, high24h: 595, low24h: 582, exchange: "hashkey", assetClass: "crypto", sparkline: S.bnb },
  { id: "xrp-usdt", symbol: "XRP/USDT", name: "Ripple", price: 0.5234, change24h: 1.56, volume24h: 1_200_000_000, high24h: 0.532, low24h: 0.515, exchange: "bullish", assetClass: "crypto", sparkline: S.xrp },
  { id: "ada-usdt", symbol: "ADA/USDT", name: "Cardano", price: 0.4567, change24h: -2.11, volume24h: 890_000_000, high24h: 0.468, low24h: 0.445, exchange: "osl", assetClass: "crypto", sparkline: S.ada },
  { id: "avax-usdt", symbol: "AVAX/USDT", name: "Avalanche", price: 35.67, change24h: 3.89, volume24h: 560_000_000, high24h: 36.5, low24h: 34.2, exchange: "hashkey", assetClass: "crypto", sparkline: S.avax },
  { id: "dot-usdt", symbol: "DOT/USDT", name: "Polkadot", price: 6.78, change24h: -0.45, volume24h: 340_000_000, high24h: 6.92, low24h: 6.65, exchange: "bullish", assetClass: "crypto", sparkline: S.dot },
  { id: "matic-usdt", symbol: "MATIC/USDT", name: "Polygon", price: 0.7234, change24h: 1.23, volume24h: 420_000_000, high24h: 0.735, low24h: 0.712, exchange: "hashkey", assetClass: "crypto", sparkline: S.matic },
  { id: "link-usdt", symbol: "LINK/USDT", name: "Chainlink", price: 14.56, change24h: 4.21, volume24h: 780_000_000, high24h: 14.9, low24h: 13.9, exchange: "osl", assetClass: "crypto", sparkline: S.link },
  { id: "uni-usdt", symbol: "UNI/USDT", name: "Uniswap", price: 9.87, change24h: -1.78, volume24h: 290_000_000, high24h: 10.1, low24h: 9.65, exchange: "bullish", assetClass: "crypto", sparkline: S.uni },
  { id: "atom-usdt", symbol: "ATOM/USDT", name: "Cosmos", price: 8.45, change24h: 0.67, volume24h: 210_000_000, high24h: 8.6, low24h: 8.32, exchange: "hashkey", assetClass: "crypto", sparkline: S.atom },
  { id: "near-usdt", symbol: "NEAR/USDT", name: "NEAR", price: 5.23, change24h: 7.89, volume24h: 450_000_000, high24h: 5.4, low24h: 4.8, exchange: "vdx", assetClass: "crypto", sparkline: S.near },
  { id: "apt-usdt", symbol: "APT/USDT", name: "Aptos", price: 8.91, change24h: -4.56, volume24h: 320_000_000, high24h: 9.35, low24h: 8.7, exchange: "hashkey", assetClass: "crypto", sparkline: S.apt },
  // HK Stocks
  { id: "0700-hk", symbol: "0700.HK", name: "腾讯控股", price: 378.60, change24h: 1.45, volume24h: 5_200_000_000, high24h: 382, low24h: 374, exchange: "hashkey", assetClass: "hk_stock", sparkline: S.tx },
  { id: "9988-hk", symbol: "9988.HK", name: "阿里巴巴", price: 82.35, change24h: -0.87, volume24h: 3_100_000_000, high24h: 83.5, low24h: 81.2, exchange: "hashkey", assetClass: "hk_stock", sparkline: S.ali },
  // US Stocks
  { id: "aapl-us", symbol: "AAPL", name: "Apple", price: 189.45, change24h: 0.56, volume24h: 8_900_000_000, high24h: 190.2, low24h: 188.1, exchange: "bullish", assetClass: "us_stock", sparkline: S.aapl },
  { id: "nvda-us", symbol: "NVDA", name: "Nvidia", price: 875.30, change24h: 3.21, volume24h: 12_000_000_000, high24h: 882, low24h: 855, exchange: "bullish", assetClass: "us_stock", sparkline: S.nvda },
  // Forex
  { id: "eur-usd", symbol: "EUR/USD", name: "欧元/美元", price: 1.0845, change24h: 0.12, volume24h: 52_000_000_000, high24h: 1.0868, low24h: 1.0821, exchange: "osl", assetClass: "forex", sparkline: S.eur },
  { id: "usd-jpy", symbol: "USD/JPY", name: "美元/日元", price: 154.32, change24h: -0.34, volume24h: 38_000_000_000, high24h: 154.8, low24h: 153.9, exchange: "osl", assetClass: "forex", sparkline: S.jpy },
];

// ========== Order Book ==========
export interface OrderBookEntry {
  price: number;
  amount: number;
  total: number;
}

export function generateOrderBook(midPrice: number, decimals = 2): {
  asks: OrderBookEntry[];
  bids: OrderBookEntry[];
} {
  const spread = midPrice * 0.0005;
  const amounts = [0.82, 1.45, 0.33, 1.91, 0.67, 1.23, 0.55, 1.78, 0.41, 1.12];
  const asks: OrderBookEntry[] = [];
  const bids: OrderBookEntry[] = [];
  let askTotal = 0;
  let bidTotal = 0;

  for (let i = 0; i < 10; i++) {
    const amt = amounts[i];
    askTotal += amt;
    asks.push({
      price: parseFloat((midPrice + spread * (i + 1)).toFixed(decimals)),
      amount: amt,
      total: parseFloat(askTotal.toFixed(4)),
    });
    bidTotal += amounts[9 - i];
    bids.push({
      price: parseFloat((midPrice - spread * (i + 1)).toFixed(decimals)),
      amount: amounts[9 - i],
      total: parseFloat(bidTotal.toFixed(4)),
    });
  }

  return { asks: asks.reverse(), bids };
}

// ========== Candlestick / Chart Data ==========
export interface CandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export function generateCandleData(base: number, count = 24): CandleData[] {
  // Pre-computed candle offsets (percentage of base price) to avoid any runtime randomness
  const offsets = [
    [-5,-4.2],[-.8,0.5],[1.2,0.8],[0.3,1.5],[2,1.2],[-.3,2.8],[3,2.2],[1.5,3.5],
    [3.8,2.5],[2,3.2],[3.5,2.8],[2.2,3.8],[4,3],[2.8,4.2],[4.5,3.5],[3,4.8],
    [5,4],[3.5,5.2],[4.8,3.8],[3.2,4.5],[4.2,3.5],[3,4],[3.8,3.2],[3.5,3.8],
    [4,3.5],[3.2,4.2],[4.5,3.8],[3.5,4.5],[4.2,4],[3.8,4.2],
  ];
  const data: CandleData[] = [];
  for (let i = 0; i < Math.min(count, offsets.length); i++) {
    const [oOff, cOff] = offsets[i];
    const open = base * (1 + oOff / 100);
    const close = base * (1 + cOff / 100);
    const high = Math.max(open, close) * 1.004;
    const low = Math.min(open, close) * 0.996;
    const h = (i + 1) % 24;
    data.push({
      time: `${String(h).padStart(2, "0")}:00`,
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume: 300 + i * 37,
    });
  }
  return data;
}

// ========== Orders ==========
export type OrderSide = "buy" | "sell";
export type OrderType = "limit" | "market" | "stop_limit";
export type OrderStatus = "open" | "filled" | "partially_filled" | "cancelled";

export interface Order {
  id: string;
  symbol: string;
  side: OrderSide;
  type: OrderType;
  price: number;
  amount: number;
  filled: number;
  status: OrderStatus;
  exchange: ExchangeId;
  createdAt: string;
  fee?: number;
}

export const ORDERS: Order[] = [
  { id: "o1", symbol: "BTC/USDT", side: "buy", type: "limit", price: 66500, amount: 0.15, filled: 0, status: "open", exchange: "hashkey", createdAt: "2024-03-15 14:23:01" },
  { id: "o2", symbol: "ETH/USDT", side: "sell", type: "limit", price: 3600, amount: 2.5, filled: 1.2, status: "partially_filled", exchange: "hashkey", createdAt: "2024-03-15 13:45:22" },
  { id: "o3", symbol: "SOL/USDT", side: "buy", type: "market", price: 175.2, amount: 10, filled: 10, status: "filled", exchange: "bullish", createdAt: "2024-03-15 12:10:45", fee: 1.75 },
  { id: "o4", symbol: "AVAX/USDT", side: "buy", type: "limit", price: 34.5, amount: 50, filled: 0, status: "open", exchange: "hashkey", createdAt: "2024-03-15 11:30:00" },
  { id: "o5", symbol: "LINK/USDT", side: "sell", type: "stop_limit", price: 13.8, amount: 100, filled: 0, status: "open", exchange: "osl", createdAt: "2024-03-15 10:22:33" },
  { id: "o6", symbol: "BTC/USDT", side: "sell", type: "market", price: 67100, amount: 0.08, filled: 0.08, status: "filled", exchange: "hashkey", createdAt: "2024-03-14 18:45:12", fee: 5.37 },
  { id: "o7", symbol: "ETH/USDT", side: "buy", type: "limit", price: 3380, amount: 3, filled: 3, status: "filled", exchange: "bullish", createdAt: "2024-03-14 16:30:00", fee: 10.14 },
  { id: "o8", symbol: "DOT/USDT", side: "buy", type: "market", price: 6.92, amount: 200, filled: 200, status: "filled", exchange: "bullish", createdAt: "2024-03-14 14:15:30", fee: 1.38 },
  { id: "o9", symbol: "DOGE/USDT", side: "sell", type: "limit", price: 0.162, amount: 5000, filled: 5000, status: "filled", exchange: "osl", createdAt: "2024-03-13 20:00:00", fee: 0.81 },
  { id: "o10", symbol: "BNB/USDT", side: "buy", type: "limit", price: 575, amount: 2, filled: 0, status: "cancelled", exchange: "hashkey", createdAt: "2024-03-13 15:00:00" },
];

// ========== Asset Holdings ==========
export interface AssetHolding {
  id: string;
  symbol: string;
  name: string;
  balance: number;
  available: number;
  frozen: number;
  valueHKD: number;
  pnl: number;
  pnlPercent: number;
  exchange: ExchangeId;
  assetClass: AssetClass;
}

export const HOLDINGS: AssetHolding[] = [
  { id: "h1", symbol: "BTC", name: "Bitcoin", balance: 1.5234, available: 1.3734, frozen: 0.15, valueHKD: 803_456.78, pnl: 45678.90, pnlPercent: 6.02, exchange: "hashkey", assetClass: "crypto" },
  { id: "h2", symbol: "ETH", name: "Ethereum", balance: 15.678, available: 13.178, frozen: 2.5, valueHKD: 424_123.45, pnl: -12345.67, pnlPercent: -2.83, exchange: "hashkey", assetClass: "crypto" },
  { id: "h3", symbol: "USDT", name: "Tether", balance: 50000, available: 48500, frozen: 1500, valueHKD: 390_000, pnl: 0, pnlPercent: 0, exchange: "hashkey", assetClass: "crypto" },
  { id: "h4", symbol: "SOL", name: "Solana", balance: 120, available: 110, frozen: 10, valueHKD: 167_500, pnl: 23456.00, pnlPercent: 16.29, exchange: "bullish", assetClass: "crypto" },
  { id: "h5", symbol: "BNB", name: "BNB", balance: 8.5, available: 8.5, frozen: 0, valueHKD: 39_200, pnl: 2345.00, pnlPercent: 6.36, exchange: "hashkey", assetClass: "crypto" },
  { id: "h6", symbol: "0700.HK", name: "腾讯控股", balance: 200, available: 200, frozen: 0, valueHKD: 75_720, pnl: 3200.00, pnlPercent: 4.41, exchange: "hashkey", assetClass: "hk_stock" },
  { id: "h7", symbol: "AAPL", name: "Apple", balance: 50, available: 50, frozen: 0, valueHKD: 74_000, pnl: -1200.00, pnlPercent: -1.60, exchange: "bullish", assetClass: "us_stock" },
  { id: "h8", symbol: "LINK", name: "Chainlink", balance: 500, available: 500, frozen: 0, valueHKD: 56_950, pnl: 8900.00, pnlPercent: 18.53, exchange: "osl", assetClass: "crypto" },
];

// ========== Networks (for Deposit/Withdraw) ==========
export interface Network {
  id: string;
  name: string;
  fullName: string;
  fee: number;
  minAmount: number;
  confirmations: number;
  estimatedTime: string;
  recommended?: boolean;
}

export const NETWORKS: Network[] = [
  { id: "btc", name: "Bitcoin", fullName: "Bitcoin Network", fee: 0.0001, minAmount: 0.0005, confirmations: 3, estimatedTime: "~30 分钟", recommended: true },
  { id: "erc20", name: "ERC20", fullName: "Ethereum (ERC20)", fee: 0.0005, minAmount: 0.001, confirmations: 12, estimatedTime: "~5 分钟" },
  { id: "trc20", name: "TRC20", fullName: "Tron (TRC20)", fee: 1, minAmount: 10, confirmations: 20, estimatedTime: "~3 分钟" },
  { id: "bep20", name: "BEP20", fullName: "BNB Smart Chain", fee: 0.00005, minAmount: 0.0001, confirmations: 15, estimatedTime: "~3 分钟" },
  { id: "sol", name: "Solana", fullName: "Solana Network", fee: 0.01, minAmount: 0.1, confirmations: 1, estimatedTime: "~1 分钟" },
];

// ========== Portfolio Summary ==========
export const PORTFOLIO = {
  totalValueHKD: 2_030_950.23,
  totalValueUSD: 260_378.24,
  pnl24h: 12345.67,
  pnl24hPercent: 1.02,
  pnlTotal: 78901.23,
  pnlTotalPercent: 4.05,
  byExchange: {
    hashkey: 1_732_500.23,
    bullish: 241_500.00,
    osl: 56_950.00,
    vdx: 0,
  },
};
