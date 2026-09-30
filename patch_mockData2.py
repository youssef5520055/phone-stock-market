import re

with open('old_mockData.ts', 'r', encoding='utf-16') as f:
    old = f.read()

plans = re.search(r'(export const SUBSCRIPTION_PLANS = .*?\];)', old, re.DOTALL).group(1)

with open('lib/mockData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('export const MOCK_STOCKS', 'export const PHONE_STOCKS')
content = content + '\n\n' + plans

with open('lib/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(content)
