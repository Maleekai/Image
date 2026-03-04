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

// ========== Seeded PRNG (deterministic across server/client) ==========
function createSeededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const seeded = createSeededRandom(42);

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

function generateSparkline(base: number, volatility: number, trend: number): number[] {
  const points: number[] = [];
  let current = base * (1 - volatility * 2);
  for (let i = 0; i < 24; i++) {
    current += (seeded() - 0.5 + trend * 0.1) * base * volatility;
    current = Math.max(current, base * 0.85);
    points.push(current);
  }
  points.push(base);
  return points;
}

export const MARKET_DATA: MarketItem[] = [
  { id: "btc-usdt", symbol: "BTC/USDT", name: "Bitcoin", price: 67432.50, change24h: 2.34, volume24h: 28_500_000_000, high24h: 68100, low24h: 65800, exchange: "hashkey", assetClass: "crypto", sparkline: generateSparkline(67432, 0.02, 1), isFavorite: true },
  { id: "eth-usdt", symbol: "ETH/USDT", name: "Ethereum", price: 3456.78, change24h: -1.23, volume24h: 15_200_000_000, high24h: 3520, low24h: 3410, exchange: "hashkey", assetClass: "crypto", sparkline: generateSparkline(3456, 0.03, -1), isFavorite: true },
  { id: "sol-usdt", symbol: "SOL/USDT", name: "Solana", price: 178.45, change24h: 5.67, volume24h: 4_800_000_000, high24h: 182, low24h: 168, exchange: "bullish", assetClass: "crypto", sparkline: generateSparkline(178, 0.04, 1) },
  { id: "doge-usdt", symbol: "DOGE/USDT", name: "Dogecoin", price: 0.1523, change24h: -3.45, volume24h: 2_100_000_000, high24h: 0.158, low24h: 0.148, exchange: "osl", assetClass: "crypto", sparkline: generateSparkline(0.15, 0.05, -1) },
  { id: "bnb-usdt", symbol: "BNB/USDT", name: "BNB", price: 589.32, change24h: 0.89, volume24h: 1_800_000_000, high24h: 595, low24h: 582, exchange: "hashkey", assetClass: "crypto", sparkline: generateSparkline(589, 0.02, 0.5) },
  { id: "xrp-usdt", symbol: "XRP/USDT", name: "Ripple", price: 0.5234, change24h: 1.56, volume24h: 1_200_000_000, high24h: 0.532, low24h: 0.515, exchange: "bullish", assetClass: "crypto", sparkline: generateSparkline(0.52, 0.03, 1) },
  { id: "ada-usdt", symbol: "ADA/USDT", name: "Cardano", price: 0.4567, change24h: -2.11, volume24h: 890_000_000, high24h: 0.468, low24h: 0.445, exchange: "osl", assetClass: "crypto", sparkline: generateSparkline(0.45, 0.04, -1) },
  { id: "avax-usdt", symbol: "AVAX/USDT", name: "Avalanche", price: 35.67, change24h: 3.89, volume24h: 560_000_000, high24h: 36.5, low24h: 34.2, exchange: "hashkey", assetClass: "crypto", sparkline: generateSparkline(35.6, 0.03, 1) },
  { id: "dot-usdt", symbol: "DOT/USDT", name: "Polkadot", price: 6.78, change24h: -0.45, volume24h: 340_000_000, high24h: 6.92, low24h: 6.65, exchange: "bullish", assetClass: "crypto", sparkline: generateSparkline(6.78, 0.03, -0.5) },
  { id: "matic-usdt", symbol: "MATIC/USDT", name: "Polygon", price: 0.7234, change24h: 1.23, volume24h: 420_000_000, high24h: 0.735, low24h: 0.712, exchange: "hashkey", assetClass: "crypto", sparkline: generateSparkline(0.72, 0.03, 1) },
  { id: "link-usdt", symbol: "LINK/USDT", name: "Chainlink", price: 14.56, change24h: 4.21, volume24h: 780_000_000, high24h: 14.9, low24h: 13.9, exchange: "osl", assetClass: "crypto", sparkline: generateSparkline(14.5, 0.04, 1) },
  { id: "uni-usdt", symbol: "UNI/USDT", name: "Uniswap", price: 9.87, change24h: -1.78, volume24h: 290_000_000, high24h: 10.1, low24h: 9.65, exchange: "bullish", assetClass: "crypto", sparkline: generateSparkline(9.87, 0.03, -1) },
  { id: "atom-usdt", symbol: "ATOM/USDT", name: "Cosmos", price: 8.45, change24h: 0.67, volume24h: 210_000_000, high24h: 8.6, low24h: 8.32, exchange: "hashkey", assetClass: "crypto", sparkline: generateSparkline(8.45, 0.02, 0.5) },
  { id: "near-usdt", symbol: "NEAR/USDT", name: "NEAR", price: 5.23, change24h: 7.89, volume24h: 450_000_000, high24h: 5.4, low24h: 4.8, exchange: "vdx", assetClass: "crypto", sparkline: generateSparkline(5.23, 0.05, 1) },
  { id: "apt-usdt", symbol: "APT/USDT", name: "Aptos", price: 8.91, change24h: -4.56, volume24h: 320_000_000, high24h: 9.35, low24h: 8.7, exchange: "hashkey", assetClass: "crypto", sparkline: generateSparkline(8.91, 0.04, -1) },
  // HK Stocks
  { id: "0700-hk", symbol: "0700.HK", name: "腾讯控股", price: 378.60, change24h: 1.45, volume24h: 5_200_000_000, high24h: 382, low24h: 374, exchange: "hashkey", assetClass: "hk_stock", sparkline: generateSparkline(378, 0.01, 1) },
  { id: "9988-hk", symbol: "9988.HK", name: "阿里巴巴", price: 82.35, change24h: -0.87, volume24h: 3_100_000_000, high24h: 83.5, low24h: 81.2, exchange: "hashkey", assetClass: "hk_stock", sparkline: generateSparkline(82, 0.015, -0.5) },
  // US Stocks
  { id: "aapl-us", symbol: "AAPL", name: "Apple", price: 189.45, change24h: 0.56, volume24h: 8_900_000_000, high24h: 190.2, low24h: 188.1, exchange: "bullish", assetClass: "us_stock", sparkline: generateSparkline(189, 0.008, 0.5) },
  { id: "nvda-us", symbol: "NVDA", name: "Nvidia", price: 875.30, change24h: 3.21, volume24h: 12_000_000_000, high24h: 882, low24h: 855, exchange: "bullish", assetClass: "us_stock", sparkline: generateSparkline(875, 0.02, 1) },
  // Forex
  { id: "eur-usd", symbol: "EUR/USD", name: "欧元/美元", price: 1.0845, change24h: 0.12, volume24h: 52_000_000_000, high24h: 1.0868, low24h: 1.0821, exchange: "osl", assetClass: "forex", sparkline: generateSparkline(1.084, 0.003, 0.5) },
  { id: "usd-jpy", symbol: "USD/JPY", name: "美元/日元", price: 154.32, change24h: -0.34, volume24h: 38_000_000_000, high24h: 154.8, low24h: 153.9, exchange: "osl", assetClass: "forex", sparkline: generateSparkline(154, 0.003, -0.5) },
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
  const asks: OrderBookEntry[] = [];
  const bids: OrderBookEntry[] = [];
  const spread = midPrice * 0.0005;

  let askTotal = 0;
  let bidTotal = 0;

  for (let i = 0; i < 10; i++) {
    const askPrice = midPrice + spread * (i + 1);
    const askAmount = parseFloat((seeded() * 2 + 0.1).toFixed(4));
    askTotal += askAmount;
    asks.push({
      price: parseFloat(askPrice.toFixed(decimals)),
      amount: askAmount,
      total: parseFloat(askTotal.toFixed(4)),
    });

    const bidPrice = midPrice - spread * (i + 1);
    const bidAmount = parseFloat((seeded() * 2 + 0.1).toFixed(4));
    bidTotal += bidAmount;
    bids.push({
      price: parseFloat(bidPrice.toFixed(decimals)),
      amount: bidAmount,
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

export function generateCandleData(base: number, count = 30): CandleData[] {
  const data: CandleData[] = [];
  let current = base * 0.95;
  const baseTime = 1710500000000; // fixed timestamp to avoid hydration mismatch

  for (let i = 0; i < count; i++) {
    const change = (seeded() - 0.48) * base * 0.02;
    const open = current;
    const close = current + change;
    const high = Math.max(open, close) + seeded() * base * 0.008;
    const low = Math.min(open, close) - seeded() * base * 0.008;
    const volume = seeded() * 1000 + 100;
    const d = new Date(baseTime - (count - i) * 3600000);
    const time = `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}`;

    data.push({
      time,
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume: parseFloat(volume.toFixed(0)),
    });
    current = close;
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
