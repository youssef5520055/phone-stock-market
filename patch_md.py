with open('components/sections/MarketDashboard.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('{"$" + selectedStock.price.toLocaleString()}', '{"$" + selectedStock.price.toLocaleString()}')
content = content.replace('{"$" + selectedStock.targetPrice.toLocaleString()}', '{"$" + selectedStock.targetPrice.toLocaleString()}')
with open('components/sections/MarketDashboard.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
