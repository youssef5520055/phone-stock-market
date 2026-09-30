with open('lib/mockData.ts', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('relatedTickers: string[]', 'ticker?: string')
content = content.replace('\"relatedTickers\":', '\"ticker\":')
content = content.replace('[\n      \"APPL16\",\n      \"APPL15PM\"\n    ]', '\"APPL16\"')
content = content.replace('[\n      \"SAMS24U\"\n    ]', '\"SAMS24U\"')
content = content.replace('[\n      \"GOOG8P\"\n    ]', '\"GOOG8P\"')
content = content.replace('[]', '\"\"')
with open('lib/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(content)
