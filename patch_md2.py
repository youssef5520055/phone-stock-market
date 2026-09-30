import re
with open('components/sections/MarketDashboard.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'\{.*selectedStock\.price\.toLocaleString\(\).*\}', '{"$" + selectedStock.price.toLocaleString()}', content)
content = re.sub(r'\{.*selectedStock\.targetPrice\.toLocaleString\(\).*\}', '{"$" + selectedStock.targetPrice.toLocaleString()}', content)

with open('components/sections/MarketDashboard.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
