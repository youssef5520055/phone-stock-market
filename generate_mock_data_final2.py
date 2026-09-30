import json
import random
from datetime import datetime, timedelta
import re

BRANDS = {
    'Apple': {
        'color': '#0A84FF',
        'accentColor': '#005bb5',
        'models': [
            ('iPhone 16 Pro Max', 'APPL16PM', 1299, 'A18 Pro', '8GB', '256GB/512GB/1TB', '48MP Main + 48MP UW + 12MP 5x Tele', '4676mAh', '6.9" OLED 120Hz', 'iOS 18'),
            ('iPhone 16 Pro', 'APPL16P', 1099, 'A18 Pro', '8GB', '128GB/256GB/512GB/1TB', '48MP Main + 48MP UW + 12MP 5x Tele', '3355mAh', '6.3" OLED 120Hz', 'iOS 18'),
            ('iPhone 16 Plus', 'APPL16PL', 899, 'A18', '8GB', '128GB/256GB/512GB', '48MP Main + 12MP UW', '4383mAh', '6.7" OLED 60Hz', 'iOS 18'),
            ('iPhone 16', 'APPL16', 799, 'A18', '8GB', '128GB/256GB/512GB', '48MP Main + 12MP UW', '3349mAh', '6.1" OLED 60Hz', 'iOS 18'),
            ('iPhone 15 Pro Max', 'APPL15PM', 1199, 'A17 Pro', '8GB', '256GB/512GB/1TB', '48MP Main + 12MP UW + 12MP 5x Tele', '4422mAh', '6.7" OLED 120Hz', 'iOS 17'),
            ('iPhone 15 Pro', 'APPL15P', 999, 'A17 Pro', '8GB', '128GB/256GB/512GB/1TB', '48MP Main + 12MP UW + 12MP 3x Tele', '3274mAh', '6.1" OLED 120Hz', 'iOS 17'),
            ('iPhone 15 Plus', 'APPL15PL', 899, 'A16 Bionic', '6GB', '128GB/256GB/512GB', '48MP Main + 12MP UW', '4383mAh', '6.7" OLED 60Hz', 'iOS 17'),
            ('iPhone 15', 'APPL15', 799, 'A16 Bionic', '6GB', '128GB/256GB/512GB', '48MP Main + 12MP UW', '3349mAh', '6.1" OLED 60Hz', 'iOS 17'),
            ('iPhone 14 Pro Max', 'APPL14PM', 950, 'A16 Bionic', '6GB', '128GB/256GB/512GB/1TB', '48MP Main + 12MP UW + 12MP 3x Tele', '4323mAh', '6.7" OLED 120Hz', 'iOS 16'),
            ('iPhone 14 Pro', 'APPL14P', 850, 'A16 Bionic', '6GB', '128GB/256GB/512GB/1TB', '48MP Main + 12MP UW + 12MP 3x Tele', '3200mAh', '6.1" OLED 120Hz', 'iOS 16'),
            ('iPhone 14', 'APPL14', 650, 'A15 Bionic', '6GB', '128GB/256GB/512GB', '12MP Main + 12MP UW', '3279mAh', '6.1" OLED 60Hz', 'iOS 16'),
            ('iPhone 13', 'APPL13', 550, 'A15 Bionic', '4GB', '128GB/256GB/512GB', '12MP Main + 12MP UW', '3240mAh', '6.1" OLED 60Hz', 'iOS 15'),
            ('iPhone SE (2022)', 'APPLSE3', 429, 'A15 Bionic', '4GB', '64GB/128GB/256GB', '12MP Main', '2018mAh', '4.7" LCD 60Hz', 'iOS 15'),
        ]
    },
    'Samsung': {
        'color': '#30D158',
        'accentColor': '#24a143',
        'models': [
            ('Galaxy S24 Ultra', 'SAMS24U', 1299, 'Snapdragon 8 Gen 3', '12GB', '256GB/512GB/1TB', '200MP Main + 12MP UW + 50MP 5x Tele + 10MP 3x Tele', '5000mAh', '6.8" AMOLED 120Hz', 'Android 14'),
            ('Galaxy S24+', 'SAMS24P', 999, 'Snapdragon 8 Gen 3 / Exynos 2400', '12GB', '256GB/512GB', '50MP Main + 12MP UW + 10MP 3x Tele', '4900mAh', '6.7" AMOLED 120Hz', 'Android 14'),
            ('Galaxy S24', 'SAMS24', 799, 'Snapdragon 8 Gen 3 / Exynos 2400', '8GB', '128GB/256GB', '50MP Main + 12MP UW + 10MP 3x Tele', '4000mAh', '6.2" AMOLED 120Hz', 'Android 14'),
            ('Galaxy S23 Ultra', 'SAMS23U', 999, 'Snapdragon 8 Gen 2', '8GB/12GB', '256GB/512GB/1TB', '200MP Main + 12MP UW + 10MP 10x Tele + 10MP 3x Tele', '5000mAh', '6.8" AMOLED 120Hz', 'Android 13'),
            ('Galaxy Z Fold 5', 'SAMZF5', 1799, 'Snapdragon 8 Gen 2', '12GB', '256GB/512GB/1TB', '50MP Main + 12MP UW + 10MP 3x Tele', '4400mAh', '7.6" AMOLED 120Hz Foldable', 'Android 13'),
            ('Galaxy Z Flip 5', 'SAMZFL5', 999, 'Snapdragon 8 Gen 2', '8GB', '256GB/512GB', '12MP Main + 12MP UW', '3700mAh', '6.7" AMOLED 120Hz Foldable', 'Android 13'),
            ('Galaxy A54 5G', 'SAMA54', 449, 'Exynos 1380', '6GB/8GB', '128GB/256GB', '50MP Main + 12MP UW + 5MP Macro', '5000mAh', '6.4" AMOLED 120Hz', 'Android 13'),
            ('Galaxy A34 5G', 'SAMA34', 349, 'Dimensity 1080', '6GB/8GB', '128GB/256GB', '48MP Main + 8MP UW + 5MP Macro', '5000mAh', '6.6" AMOLED 120Hz', 'Android 13'),
        ]
    },
    'Google': {
        'color': '#FF9F0A',
        'accentColor': '#cc7f08',
        'models': [
            ('Pixel 8 Pro', 'GOOG8P', 999, 'Tensor G3', '12GB', '128GB/256GB/512GB/1TB', '50MP Main + 48MP UW + 48MP 5x Tele', '5050mAh', '6.7" OLED 120Hz', 'Android 14'),
            ('Pixel 8', 'GOOG8', 699, 'Tensor G3', '8GB', '128GB/256GB', '50MP Main + 12MP UW', '4575mAh', '6.2" OLED 120Hz', 'Android 14'),
            ('Pixel 7a', 'GOOG7A', 499, 'Tensor G2', '8GB', '128GB', '64MP Main + 13MP UW', '4385mAh', '6.1" OLED 90Hz', 'Android 13'),
            ('Pixel Fold', 'GOOGFLD', 1799, 'Tensor G2', '12GB', '256GB/512GB', '48MP Main + 10.8MP UW + 10.8MP 5x Tele', '4821mAh', '7.6" OLED 120Hz Foldable', 'Android 13'),
            ('Pixel 7 Pro', 'GOOG7P', 750, 'Tensor G2', '12GB', '128GB/256GB/512GB', '50MP Main + 12MP UW + 48MP 5x Tele', '5000mAh', '6.7" OLED 120Hz', 'Android 13'),
            ('Pixel 7', 'GOOG7', 550, 'Tensor G2', '8GB', '128GB/256GB', '50MP Main + 12MP UW', '4355mAh', '6.3" OLED 90Hz', 'Android 13'),
        ]
    },
    'OnePlus': {
        'color': '#FF453A',
        'accentColor': '#cc372e',
        'models': [
            ('OnePlus 12', 'ONEP12', 799, 'Snapdragon 8 Gen 3', '12GB/16GB', '256GB/512GB', '50MP Main + 48MP UW + 64MP 3x Tele', '5400mAh', '6.82" AMOLED 120Hz', 'Android 14'),
            ('OnePlus 12R', 'ONEP12R', 499, 'Snapdragon 8 Gen 2', '8GB/16GB', '128GB/256GB', '50MP Main + 8MP UW + 2MP Macro', '5500mAh', '6.78" AMOLED 120Hz', 'Android 14'),
            ('OnePlus Open', 'ONEPOP', 1699, 'Snapdragon 8 Gen 2', '16GB', '512GB', '48MP Main + 48MP UW + 64MP 3x Tele', '4805mAh', '7.82" AMOLED 120Hz Foldable', 'Android 13'),
            ('OnePlus 11', 'ONEP11', 699, 'Snapdragon 8 Gen 2', '8GB/16GB', '128GB/256GB', '50MP Main + 48MP UW + 32MP 2x Tele', '5000mAh', '6.7" AMOLED 120Hz', 'Android 13'),
        ]
    },
    'Xiaomi': {
        'color': '#FF9F0A',
        'accentColor': '#cc7f08',
        'models': [
            ('Xiaomi 14 Ultra', 'XIAO14U', 1499, 'Snapdragon 8 Gen 3', '12GB/16GB', '256GB/512GB/1TB', '50MP Main + 50MP UW + 50MP 3.2x Tele + 50MP 5x Tele', '5300mAh', '6.73" AMOLED 120Hz', 'Android 14'),
            ('Xiaomi 14 Pro', 'XIAO14P', 999, 'Snapdragon 8 Gen 3', '12GB/16GB', '256GB/512GB/1TB', '50MP Main + 50MP UW + 50MP 3.2x Tele', '4880mAh', '6.73" AMOLED 120Hz', 'Android 14'),
            ('Xiaomi 14', 'XIAO14', 799, 'Snapdragon 8 Gen 3', '8GB/12GB', '256GB/512GB', '50MP Main + 50MP UW + 50MP 3.2x Tele', '4610mAh', '6.36" AMOLED 120Hz', 'Android 14'),
            ('Redmi Note 13 Pro+', 'RED13PP', 399, 'Dimensity 7200 Ultra', '8GB/12GB/16GB', '256GB/512GB', '200MP Main + 8MP UW + 2MP Macro', '5000mAh', '6.67" AMOLED 120Hz', 'Android 13'),
            ('Poco X6 Pro', 'POCOX6P', 349, 'Dimensity 8300 Ultra', '8GB/12GB', '256GB/512GB', '64MP Main + 8MP UW + 2MP Macro', '5000mAh', '6.67" AMOLED 120Hz', 'Android 14'),
        ]
    },
    'Sony': {
        'color': '#BF5AF2',
        'accentColor': '#9948c2',
        'models': [
            ('Xperia 1 V', 'SONY1V', 1399, 'Snapdragon 8 Gen 2', '12GB', '256GB/512GB', '48MP Main + 12MP UW + 12MP 3.5x-5.2x Tele', '5000mAh', '6.5" OLED 4K 120Hz', 'Android 13'),
            ('Xperia 5 V', 'SONY5V', 999, 'Snapdragon 8 Gen 2', '8GB', '128GB/256GB', '48MP Main + 12MP UW', '5000mAh', '6.1" OLED 120Hz', 'Android 13'),
        ]
    },
    'Asus': {
        'color': '#FF375F',
        'accentColor': '#cc2c4c',
        'models': [
            ('ROG Phone 8 Pro', 'ROG8P', 1199, 'Snapdragon 8 Gen 3', '16GB/24GB', '512GB/1TB', '50MP Main + 13MP UW + 32MP 3x Tele', '5500mAh', '6.78" AMOLED 165Hz', 'Android 14'),
            ('Zenfone 10', 'ASUSZ10', 699, 'Snapdragon 8 Gen 2', '8GB/16GB', '128GB/256GB/512GB', '50MP Main + 13MP UW', '4300mAh', '5.92" AMOLED 144Hz', 'Android 13'),
        ]
    }
}

stocks = []
rank = 1

def generate_history(base_price):
    history = []
    current_time = datetime.now() - timedelta(hours=24)
    price = base_price * random.uniform(0.95, 1.05)
    for i in range(24):
        time_str = current_time.strftime("%H:%M")
        change = price * random.uniform(-0.03, 0.03)
        price += change
        history.append({
            'time': time_str,
            'price': round(price, 2),
            'volume': int(random.uniform(1000, 50000))
        })
        current_time += timedelta(hours=1)
    return history

for brand_name, data in BRANDS.items():
    for m in data['models']:
        name, ticker, base_price, chip, ram, storage, camera, battery, display, os = m
        
        current_price = base_price * random.uniform(0.85, 1.15)
        prev_price = current_price * random.uniform(0.9, 1.1)
        change = current_price - prev_price
        change_pct = (change / prev_price) * 100
        
        market_cap = random.uniform(5000000, 50000000)
        volume = random.uniform(100000, 2000000)
        
        ai_score = random.randint(60, 99)
        ai_pred = current_price * random.uniform(0.9, 1.2)
        
        history = generate_history(current_price)
        
        stocks.append({
            'id': ticker.lower(),
            'name': name,
            'brand': brand_name,
            'model': name,
            'ticker': ticker,
            'price': round(current_price, 2),
            'previousPrice': round(prev_price, 2),
            'change': round(change, 2),
            'changePercent': round(change_pct, 2),
            'marketCap': round(market_cap, 0),
            'volume': round(volume, 0),
            'high24h': round(max(h['price'] for h in history), 2),
            'low24h': round(min(h['price'] for h in history), 2),
            'allTimeHigh': round(current_price * random.uniform(1.1, 1.5), 2),
            'allTimeLow': round(current_price * random.uniform(0.5, 0.9), 2),
            'rank': rank,
            'color': data['color'],
            'accentColor': data['accentColor'],
            'emoji': '??',
            'specs': {
                'chip': chip,
                'ram': ram,
                'storage': storage,
                'camera': camera,
                'battery': battery,
                'display': display,
                'os': os
            },
            'trend': 'up' if change > 0 else 'down',
            'sentiment': 'bullish' if change > 0 else 'bearish',
            'aiScore': ai_score,
            'aiPrediction': round(ai_pred, 2),
            'aiConfidence': random.randint(70, 95),
            'description': f"The {name} is a flagship device from {brand_name} featuring {display} and {chip}.",
            'releaseDate': "2023-09-15",
            'priceHistory': history
        })
        rank += 1

stocks.sort(key=lambda x: x['marketCap'], reverse=True)
for i, s in enumerate(stocks):
    s['rank'] = i + 1

# Generate News
NEWS = [
    {
        'id': 'n1',
        'headline': 'Apple announces unexpected iPhone 16 features',
        'source': 'TechDaily',
        'time': '2 hours ago',
        'sentiment': 'positive',
        'ticker': 'APPL16PM',
        'category': 'Launch',
        'impact': 'high'
    },
    {
        'id': 'n2',
        'headline': 'Samsung Galaxy S24 Ultra benchmark leaks show massive GPU gains',
        'source': 'MobileRumors',
        'time': '4 hours ago',
        'sentiment': 'positive',
        'ticker': 'SAMS24U',
        'category': 'Hardware',
        'impact': 'medium'
    },
    {
        'id': 'n3',
        'headline': 'Google Pixel 8 Pro camera rated #1 by DXOMARK',
        'source': 'PhotoTech',
        'time': '6 hours ago',
        'sentiment': 'positive',
        'ticker': 'GOOG8P',
        'category': 'Review',
        'impact': 'high'
    },
    {
        'id': 'n4',
        'headline': 'Smartphone sales decline in Q3 across all major markets',
        'source': 'MarketWatch',
        'time': '12 hours ago',
        'sentiment': 'negative',
        'ticker': '',
        'category': 'Market',
        'impact': 'high'
    }
]

# Generate AI Predictions
AI_PREDICTIONS = []
for i, s in enumerate(stocks[:8]):
    AI_PREDICTIONS.append({
        'id': f'ai{i}',
        'ticker': s['ticker'],
        'name': s['name'],
        'currentPrice': s['price'],
        'predictedPrice': s['aiPrediction'],
        'timeframe': '30 days',
        'confidence': s['aiConfidence'],
        'signal': 'BUY' if s['aiPrediction'] > s['price'] else 'SELL',
        'factors': ['Market trend analysis', 'Historical seasonal performance'],
        'riskLevel': 'Low' if s['aiConfidence'] > 85 else 'Medium',
        'color': s['color']
    })

# Format to TS
ts_content = f"""// ============================================
// PHONE STOCK MARKET - MOCK DATA SYSTEM
// ============================================

export interface PhoneStock {{
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
  specs: {{
    chip: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    display: string;
    os: string;
  }};
  trend: 'up' | 'down' | 'stable';
  sentiment: 'bullish' | 'bearish' | 'neutral';
  aiScore: number;
  aiPrediction: number;
  aiConfidence: number;
  description: string;
  releaseDate: string;
  priceHistory: PricePoint[];
}}

export interface PricePoint {{
  time: string;
  price: number;
  volume: number;
}}

export interface NewsItem {{
  id: string;
  headline: string;
  source: string;
  time: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  ticker?: string;
  category: string;
  impact: 'high' | 'medium' | 'low';
}}

export interface AIPrediction {{
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
}}

export const PHONE_STOCKS: PhoneStock[] = {json.dumps(stocks, indent=2)};

export const NEWS_FEED: NewsItem[] = {json.dumps(NEWS, indent=2)};

export const AI_PREDICTIONS: AIPrediction[] = {json.dumps(AI_PREDICTIONS, indent=2)};
"""

with open('old_mockData.ts', 'r', encoding='utf-16') as f:
    old = f.read()

helpers = re.search(r'(export function formatPrice.*?)$', old, re.DOTALL).group(1)
stats = re.search(r'(export const MARKET_STATS.*?^\};)', old, re.DOTALL | re.MULTILINE).group(1)
market_stats_interface = re.search(r'(export interface MarketStats \{.*?\})', old, re.DOTALL).group(1)
plans = re.search(r'(export const SUBSCRIPTION_PLANS = .*?\];)', old, re.DOTALL).group(1)

ts_content += '\n\n' + market_stats_interface + '\n\n' + stats + '\n\n' + plans + '\n\n' + helpers

with open('lib/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)
print("SUCCESS")
