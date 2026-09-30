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

export interface AIPrediction {
  id: string;
  ticker: string;
  name: string;
  currentPrice: number;
  predictedPrice: number;
  timeframe: string;
  confidence: number;
  signal: 'BUY' | 'SELL' | 'HOLD';
  factors: string[];
  riskLevel: 'Low' | 'Medium' | 'High';
  color: string;
}

export const PHONE_STOCKS: PhoneStock[] = [
  {
    "id": "appl16pl",
    "name": "iPhone 16 Plus",
    "brand": "Apple",
    "model": "iPhone 16 Plus",
    "ticker": "APPL16PL",
    "price": 819.37,
    "previousPrice": 890.43,
    "change": -71.06,
    "changePercent": -7.98,
    "marketCap": 49332558.0,
    "volume": 1032023.0,
    "high24h": 864.75,
    "low24h": 776.88,
    "allTimeHigh": 1015.87,
    "allTimeLow": 666.04,
    "rank": 1,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A18",
      "ram": "8GB",
      "storage": "128GB/256GB/512GB",
      "camera": "48MP Main + 12MP UW",
      "battery": "4383mAh",
      "display": "6.7\" OLED 60Hz",
      "os": "iOS 18"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 81,
    "aiPrediction": 825.16,
    "aiConfidence": 79,
    "description": "The iPhone 16 Plus is a flagship device from Apple featuring 6.7\" OLED 60Hz and A18.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 781.09,
        "volume": 37028
      },
      {
        "time": "21:17",
        "price": 781.41,
        "volume": 3997
      },
      {
        "time": "22:17",
        "price": 785.59,
        "volume": 49331
      },
      {
        "time": "23:17",
        "price": 797.17,
        "volume": 9140
      },
      {
        "time": "00:17",
        "price": 786.55,
        "volume": 20870
      },
      {
        "time": "01:17",
        "price": 776.88,
        "volume": 34805
      },
      {
        "time": "02:17",
        "price": 797.9,
        "volume": 7409
      },
      {
        "time": "03:17",
        "price": 821.37,
        "volume": 4832
      },
      {
        "time": "04:17",
        "price": 838.0,
        "volume": 25929
      },
      {
        "time": "05:17",
        "price": 833.51,
        "volume": 33643
      },
      {
        "time": "06:17",
        "price": 858.1,
        "volume": 27537
      },
      {
        "time": "07:17",
        "price": 864.75,
        "volume": 37826
      },
      {
        "time": "08:17",
        "price": 841.73,
        "volume": 4898
      },
      {
        "time": "09:17",
        "price": 834.26,
        "volume": 43393
      },
      {
        "time": "10:17",
        "price": 846.17,
        "volume": 38191
      },
      {
        "time": "11:17",
        "price": 821.22,
        "volume": 1540
      },
      {
        "time": "12:17",
        "price": 823.64,
        "volume": 22762
      },
      {
        "time": "13:17",
        "price": 821.46,
        "volume": 29118
      },
      {
        "time": "14:17",
        "price": 807.04,
        "volume": 36852
      },
      {
        "time": "15:17",
        "price": 816.25,
        "volume": 49209
      },
      {
        "time": "16:17",
        "price": 839.36,
        "volume": 48600
      },
      {
        "time": "17:17",
        "price": 850.37,
        "volume": 14990
      },
      {
        "time": "18:17",
        "price": 836.01,
        "volume": 30564
      },
      {
        "time": "19:17",
        "price": 851.53,
        "volume": 11140
      }
    ]
  },
  {
    "id": "asusz10",
    "name": "Zenfone 10",
    "brand": "Asus",
    "model": "Zenfone 10",
    "ticker": "ASUSZ10",
    "price": 743.97,
    "previousPrice": 691.98,
    "change": 51.99,
    "changePercent": 7.51,
    "marketCap": 48928655.0,
    "volume": 654588.0,
    "high24h": 848.11,
    "low24h": 763.44,
    "allTimeHigh": 995.19,
    "allTimeLow": 534.47,
    "rank": 2,
    "color": "#FF375F",
    "accentColor": "#cc2c4c",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "8GB/16GB",
      "storage": "128GB/256GB/512GB",
      "camera": "50MP Main + 13MP UW",
      "battery": "4300mAh",
      "display": "5.92\" AMOLED 144Hz",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 79,
    "aiPrediction": 722.63,
    "aiConfidence": 71,
    "description": "The Zenfone 10 is a flagship device from Asus featuring 5.92\" AMOLED 144Hz and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 779.55,
        "volume": 34650
      },
      {
        "time": "21:17",
        "price": 765.02,
        "volume": 7070
      },
      {
        "time": "22:17",
        "price": 763.44,
        "volume": 41412
      },
      {
        "time": "23:17",
        "price": 780.75,
        "volume": 44580
      },
      {
        "time": "00:17",
        "price": 800.6,
        "volume": 36104
      },
      {
        "time": "01:17",
        "price": 803.21,
        "volume": 38428
      },
      {
        "time": "02:17",
        "price": 789.23,
        "volume": 5627
      },
      {
        "time": "03:17",
        "price": 808.93,
        "volume": 40517
      },
      {
        "time": "04:17",
        "price": 820.88,
        "volume": 12617
      },
      {
        "time": "05:17",
        "price": 814.11,
        "volume": 11255
      },
      {
        "time": "06:17",
        "price": 808.27,
        "volume": 35994
      },
      {
        "time": "07:17",
        "price": 824.87,
        "volume": 21409
      },
      {
        "time": "08:17",
        "price": 848.11,
        "volume": 4449
      },
      {
        "time": "09:17",
        "price": 823.22,
        "volume": 26597
      },
      {
        "time": "10:17",
        "price": 830.6,
        "volume": 13667
      },
      {
        "time": "11:17",
        "price": 831.15,
        "volume": 13612
      },
      {
        "time": "12:17",
        "price": 819.93,
        "volume": 32043
      },
      {
        "time": "13:17",
        "price": 828.35,
        "volume": 11584
      },
      {
        "time": "14:17",
        "price": 812.82,
        "volume": 46698
      },
      {
        "time": "15:17",
        "price": 796.05,
        "volume": 41219
      },
      {
        "time": "16:17",
        "price": 790.69,
        "volume": 5449
      },
      {
        "time": "17:17",
        "price": 799.71,
        "volume": 3884
      },
      {
        "time": "18:17",
        "price": 812.41,
        "volume": 1467
      },
      {
        "time": "19:17",
        "price": 793.07,
        "volume": 28579
      }
    ]
  },
  {
    "id": "pocox6p",
    "name": "Poco X6 Pro",
    "brand": "Xiaomi",
    "model": "Poco X6 Pro",
    "ticker": "POCOX6P",
    "price": 358.05,
    "previousPrice": 390.68,
    "change": -32.63,
    "changePercent": -8.35,
    "marketCap": 48681870.0,
    "volume": 674980.0,
    "high24h": 369.71,
    "low24h": 337.33,
    "allTimeHigh": 463.7,
    "allTimeLow": 227.2,
    "rank": 3,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Dimensity 8300 Ultra",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "camera": "64MP Main + 8MP UW + 2MP Macro",
      "battery": "5000mAh",
      "display": "6.67\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 89,
    "aiPrediction": 401.82,
    "aiConfidence": 94,
    "description": "The Poco X6 Pro is a flagship device from Xiaomi featuring 6.67\" AMOLED 120Hz and Dimensity 8300 Ultra.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 369.71,
        "volume": 17334
      },
      {
        "time": "21:17",
        "price": 360.49,
        "volume": 16024
      },
      {
        "time": "22:17",
        "price": 364.38,
        "volume": 15681
      },
      {
        "time": "23:17",
        "price": 358.88,
        "volume": 3568
      },
      {
        "time": "00:17",
        "price": 356.11,
        "volume": 39519
      },
      {
        "time": "01:17",
        "price": 355.24,
        "volume": 18675
      },
      {
        "time": "02:17",
        "price": 362.98,
        "volume": 28994
      },
      {
        "time": "03:17",
        "price": 359.15,
        "volume": 37485
      },
      {
        "time": "04:17",
        "price": 356.91,
        "volume": 28053
      },
      {
        "time": "05:17",
        "price": 354.14,
        "volume": 5053
      },
      {
        "time": "06:17",
        "price": 345.9,
        "volume": 20252
      },
      {
        "time": "07:17",
        "price": 338.28,
        "volume": 38039
      },
      {
        "time": "08:17",
        "price": 343.8,
        "volume": 29401
      },
      {
        "time": "09:17",
        "price": 339.78,
        "volume": 27222
      },
      {
        "time": "10:17",
        "price": 343.67,
        "volume": 48177
      },
      {
        "time": "11:17",
        "price": 346.01,
        "volume": 5293
      },
      {
        "time": "12:17",
        "price": 355.2,
        "volume": 23346
      },
      {
        "time": "13:17",
        "price": 353.25,
        "volume": 25398
      },
      {
        "time": "14:17",
        "price": 352.4,
        "volume": 9540
      },
      {
        "time": "15:17",
        "price": 344.49,
        "volume": 48378
      },
      {
        "time": "16:17",
        "price": 352.97,
        "volume": 27601
      },
      {
        "time": "17:17",
        "price": 349.75,
        "volume": 31194
      },
      {
        "time": "18:17",
        "price": 341.47,
        "volume": 41488
      },
      {
        "time": "19:17",
        "price": 337.33,
        "volume": 36669
      }
    ]
  },
  {
    "id": "appl14pm",
    "name": "iPhone 14 Pro Max",
    "brand": "Apple",
    "model": "iPhone 14 Pro Max",
    "ticker": "APPL14PM",
    "price": 926.94,
    "previousPrice": 932.91,
    "change": -5.97,
    "changePercent": -0.64,
    "marketCap": 46095232.0,
    "volume": 1814964.0,
    "high24h": 920.83,
    "low24h": 803.93,
    "allTimeHigh": 1068.22,
    "allTimeLow": 590.18,
    "rank": 4,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A16 Bionic",
      "ram": "6GB",
      "storage": "128GB/256GB/512GB/1TB",
      "camera": "48MP Main + 12MP UW + 12MP 3x Tele",
      "battery": "4323mAh",
      "display": "6.7\" OLED 120Hz",
      "os": "iOS 16"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 88,
    "aiPrediction": 984.66,
    "aiConfidence": 79,
    "description": "The iPhone 14 Pro Max is a flagship device from Apple featuring 6.7\" OLED 120Hz and A16 Bionic.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 920.83,
        "volume": 46763
      },
      {
        "time": "21:17",
        "price": 908.98,
        "volume": 41896
      },
      {
        "time": "22:17",
        "price": 892.62,
        "volume": 35364
      },
      {
        "time": "23:17",
        "price": 869.09,
        "volume": 25874
      },
      {
        "time": "00:17",
        "price": 857.76,
        "volume": 42113
      },
      {
        "time": "01:17",
        "price": 863.31,
        "volume": 28170
      },
      {
        "time": "02:17",
        "price": 874.38,
        "volume": 44939
      },
      {
        "time": "03:17",
        "price": 877.17,
        "volume": 9824
      },
      {
        "time": "04:17",
        "price": 863.71,
        "volume": 20643
      },
      {
        "time": "05:17",
        "price": 883.21,
        "volume": 4833
      },
      {
        "time": "06:17",
        "price": 863.42,
        "volume": 40745
      },
      {
        "time": "07:17",
        "price": 868.11,
        "volume": 48507
      },
      {
        "time": "08:17",
        "price": 851.02,
        "volume": 29254
      },
      {
        "time": "09:17",
        "price": 853.67,
        "volume": 27854
      },
      {
        "time": "10:17",
        "price": 846.21,
        "volume": 12498
      },
      {
        "time": "11:17",
        "price": 860.03,
        "volume": 35549
      },
      {
        "time": "12:17",
        "price": 854.7,
        "volume": 16095
      },
      {
        "time": "13:17",
        "price": 841.92,
        "volume": 22203
      },
      {
        "time": "14:17",
        "price": 821.45,
        "volume": 6820
      },
      {
        "time": "15:17",
        "price": 804.01,
        "volume": 2772
      },
      {
        "time": "16:17",
        "price": 823.04,
        "volume": 10822
      },
      {
        "time": "17:17",
        "price": 803.93,
        "volume": 4564
      },
      {
        "time": "18:17",
        "price": 815.0,
        "volume": 48195
      },
      {
        "time": "19:17",
        "price": 827.12,
        "volume": 21841
      }
    ]
  },
  {
    "id": "samzfl5",
    "name": "Galaxy Z Flip 5",
    "brand": "Samsung",
    "model": "Galaxy Z Flip 5",
    "ticker": "SAMZFL5",
    "price": 1017.11,
    "previousPrice": 949.95,
    "change": 67.16,
    "changePercent": 7.07,
    "marketCap": 45339896.0,
    "volume": 251175.0,
    "high24h": 1186.3,
    "low24h": 994.77,
    "allTimeHigh": 1356.52,
    "allTimeLow": 610.96,
    "rank": 5,
    "color": "#30D158",
    "accentColor": "#24a143",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "8GB",
      "storage": "256GB/512GB",
      "camera": "12MP Main + 12MP UW",
      "battery": "3700mAh",
      "display": "6.7\" AMOLED 120Hz Foldable",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 63,
    "aiPrediction": 929.17,
    "aiConfidence": 91,
    "description": "The Galaxy Z Flip 5 is a flagship device from Samsung featuring 6.7\" AMOLED 120Hz Foldable and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 994.77,
        "volume": 8282
      },
      {
        "time": "21:17",
        "price": 1013.24,
        "volume": 34361
      },
      {
        "time": "22:17",
        "price": 1027.73,
        "volume": 35756
      },
      {
        "time": "23:17",
        "price": 1037.75,
        "volume": 29765
      },
      {
        "time": "00:17",
        "price": 1061.8,
        "volume": 7834
      },
      {
        "time": "01:17",
        "price": 1088.34,
        "volume": 44501
      },
      {
        "time": "02:17",
        "price": 1084.5,
        "volume": 1735
      },
      {
        "time": "03:17",
        "price": 1084.65,
        "volume": 27768
      },
      {
        "time": "04:17",
        "price": 1059.98,
        "volume": 9037
      },
      {
        "time": "05:17",
        "price": 1061.61,
        "volume": 37598
      },
      {
        "time": "06:17",
        "price": 1064.84,
        "volume": 36086
      },
      {
        "time": "07:17",
        "price": 1064.76,
        "volume": 38035
      },
      {
        "time": "08:17",
        "price": 1063.38,
        "volume": 11563
      },
      {
        "time": "09:17",
        "price": 1055.39,
        "volume": 28550
      },
      {
        "time": "10:17",
        "price": 1079.35,
        "volume": 42468
      },
      {
        "time": "11:17",
        "price": 1107.91,
        "volume": 25868
      },
      {
        "time": "12:17",
        "price": 1129.79,
        "volume": 45464
      },
      {
        "time": "13:17",
        "price": 1128.7,
        "volume": 12054
      },
      {
        "time": "14:17",
        "price": 1149.03,
        "volume": 13427
      },
      {
        "time": "15:17",
        "price": 1156.19,
        "volume": 30879
      },
      {
        "time": "16:17",
        "price": 1161.07,
        "volume": 42959
      },
      {
        "time": "17:17",
        "price": 1178.29,
        "volume": 3877
      },
      {
        "time": "18:17",
        "price": 1182.1,
        "volume": 40301
      },
      {
        "time": "19:17",
        "price": 1186.3,
        "volume": 17019
      }
    ]
  },
  {
    "id": "appl15",
    "name": "iPhone 15",
    "brand": "Apple",
    "model": "iPhone 15",
    "ticker": "APPL15",
    "price": 722.77,
    "previousPrice": 676.59,
    "change": 46.17,
    "changePercent": 6.82,
    "marketCap": 44855196.0,
    "volume": 999869.0,
    "high24h": 775.96,
    "low24h": 707.15,
    "allTimeHigh": 1015.88,
    "allTimeLow": 493.9,
    "rank": 6,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A16 Bionic",
      "ram": "6GB",
      "storage": "128GB/256GB/512GB",
      "camera": "48MP Main + 12MP UW",
      "battery": "3349mAh",
      "display": "6.1\" OLED 60Hz",
      "os": "iOS 17"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 71,
    "aiPrediction": 711.99,
    "aiConfidence": 71,
    "description": "The iPhone 15 is a flagship device from Apple featuring 6.1\" OLED 60Hz and A16 Bionic.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 725.44,
        "volume": 35804
      },
      {
        "time": "21:17",
        "price": 727.29,
        "volume": 29437
      },
      {
        "time": "22:17",
        "price": 728.26,
        "volume": 46311
      },
      {
        "time": "23:17",
        "price": 724.3,
        "volume": 1517
      },
      {
        "time": "00:17",
        "price": 737.98,
        "volume": 47537
      },
      {
        "time": "01:17",
        "price": 741.37,
        "volume": 12859
      },
      {
        "time": "02:17",
        "price": 736.57,
        "volume": 37585
      },
      {
        "time": "03:17",
        "price": 756.48,
        "volume": 16595
      },
      {
        "time": "04:17",
        "price": 771.41,
        "volume": 38933
      },
      {
        "time": "05:17",
        "price": 770.14,
        "volume": 8474
      },
      {
        "time": "06:17",
        "price": 749.47,
        "volume": 38902
      },
      {
        "time": "07:17",
        "price": 747.08,
        "volume": 26735
      },
      {
        "time": "08:17",
        "price": 741.84,
        "volume": 24716
      },
      {
        "time": "09:17",
        "price": 722.14,
        "volume": 9002
      },
      {
        "time": "10:17",
        "price": 707.15,
        "volume": 26706
      },
      {
        "time": "11:17",
        "price": 720.98,
        "volume": 38956
      },
      {
        "time": "12:17",
        "price": 733.86,
        "volume": 38270
      },
      {
        "time": "13:17",
        "price": 745.16,
        "volume": 11198
      },
      {
        "time": "14:17",
        "price": 761.04,
        "volume": 49742
      },
      {
        "time": "15:17",
        "price": 745.36,
        "volume": 27434
      },
      {
        "time": "16:17",
        "price": 757.5,
        "volume": 22373
      },
      {
        "time": "17:17",
        "price": 775.55,
        "volume": 30189
      },
      {
        "time": "18:17",
        "price": 775.96,
        "volume": 2033
      },
      {
        "time": "19:17",
        "price": 768.15,
        "volume": 38240
      }
    ]
  },
  {
    "id": "rog8p",
    "name": "ROG Phone 8 Pro",
    "brand": "Asus",
    "model": "ROG Phone 8 Pro",
    "ticker": "ROG8P",
    "price": 1138.62,
    "previousPrice": 1210.32,
    "change": -71.7,
    "changePercent": -5.92,
    "marketCap": 44492811.0,
    "volume": 1642425.0,
    "high24h": 1110.14,
    "low24h": 1014.27,
    "allTimeHigh": 1518.8,
    "allTimeLow": 785.63,
    "rank": 7,
    "color": "#FF375F",
    "accentColor": "#cc2c4c",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 3",
      "ram": "16GB/24GB",
      "storage": "512GB/1TB",
      "camera": "50MP Main + 13MP UW + 32MP 3x Tele",
      "battery": "5500mAh",
      "display": "6.78\" AMOLED 165Hz",
      "os": "Android 14"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 85,
    "aiPrediction": 1339.17,
    "aiConfidence": 83,
    "description": "The ROG Phone 8 Pro is a flagship device from Asus featuring 6.78\" AMOLED 165Hz and Snapdragon 8 Gen 3.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1110.14,
        "volume": 17450
      },
      {
        "time": "21:17",
        "price": 1089.89,
        "volume": 38871
      },
      {
        "time": "22:17",
        "price": 1105.63,
        "volume": 1302
      },
      {
        "time": "23:17",
        "price": 1080.41,
        "volume": 38283
      },
      {
        "time": "00:17",
        "price": 1053.71,
        "volume": 5990
      },
      {
        "time": "01:17",
        "price": 1067.31,
        "volume": 41635
      },
      {
        "time": "02:17",
        "price": 1044.31,
        "volume": 7590
      },
      {
        "time": "03:17",
        "price": 1051.22,
        "volume": 18727
      },
      {
        "time": "04:17",
        "price": 1032.13,
        "volume": 17788
      },
      {
        "time": "05:17",
        "price": 1034.16,
        "volume": 8094
      },
      {
        "time": "06:17",
        "price": 1038.87,
        "volume": 49324
      },
      {
        "time": "07:17",
        "price": 1048.5,
        "volume": 29561
      },
      {
        "time": "08:17",
        "price": 1041.98,
        "volume": 30800
      },
      {
        "time": "09:17",
        "price": 1034.3,
        "volume": 33218
      },
      {
        "time": "10:17",
        "price": 1016.72,
        "volume": 13245
      },
      {
        "time": "11:17",
        "price": 1032.63,
        "volume": 41624
      },
      {
        "time": "12:17",
        "price": 1014.27,
        "volume": 7656
      },
      {
        "time": "13:17",
        "price": 1020.61,
        "volume": 43535
      },
      {
        "time": "14:17",
        "price": 1047.4,
        "volume": 47510
      },
      {
        "time": "15:17",
        "price": 1069.51,
        "volume": 36085
      },
      {
        "time": "16:17",
        "price": 1085.65,
        "volume": 31056
      },
      {
        "time": "17:17",
        "price": 1095.99,
        "volume": 34520
      },
      {
        "time": "18:17",
        "price": 1090.77,
        "volume": 44607
      },
      {
        "time": "19:17",
        "price": 1063.97,
        "volume": 3762
      }
    ]
  },
  {
    "id": "samzf5",
    "name": "Galaxy Z Fold 5",
    "brand": "Samsung",
    "model": "Galaxy Z Fold 5",
    "ticker": "SAMZF5",
    "price": 1714.52,
    "previousPrice": 1648.86,
    "change": 65.66,
    "changePercent": 3.98,
    "marketCap": 41978008.0,
    "volume": 612447.0,
    "high24h": 2009.93,
    "low24h": 1736.64,
    "allTimeHigh": 2212.68,
    "allTimeLow": 932.84,
    "rank": 8,
    "color": "#30D158",
    "accentColor": "#24a143",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "12GB",
      "storage": "256GB/512GB/1TB",
      "camera": "50MP Main + 12MP UW + 10MP 3x Tele",
      "battery": "4400mAh",
      "display": "7.6\" AMOLED 120Hz Foldable",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 91,
    "aiPrediction": 1612.78,
    "aiConfidence": 80,
    "description": "The Galaxy Z Fold 5 is a flagship device from Samsung featuring 7.6\" AMOLED 120Hz Foldable and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1736.64,
        "volume": 35315
      },
      {
        "time": "21:17",
        "price": 1752.59,
        "volume": 9088
      },
      {
        "time": "22:17",
        "price": 1800.0,
        "volume": 41391
      },
      {
        "time": "23:17",
        "price": 1755.02,
        "volume": 46548
      },
      {
        "time": "00:17",
        "price": 1778.3,
        "volume": 48250
      },
      {
        "time": "01:17",
        "price": 1826.29,
        "volume": 19773
      },
      {
        "time": "02:17",
        "price": 1845.95,
        "volume": 20832
      },
      {
        "time": "03:17",
        "price": 1881.17,
        "volume": 46637
      },
      {
        "time": "04:17",
        "price": 1907.14,
        "volume": 46018
      },
      {
        "time": "05:17",
        "price": 1882.29,
        "volume": 21735
      },
      {
        "time": "06:17",
        "price": 1925.93,
        "volume": 24596
      },
      {
        "time": "07:17",
        "price": 1893.35,
        "volume": 13119
      },
      {
        "time": "08:17",
        "price": 1883.95,
        "volume": 38303
      },
      {
        "time": "09:17",
        "price": 1868.39,
        "volume": 7911
      },
      {
        "time": "10:17",
        "price": 1838.01,
        "volume": 23943
      },
      {
        "time": "11:17",
        "price": 1807.7,
        "volume": 22698
      },
      {
        "time": "12:17",
        "price": 1853.28,
        "volume": 8880
      },
      {
        "time": "13:17",
        "price": 1907.65,
        "volume": 12695
      },
      {
        "time": "14:17",
        "price": 1928.78,
        "volume": 10535
      },
      {
        "time": "15:17",
        "price": 1960.54,
        "volume": 46031
      },
      {
        "time": "16:17",
        "price": 1946.63,
        "volume": 6604
      },
      {
        "time": "17:17",
        "price": 1968.73,
        "volume": 33148
      },
      {
        "time": "18:17",
        "price": 1955.47,
        "volume": 11091
      },
      {
        "time": "19:17",
        "price": 2009.93,
        "volume": 2213
      }
    ]
  },
  {
    "id": "sony5v",
    "name": "Xperia 5 V",
    "brand": "Sony",
    "model": "Xperia 5 V",
    "ticker": "SONY5V",
    "price": 917.19,
    "previousPrice": 840.86,
    "change": 76.33,
    "changePercent": 9.08,
    "marketCap": 39693942.0,
    "volume": 243569.0,
    "high24h": 961.9,
    "low24h": 769.28,
    "allTimeHigh": 1230.75,
    "allTimeLow": 725.55,
    "rank": 9,
    "color": "#BF5AF2",
    "accentColor": "#9948c2",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "8GB",
      "storage": "128GB/256GB",
      "camera": "48MP Main + 12MP UW",
      "battery": "5000mAh",
      "display": "6.1\" OLED 120Hz",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 87,
    "aiPrediction": 926.59,
    "aiConfidence": 88,
    "description": "The Xperia 5 V is a flagship device from Sony featuring 6.1\" OLED 120Hz and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 952.38,
        "volume": 6309
      },
      {
        "time": "21:17",
        "price": 950.31,
        "volume": 3767
      },
      {
        "time": "22:17",
        "price": 961.9,
        "volume": 41490
      },
      {
        "time": "23:17",
        "price": 951.23,
        "volume": 31795
      },
      {
        "time": "00:17",
        "price": 953.07,
        "volume": 15354
      },
      {
        "time": "01:17",
        "price": 945.44,
        "volume": 30376
      },
      {
        "time": "02:17",
        "price": 927.92,
        "volume": 5125
      },
      {
        "time": "03:17",
        "price": 911.31,
        "volume": 35956
      },
      {
        "time": "04:17",
        "price": 885.97,
        "volume": 45248
      },
      {
        "time": "05:17",
        "price": 887.03,
        "volume": 29980
      },
      {
        "time": "06:17",
        "price": 874.4,
        "volume": 19010
      },
      {
        "time": "07:17",
        "price": 853.18,
        "volume": 29584
      },
      {
        "time": "08:17",
        "price": 872.9,
        "volume": 7178
      },
      {
        "time": "09:17",
        "price": 887.61,
        "volume": 4249
      },
      {
        "time": "10:17",
        "price": 861.69,
        "volume": 3413
      },
      {
        "time": "11:17",
        "price": 846.03,
        "volume": 14979
      },
      {
        "time": "12:17",
        "price": 861.31,
        "volume": 49953
      },
      {
        "time": "13:17",
        "price": 837.8,
        "volume": 47823
      },
      {
        "time": "14:17",
        "price": 815.85,
        "volume": 29275
      },
      {
        "time": "15:17",
        "price": 804.63,
        "volume": 13243
      },
      {
        "time": "16:17",
        "price": 798.73,
        "volume": 13584
      },
      {
        "time": "17:17",
        "price": 781.93,
        "volume": 27690
      },
      {
        "time": "18:17",
        "price": 769.28,
        "volume": 16410
      },
      {
        "time": "19:17",
        "price": 778.39,
        "volume": 39241
      }
    ]
  },
  {
    "id": "onep11",
    "name": "OnePlus 11",
    "brand": "OnePlus",
    "model": "OnePlus 11",
    "ticker": "ONEP11",
    "price": 802.69,
    "previousPrice": 879.11,
    "change": -76.42,
    "changePercent": -8.69,
    "marketCap": 39584953.0,
    "volume": 983912.0,
    "high24h": 982.34,
    "low24h": 838.97,
    "allTimeHigh": 1190.68,
    "allTimeLow": 631.19,
    "rank": 10,
    "color": "#FF453A",
    "accentColor": "#cc372e",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "8GB/16GB",
      "storage": "128GB/256GB",
      "camera": "50MP Main + 48MP UW + 32MP 2x Tele",
      "battery": "5000mAh",
      "display": "6.7\" AMOLED 120Hz",
      "os": "Android 13"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 76,
    "aiPrediction": 785.42,
    "aiConfidence": 73,
    "description": "The OnePlus 11 is a flagship device from OnePlus featuring 6.7\" AMOLED 120Hz and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 838.97,
        "volume": 21096
      },
      {
        "time": "21:17",
        "price": 861.62,
        "volume": 18878
      },
      {
        "time": "22:17",
        "price": 846.34,
        "volume": 48103
      },
      {
        "time": "23:17",
        "price": 863.22,
        "volume": 45793
      },
      {
        "time": "00:17",
        "price": 873.8,
        "volume": 36837
      },
      {
        "time": "01:17",
        "price": 887.28,
        "volume": 32173
      },
      {
        "time": "02:17",
        "price": 881.86,
        "volume": 37639
      },
      {
        "time": "03:17",
        "price": 908.09,
        "volume": 36221
      },
      {
        "time": "04:17",
        "price": 890.62,
        "volume": 45641
      },
      {
        "time": "05:17",
        "price": 890.04,
        "volume": 28125
      },
      {
        "time": "06:17",
        "price": 913.11,
        "volume": 13703
      },
      {
        "time": "07:17",
        "price": 939.23,
        "volume": 15261
      },
      {
        "time": "08:17",
        "price": 958.71,
        "volume": 27785
      },
      {
        "time": "09:17",
        "price": 955.02,
        "volume": 2540
      },
      {
        "time": "10:17",
        "price": 982.34,
        "volume": 13822
      },
      {
        "time": "11:17",
        "price": 968.76,
        "volume": 2800
      },
      {
        "time": "12:17",
        "price": 950.0,
        "volume": 37730
      },
      {
        "time": "13:17",
        "price": 948.26,
        "volume": 4657
      },
      {
        "time": "14:17",
        "price": 924.38,
        "volume": 5019
      },
      {
        "time": "15:17",
        "price": 906.78,
        "volume": 33609
      },
      {
        "time": "16:17",
        "price": 894.47,
        "volume": 6103
      },
      {
        "time": "17:17",
        "price": 873.19,
        "volume": 37529
      },
      {
        "time": "18:17",
        "price": 875.3,
        "volume": 17458
      },
      {
        "time": "19:17",
        "price": 880.9,
        "volume": 22842
      }
    ]
  },
  {
    "id": "red13pp",
    "name": "Redmi Note 13 Pro+",
    "brand": "Xiaomi",
    "model": "Redmi Note 13 Pro+",
    "ticker": "RED13PP",
    "price": 341.49,
    "previousPrice": 347.84,
    "change": -6.35,
    "changePercent": -1.83,
    "marketCap": 38932578.0,
    "volume": 1286676.0,
    "high24h": 370.04,
    "low24h": 340.44,
    "allTimeHigh": 462.17,
    "allTimeLow": 300.27,
    "rank": 11,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Dimensity 7200 Ultra",
      "ram": "8GB/12GB/16GB",
      "storage": "256GB/512GB",
      "camera": "200MP Main + 8MP UW + 2MP Macro",
      "battery": "5000mAh",
      "display": "6.67\" AMOLED 120Hz",
      "os": "Android 13"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 78,
    "aiPrediction": 354.18,
    "aiConfidence": 91,
    "description": "The Redmi Note 13 Pro+ is a flagship device from Xiaomi featuring 6.67\" AMOLED 120Hz and Dimensity 7200 Ultra.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 340.44,
        "volume": 16306
      },
      {
        "time": "21:17",
        "price": 344.45,
        "volume": 46337
      },
      {
        "time": "22:17",
        "price": 353.88,
        "volume": 6184
      },
      {
        "time": "23:17",
        "price": 358.08,
        "volume": 29650
      },
      {
        "time": "00:17",
        "price": 352.2,
        "volume": 35543
      },
      {
        "time": "01:17",
        "price": 343.06,
        "volume": 13001
      },
      {
        "time": "02:17",
        "price": 353.09,
        "volume": 8516
      },
      {
        "time": "03:17",
        "price": 349.44,
        "volume": 32462
      },
      {
        "time": "04:17",
        "price": 353.54,
        "volume": 13913
      },
      {
        "time": "05:17",
        "price": 359.1,
        "volume": 29585
      },
      {
        "time": "06:17",
        "price": 358.02,
        "volume": 10329
      },
      {
        "time": "07:17",
        "price": 368.49,
        "volume": 36400
      },
      {
        "time": "08:17",
        "price": 370.04,
        "volume": 23894
      },
      {
        "time": "09:17",
        "price": 361.99,
        "volume": 23540
      },
      {
        "time": "10:17",
        "price": 354.38,
        "volume": 48415
      },
      {
        "time": "11:17",
        "price": 357.85,
        "volume": 36391
      },
      {
        "time": "12:17",
        "price": 368.4,
        "volume": 6131
      },
      {
        "time": "13:17",
        "price": 358.48,
        "volume": 46837
      },
      {
        "time": "14:17",
        "price": 356.14,
        "volume": 1303
      },
      {
        "time": "15:17",
        "price": 358.23,
        "volume": 49142
      },
      {
        "time": "16:17",
        "price": 351.84,
        "volume": 35822
      },
      {
        "time": "17:17",
        "price": 349.22,
        "volume": 28205
      },
      {
        "time": "18:17",
        "price": 350.01,
        "volume": 39261
      },
      {
        "time": "19:17",
        "price": 341.24,
        "volume": 36168
      }
    ]
  },
  {
    "id": "xiao14p",
    "name": "Xiaomi 14 Pro",
    "brand": "Xiaomi",
    "model": "Xiaomi 14 Pro",
    "ticker": "XIAO14P",
    "price": 864.04,
    "previousPrice": 840.47,
    "change": 23.56,
    "changePercent": 2.8,
    "marketCap": 35236847.0,
    "volume": 317347.0,
    "high24h": 898.25,
    "low24h": 803.29,
    "allTimeHigh": 997.95,
    "allTimeLow": 622.03,
    "rank": 12,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB/1TB",
      "camera": "50MP Main + 50MP UW + 50MP 3.2x Tele",
      "battery": "4880mAh",
      "display": "6.73\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 72,
    "aiPrediction": 798.83,
    "aiConfidence": 71,
    "description": "The Xiaomi 14 Pro is a flagship device from Xiaomi featuring 6.73\" AMOLED 120Hz and Snapdragon 8 Gen 3.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 881.62,
        "volume": 24290
      },
      {
        "time": "21:17",
        "price": 893.55,
        "volume": 3705
      },
      {
        "time": "22:17",
        "price": 872.38,
        "volume": 4964
      },
      {
        "time": "23:17",
        "price": 881.72,
        "volume": 23766
      },
      {
        "time": "00:17",
        "price": 891.96,
        "volume": 36081
      },
      {
        "time": "01:17",
        "price": 887.56,
        "volume": 33073
      },
      {
        "time": "02:17",
        "price": 873.92,
        "volume": 14697
      },
      {
        "time": "03:17",
        "price": 863.55,
        "volume": 38905
      },
      {
        "time": "04:17",
        "price": 842.11,
        "volume": 36034
      },
      {
        "time": "05:17",
        "price": 865.25,
        "volume": 31084
      },
      {
        "time": "06:17",
        "price": 872.07,
        "volume": 49147
      },
      {
        "time": "07:17",
        "price": 877.86,
        "volume": 23175
      },
      {
        "time": "08:17",
        "price": 898.25,
        "volume": 30295
      },
      {
        "time": "09:17",
        "price": 878.72,
        "volume": 18135
      },
      {
        "time": "10:17",
        "price": 887.6,
        "volume": 36637
      },
      {
        "time": "11:17",
        "price": 869.71,
        "volume": 1521
      },
      {
        "time": "12:17",
        "price": 888.6,
        "volume": 8886
      },
      {
        "time": "13:17",
        "price": 879.39,
        "volume": 11759
      },
      {
        "time": "14:17",
        "price": 888.97,
        "volume": 13231
      },
      {
        "time": "15:17",
        "price": 867.12,
        "volume": 7038
      },
      {
        "time": "16:17",
        "price": 850.43,
        "volume": 11893
      },
      {
        "time": "17:17",
        "price": 831.96,
        "volume": 42845
      },
      {
        "time": "18:17",
        "price": 819.75,
        "volume": 5234
      },
      {
        "time": "19:17",
        "price": 803.29,
        "volume": 7670
      }
    ]
  },
  {
    "id": "goog7a",
    "name": "Pixel 7a",
    "brand": "Google",
    "model": "Pixel 7a",
    "ticker": "GOOG7A",
    "price": 472.94,
    "previousPrice": 426.26,
    "change": 46.67,
    "changePercent": 10.95,
    "marketCap": 34568617.0,
    "volume": 1758293.0,
    "high24h": 497.33,
    "low24h": 463.01,
    "allTimeHigh": 538.18,
    "allTimeLow": 347.91,
    "rank": 13,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Tensor G2",
      "ram": "8GB",
      "storage": "128GB",
      "camera": "64MP Main + 13MP UW",
      "battery": "4385mAh",
      "display": "6.1\" OLED 90Hz",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 75,
    "aiPrediction": 461.95,
    "aiConfidence": 90,
    "description": "The Pixel 7a is a flagship device from Google featuring 6.1\" OLED 90Hz and Tensor G2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 465.65,
        "volume": 46249
      },
      {
        "time": "21:17",
        "price": 463.01,
        "volume": 33390
      },
      {
        "time": "22:17",
        "price": 465.28,
        "volume": 1271
      },
      {
        "time": "23:17",
        "price": 471.92,
        "volume": 39769
      },
      {
        "time": "00:17",
        "price": 470.0,
        "volume": 16622
      },
      {
        "time": "01:17",
        "price": 472.63,
        "volume": 34651
      },
      {
        "time": "02:17",
        "price": 480.34,
        "volume": 1444
      },
      {
        "time": "03:17",
        "price": 475.63,
        "volume": 15009
      },
      {
        "time": "04:17",
        "price": 479.48,
        "volume": 28057
      },
      {
        "time": "05:17",
        "price": 468.9,
        "volume": 11612
      },
      {
        "time": "06:17",
        "price": 473.68,
        "volume": 41705
      },
      {
        "time": "07:17",
        "price": 487.27,
        "volume": 20783
      },
      {
        "time": "08:17",
        "price": 476.14,
        "volume": 33418
      },
      {
        "time": "09:17",
        "price": 485.66,
        "volume": 29859
      },
      {
        "time": "10:17",
        "price": 479.64,
        "volume": 36987
      },
      {
        "time": "11:17",
        "price": 490.48,
        "volume": 9032
      },
      {
        "time": "12:17",
        "price": 493.87,
        "volume": 21361
      },
      {
        "time": "13:17",
        "price": 493.22,
        "volume": 40119
      },
      {
        "time": "14:17",
        "price": 496.75,
        "volume": 33365
      },
      {
        "time": "15:17",
        "price": 490.54,
        "volume": 15946
      },
      {
        "time": "16:17",
        "price": 483.02,
        "volume": 28314
      },
      {
        "time": "17:17",
        "price": 488.88,
        "volume": 35335
      },
      {
        "time": "18:17",
        "price": 483.58,
        "volume": 25566
      },
      {
        "time": "19:17",
        "price": 497.33,
        "volume": 33898
      }
    ]
  },
  {
    "id": "goog8",
    "name": "Pixel 8",
    "brand": "Google",
    "model": "Pixel 8",
    "ticker": "GOOG8",
    "price": 699.3,
    "previousPrice": 714.57,
    "change": -15.28,
    "changePercent": -2.14,
    "marketCap": 34024990.0,
    "volume": 951753.0,
    "high24h": 772.48,
    "low24h": 712.22,
    "allTimeHigh": 962.5,
    "allTimeLow": 575.76,
    "rank": 14,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Tensor G3",
      "ram": "8GB",
      "storage": "128GB/256GB",
      "camera": "50MP Main + 12MP UW",
      "battery": "4575mAh",
      "display": "6.2\" OLED 120Hz",
      "os": "Android 14"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 77,
    "aiPrediction": 809.94,
    "aiConfidence": 71,
    "description": "The Pixel 8 is a flagship device from Google featuring 6.2\" OLED 120Hz and Tensor G3.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 729.03,
        "volume": 14799
      },
      {
        "time": "21:17",
        "price": 712.22,
        "volume": 45469
      },
      {
        "time": "22:17",
        "price": 718.43,
        "volume": 25667
      },
      {
        "time": "23:17",
        "price": 731.77,
        "volume": 37770
      },
      {
        "time": "00:17",
        "price": 743.55,
        "volume": 7543
      },
      {
        "time": "01:17",
        "price": 746.55,
        "volume": 28977
      },
      {
        "time": "02:17",
        "price": 758.02,
        "volume": 3068
      },
      {
        "time": "03:17",
        "price": 744.11,
        "volume": 22717
      },
      {
        "time": "04:17",
        "price": 746.22,
        "volume": 37511
      },
      {
        "time": "05:17",
        "price": 759.62,
        "volume": 19457
      },
      {
        "time": "06:17",
        "price": 755.84,
        "volume": 35008
      },
      {
        "time": "07:17",
        "price": 772.48,
        "volume": 20963
      },
      {
        "time": "08:17",
        "price": 755.87,
        "volume": 42097
      },
      {
        "time": "09:17",
        "price": 747.26,
        "volume": 27854
      },
      {
        "time": "10:17",
        "price": 738.32,
        "volume": 25354
      },
      {
        "time": "11:17",
        "price": 742.09,
        "volume": 33801
      },
      {
        "time": "12:17",
        "price": 733.45,
        "volume": 29983
      },
      {
        "time": "13:17",
        "price": 737.6,
        "volume": 46594
      },
      {
        "time": "14:17",
        "price": 726.21,
        "volume": 29880
      },
      {
        "time": "15:17",
        "price": 741.62,
        "volume": 40227
      },
      {
        "time": "16:17",
        "price": 757.91,
        "volume": 10499
      },
      {
        "time": "17:17",
        "price": 739.65,
        "volume": 20087
      },
      {
        "time": "18:17",
        "price": 734.95,
        "volume": 40122
      },
      {
        "time": "19:17",
        "price": 728.41,
        "volume": 12334
      }
    ]
  },
  {
    "id": "sams24p",
    "name": "Galaxy S24+",
    "brand": "Samsung",
    "model": "Galaxy S24+",
    "ticker": "SAMS24P",
    "price": 1022.43,
    "previousPrice": 1075.17,
    "change": -52.74,
    "changePercent": -4.91,
    "marketCap": 33463295.0,
    "volume": 1079598.0,
    "high24h": 1123.98,
    "low24h": 1056.83,
    "allTimeHigh": 1461.35,
    "allTimeLow": 687.58,
    "rank": 15,
    "color": "#30D158",
    "accentColor": "#24a143",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 3 / Exynos 2400",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "camera": "50MP Main + 12MP UW + 10MP 3x Tele",
      "battery": "4900mAh",
      "display": "6.7\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 86,
    "aiPrediction": 989.05,
    "aiConfidence": 93,
    "description": "The Galaxy S24+ is a flagship device from Samsung featuring 6.7\" AMOLED 120Hz and Snapdragon 8 Gen 3 / Exynos 2400.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1087.23,
        "volume": 44032
      },
      {
        "time": "21:17",
        "price": 1096.28,
        "volume": 43753
      },
      {
        "time": "22:17",
        "price": 1113.81,
        "volume": 16979
      },
      {
        "time": "23:17",
        "price": 1103.41,
        "volume": 17058
      },
      {
        "time": "00:17",
        "price": 1102.16,
        "volume": 22896
      },
      {
        "time": "01:17",
        "price": 1087.08,
        "volume": 11030
      },
      {
        "time": "02:17",
        "price": 1075.81,
        "volume": 30368
      },
      {
        "time": "03:17",
        "price": 1086.88,
        "volume": 49477
      },
      {
        "time": "04:17",
        "price": 1056.83,
        "volume": 13784
      },
      {
        "time": "05:17",
        "price": 1087.67,
        "volume": 37344
      },
      {
        "time": "06:17",
        "price": 1106.56,
        "volume": 32065
      },
      {
        "time": "07:17",
        "price": 1100.61,
        "volume": 27171
      },
      {
        "time": "08:17",
        "price": 1103.53,
        "volume": 33593
      },
      {
        "time": "09:17",
        "price": 1084.24,
        "volume": 43424
      },
      {
        "time": "10:17",
        "price": 1094.53,
        "volume": 45367
      },
      {
        "time": "11:17",
        "price": 1123.98,
        "volume": 19192
      },
      {
        "time": "12:17",
        "price": 1095.7,
        "volume": 41733
      },
      {
        "time": "13:17",
        "price": 1112.87,
        "volume": 7015
      },
      {
        "time": "14:17",
        "price": 1120.36,
        "volume": 2111
      },
      {
        "time": "15:17",
        "price": 1113.84,
        "volume": 31997
      },
      {
        "time": "16:17",
        "price": 1114.43,
        "volume": 21863
      },
      {
        "time": "17:17",
        "price": 1090.23,
        "volume": 3189
      },
      {
        "time": "18:17",
        "price": 1082.48,
        "volume": 36069
      },
      {
        "time": "19:17",
        "price": 1084.28,
        "volume": 15527
      }
    ]
  },
  {
    "id": "appl14p",
    "name": "iPhone 14 Pro",
    "brand": "Apple",
    "model": "iPhone 14 Pro",
    "ticker": "APPL14P",
    "price": 877.16,
    "previousPrice": 855.28,
    "change": 21.87,
    "changePercent": 2.56,
    "marketCap": 33284044.0,
    "volume": 825343.0,
    "high24h": 883.7,
    "low24h": 797.83,
    "allTimeHigh": 1008.01,
    "allTimeLow": 479.73,
    "rank": 16,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A16 Bionic",
      "ram": "6GB",
      "storage": "128GB/256GB/512GB/1TB",
      "camera": "48MP Main + 12MP UW + 12MP 3x Tele",
      "battery": "3200mAh",
      "display": "6.1\" OLED 120Hz",
      "os": "iOS 16"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 82,
    "aiPrediction": 995.47,
    "aiConfidence": 74,
    "description": "The iPhone 14 Pro is a flagship device from Apple featuring 6.1\" OLED 120Hz and A16 Bionic.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 883.7,
        "volume": 31811
      },
      {
        "time": "21:17",
        "price": 870.5,
        "volume": 13802
      },
      {
        "time": "22:17",
        "price": 855.98,
        "volume": 36514
      },
      {
        "time": "23:17",
        "price": 840.49,
        "volume": 39796
      },
      {
        "time": "00:17",
        "price": 823.86,
        "volume": 6999
      },
      {
        "time": "01:17",
        "price": 820.74,
        "volume": 8965
      },
      {
        "time": "02:17",
        "price": 813.95,
        "volume": 36600
      },
      {
        "time": "03:17",
        "price": 834.77,
        "volume": 40760
      },
      {
        "time": "04:17",
        "price": 810.96,
        "volume": 25957
      },
      {
        "time": "05:17",
        "price": 830.22,
        "volume": 40622
      },
      {
        "time": "06:17",
        "price": 815.04,
        "volume": 49165
      },
      {
        "time": "07:17",
        "price": 823.05,
        "volume": 41211
      },
      {
        "time": "08:17",
        "price": 825.76,
        "volume": 2066
      },
      {
        "time": "09:17",
        "price": 816.9,
        "volume": 15503
      },
      {
        "time": "10:17",
        "price": 817.05,
        "volume": 42103
      },
      {
        "time": "11:17",
        "price": 797.83,
        "volume": 22404
      },
      {
        "time": "12:17",
        "price": 819.94,
        "volume": 32797
      },
      {
        "time": "13:17",
        "price": 826.57,
        "volume": 2021
      },
      {
        "time": "14:17",
        "price": 833.14,
        "volume": 32461
      },
      {
        "time": "15:17",
        "price": 840.94,
        "volume": 39842
      },
      {
        "time": "16:17",
        "price": 832.26,
        "volume": 35072
      },
      {
        "time": "17:17",
        "price": 852.36,
        "volume": 48432
      },
      {
        "time": "18:17",
        "price": 861.96,
        "volume": 24683
      },
      {
        "time": "19:17",
        "price": 875.7,
        "volume": 22071
      }
    ]
  },
  {
    "id": "sama54",
    "name": "Galaxy A54 5G",
    "brand": "Samsung",
    "model": "Galaxy A54 5G",
    "ticker": "SAMA54",
    "price": 388.4,
    "previousPrice": 386.05,
    "change": 2.34,
    "changePercent": 0.61,
    "marketCap": 32387081.0,
    "volume": 102663.0,
    "high24h": 398.17,
    "low24h": 358.95,
    "allTimeHigh": 551.23,
    "allTimeLow": 227.78,
    "rank": 17,
    "color": "#30D158",
    "accentColor": "#24a143",
    "emoji": "??",
    "specs": {
      "chip": "Exynos 1380",
      "ram": "6GB/8GB",
      "storage": "128GB/256GB",
      "camera": "50MP Main + 12MP UW + 5MP Macro",
      "battery": "5000mAh",
      "display": "6.4\" AMOLED 120Hz",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 89,
    "aiPrediction": 452.94,
    "aiConfidence": 70,
    "description": "The Galaxy A54 5G is a flagship device from Samsung featuring 6.4\" AMOLED 120Hz and Exynos 1380.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 373.81,
        "volume": 34671
      },
      {
        "time": "21:17",
        "price": 371.92,
        "volume": 26822
      },
      {
        "time": "22:17",
        "price": 378.99,
        "volume": 32358
      },
      {
        "time": "23:17",
        "price": 385.78,
        "volume": 24239
      },
      {
        "time": "00:17",
        "price": 384.59,
        "volume": 12220
      },
      {
        "time": "01:17",
        "price": 391.9,
        "volume": 48290
      },
      {
        "time": "02:17",
        "price": 393.01,
        "volume": 47167
      },
      {
        "time": "03:17",
        "price": 387.57,
        "volume": 9892
      },
      {
        "time": "04:17",
        "price": 393.9,
        "volume": 7761
      },
      {
        "time": "05:17",
        "price": 382.94,
        "volume": 32646
      },
      {
        "time": "06:17",
        "price": 388.05,
        "volume": 25978
      },
      {
        "time": "07:17",
        "price": 398.17,
        "volume": 14122
      },
      {
        "time": "08:17",
        "price": 392.28,
        "volume": 12796
      },
      {
        "time": "09:17",
        "price": 387.82,
        "volume": 29043
      },
      {
        "time": "10:17",
        "price": 384.59,
        "volume": 39988
      },
      {
        "time": "11:17",
        "price": 382.72,
        "volume": 11497
      },
      {
        "time": "12:17",
        "price": 372.77,
        "volume": 23259
      },
      {
        "time": "13:17",
        "price": 380.09,
        "volume": 7522
      },
      {
        "time": "14:17",
        "price": 374.24,
        "volume": 12871
      },
      {
        "time": "15:17",
        "price": 381.09,
        "volume": 1679
      },
      {
        "time": "16:17",
        "price": 370.39,
        "volume": 19419
      },
      {
        "time": "17:17",
        "price": 374.97,
        "volume": 49541
      },
      {
        "time": "18:17",
        "price": 368.69,
        "volume": 33349
      },
      {
        "time": "19:17",
        "price": 358.95,
        "volume": 6648
      }
    ]
  },
  {
    "id": "sams24u",
    "name": "Galaxy S24 Ultra",
    "brand": "Samsung",
    "model": "Galaxy S24 Ultra",
    "ticker": "SAMS24U",
    "price": 1366.56,
    "previousPrice": 1371.15,
    "change": -4.59,
    "changePercent": -0.33,
    "marketCap": 31621132.0,
    "volume": 1579800.0,
    "high24h": 1340.2,
    "low24h": 1236.38,
    "allTimeHigh": 1651.97,
    "allTimeLow": 1221.12,
    "rank": 18,
    "color": "#30D158",
    "accentColor": "#24a143",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 3",
      "ram": "12GB",
      "storage": "256GB/512GB/1TB",
      "camera": "200MP Main + 12MP UW + 50MP 5x Tele + 10MP 3x Tele",
      "battery": "5000mAh",
      "display": "6.8\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 74,
    "aiPrediction": 1447.85,
    "aiConfidence": 87,
    "description": "The Galaxy S24 Ultra is a flagship device from Samsung featuring 6.8\" AMOLED 120Hz and Snapdragon 8 Gen 3.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1331.03,
        "volume": 22250
      },
      {
        "time": "21:17",
        "price": 1297.78,
        "volume": 21791
      },
      {
        "time": "22:17",
        "price": 1316.34,
        "volume": 20055
      },
      {
        "time": "23:17",
        "price": 1303.75,
        "volume": 13650
      },
      {
        "time": "00:17",
        "price": 1266.8,
        "volume": 43367
      },
      {
        "time": "01:17",
        "price": 1297.56,
        "volume": 26775
      },
      {
        "time": "02:17",
        "price": 1284.29,
        "volume": 21209
      },
      {
        "time": "03:17",
        "price": 1309.48,
        "volume": 4659
      },
      {
        "time": "04:17",
        "price": 1340.2,
        "volume": 42358
      },
      {
        "time": "05:17",
        "price": 1336.07,
        "volume": 26680
      },
      {
        "time": "06:17",
        "price": 1328.08,
        "volume": 37328
      },
      {
        "time": "07:17",
        "price": 1336.76,
        "volume": 37480
      },
      {
        "time": "08:17",
        "price": 1315.9,
        "volume": 40463
      },
      {
        "time": "09:17",
        "price": 1296.69,
        "volume": 20399
      },
      {
        "time": "10:17",
        "price": 1261.28,
        "volume": 9276
      },
      {
        "time": "11:17",
        "price": 1236.38,
        "volume": 7335
      },
      {
        "time": "12:17",
        "price": 1246.67,
        "volume": 6352
      },
      {
        "time": "13:17",
        "price": 1248.01,
        "volume": 44700
      },
      {
        "time": "14:17",
        "price": 1269.25,
        "volume": 20067
      },
      {
        "time": "15:17",
        "price": 1284.55,
        "volume": 31761
      },
      {
        "time": "16:17",
        "price": 1300.53,
        "volume": 37339
      },
      {
        "time": "17:17",
        "price": 1331.88,
        "volume": 31390
      },
      {
        "time": "18:17",
        "price": 1328.57,
        "volume": 41201
      },
      {
        "time": "19:17",
        "price": 1334.62,
        "volume": 16956
      }
    ]
  },
  {
    "id": "onep12",
    "name": "OnePlus 12",
    "brand": "OnePlus",
    "model": "OnePlus 12",
    "ticker": "ONEP12",
    "price": 814.49,
    "previousPrice": 881.63,
    "change": -67.13,
    "changePercent": -7.61,
    "marketCap": 30786444.0,
    "volume": 106379.0,
    "high24h": 956.38,
    "low24h": 847.5,
    "allTimeHigh": 920.44,
    "allTimeLow": 558.82,
    "rank": 19,
    "color": "#FF453A",
    "accentColor": "#cc372e",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB",
      "camera": "50MP Main + 48MP UW + 64MP 3x Tele",
      "battery": "5400mAh",
      "display": "6.82\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 79,
    "aiPrediction": 919.23,
    "aiConfidence": 73,
    "description": "The OnePlus 12 is a flagship device from OnePlus featuring 6.82\" AMOLED 120Hz and Snapdragon 8 Gen 3.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 868.98,
        "volume": 45948
      },
      {
        "time": "21:17",
        "price": 847.5,
        "volume": 49473
      },
      {
        "time": "22:17",
        "price": 853.02,
        "volume": 12665
      },
      {
        "time": "23:17",
        "price": 875.85,
        "volume": 43126
      },
      {
        "time": "00:17",
        "price": 850.72,
        "volume": 11961
      },
      {
        "time": "01:17",
        "price": 851.38,
        "volume": 49406
      },
      {
        "time": "02:17",
        "price": 875.68,
        "volume": 14230
      },
      {
        "time": "03:17",
        "price": 869.4,
        "volume": 26396
      },
      {
        "time": "04:17",
        "price": 879.47,
        "volume": 44352
      },
      {
        "time": "05:17",
        "price": 857.66,
        "volume": 25919
      },
      {
        "time": "06:17",
        "price": 863.47,
        "volume": 31034
      },
      {
        "time": "07:17",
        "price": 883.34,
        "volume": 38811
      },
      {
        "time": "08:17",
        "price": 889.07,
        "volume": 7773
      },
      {
        "time": "09:17",
        "price": 913.68,
        "volume": 3422
      },
      {
        "time": "10:17",
        "price": 920.87,
        "volume": 22971
      },
      {
        "time": "11:17",
        "price": 917.42,
        "volume": 15507
      },
      {
        "time": "12:17",
        "price": 917.67,
        "volume": 32224
      },
      {
        "time": "13:17",
        "price": 904.27,
        "volume": 18894
      },
      {
        "time": "14:17",
        "price": 925.36,
        "volume": 15261
      },
      {
        "time": "15:17",
        "price": 945.47,
        "volume": 15697
      },
      {
        "time": "16:17",
        "price": 943.58,
        "volume": 29970
      },
      {
        "time": "17:17",
        "price": 956.38,
        "volume": 25075
      },
      {
        "time": "18:17",
        "price": 949.7,
        "volume": 8138
      },
      {
        "time": "19:17",
        "price": 955.2,
        "volume": 12450
      }
    ]
  },
  {
    "id": "googfld",
    "name": "Pixel Fold",
    "brand": "Google",
    "model": "Pixel Fold",
    "ticker": "GOOGFLD",
    "price": 1605.69,
    "previousPrice": 1672.33,
    "change": -66.64,
    "changePercent": -3.98,
    "marketCap": 29243752.0,
    "volume": 1094970.0,
    "high24h": 1825.1,
    "low24h": 1552.16,
    "allTimeHigh": 2287.51,
    "allTimeLow": 1334.05,
    "rank": 20,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Tensor G2",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "camera": "48MP Main + 10.8MP UW + 10.8MP 5x Tele",
      "battery": "4821mAh",
      "display": "7.6\" OLED 120Hz Foldable",
      "os": "Android 13"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 85,
    "aiPrediction": 1890.88,
    "aiConfidence": 91,
    "description": "The Pixel Fold is a flagship device from Google featuring 7.6\" OLED 120Hz Foldable and Tensor G2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1552.16,
        "volume": 40297
      },
      {
        "time": "21:17",
        "price": 1561.67,
        "volume": 6296
      },
      {
        "time": "22:17",
        "price": 1588.62,
        "volume": 11953
      },
      {
        "time": "23:17",
        "price": 1619.91,
        "volume": 39090
      },
      {
        "time": "00:17",
        "price": 1622.37,
        "volume": 48645
      },
      {
        "time": "01:17",
        "price": 1660.25,
        "volume": 3950
      },
      {
        "time": "02:17",
        "price": 1694.66,
        "volume": 48367
      },
      {
        "time": "03:17",
        "price": 1699.41,
        "volume": 6436
      },
      {
        "time": "04:17",
        "price": 1734.17,
        "volume": 22440
      },
      {
        "time": "05:17",
        "price": 1755.02,
        "volume": 49340
      },
      {
        "time": "06:17",
        "price": 1753.8,
        "volume": 3666
      },
      {
        "time": "07:17",
        "price": 1758.94,
        "volume": 12304
      },
      {
        "time": "08:17",
        "price": 1776.53,
        "volume": 2025
      },
      {
        "time": "09:17",
        "price": 1787.46,
        "volume": 43176
      },
      {
        "time": "10:17",
        "price": 1780.76,
        "volume": 11829
      },
      {
        "time": "11:17",
        "price": 1795.42,
        "volume": 33621
      },
      {
        "time": "12:17",
        "price": 1787.1,
        "volume": 22568
      },
      {
        "time": "13:17",
        "price": 1751.85,
        "volume": 33504
      },
      {
        "time": "14:17",
        "price": 1791.75,
        "volume": 20359
      },
      {
        "time": "15:17",
        "price": 1789.57,
        "volume": 6487
      },
      {
        "time": "16:17",
        "price": 1803.82,
        "volume": 8415
      },
      {
        "time": "17:17",
        "price": 1825.1,
        "volume": 14343
      },
      {
        "time": "18:17",
        "price": 1800.6,
        "volume": 6749
      },
      {
        "time": "19:17",
        "price": 1785.25,
        "volume": 14172
      }
    ]
  },
  {
    "id": "goog7",
    "name": "Pixel 7",
    "brand": "Google",
    "model": "Pixel 7",
    "ticker": "GOOG7",
    "price": 508.46,
    "previousPrice": 550.4,
    "change": -41.94,
    "changePercent": -7.62,
    "marketCap": 27087251.0,
    "volume": 1950463.0,
    "high24h": 493.89,
    "low24h": 460.46,
    "allTimeHigh": 638.03,
    "allTimeLow": 440.64,
    "rank": 21,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Tensor G2",
      "ram": "8GB",
      "storage": "128GB/256GB",
      "camera": "50MP Main + 12MP UW",
      "battery": "4355mAh",
      "display": "6.3\" OLED 90Hz",
      "os": "Android 13"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 69,
    "aiPrediction": 587.75,
    "aiConfidence": 93,
    "description": "The Pixel 7 is a flagship device from Google featuring 6.3\" OLED 90Hz and Tensor G2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 491.31,
        "volume": 7336
      },
      {
        "time": "21:17",
        "price": 484.88,
        "volume": 26037
      },
      {
        "time": "22:17",
        "price": 473.02,
        "volume": 45352
      },
      {
        "time": "23:17",
        "price": 480.12,
        "volume": 37273
      },
      {
        "time": "00:17",
        "price": 493.89,
        "volume": 6571
      },
      {
        "time": "01:17",
        "price": 481.05,
        "volume": 32027
      },
      {
        "time": "02:17",
        "price": 483.79,
        "volume": 28310
      },
      {
        "time": "03:17",
        "price": 472.84,
        "volume": 6760
      },
      {
        "time": "04:17",
        "price": 484.27,
        "volume": 22542
      },
      {
        "time": "05:17",
        "price": 476.73,
        "volume": 4980
      },
      {
        "time": "06:17",
        "price": 472.74,
        "volume": 15008
      },
      {
        "time": "07:17",
        "price": 465.42,
        "volume": 39569
      },
      {
        "time": "08:17",
        "price": 460.46,
        "volume": 30342
      },
      {
        "time": "09:17",
        "price": 472.93,
        "volume": 21473
      },
      {
        "time": "10:17",
        "price": 463.93,
        "volume": 13319
      },
      {
        "time": "11:17",
        "price": 464.39,
        "volume": 25825
      },
      {
        "time": "12:17",
        "price": 477.76,
        "volume": 31792
      },
      {
        "time": "13:17",
        "price": 488.97,
        "volume": 49209
      },
      {
        "time": "14:17",
        "price": 477.64,
        "volume": 5836
      },
      {
        "time": "15:17",
        "price": 475.71,
        "volume": 49908
      },
      {
        "time": "16:17",
        "price": 482.05,
        "volume": 48975
      },
      {
        "time": "17:17",
        "price": 488.92,
        "volume": 34330
      },
      {
        "time": "18:17",
        "price": 487.6,
        "volume": 40992
      },
      {
        "time": "19:17",
        "price": 490.01,
        "volume": 26256
      }
    ]
  },
  {
    "id": "appl15pm",
    "name": "iPhone 15 Pro Max",
    "brand": "Apple",
    "model": "iPhone 15 Pro Max",
    "ticker": "APPL15PM",
    "price": 1108.19,
    "previousPrice": 1124.93,
    "change": -16.74,
    "changePercent": -1.49,
    "marketCap": 23962310.0,
    "volume": 1736352.0,
    "high24h": 1134.36,
    "low24h": 999.51,
    "allTimeHigh": 1409.93,
    "allTimeLow": 574.08,
    "rank": 22,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A17 Pro",
      "ram": "8GB",
      "storage": "256GB/512GB/1TB",
      "camera": "48MP Main + 12MP UW + 12MP 5x Tele",
      "battery": "4422mAh",
      "display": "6.7\" OLED 120Hz",
      "os": "iOS 17"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 81,
    "aiPrediction": 1212.07,
    "aiConfidence": 79,
    "description": "The iPhone 15 Pro Max is a flagship device from Apple featuring 6.7\" OLED 120Hz and A17 Pro.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1107.37,
        "volume": 9789
      },
      {
        "time": "21:17",
        "price": 1103.39,
        "volume": 10579
      },
      {
        "time": "22:17",
        "price": 1134.36,
        "volume": 18917
      },
      {
        "time": "23:17",
        "price": 1115.16,
        "volume": 22185
      },
      {
        "time": "00:17",
        "price": 1102.83,
        "volume": 27865
      },
      {
        "time": "01:17",
        "price": 1071.86,
        "volume": 34071
      },
      {
        "time": "02:17",
        "price": 1097.57,
        "volume": 5374
      },
      {
        "time": "03:17",
        "price": 1078.54,
        "volume": 26621
      },
      {
        "time": "04:17",
        "price": 1078.55,
        "volume": 46808
      },
      {
        "time": "05:17",
        "price": 1077.55,
        "volume": 26263
      },
      {
        "time": "06:17",
        "price": 1083.88,
        "volume": 29167
      },
      {
        "time": "07:17",
        "price": 1069.35,
        "volume": 9866
      },
      {
        "time": "08:17",
        "price": 1044.67,
        "volume": 36399
      },
      {
        "time": "09:17",
        "price": 1036.7,
        "volume": 23636
      },
      {
        "time": "10:17",
        "price": 1051.35,
        "volume": 21014
      },
      {
        "time": "11:17",
        "price": 1036.01,
        "volume": 28803
      },
      {
        "time": "12:17",
        "price": 1052.52,
        "volume": 47630
      },
      {
        "time": "13:17",
        "price": 1051.64,
        "volume": 8377
      },
      {
        "time": "14:17",
        "price": 1055.14,
        "volume": 33827
      },
      {
        "time": "15:17",
        "price": 1029.19,
        "volume": 35009
      },
      {
        "time": "16:17",
        "price": 999.51,
        "volume": 45216
      },
      {
        "time": "17:17",
        "price": 1028.84,
        "volume": 17679
      },
      {
        "time": "18:17",
        "price": 1041.51,
        "volume": 4596
      },
      {
        "time": "19:17",
        "price": 1019.97,
        "volume": 14776
      }
    ]
  },
  {
    "id": "xiao14u",
    "name": "Xiaomi 14 Ultra",
    "brand": "Xiaomi",
    "model": "Xiaomi 14 Ultra",
    "ticker": "XIAO14U",
    "price": 1337.29,
    "previousPrice": 1433.67,
    "change": -96.38,
    "changePercent": -6.72,
    "marketCap": 22906958.0,
    "volume": 569018.0,
    "high24h": 1420.57,
    "low24h": 1271.4,
    "allTimeHigh": 1825.82,
    "allTimeLow": 862.54,
    "rank": 23,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 3",
      "ram": "12GB/16GB",
      "storage": "256GB/512GB/1TB",
      "camera": "50MP Main + 50MP UW + 50MP 3.2x Tele + 50MP 5x Tele",
      "battery": "5300mAh",
      "display": "6.73\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 62,
    "aiPrediction": 1539.37,
    "aiConfidence": 77,
    "description": "The Xiaomi 14 Ultra is a flagship device from Xiaomi featuring 6.73\" AMOLED 120Hz and Snapdragon 8 Gen 3.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1271.4,
        "volume": 38846
      },
      {
        "time": "21:17",
        "price": 1308.87,
        "volume": 18041
      },
      {
        "time": "22:17",
        "price": 1306.45,
        "volume": 24772
      },
      {
        "time": "23:17",
        "price": 1333.92,
        "volume": 16219
      },
      {
        "time": "00:17",
        "price": 1357.14,
        "volume": 16027
      },
      {
        "time": "01:17",
        "price": 1363.8,
        "volume": 8499
      },
      {
        "time": "02:17",
        "price": 1377.55,
        "volume": 3788
      },
      {
        "time": "03:17",
        "price": 1381.66,
        "volume": 3747
      },
      {
        "time": "04:17",
        "price": 1420.57,
        "volume": 10654
      },
      {
        "time": "05:17",
        "price": 1408.96,
        "volume": 11496
      },
      {
        "time": "06:17",
        "price": 1413.91,
        "volume": 1147
      },
      {
        "time": "07:17",
        "price": 1376.34,
        "volume": 3699
      },
      {
        "time": "08:17",
        "price": 1415.47,
        "volume": 27236
      },
      {
        "time": "09:17",
        "price": 1382.45,
        "volume": 11322
      },
      {
        "time": "10:17",
        "price": 1405.13,
        "volume": 4591
      },
      {
        "time": "11:17",
        "price": 1397.3,
        "volume": 4627
      },
      {
        "time": "12:17",
        "price": 1378.66,
        "volume": 37209
      },
      {
        "time": "13:17",
        "price": 1361.69,
        "volume": 47832
      },
      {
        "time": "14:17",
        "price": 1389.42,
        "volume": 40002
      },
      {
        "time": "15:17",
        "price": 1377.55,
        "volume": 21016
      },
      {
        "time": "16:17",
        "price": 1358.82,
        "volume": 3969
      },
      {
        "time": "17:17",
        "price": 1369.09,
        "volume": 47665
      },
      {
        "time": "18:17",
        "price": 1332.35,
        "volume": 27548
      },
      {
        "time": "19:17",
        "price": 1346.88,
        "volume": 34119
      }
    ]
  },
  {
    "id": "xiao14",
    "name": "Xiaomi 14",
    "brand": "Xiaomi",
    "model": "Xiaomi 14",
    "ticker": "XIAO14",
    "price": 734.24,
    "previousPrice": 684.98,
    "change": 49.26,
    "changePercent": 7.19,
    "marketCap": 22726159.0,
    "volume": 1648477.0,
    "high24h": 899.81,
    "low24h": 754.67,
    "allTimeHigh": 986.37,
    "allTimeLow": 639.52,
    "rank": 24,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 3",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "camera": "50MP Main + 50MP UW + 50MP 3.2x Tele",
      "battery": "4610mAh",
      "display": "6.36\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 93,
    "aiPrediction": 757.06,
    "aiConfidence": 83,
    "description": "The Xiaomi 14 is a flagship device from Xiaomi featuring 6.36\" AMOLED 120Hz and Snapdragon 8 Gen 3.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 754.67,
        "volume": 35037
      },
      {
        "time": "21:17",
        "price": 769.39,
        "volume": 48794
      },
      {
        "time": "22:17",
        "price": 786.45,
        "volume": 17839
      },
      {
        "time": "23:17",
        "price": 801.47,
        "volume": 3001
      },
      {
        "time": "00:17",
        "price": 823.15,
        "volume": 15795
      },
      {
        "time": "01:17",
        "price": 843.05,
        "volume": 17363
      },
      {
        "time": "02:17",
        "price": 830.63,
        "volume": 6556
      },
      {
        "time": "03:17",
        "price": 849.84,
        "volume": 13605
      },
      {
        "time": "04:17",
        "price": 858.44,
        "volume": 2629
      },
      {
        "time": "05:17",
        "price": 848.5,
        "volume": 45546
      },
      {
        "time": "06:17",
        "price": 840.52,
        "volume": 35933
      },
      {
        "time": "07:17",
        "price": 816.61,
        "volume": 31944
      },
      {
        "time": "08:17",
        "price": 820.98,
        "volume": 31066
      },
      {
        "time": "09:17",
        "price": 822.4,
        "volume": 48405
      },
      {
        "time": "10:17",
        "price": 840.05,
        "volume": 48813
      },
      {
        "time": "11:17",
        "price": 826.32,
        "volume": 23684
      },
      {
        "time": "12:17",
        "price": 808.62,
        "volume": 21703
      },
      {
        "time": "13:17",
        "price": 825.56,
        "volume": 36362
      },
      {
        "time": "14:17",
        "price": 844.22,
        "volume": 20082
      },
      {
        "time": "15:17",
        "price": 855.08,
        "volume": 24607
      },
      {
        "time": "16:17",
        "price": 863.19,
        "volume": 41733
      },
      {
        "time": "17:17",
        "price": 883.65,
        "volume": 42703
      },
      {
        "time": "18:17",
        "price": 897.22,
        "volume": 21093
      },
      {
        "time": "19:17",
        "price": 899.81,
        "volume": 39426
      }
    ]
  },
  {
    "id": "appl14",
    "name": "iPhone 14",
    "brand": "Apple",
    "model": "iPhone 14",
    "ticker": "APPL14",
    "price": 587.91,
    "previousPrice": 568.4,
    "change": 19.51,
    "changePercent": 3.43,
    "marketCap": 20297591.0,
    "volume": 1773482.0,
    "high24h": 628.28,
    "low24h": 586.94,
    "allTimeHigh": 683.01,
    "allTimeLow": 315.12,
    "rank": 25,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A15 Bionic",
      "ram": "6GB",
      "storage": "128GB/256GB/512GB",
      "camera": "12MP Main + 12MP UW",
      "battery": "3279mAh",
      "display": "6.1\" OLED 60Hz",
      "os": "iOS 16"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 81,
    "aiPrediction": 596.79,
    "aiConfidence": 77,
    "description": "The iPhone 14 is a flagship device from Apple featuring 6.1\" OLED 60Hz and A15 Bionic.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 619.07,
        "volume": 46628
      },
      {
        "time": "21:17",
        "price": 616.84,
        "volume": 38594
      },
      {
        "time": "22:17",
        "price": 608.47,
        "volume": 2145
      },
      {
        "time": "23:17",
        "price": 618.21,
        "volume": 14756
      },
      {
        "time": "00:17",
        "price": 606.46,
        "volume": 7193
      },
      {
        "time": "01:17",
        "price": 603.16,
        "volume": 38446
      },
      {
        "time": "02:17",
        "price": 605.57,
        "volume": 26103
      },
      {
        "time": "03:17",
        "price": 615.04,
        "volume": 31424
      },
      {
        "time": "04:17",
        "price": 615.91,
        "volume": 28652
      },
      {
        "time": "05:17",
        "price": 628.28,
        "volume": 1618
      },
      {
        "time": "06:17",
        "price": 616.6,
        "volume": 2632
      },
      {
        "time": "07:17",
        "price": 619.14,
        "volume": 17638
      },
      {
        "time": "08:17",
        "price": 620.07,
        "volume": 44403
      },
      {
        "time": "09:17",
        "price": 628.27,
        "volume": 17977
      },
      {
        "time": "10:17",
        "price": 627.43,
        "volume": 36116
      },
      {
        "time": "11:17",
        "price": 619.27,
        "volume": 15627
      },
      {
        "time": "12:17",
        "price": 610.89,
        "volume": 15950
      },
      {
        "time": "13:17",
        "price": 606.27,
        "volume": 27940
      },
      {
        "time": "14:17",
        "price": 601.06,
        "volume": 22301
      },
      {
        "time": "15:17",
        "price": 586.94,
        "volume": 46742
      },
      {
        "time": "16:17",
        "price": 595.79,
        "volume": 5565
      },
      {
        "time": "17:17",
        "price": 612.86,
        "volume": 21037
      },
      {
        "time": "18:17",
        "price": 608.89,
        "volume": 37992
      },
      {
        "time": "19:17",
        "price": 608.1,
        "volume": 23619
      }
    ]
  },
  {
    "id": "goog7p",
    "name": "Pixel 7 Pro",
    "brand": "Google",
    "model": "Pixel 7 Pro",
    "ticker": "GOOG7P",
    "price": 710.57,
    "previousPrice": 735.95,
    "change": -25.38,
    "changePercent": -3.45,
    "marketCap": 19846284.0,
    "volume": 318963.0,
    "high24h": 687.64,
    "low24h": 595.22,
    "allTimeHigh": 858.26,
    "allTimeLow": 466.62,
    "rank": 26,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Tensor G2",
      "ram": "12GB",
      "storage": "128GB/256GB/512GB",
      "camera": "50MP Main + 12MP UW + 48MP 5x Tele",
      "battery": "5000mAh",
      "display": "6.7\" OLED 120Hz",
      "os": "Android 13"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 98,
    "aiPrediction": 848.94,
    "aiConfidence": 80,
    "description": "The Pixel 7 Pro is a flagship device from Google featuring 6.7\" OLED 120Hz and Tensor G2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 687.64,
        "volume": 21204
      },
      {
        "time": "21:17",
        "price": 670.06,
        "volume": 30873
      },
      {
        "time": "22:17",
        "price": 665.7,
        "volume": 9347
      },
      {
        "time": "23:17",
        "price": 651.7,
        "volume": 15624
      },
      {
        "time": "00:17",
        "price": 637.34,
        "volume": 35897
      },
      {
        "time": "01:17",
        "price": 625.25,
        "volume": 25642
      },
      {
        "time": "02:17",
        "price": 618.48,
        "volume": 44162
      },
      {
        "time": "03:17",
        "price": 604.19,
        "volume": 17256
      },
      {
        "time": "04:17",
        "price": 615.98,
        "volume": 16003
      },
      {
        "time": "05:17",
        "price": 612.08,
        "volume": 28873
      },
      {
        "time": "06:17",
        "price": 612.12,
        "volume": 11842
      },
      {
        "time": "07:17",
        "price": 595.22,
        "volume": 33948
      },
      {
        "time": "08:17",
        "price": 603.56,
        "volume": 39794
      },
      {
        "time": "09:17",
        "price": 612.13,
        "volume": 44553
      },
      {
        "time": "10:17",
        "price": 626.09,
        "volume": 9742
      },
      {
        "time": "11:17",
        "price": 633.58,
        "volume": 42723
      },
      {
        "time": "12:17",
        "price": 634.26,
        "volume": 22492
      },
      {
        "time": "13:17",
        "price": 644.93,
        "volume": 23345
      },
      {
        "time": "14:17",
        "price": 641.08,
        "volume": 36102
      },
      {
        "time": "15:17",
        "price": 655.55,
        "volume": 30023
      },
      {
        "time": "16:17",
        "price": 663.0,
        "volume": 6271
      },
      {
        "time": "17:17",
        "price": 662.62,
        "volume": 12664
      },
      {
        "time": "18:17",
        "price": 645.1,
        "volume": 6746
      },
      {
        "time": "19:17",
        "price": 653.38,
        "volume": 14743
      }
    ]
  },
  {
    "id": "sony1v",
    "name": "Xperia 1 V",
    "brand": "Sony",
    "model": "Xperia 1 V",
    "ticker": "SONY1V",
    "price": 1307.75,
    "previousPrice": 1247.34,
    "change": 60.41,
    "changePercent": 4.84,
    "marketCap": 19476643.0,
    "volume": 1891804.0,
    "high24h": 1401.91,
    "low24h": 1274.25,
    "allTimeHigh": 1807.7,
    "allTimeLow": 850.51,
    "rank": 27,
    "color": "#BF5AF2",
    "accentColor": "#9948c2",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "12GB",
      "storage": "256GB/512GB",
      "camera": "48MP Main + 12MP UW + 12MP 3.5x-5.2x Tele",
      "battery": "5000mAh",
      "display": "6.5\" OLED 4K 120Hz",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 80,
    "aiPrediction": 1433.91,
    "aiConfidence": 95,
    "description": "The Xperia 1 V is a flagship device from Sony featuring 6.5\" OLED 4K 120Hz and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1337.24,
        "volume": 10722
      },
      {
        "time": "21:17",
        "price": 1323.19,
        "volume": 20875
      },
      {
        "time": "22:17",
        "price": 1304.16,
        "volume": 3046
      },
      {
        "time": "23:17",
        "price": 1288.12,
        "volume": 10970
      },
      {
        "time": "00:17",
        "price": 1298.29,
        "volume": 18496
      },
      {
        "time": "01:17",
        "price": 1291.49,
        "volume": 37902
      },
      {
        "time": "02:17",
        "price": 1298.07,
        "volume": 11223
      },
      {
        "time": "03:17",
        "price": 1274.25,
        "volume": 35502
      },
      {
        "time": "04:17",
        "price": 1306.45,
        "volume": 25086
      },
      {
        "time": "05:17",
        "price": 1335.33,
        "volume": 47521
      },
      {
        "time": "06:17",
        "price": 1335.32,
        "volume": 32480
      },
      {
        "time": "07:17",
        "price": 1297.45,
        "volume": 43005
      },
      {
        "time": "08:17",
        "price": 1274.74,
        "volume": 22600
      },
      {
        "time": "09:17",
        "price": 1288.92,
        "volume": 5663
      },
      {
        "time": "10:17",
        "price": 1290.03,
        "volume": 39209
      },
      {
        "time": "11:17",
        "price": 1325.69,
        "volume": 26044
      },
      {
        "time": "12:17",
        "price": 1362.37,
        "volume": 5912
      },
      {
        "time": "13:17",
        "price": 1339.36,
        "volume": 14843
      },
      {
        "time": "14:17",
        "price": 1311.73,
        "volume": 42739
      },
      {
        "time": "15:17",
        "price": 1342.16,
        "volume": 28403
      },
      {
        "time": "16:17",
        "price": 1377.57,
        "volume": 16468
      },
      {
        "time": "17:17",
        "price": 1344.56,
        "volume": 12426
      },
      {
        "time": "18:17",
        "price": 1382.11,
        "volume": 26600
      },
      {
        "time": "19:17",
        "price": 1401.91,
        "volume": 41764
      }
    ]
  },
  {
    "id": "applse3",
    "name": "iPhone SE (2022)",
    "brand": "Apple",
    "model": "iPhone SE (2022)",
    "ticker": "APPLSE3",
    "price": 426.72,
    "previousPrice": 464.08,
    "change": -37.36,
    "changePercent": -8.05,
    "marketCap": 19143706.0,
    "volume": 1056460.0,
    "high24h": 412.6,
    "low24h": 367.63,
    "allTimeHigh": 556.53,
    "allTimeLow": 335.21,
    "rank": 28,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A15 Bionic",
      "ram": "4GB",
      "storage": "64GB/128GB/256GB",
      "camera": "12MP Main",
      "battery": "2018mAh",
      "display": "4.7\" LCD 60Hz",
      "os": "iOS 15"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 83,
    "aiPrediction": 408.95,
    "aiConfidence": 80,
    "description": "The iPhone SE (2022) is a flagship device from Apple featuring 4.7\" LCD 60Hz and A15 Bionic.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 407.63,
        "volume": 44210
      },
      {
        "time": "21:17",
        "price": 397.72,
        "volume": 20565
      },
      {
        "time": "22:17",
        "price": 409.47,
        "volume": 19312
      },
      {
        "time": "23:17",
        "price": 404.49,
        "volume": 17463
      },
      {
        "time": "00:17",
        "price": 401.42,
        "volume": 11863
      },
      {
        "time": "01:17",
        "price": 412.6,
        "volume": 35002
      },
      {
        "time": "02:17",
        "price": 401.68,
        "volume": 10654
      },
      {
        "time": "03:17",
        "price": 402.78,
        "volume": 7473
      },
      {
        "time": "04:17",
        "price": 395.05,
        "volume": 6388
      },
      {
        "time": "05:17",
        "price": 406.68,
        "volume": 4389
      },
      {
        "time": "06:17",
        "price": 395.08,
        "volume": 5878
      },
      {
        "time": "07:17",
        "price": 390.55,
        "volume": 43819
      },
      {
        "time": "08:17",
        "price": 380.59,
        "volume": 7834
      },
      {
        "time": "09:17",
        "price": 382.28,
        "volume": 18991
      },
      {
        "time": "10:17",
        "price": 378.69,
        "volume": 48855
      },
      {
        "time": "11:17",
        "price": 367.63,
        "volume": 23349
      },
      {
        "time": "12:17",
        "price": 376.61,
        "volume": 48275
      },
      {
        "time": "13:17",
        "price": 384.77,
        "volume": 14166
      },
      {
        "time": "14:17",
        "price": 391.98,
        "volume": 46465
      },
      {
        "time": "15:17",
        "price": 383.79,
        "volume": 38792
      },
      {
        "time": "16:17",
        "price": 378.16,
        "volume": 49487
      },
      {
        "time": "17:17",
        "price": 386.56,
        "volume": 7580
      },
      {
        "time": "18:17",
        "price": 385.89,
        "volume": 13691
      },
      {
        "time": "19:17",
        "price": 388.64,
        "volume": 9249
      }
    ]
  },
  {
    "id": "onep12r",
    "name": "OnePlus 12R",
    "brand": "OnePlus",
    "model": "OnePlus 12R",
    "ticker": "ONEP12R",
    "price": 453.14,
    "previousPrice": 409.42,
    "change": 43.72,
    "changePercent": 10.68,
    "marketCap": 18700317.0,
    "volume": 1996837.0,
    "high24h": 452.6,
    "low24h": 381.2,
    "allTimeHigh": 582.11,
    "allTimeLow": 364.4,
    "rank": 29,
    "color": "#FF453A",
    "accentColor": "#cc372e",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "8GB/16GB",
      "storage": "128GB/256GB",
      "camera": "50MP Main + 8MP UW + 2MP Macro",
      "battery": "5500mAh",
      "display": "6.78\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 92,
    "aiPrediction": 453.9,
    "aiConfidence": 71,
    "description": "The OnePlus 12R is a flagship device from OnePlus featuring 6.78\" AMOLED 120Hz and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 440.51,
        "volume": 24803
      },
      {
        "time": "21:17",
        "price": 452.6,
        "volume": 21259
      },
      {
        "time": "22:17",
        "price": 439.43,
        "volume": 22238
      },
      {
        "time": "23:17",
        "price": 431.58,
        "volume": 17281
      },
      {
        "time": "00:17",
        "price": 434.27,
        "volume": 12810
      },
      {
        "time": "01:17",
        "price": 424.19,
        "volume": 37393
      },
      {
        "time": "02:17",
        "price": 419.3,
        "volume": 45303
      },
      {
        "time": "03:17",
        "price": 409.95,
        "volume": 40603
      },
      {
        "time": "04:17",
        "price": 408.79,
        "volume": 44759
      },
      {
        "time": "05:17",
        "price": 409.13,
        "volume": 28783
      },
      {
        "time": "06:17",
        "price": 411.48,
        "volume": 10638
      },
      {
        "time": "07:17",
        "price": 417.17,
        "volume": 16952
      },
      {
        "time": "08:17",
        "price": 409.48,
        "volume": 30189
      },
      {
        "time": "09:17",
        "price": 398.85,
        "volume": 48602
      },
      {
        "time": "10:17",
        "price": 403.05,
        "volume": 45126
      },
      {
        "time": "11:17",
        "price": 397.15,
        "volume": 15151
      },
      {
        "time": "12:17",
        "price": 392.78,
        "volume": 12563
      },
      {
        "time": "13:17",
        "price": 403.47,
        "volume": 48089
      },
      {
        "time": "14:17",
        "price": 393.7,
        "volume": 32938
      },
      {
        "time": "15:17",
        "price": 389.76,
        "volume": 4227
      },
      {
        "time": "16:17",
        "price": 391.22,
        "volume": 19702
      },
      {
        "time": "17:17",
        "price": 381.2,
        "volume": 17053
      },
      {
        "time": "18:17",
        "price": 382.01,
        "volume": 44067
      },
      {
        "time": "19:17",
        "price": 389.83,
        "volume": 16084
      }
    ]
  },
  {
    "id": "onepop",
    "name": "OnePlus Open",
    "brand": "OnePlus",
    "model": "OnePlus Open",
    "ticker": "ONEPOP",
    "price": 1703.47,
    "previousPrice": 1857.31,
    "change": -153.83,
    "changePercent": -8.28,
    "marketCap": 18037279.0,
    "volume": 1679894.0,
    "high24h": 1659.95,
    "low24h": 1405.82,
    "allTimeHigh": 2079.78,
    "allTimeLow": 1412.43,
    "rank": 30,
    "color": "#FF453A",
    "accentColor": "#cc372e",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "16GB",
      "storage": "512GB",
      "camera": "48MP Main + 48MP UW + 64MP 3x Tele",
      "battery": "4805mAh",
      "display": "7.82\" AMOLED 120Hz Foldable",
      "os": "Android 13"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 97,
    "aiPrediction": 1840.31,
    "aiConfidence": 82,
    "description": "The OnePlus Open is a flagship device from OnePlus featuring 7.82\" AMOLED 120Hz Foldable and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1659.95,
        "volume": 48342
      },
      {
        "time": "21:17",
        "price": 1614.71,
        "volume": 36449
      },
      {
        "time": "22:17",
        "price": 1590.94,
        "volume": 8758
      },
      {
        "time": "23:17",
        "price": 1545.15,
        "volume": 2638
      },
      {
        "time": "00:17",
        "price": 1518.27,
        "volume": 31115
      },
      {
        "time": "01:17",
        "price": 1536.31,
        "volume": 10473
      },
      {
        "time": "02:17",
        "price": 1493.62,
        "volume": 22762
      },
      {
        "time": "03:17",
        "price": 1450.61,
        "volume": 48180
      },
      {
        "time": "04:17",
        "price": 1486.6,
        "volume": 46779
      },
      {
        "time": "05:17",
        "price": 1442.79,
        "volume": 27018
      },
      {
        "time": "06:17",
        "price": 1428.97,
        "volume": 26543
      },
      {
        "time": "07:17",
        "price": 1462.2,
        "volume": 39062
      },
      {
        "time": "08:17",
        "price": 1471.24,
        "volume": 6540
      },
      {
        "time": "09:17",
        "price": 1430.67,
        "volume": 35255
      },
      {
        "time": "10:17",
        "price": 1406.16,
        "volume": 23538
      },
      {
        "time": "11:17",
        "price": 1447.5,
        "volume": 18618
      },
      {
        "time": "12:17",
        "price": 1410.04,
        "volume": 4976
      },
      {
        "time": "13:17",
        "price": 1443.36,
        "volume": 27571
      },
      {
        "time": "14:17",
        "price": 1426.59,
        "volume": 26881
      },
      {
        "time": "15:17",
        "price": 1405.82,
        "volume": 16213
      },
      {
        "time": "16:17",
        "price": 1441.78,
        "volume": 37514
      },
      {
        "time": "17:17",
        "price": 1419.89,
        "volume": 45971
      },
      {
        "time": "18:17",
        "price": 1455.04,
        "volume": 21490
      },
      {
        "time": "19:17",
        "price": 1468.8,
        "volume": 33856
      }
    ]
  },
  {
    "id": "sams24",
    "name": "Galaxy S24",
    "brand": "Samsung",
    "model": "Galaxy S24",
    "ticker": "SAMS24",
    "price": 699.7,
    "previousPrice": 644.83,
    "change": 54.87,
    "changePercent": 8.51,
    "marketCap": 17301391.0,
    "volume": 437759.0,
    "high24h": 679.94,
    "low24h": 604.03,
    "allTimeHigh": 929.72,
    "allTimeLow": 548.71,
    "rank": 31,
    "color": "#30D158",
    "accentColor": "#24a143",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 3 / Exynos 2400",
      "ram": "8GB",
      "storage": "128GB/256GB",
      "camera": "50MP Main + 12MP UW + 10MP 3x Tele",
      "battery": "4000mAh",
      "display": "6.2\" AMOLED 120Hz",
      "os": "Android 14"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 65,
    "aiPrediction": 762.74,
    "aiConfidence": 91,
    "description": "The Galaxy S24 is a flagship device from Samsung featuring 6.2\" AMOLED 120Hz and Snapdragon 8 Gen 3 / Exynos 2400.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 652.62,
        "volume": 12792
      },
      {
        "time": "21:17",
        "price": 665.53,
        "volume": 12391
      },
      {
        "time": "22:17",
        "price": 679.94,
        "volume": 27858
      },
      {
        "time": "23:17",
        "price": 674.04,
        "volume": 49629
      },
      {
        "time": "00:17",
        "price": 659.95,
        "volume": 25007
      },
      {
        "time": "01:17",
        "price": 677.18,
        "volume": 33949
      },
      {
        "time": "02:17",
        "price": 658.83,
        "volume": 49921
      },
      {
        "time": "03:17",
        "price": 639.15,
        "volume": 48711
      },
      {
        "time": "04:17",
        "price": 656.46,
        "volume": 18435
      },
      {
        "time": "05:17",
        "price": 642.58,
        "volume": 27663
      },
      {
        "time": "06:17",
        "price": 632.55,
        "volume": 28416
      },
      {
        "time": "07:17",
        "price": 620.38,
        "volume": 30692
      },
      {
        "time": "08:17",
        "price": 604.03,
        "volume": 47374
      },
      {
        "time": "09:17",
        "price": 615.08,
        "volume": 20627
      },
      {
        "time": "10:17",
        "price": 620.87,
        "volume": 44132
      },
      {
        "time": "11:17",
        "price": 615.19,
        "volume": 37216
      },
      {
        "time": "12:17",
        "price": 627.17,
        "volume": 15461
      },
      {
        "time": "13:17",
        "price": 633.81,
        "volume": 3710
      },
      {
        "time": "14:17",
        "price": 649.96,
        "volume": 1738
      },
      {
        "time": "15:17",
        "price": 663.21,
        "volume": 36019
      },
      {
        "time": "16:17",
        "price": 649.84,
        "volume": 40872
      },
      {
        "time": "17:17",
        "price": 664.76,
        "volume": 24940
      },
      {
        "time": "18:17",
        "price": 646.59,
        "volume": 1414
      },
      {
        "time": "19:17",
        "price": 632.91,
        "volume": 3264
      }
    ]
  },
  {
    "id": "sams23u",
    "name": "Galaxy S23 Ultra",
    "brand": "Samsung",
    "model": "Galaxy S23 Ultra",
    "ticker": "SAMS23U",
    "price": 1002.97,
    "previousPrice": 905.22,
    "change": 97.75,
    "changePercent": 10.8,
    "marketCap": 17025807.0,
    "volume": 1162073.0,
    "high24h": 1016.53,
    "low24h": 920.12,
    "allTimeHigh": 1136.76,
    "allTimeLow": 659.8,
    "rank": 32,
    "color": "#30D158",
    "accentColor": "#24a143",
    "emoji": "??",
    "specs": {
      "chip": "Snapdragon 8 Gen 2",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB/1TB",
      "camera": "200MP Main + 12MP UW + 10MP 10x Tele + 10MP 3x Tele",
      "battery": "5000mAh",
      "display": "6.8\" AMOLED 120Hz",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 95,
    "aiPrediction": 1122.15,
    "aiConfidence": 74,
    "description": "The Galaxy S23 Ultra is a flagship device from Samsung featuring 6.8\" AMOLED 120Hz and Snapdragon 8 Gen 2.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 973.52,
        "volume": 3099
      },
      {
        "time": "21:17",
        "price": 977.99,
        "volume": 26815
      },
      {
        "time": "22:17",
        "price": 978.72,
        "volume": 21597
      },
      {
        "time": "23:17",
        "price": 952.47,
        "volume": 46730
      },
      {
        "time": "00:17",
        "price": 935.83,
        "volume": 35946
      },
      {
        "time": "01:17",
        "price": 958.38,
        "volume": 8154
      },
      {
        "time": "02:17",
        "price": 981.13,
        "volume": 14345
      },
      {
        "time": "03:17",
        "price": 990.29,
        "volume": 13557
      },
      {
        "time": "04:17",
        "price": 972.46,
        "volume": 48302
      },
      {
        "time": "05:17",
        "price": 970.66,
        "volume": 10807
      },
      {
        "time": "06:17",
        "price": 992.4,
        "volume": 21115
      },
      {
        "time": "07:17",
        "price": 974.27,
        "volume": 6690
      },
      {
        "time": "08:17",
        "price": 997.72,
        "volume": 7735
      },
      {
        "time": "09:17",
        "price": 1016.53,
        "volume": 32618
      },
      {
        "time": "10:17",
        "price": 992.61,
        "volume": 33445
      },
      {
        "time": "11:17",
        "price": 975.63,
        "volume": 19048
      },
      {
        "time": "12:17",
        "price": 979.52,
        "volume": 45361
      },
      {
        "time": "13:17",
        "price": 997.07,
        "volume": 2699
      },
      {
        "time": "14:17",
        "price": 967.61,
        "volume": 32796
      },
      {
        "time": "15:17",
        "price": 945.87,
        "volume": 34707
      },
      {
        "time": "16:17",
        "price": 932.06,
        "volume": 3178
      },
      {
        "time": "17:17",
        "price": 925.4,
        "volume": 5542
      },
      {
        "time": "18:17",
        "price": 920.12,
        "volume": 20143
      },
      {
        "time": "19:17",
        "price": 935.38,
        "volume": 32608
      }
    ]
  },
  {
    "id": "appl16",
    "name": "iPhone 16",
    "brand": "Apple",
    "model": "iPhone 16",
    "ticker": "APPL16",
    "price": 779.7,
    "previousPrice": 709.2,
    "change": 70.49,
    "changePercent": 9.94,
    "marketCap": 15028856.0,
    "volume": 1570123.0,
    "high24h": 803.57,
    "low24h": 747.52,
    "allTimeHigh": 1080.7,
    "allTimeLow": 629.49,
    "rank": 33,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A18",
      "ram": "8GB",
      "storage": "128GB/256GB/512GB",
      "camera": "48MP Main + 12MP UW",
      "battery": "3349mAh",
      "display": "6.1\" OLED 60Hz",
      "os": "iOS 18"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 65,
    "aiPrediction": 820.32,
    "aiConfidence": 93,
    "description": "The iPhone 16 is a flagship device from Apple featuring 6.1\" OLED 60Hz and A18.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 755.54,
        "volume": 14670
      },
      {
        "time": "21:17",
        "price": 769.98,
        "volume": 37142
      },
      {
        "time": "22:17",
        "price": 785.93,
        "volume": 31957
      },
      {
        "time": "23:17",
        "price": 803.57,
        "volume": 22291
      },
      {
        "time": "00:17",
        "price": 785.78,
        "volume": 40990
      },
      {
        "time": "01:17",
        "price": 799.67,
        "volume": 6997
      },
      {
        "time": "02:17",
        "price": 776.85,
        "volume": 9062
      },
      {
        "time": "03:17",
        "price": 783.28,
        "volume": 10094
      },
      {
        "time": "04:17",
        "price": 767.6,
        "volume": 29680
      },
      {
        "time": "05:17",
        "price": 749.22,
        "volume": 24742
      },
      {
        "time": "06:17",
        "price": 756.73,
        "volume": 31249
      },
      {
        "time": "07:17",
        "price": 748.42,
        "volume": 9330
      },
      {
        "time": "08:17",
        "price": 747.8,
        "volume": 29951
      },
      {
        "time": "09:17",
        "price": 766.5,
        "volume": 48888
      },
      {
        "time": "10:17",
        "price": 756.32,
        "volume": 2768
      },
      {
        "time": "11:17",
        "price": 747.52,
        "volume": 8877
      },
      {
        "time": "12:17",
        "price": 766.58,
        "volume": 14904
      },
      {
        "time": "13:17",
        "price": 748.0,
        "volume": 46994
      },
      {
        "time": "14:17",
        "price": 768.76,
        "volume": 19262
      },
      {
        "time": "15:17",
        "price": 767.86,
        "volume": 14138
      },
      {
        "time": "16:17",
        "price": 768.69,
        "volume": 46998
      },
      {
        "time": "17:17",
        "price": 771.42,
        "volume": 11408
      },
      {
        "time": "18:17",
        "price": 786.4,
        "volume": 33300
      },
      {
        "time": "19:17",
        "price": 773.76,
        "volume": 25493
      }
    ]
  },
  {
    "id": "goog8p",
    "name": "Pixel 8 Pro",
    "brand": "Google",
    "model": "Pixel 8 Pro",
    "ticker": "GOOG8P",
    "price": 862.02,
    "previousPrice": 937.2,
    "change": -75.17,
    "changePercent": -8.02,
    "marketCap": 14214379.0,
    "volume": 1236069.0,
    "high24h": 892.9,
    "low24h": 826.66,
    "allTimeHigh": 962.73,
    "allTimeLow": 440.96,
    "rank": 34,
    "color": "#FF9F0A",
    "accentColor": "#cc7f08",
    "emoji": "??",
    "specs": {
      "chip": "Tensor G3",
      "ram": "12GB",
      "storage": "128GB/256GB/512GB/1TB",
      "camera": "50MP Main + 48MP UW + 48MP 5x Tele",
      "battery": "5050mAh",
      "display": "6.7\" OLED 120Hz",
      "os": "Android 14"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 85,
    "aiPrediction": 903.41,
    "aiConfidence": 95,
    "description": "The Pixel 8 Pro is a flagship device from Google featuring 6.7\" OLED 120Hz and Tensor G3.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 877.28,
        "volume": 13907
      },
      {
        "time": "21:17",
        "price": 881.15,
        "volume": 39489
      },
      {
        "time": "22:17",
        "price": 892.9,
        "volume": 13176
      },
      {
        "time": "23:17",
        "price": 870.0,
        "volume": 3702
      },
      {
        "time": "00:17",
        "price": 853.39,
        "volume": 1422
      },
      {
        "time": "01:17",
        "price": 870.26,
        "volume": 13718
      },
      {
        "time": "02:17",
        "price": 855.14,
        "volume": 5525
      },
      {
        "time": "03:17",
        "price": 843.9,
        "volume": 44443
      },
      {
        "time": "04:17",
        "price": 826.66,
        "volume": 28066
      },
      {
        "time": "05:17",
        "price": 835.33,
        "volume": 8252
      },
      {
        "time": "06:17",
        "price": 833.3,
        "volume": 45304
      },
      {
        "time": "07:17",
        "price": 853.25,
        "volume": 38637
      },
      {
        "time": "08:17",
        "price": 836.77,
        "volume": 26864
      },
      {
        "time": "09:17",
        "price": 846.52,
        "volume": 6402
      },
      {
        "time": "10:17",
        "price": 849.21,
        "volume": 4899
      },
      {
        "time": "11:17",
        "price": 851.23,
        "volume": 36407
      },
      {
        "time": "12:17",
        "price": 837.53,
        "volume": 13971
      },
      {
        "time": "13:17",
        "price": 853.81,
        "volume": 19089
      },
      {
        "time": "14:17",
        "price": 876.02,
        "volume": 24898
      },
      {
        "time": "15:17",
        "price": 876.58,
        "volume": 39170
      },
      {
        "time": "16:17",
        "price": 874.52,
        "volume": 38989
      },
      {
        "time": "17:17",
        "price": 854.88,
        "volume": 39832
      },
      {
        "time": "18:17",
        "price": 859.43,
        "volume": 13021
      },
      {
        "time": "19:17",
        "price": 864.28,
        "volume": 2949
      }
    ]
  },
  {
    "id": "appl13",
    "name": "iPhone 13",
    "brand": "Apple",
    "model": "iPhone 13",
    "ticker": "APPL13",
    "price": 531.27,
    "previousPrice": 544.77,
    "change": -13.5,
    "changePercent": -2.48,
    "marketCap": 12565705.0,
    "volume": 1173080.0,
    "high24h": 536.87,
    "low24h": 417.49,
    "allTimeHigh": 749.47,
    "allTimeLow": 444.41,
    "rank": 35,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A15 Bionic",
      "ram": "4GB",
      "storage": "128GB/256GB/512GB",
      "camera": "12MP Main + 12MP UW",
      "battery": "3240mAh",
      "display": "6.1\" OLED 60Hz",
      "os": "iOS 15"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 96,
    "aiPrediction": 635.25,
    "aiConfidence": 88,
    "description": "The iPhone 13 is a flagship device from Apple featuring 6.1\" OLED 60Hz and A15 Bionic.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 522.6,
        "volume": 16568
      },
      {
        "time": "21:17",
        "price": 536.87,
        "volume": 6246
      },
      {
        "time": "22:17",
        "price": 530.52,
        "volume": 11499
      },
      {
        "time": "23:17",
        "price": 518.61,
        "volume": 49070
      },
      {
        "time": "00:17",
        "price": 513.92,
        "volume": 49019
      },
      {
        "time": "01:17",
        "price": 509.28,
        "volume": 11510
      },
      {
        "time": "02:17",
        "price": 501.13,
        "volume": 10551
      },
      {
        "time": "03:17",
        "price": 498.67,
        "volume": 43703
      },
      {
        "time": "04:17",
        "price": 489.12,
        "volume": 43706
      },
      {
        "time": "05:17",
        "price": 485.88,
        "volume": 44380
      },
      {
        "time": "06:17",
        "price": 499.61,
        "volume": 10725
      },
      {
        "time": "07:17",
        "price": 494.5,
        "volume": 30573
      },
      {
        "time": "08:17",
        "price": 481.47,
        "volume": 49827
      },
      {
        "time": "09:17",
        "price": 483.98,
        "volume": 46921
      },
      {
        "time": "10:17",
        "price": 475.25,
        "volume": 19625
      },
      {
        "time": "11:17",
        "price": 476.08,
        "volume": 21705
      },
      {
        "time": "12:17",
        "price": 473.39,
        "volume": 32958
      },
      {
        "time": "13:17",
        "price": 472.76,
        "volume": 41514
      },
      {
        "time": "14:17",
        "price": 459.1,
        "volume": 16115
      },
      {
        "time": "15:17",
        "price": 448.85,
        "volume": 35080
      },
      {
        "time": "16:17",
        "price": 440.02,
        "volume": 8039
      },
      {
        "time": "17:17",
        "price": 430.14,
        "volume": 21699
      },
      {
        "time": "18:17",
        "price": 417.49,
        "volume": 40464
      },
      {
        "time": "19:17",
        "price": 429.88,
        "volume": 16120
      }
    ]
  },
  {
    "id": "appl16p",
    "name": "iPhone 16 Pro",
    "brand": "Apple",
    "model": "iPhone 16 Pro",
    "ticker": "APPL16P",
    "price": 1038.41,
    "previousPrice": 1101.18,
    "change": -62.77,
    "changePercent": -5.7,
    "marketCap": 12282723.0,
    "volume": 966768.0,
    "high24h": 1100.69,
    "low24h": 946.89,
    "allTimeHigh": 1171.43,
    "allTimeLow": 600.16,
    "rank": 36,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A18 Pro",
      "ram": "8GB",
      "storage": "128GB/256GB/512GB/1TB",
      "camera": "48MP Main + 48MP UW + 12MP 5x Tele",
      "battery": "3355mAh",
      "display": "6.3\" OLED 120Hz",
      "os": "iOS 18"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 79,
    "aiPrediction": 1140.41,
    "aiConfidence": 81,
    "description": "The iPhone 16 Pro is a flagship device from Apple featuring 6.3\" OLED 120Hz and A18 Pro.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1074.59,
        "volume": 40594
      },
      {
        "time": "21:17",
        "price": 1097.94,
        "volume": 23848
      },
      {
        "time": "22:17",
        "price": 1070.63,
        "volume": 27572
      },
      {
        "time": "23:17",
        "price": 1072.22,
        "volume": 43642
      },
      {
        "time": "00:17",
        "price": 1100.69,
        "volume": 12721
      },
      {
        "time": "01:17",
        "price": 1071.23,
        "volume": 31309
      },
      {
        "time": "02:17",
        "price": 1073.73,
        "volume": 28665
      },
      {
        "time": "03:17",
        "price": 1041.62,
        "volume": 2911
      },
      {
        "time": "04:17",
        "price": 1045.49,
        "volume": 2123
      },
      {
        "time": "05:17",
        "price": 1051.59,
        "volume": 44008
      },
      {
        "time": "06:17",
        "price": 1055.36,
        "volume": 15505
      },
      {
        "time": "07:17",
        "price": 1026.37,
        "volume": 10207
      },
      {
        "time": "08:17",
        "price": 1049.81,
        "volume": 18541
      },
      {
        "time": "09:17",
        "price": 1054.39,
        "volume": 7342
      },
      {
        "time": "10:17",
        "price": 1053.43,
        "volume": 48176
      },
      {
        "time": "11:17",
        "price": 1033.43,
        "volume": 17929
      },
      {
        "time": "12:17",
        "price": 1013.21,
        "volume": 46530
      },
      {
        "time": "13:17",
        "price": 1011.27,
        "volume": 49145
      },
      {
        "time": "14:17",
        "price": 1008.43,
        "volume": 16750
      },
      {
        "time": "15:17",
        "price": 1020.54,
        "volume": 8869
      },
      {
        "time": "16:17",
        "price": 1005.47,
        "volume": 16835
      },
      {
        "time": "17:17",
        "price": 975.67,
        "volume": 37254
      },
      {
        "time": "18:17",
        "price": 946.89,
        "volume": 28645
      },
      {
        "time": "19:17",
        "price": 959.26,
        "volume": 28425
      }
    ]
  },
  {
    "id": "sama34",
    "name": "Galaxy A34 5G",
    "brand": "Samsung",
    "model": "Galaxy A34 5G",
    "ticker": "SAMA34",
    "price": 371.65,
    "previousPrice": 343.6,
    "change": 28.05,
    "changePercent": 8.16,
    "marketCap": 9166992.0,
    "volume": 600945.0,
    "high24h": 385.5,
    "low24h": 359.5,
    "allTimeHigh": 438.14,
    "allTimeLow": 241.69,
    "rank": 37,
    "color": "#30D158",
    "accentColor": "#24a143",
    "emoji": "??",
    "specs": {
      "chip": "Dimensity 1080",
      "ram": "6GB/8GB",
      "storage": "128GB/256GB",
      "camera": "48MP Main + 8MP UW + 5MP Macro",
      "battery": "5000mAh",
      "display": "6.6\" AMOLED 120Hz",
      "os": "Android 13"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 88,
    "aiPrediction": 427.87,
    "aiConfidence": 90,
    "description": "The Galaxy A34 5G is a flagship device from Samsung featuring 6.6\" AMOLED 120Hz and Dimensity 1080.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 364.34,
        "volume": 2582
      },
      {
        "time": "21:17",
        "price": 375.21,
        "volume": 2026
      },
      {
        "time": "22:17",
        "price": 367.78,
        "volume": 21010
      },
      {
        "time": "23:17",
        "price": 365.25,
        "volume": 39067
      },
      {
        "time": "00:17",
        "price": 365.28,
        "volume": 45612
      },
      {
        "time": "01:17",
        "price": 360.64,
        "volume": 34066
      },
      {
        "time": "02:17",
        "price": 365.08,
        "volume": 7094
      },
      {
        "time": "03:17",
        "price": 374.31,
        "volume": 18757
      },
      {
        "time": "04:17",
        "price": 385.5,
        "volume": 23616
      },
      {
        "time": "05:17",
        "price": 384.46,
        "volume": 16355
      },
      {
        "time": "06:17",
        "price": 380.98,
        "volume": 19201
      },
      {
        "time": "07:17",
        "price": 370.77,
        "volume": 41428
      },
      {
        "time": "08:17",
        "price": 361.44,
        "volume": 33629
      },
      {
        "time": "09:17",
        "price": 359.59,
        "volume": 4042
      },
      {
        "time": "10:17",
        "price": 369.52,
        "volume": 47650
      },
      {
        "time": "11:17",
        "price": 367.77,
        "volume": 30808
      },
      {
        "time": "12:17",
        "price": 359.5,
        "volume": 47206
      },
      {
        "time": "13:17",
        "price": 366.55,
        "volume": 35750
      },
      {
        "time": "14:17",
        "price": 371.75,
        "volume": 9743
      },
      {
        "time": "15:17",
        "price": 364.89,
        "volume": 16899
      },
      {
        "time": "16:17",
        "price": 374.19,
        "volume": 15374
      },
      {
        "time": "17:17",
        "price": 378.49,
        "volume": 15557
      },
      {
        "time": "18:17",
        "price": 376.66,
        "volume": 45603
      },
      {
        "time": "19:17",
        "price": 379.95,
        "volume": 22789
      }
    ]
  },
  {
    "id": "appl15p",
    "name": "iPhone 15 Pro",
    "brand": "Apple",
    "model": "iPhone 15 Pro",
    "ticker": "APPL15P",
    "price": 1058.53,
    "previousPrice": 1046.42,
    "change": 12.11,
    "changePercent": 1.16,
    "marketCap": 7887853.0,
    "volume": 293690.0,
    "high24h": 1132.1,
    "low24h": 1016.81,
    "allTimeHigh": 1551.84,
    "allTimeLow": 838.4,
    "rank": 38,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A17 Pro",
      "ram": "8GB",
      "storage": "128GB/256GB/512GB/1TB",
      "camera": "48MP Main + 12MP UW + 12MP 3x Tele",
      "battery": "3274mAh",
      "display": "6.1\" OLED 120Hz",
      "os": "iOS 17"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 77,
    "aiPrediction": 1195.27,
    "aiConfidence": 89,
    "description": "The iPhone 15 Pro is a flagship device from Apple featuring 6.1\" OLED 120Hz and A17 Pro.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1085.54,
        "volume": 23597
      },
      {
        "time": "21:17",
        "price": 1088.35,
        "volume": 40788
      },
      {
        "time": "22:17",
        "price": 1066.21,
        "volume": 5814
      },
      {
        "time": "23:17",
        "price": 1059.69,
        "volume": 8858
      },
      {
        "time": "00:17",
        "price": 1040.12,
        "volume": 8674
      },
      {
        "time": "01:17",
        "price": 1023.17,
        "volume": 4906
      },
      {
        "time": "02:17",
        "price": 1038.17,
        "volume": 12347
      },
      {
        "time": "03:17",
        "price": 1016.81,
        "volume": 14938
      },
      {
        "time": "04:17",
        "price": 1032.86,
        "volume": 14060
      },
      {
        "time": "05:17",
        "price": 1032.94,
        "volume": 29916
      },
      {
        "time": "06:17",
        "price": 1063.79,
        "volume": 29089
      },
      {
        "time": "07:17",
        "price": 1032.95,
        "volume": 32437
      },
      {
        "time": "08:17",
        "price": 1028.02,
        "volume": 28225
      },
      {
        "time": "09:17",
        "price": 1049.88,
        "volume": 35126
      },
      {
        "time": "10:17",
        "price": 1019.23,
        "volume": 8860
      },
      {
        "time": "11:17",
        "price": 1020.18,
        "volume": 41464
      },
      {
        "time": "12:17",
        "price": 1044.69,
        "volume": 37406
      },
      {
        "time": "13:17",
        "price": 1058.04,
        "volume": 39340
      },
      {
        "time": "14:17",
        "price": 1083.65,
        "volume": 36913
      },
      {
        "time": "15:17",
        "price": 1077.69,
        "volume": 8773
      },
      {
        "time": "16:17",
        "price": 1100.69,
        "volume": 48393
      },
      {
        "time": "17:17",
        "price": 1105.95,
        "volume": 26698
      },
      {
        "time": "18:17",
        "price": 1132.1,
        "volume": 11540
      },
      {
        "time": "19:17",
        "price": 1129.51,
        "volume": 15618
      }
    ]
  },
  {
    "id": "appl16pm",
    "name": "iPhone 16 Pro Max",
    "brand": "Apple",
    "model": "iPhone 16 Pro Max",
    "ticker": "APPL16PM",
    "price": 1287.69,
    "previousPrice": 1185.03,
    "change": 102.66,
    "changePercent": 8.66,
    "marketCap": 7410165.0,
    "volume": 273095.0,
    "high24h": 1337.18,
    "low24h": 1193.89,
    "allTimeHigh": 1420.44,
    "allTimeLow": 817.32,
    "rank": 39,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A18 Pro",
      "ram": "8GB",
      "storage": "256GB/512GB/1TB",
      "camera": "48MP Main + 48MP UW + 12MP 5x Tele",
      "battery": "4676mAh",
      "display": "6.9\" OLED 120Hz",
      "os": "iOS 18"
    },
    "trend": "up",
    "sentiment": "bullish",
    "aiScore": 63,
    "aiPrediction": 1342.3,
    "aiConfidence": 91,
    "description": "The iPhone 16 Pro Max is a flagship device from Apple featuring 6.9\" OLED 120Hz and A18 Pro.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 1257.38,
        "volume": 17521
      },
      {
        "time": "21:17",
        "price": 1262.9,
        "volume": 23077
      },
      {
        "time": "22:17",
        "price": 1233.17,
        "volume": 11620
      },
      {
        "time": "23:17",
        "price": 1205.47,
        "volume": 30922
      },
      {
        "time": "00:17",
        "price": 1193.89,
        "volume": 19748
      },
      {
        "time": "01:17",
        "price": 1210.47,
        "volume": 27452
      },
      {
        "time": "02:17",
        "price": 1220.36,
        "volume": 4033
      },
      {
        "time": "03:17",
        "price": 1194.01,
        "volume": 24265
      },
      {
        "time": "04:17",
        "price": 1220.96,
        "volume": 27844
      },
      {
        "time": "05:17",
        "price": 1210.42,
        "volume": 45837
      },
      {
        "time": "06:17",
        "price": 1208.55,
        "volume": 23549
      },
      {
        "time": "07:17",
        "price": 1206.39,
        "volume": 8353
      },
      {
        "time": "08:17",
        "price": 1210.74,
        "volume": 10216
      },
      {
        "time": "09:17",
        "price": 1215.24,
        "volume": 22130
      },
      {
        "time": "10:17",
        "price": 1242.88,
        "volume": 5925
      },
      {
        "time": "11:17",
        "price": 1277.24,
        "volume": 40225
      },
      {
        "time": "12:17",
        "price": 1290.02,
        "volume": 27980
      },
      {
        "time": "13:17",
        "price": 1314.5,
        "volume": 18991
      },
      {
        "time": "14:17",
        "price": 1313.16,
        "volume": 48319
      },
      {
        "time": "15:17",
        "price": 1323.55,
        "volume": 10262
      },
      {
        "time": "16:17",
        "price": 1337.18,
        "volume": 8560
      },
      {
        "time": "17:17",
        "price": 1303.51,
        "volume": 35900
      },
      {
        "time": "18:17",
        "price": 1308.74,
        "volume": 38959
      },
      {
        "time": "19:17",
        "price": 1294.8,
        "volume": 26742
      }
    ]
  },
  {
    "id": "appl15pl",
    "name": "iPhone 15 Plus",
    "brand": "Apple",
    "model": "iPhone 15 Plus",
    "ticker": "APPL15PL",
    "price": 975.66,
    "previousPrice": 1008.4,
    "change": -32.74,
    "changePercent": -3.25,
    "marketCap": 6299952.0,
    "volume": 1252490.0,
    "high24h": 1021.14,
    "low24h": 953.76,
    "allTimeHigh": 1215.7,
    "allTimeLow": 741.0,
    "rank": 40,
    "color": "#0A84FF",
    "accentColor": "#005bb5",
    "emoji": "??",
    "specs": {
      "chip": "A16 Bionic",
      "ram": "6GB",
      "storage": "128GB/256GB/512GB",
      "camera": "48MP Main + 12MP UW",
      "battery": "4383mAh",
      "display": "6.7\" OLED 60Hz",
      "os": "iOS 17"
    },
    "trend": "down",
    "sentiment": "bearish",
    "aiScore": 62,
    "aiPrediction": 1015.3,
    "aiConfidence": 80,
    "description": "The iPhone 15 Plus is a flagship device from Apple featuring 6.7\" OLED 60Hz and A16 Bionic.",
    "releaseDate": "2023-09-15",
    "priceHistory": [
      {
        "time": "20:17",
        "price": 985.97,
        "volume": 17564
      },
      {
        "time": "21:17",
        "price": 1007.51,
        "volume": 25747
      },
      {
        "time": "22:17",
        "price": 1009.59,
        "volume": 17498
      },
      {
        "time": "23:17",
        "price": 990.98,
        "volume": 42265
      },
      {
        "time": "00:17",
        "price": 989.46,
        "volume": 12445
      },
      {
        "time": "01:17",
        "price": 997.39,
        "volume": 39193
      },
      {
        "time": "02:17",
        "price": 1009.77,
        "volume": 39186
      },
      {
        "time": "03:17",
        "price": 1021.14,
        "volume": 34533
      },
      {
        "time": "04:17",
        "price": 1010.39,
        "volume": 44949
      },
      {
        "time": "05:17",
        "price": 982.99,
        "volume": 27191
      },
      {
        "time": "06:17",
        "price": 971.09,
        "volume": 17845
      },
      {
        "time": "07:17",
        "price": 988.44,
        "volume": 40284
      },
      {
        "time": "08:17",
        "price": 968.27,
        "volume": 44115
      },
      {
        "time": "09:17",
        "price": 970.95,
        "volume": 3749
      },
      {
        "time": "10:17",
        "price": 981.01,
        "volume": 43597
      },
      {
        "time": "11:17",
        "price": 962.9,
        "volume": 13398
      },
      {
        "time": "12:17",
        "price": 963.32,
        "volume": 35039
      },
      {
        "time": "13:17",
        "price": 981.17,
        "volume": 18223
      },
      {
        "time": "14:17",
        "price": 979.9,
        "volume": 34325
      },
      {
        "time": "15:17",
        "price": 977.95,
        "volume": 6667
      },
      {
        "time": "16:17",
        "price": 956.4,
        "volume": 3829
      },
      {
        "time": "17:17",
        "price": 953.76,
        "volume": 13612
      },
      {
        "time": "18:17",
        "price": 971.77,
        "volume": 34323
      },
      {
        "time": "19:17",
        "price": 961.66,
        "volume": 43484
      }
    ]
  }
];

export const NEWS_FEED: NewsItem[] = [
  {
    "id": "n1",
    "headline": "Apple announces unexpected iPhone 16 features",
    "source": "TechDaily",
    "time": "2 hours ago",
    "sentiment": "positive",
    "ticker": "APPL16PM",
    "category": "Launch",
    "impact": "high"
  },
  {
    "id": "n2",
    "headline": "Samsung Galaxy S24 Ultra benchmark leaks show massive GPU gains",
    "source": "MobileRumors",
    "time": "4 hours ago",
    "sentiment": "positive",
    "ticker": "SAMS24U",
    "category": "Hardware",
    "impact": "medium"
  },
  {
    "id": "n3",
    "headline": "Google Pixel 8 Pro camera rated #1 by DXOMARK",
    "source": "PhotoTech",
    "time": "6 hours ago",
    "sentiment": "positive",
    "ticker": "GOOG8P",
    "category": "Review",
    "impact": "high"
  },
  {
    "id": "n4",
    "headline": "Smartphone sales decline in Q3 across all major markets",
    "source": "MarketWatch",
    "time": "12 hours ago",
    "sentiment": "negative",
    "ticker": "",
    "category": "Market",
    "impact": "high"
  }
];

export const AI_PREDICTIONS: AIPrediction[] = [
  {
    "id": "ai0",
    "ticker": "APPL16PL",
    "name": "iPhone 16 Plus",
    "currentPrice": 819.37,
    "predictedPrice": 825.16,
    "timeframe": "30 days",
    "confidence": 79,
    "signal": "BUY",
    "factors": [
      "Market trend analysis",
      "Historical seasonal performance"
    ],
    "riskLevel": "Medium",
    "color": "#0A84FF"
  },
  {
    "id": "ai1",
    "ticker": "ASUSZ10",
    "name": "Zenfone 10",
    "currentPrice": 743.97,
    "predictedPrice": 722.63,
    "timeframe": "30 days",
    "confidence": 71,
    "signal": "SELL",
    "factors": [
      "Market trend analysis",
      "Historical seasonal performance"
    ],
    "riskLevel": "Medium",
    "color": "#FF375F"
  },
  {
    "id": "ai2",
    "ticker": "POCOX6P",
    "name": "Poco X6 Pro",
    "currentPrice": 358.05,
    "predictedPrice": 401.82,
    "timeframe": "30 days",
    "confidence": 94,
    "signal": "BUY",
    "factors": [
      "Market trend analysis",
      "Historical seasonal performance"
    ],
    "riskLevel": "Low",
    "color": "#FF9F0A"
  },
  {
    "id": "ai3",
    "ticker": "APPL14PM",
    "name": "iPhone 14 Pro Max",
    "currentPrice": 926.94,
    "predictedPrice": 984.66,
    "timeframe": "30 days",
    "confidence": 79,
    "signal": "BUY",
    "factors": [
      "Market trend analysis",
      "Historical seasonal performance"
    ],
    "riskLevel": "Medium",
    "color": "#0A84FF"
  },
  {
    "id": "ai4",
    "ticker": "SAMZFL5",
    "name": "Galaxy Z Flip 5",
    "currentPrice": 1017.11,
    "predictedPrice": 929.17,
    "timeframe": "30 days",
    "confidence": 91,
    "signal": "SELL",
    "factors": [
      "Market trend analysis",
      "Historical seasonal performance"
    ],
    "riskLevel": "Low",
    "color": "#30D158"
  },
  {
    "id": "ai5",
    "ticker": "APPL15",
    "name": "iPhone 15",
    "currentPrice": 722.77,
    "predictedPrice": 711.99,
    "timeframe": "30 days",
    "confidence": 71,
    "signal": "SELL",
    "factors": [
      "Market trend analysis",
      "Historical seasonal performance"
    ],
    "riskLevel": "Medium",
    "color": "#0A84FF"
  },
  {
    "id": "ai6",
    "ticker": "ROG8P",
    "name": "ROG Phone 8 Pro",
    "currentPrice": 1138.62,
    "predictedPrice": 1339.17,
    "timeframe": "30 days",
    "confidence": 83,
    "signal": "BUY",
    "factors": [
      "Market trend analysis",
      "Historical seasonal performance"
    ],
    "riskLevel": "Medium",
    "color": "#FF375F"
  },
  {
    "id": "ai7",
    "ticker": "SAMZF5",
    "name": "Galaxy Z Fold 5",
    "currentPrice": 1714.52,
    "predictedPrice": 1612.78,
    "timeframe": "30 days",
    "confidence": 80,
    "signal": "SELL",
    "factors": [
      "Market trend analysis",
      "Historical seasonal performance"
    ],
    "riskLevel": "Medium",
    "color": "#30D158"
  }
];


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