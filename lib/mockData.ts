// ============================================
// PHONE STOCK MARKET - MOCK DATA SYSTEM
// ============================================

export interface PhoneStock {
  id: string;
  name: string;
  brand: string;
  model: string;
  ticker: string;
  price: number;
  previousPrice: number;
  change: number;
  changePercent: number;
  marketCap: number;
  volume: number;
  high24h: number;
  low24h: number;
  allTimeHigh: number;
  allTimeLow: number;
  rank: number;
  color: string;
  accentColor: string;
  emoji: string;
  specs: {
    chip: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    display: string;
    os: string;
  };
  trend: 'up' | 'down' | 'stable';
  sentiment: 'bullish' | 'bearish' | 'neutral';
  aiScore: number;
  aiPrediction: number;
  aiConfidence: number;
  description: string;
  releaseDate: string;
  priceHistory: PricePoint[];
}

export interface PricePoint {
  time: string;
  price: number;
  volume: number;
}

export interface NewsItem {
  id: string;
  headline: string;
  source: string;
  time: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  ticker?: string;
  category: string;
  impact: 'high' | 'medium' | 'low';
}

export interface MarketStats {
  totalMarketCap: number;
  totalVolume: number;
  gainers: number;
  losers: number;
  fearGreedIndex: number;
  marketSentiment: 'extreme_fear' | 'fear' | 'neutral' | 'greed' | 'extreme_greed';
  btcDominance: number;
  activeListings: number;
}

// Generate realistic price history
function generatePriceHistory(
  basePrice: number,
  points: number,
  volatility: number = 0.02,
  trend: number = 0
): PricePoint[] {
  const history: PricePoint[] = [];
  let price = basePrice * (1 - trend * points * 0.001);
  const now = Date.now();

  for (let i = points; i >= 0; i--) {
    const change = (Math.random() - 0.5) * volatility * price + trend * price * 0.001;
    price = Math.max(price + change, basePrice * 0.5);
    const time = new Date(now - i * 3600000).toISOString();
    history.push({
      time,
      price: Math.round(price * 100) / 100,
      volume: Math.round(Math.random() * 50000 + 10000),
    });
  }
  return history;
}

export const PHONE_STOCKS: PhoneStock[] = [
  {
    id: 'iph16pm',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    model: 'iPhone 16 Pro Max',
    ticker: 'APPL16',
    price: 1299,
    previousPrice: 1265,
    change: 34,
    changePercent: 2.69,
    marketCap: 98500000000,
    volume: 2847293,
    high24h: 1315,
    low24h: 1251,
    allTimeHigh: 1399,
    allTimeLow: 999,
    rank: 1,
    color: '#00d4ff',
    accentColor: '#7c3aed',
    emoji: '📱',
    specs: {
      chip: 'A18 Pro Bionic',
      ram: '8GB',
      storage: '256GB - 1TB',
      camera: '48MP ProRAW + LiDAR',
      battery: '4685 mAh',
      display: '6.9" OLED 120Hz ProMotion',
      os: 'iOS 18',
    },
    trend: 'up',
    sentiment: 'bullish',
    aiScore: 94,
    aiPrediction: 1387,
    aiConfidence: 89,
    description: 'The pinnacle of Apple engineering with titanium design and AI-enhanced photography.',
    releaseDate: '2024-09-20',
    priceHistory: generatePriceHistory(1299, 168, 0.015, 1),
  },
  {
    id: 'sams26u',
    name: 'Samsung S26 Ultra',
    brand: 'Samsung',
    model: 'Galaxy S26 Ultra',
    ticker: 'SAMS26',
    price: 1199,
    previousPrice: 1231,
    change: -32,
    changePercent: -2.6,
    marketCap: 74200000000,
    volume: 1923847,
    high24h: 1248,
    low24h: 1187,
    allTimeHigh: 1299,
    allTimeLow: 899,
    rank: 2,
    color: '#ff006e',
    accentColor: '#ff6b35',
    emoji: '🔷',
    specs: {
      chip: 'Snapdragon 8 Elite 2',
      ram: '12GB',
      storage: '256GB - 1TB',
      camera: '200MP + 10x Periscope',
      battery: '5000 mAh',
      display: '6.9" AMOLED 120Hz QHD+',
      os: 'Android 16 + OneUI 8',
    },
    trend: 'down',
    sentiment: 'bearish',
    aiScore: 88,
    aiPrediction: 1156,
    aiConfidence: 76,
    description: 'Samsung\'s S-Pen powerhouse with unprecedented zoom capabilities.',
    releaseDate: '2026-01-22',
    priceHistory: generatePriceHistory(1199, 168, 0.018, -0.5),
  },
  {
    id: 'gpix10',
    name: 'Google Pixel 10',
    brand: 'Google',
    model: 'Pixel 10 Pro',
    ticker: 'GPIX10',
    price: 899,
    previousPrice: 873,
    change: 26,
    changePercent: 2.98,
    marketCap: 31800000000,
    volume: 987654,
    high24h: 921,
    low24h: 861,
    allTimeHigh: 999,
    allTimeLow: 699,
    rank: 3,
    color: '#00ff88',
    accentColor: '#00d4ff',
    emoji: '🤖',
    specs: {
      chip: 'Google Tensor G5',
      ram: '12GB',
      storage: '128GB - 512GB',
      camera: '64MP + Magic Eraser AI',
      battery: '5050 mAh',
      display: '6.8" OLED 120Hz LTPO',
      os: 'Android 16 Pure',
    },
    trend: 'up',
    sentiment: 'bullish',
    aiScore: 91,
    aiPrediction: 967,
    aiConfidence: 83,
    description: 'AI-first smartphone with Google\'s most advanced computational photography.',
    releaseDate: '2025-10-15',
    priceHistory: generatePriceHistory(899, 168, 0.02, 1.2),
  },
  {
    id: 'xiao16u',
    name: 'Xiaomi 16 Ultra',
    brand: 'Xiaomi',
    model: 'Xiaomi 16 Ultra',
    ticker: 'XIAO16',
    price: 1099,
    previousPrice: 1067,
    change: 32,
    changePercent: 3.0,
    marketCap: 42100000000,
    volume: 1456789,
    high24h: 1124,
    low24h: 1054,
    allTimeHigh: 1149,
    allTimeLow: 799,
    rank: 4,
    color: '#ffd700',
    accentColor: '#ff6b35',
    emoji: '⚡',
    specs: {
      chip: 'Snapdragon 8 Elite 2',
      ram: '16GB',
      storage: '256GB - 1TB',
      camera: '200MP Leica Summilux',
      battery: '6000 mAh 120W HyperCharge',
      display: '6.85" OLED 144Hz WQHD+',
      os: 'HyperOS 3.0',
    },
    trend: 'up',
    sentiment: 'bullish',
    aiScore: 87,
    aiPrediction: 1178,
    aiConfidence: 79,
    description: 'Leica-powered camera system with the fastest charging in the industry.',
    releaseDate: '2026-02-23',
    priceHistory: generatePriceHistory(1099, 168, 0.022, 1.5),
  },
  {
    id: 'ops13pro',
    name: 'OnePlus 13 Pro',
    brand: 'OnePlus',
    model: 'OnePlus 13 Pro',
    ticker: 'OPL13P',
    price: 799,
    previousPrice: 812,
    change: -13,
    changePercent: -1.6,
    marketCap: 18700000000,
    volume: 634521,
    high24h: 824,
    low24h: 788,
    allTimeHigh: 899,
    allTimeLow: 599,
    rank: 5,
    color: '#7c3aed',
    accentColor: '#00d4ff',
    emoji: '🔴',
    specs: {
      chip: 'Snapdragon 8 Elite 2',
      ram: '12GB',
      storage: '256GB - 512GB',
      camera: '50MP Hasselblad',
      battery: '5400 mAh 100W SUPERVOOC',
      display: '6.82" AMOLED 120Hz ProXDR',
      os: 'OxygenOS 16',
    },
    trend: 'down',
    sentiment: 'neutral',
    aiScore: 82,
    aiPrediction: 778,
    aiConfidence: 71,
    description: 'Hasselblad-tuned imaging with flagship specs at a competitive price.',
    releaseDate: '2025-12-05',
    priceHistory: generatePriceHistory(799, 168, 0.019, -0.3),
  },
  {
    id: 'sony1vi',
    name: 'Sony Xperia 1 VI',
    brand: 'Sony',
    model: 'Xperia 1 VI',
    ticker: 'SONY1V',
    price: 1149,
    previousPrice: 1149,
    change: 0,
    changePercent: 0.0,
    marketCap: 22300000000,
    volume: 287654,
    high24h: 1171,
    low24h: 1128,
    allTimeHigh: 1199,
    allTimeLow: 899,
    rank: 6,
    color: '#00d4ff',
    accentColor: '#4a5568',
    emoji: '🎬',
    specs: {
      chip: 'Snapdragon 8 Elite',
      ram: '12GB',
      storage: '256GB - 512GB',
      camera: 'Zeiss 52-170mm Telephoto',
      battery: '5000 mAh',
      display: '6.5" OLED 4K 120Hz',
      os: 'Android 16 Pure',
    },
    trend: 'stable',
    sentiment: 'neutral',
    aiScore: 79,
    aiPrediction: 1163,
    aiConfidence: 65,
    description: 'Professional-grade camera and display for content creators.',
    releaseDate: '2025-06-14',
    priceHistory: generatePriceHistory(1149, 168, 0.012, 0),
  },
];

export const MARKET_STATS: MarketStats = {
  totalMarketCap: 287600000000,
  totalVolume: 8137818,
  gainers: 4,
  losers: 2,
  fearGreedIndex: 72,
  marketSentiment: 'greed',
  btcDominance: 0, // Not applicable
  activeListings: 247,
};

export const NEWS_FEED: NewsItem[] = [
  {
    id: 'n1',
    headline: 'Apple iPhone 16 Pro Max breaks all-time sales record in Q1 2026',
    source: 'PhoneMarket Daily',
    time: '2m ago',
    sentiment: 'positive',
    ticker: 'APPL16',
    category: 'Earnings',
    impact: 'high',
  },
  {
    id: 'n2',
    headline: 'Samsung faces supply chain disruptions — S26 Ultra short in Asia markets',
    source: 'TechWire',
    time: '8m ago',
    sentiment: 'negative',
    ticker: 'SAMS26',
    category: 'Supply Chain',
    impact: 'high',
  },
  {
    id: 'n3',
    headline: 'Google Pixel 10\'s AI camera outperforms all rivals in DxOMark benchmark',
    source: 'DxOMark',
    time: '15m ago',
    sentiment: 'positive',
    ticker: 'GPIX10',
    category: 'Technology',
    impact: 'medium',
  },
  {
    id: 'n4',
    headline: 'Xiaomi 16 Ultra sets new charging speed world record — 120W in 15 minutes',
    source: 'Xinhua Tech',
    time: '23m ago',
    sentiment: 'positive',
    ticker: 'XIAO16',
    category: 'Innovation',
    impact: 'medium',
  },
  {
    id: 'n5',
    headline: 'Global smartphone market up 18% YoY — premium segment leads growth',
    source: 'IDC Research',
    time: '1h ago',
    sentiment: 'positive',
    ticker: undefined,
    category: 'Market',
    impact: 'high',
  },
  {
    id: 'n6',
    headline: 'OnePlus 13 Pro sees price correction after analyst downgrade',
    source: 'PhoneFinance',
    time: '1h ago',
    sentiment: 'negative',
    ticker: 'OPL13P',
    category: 'Analysis',
    impact: 'medium',
  },
  {
    id: 'n7',
    headline: 'AI-powered phone trading volume up 340% — retail investors lead surge',
    source: 'Market Insider',
    time: '2h ago',
    sentiment: 'positive',
    ticker: undefined,
    category: 'Market',
    impact: 'low',
  },
  {
    id: 'n8',
    headline: 'Samsung and Qualcomm announce 3nm chip partnership for 2027 lineup',
    source: 'Semiconductor Daily',
    time: '3h ago',
    sentiment: 'positive',
    ticker: 'SAMS26',
    category: 'Partnership',
    impact: 'medium',
  },
];

export const SUBSCRIPTION_PLANS = [
  {
    id: 'free',
    name: 'Explorer',
    price: 0,
    period: 'forever',
    description: 'Start your phone trading journey',
    features: [
      '5 phone stocks tracked',
      'Basic price charts',
      '24H data history',
      'News feed (limited)',
      'Community access',
    ],
    notIncluded: ['AI predictions', 'Advanced analytics', 'Real-time alerts', 'API access'],
    color: '#4a5568',
    popular: false,
    cta: 'Get Started Free',
  },
  {
    id: 'pro',
    name: 'Trader',
    price: 29,
    period: 'month',
    description: 'For serious phone market analysts',
    features: [
      'Unlimited phone tracking',
      'Advanced interactive charts',
      '1 Year data history',
      'Full news feed',
      'AI price predictions',
      'Portfolio analytics',
      'Email alerts',
      'Export reports',
    ],
    notIncluded: ['API access', 'White-label'],
    color: '#00d4ff',
    popular: true,
    cta: 'Start 14-Day Free Trial',
  },
  {
    id: 'elite',
    name: 'Institutional',
    price: 149,
    period: 'month',
    description: 'Built for professional trading desks',
    features: [
      'Everything in Trader',
      'Full API access',
      'Custom AI models',
      'Priority support',
      'White-label options',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    notIncluded: [],
    color: '#7c3aed',
    popular: false,
    cta: 'Contact Sales',
  },
];

export const AI_PREDICTIONS = [
  {
    id: 'ai1',
    ticker: 'APPL16',
    name: 'iPhone 16 Pro Max',
    currentPrice: 1299,
    predictedPrice: 1387,
    timeframe: '30 days',
    confidence: 89,
    signal: 'BUY' as const,
    factors: ['Strong earnings momentum', 'Holiday demand surge', 'Supply chain stabilized', 'Brand premium intact'],
    riskLevel: 'Low',
    color: '#00d4ff',
  },
  {
    id: 'ai2',
    ticker: 'SAMS26',
    name: 'Samsung S26 Ultra',
    currentPrice: 1199,
    predictedPrice: 1089,
    timeframe: '30 days',
    confidence: 76,
    signal: 'SELL' as const,
    factors: ['Supply chain disruption', 'Competition heating up', 'Premium segment weakness', 'Analyst downgrades'],
    riskLevel: 'High',
    color: '#ff006e',
  },
  {
    id: 'ai3',
    ticker: 'GPIX10',
    name: 'Google Pixel 10',
    currentPrice: 899,
    predictedPrice: 967,
    timeframe: '30 days',
    confidence: 83,
    signal: 'BUY' as const,
    factors: ['AI camera breakthrough', 'DxOMark top ranking', 'Enterprise adoption rising', 'Developer community growing'],
    riskLevel: 'Medium',
    color: '#00ff88',
  },
  {
    id: 'ai4',
    ticker: 'XIAO16',
    name: 'Xiaomi 16 Ultra',
    currentPrice: 1099,
    predictedPrice: 1178,
    timeframe: '30 days',
    confidence: 79,
    signal: 'BUY' as const,
    factors: ['Leica partnership boost', 'China market expansion', 'Charging record viral', 'Europe entry confirmed'],
    riskLevel: 'Medium',
    color: '#ffd700',
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatLargeNumber(num: number): string {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`;
  return `$${num}`;
}

export function formatVolume(num: number): string {
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return `${num}`;
}

// Simulate live price updates
export function getUpdatedPrice(stock: PhoneStock): PhoneStock {
  const volatility = 0.003;
  const change = (Math.random() - 0.5) * volatility * stock.price;
  const newPrice = Math.round((stock.price + change) * 100) / 100;
  const totalChange = newPrice - stock.previousPrice;
  const totalChangePercent = (totalChange / stock.previousPrice) * 100;

  return {
    ...stock,
    price: newPrice,
    change: Math.round(totalChange * 100) / 100,
    changePercent: Math.round(totalChangePercent * 100) / 100,
    trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable',
    volume: stock.volume + Math.round(Math.random() * 1000),
  };
}
