import re

with open('old_mockData.ts', 'r', encoding='utf-16') as f:
    old = f.read()

helpers = re.search(r'(export function formatPrice.*?)$', old, re.DOTALL).group(1)
stats = re.search(r'(export const MARKET_STATS.*?^\};)', old, re.DOTALL | re.MULTILINE).group(1)
market_stats_interface = re.search(r'(export interface MarketStats \{.*?\})', old, re.DOTALL).group(1)

with open('lib/mockData.ts', 'a', encoding='utf-8') as f:
    f.write('\n\n' + market_stats_interface + '\n\n' + stats + '\n\n' + helpers)
