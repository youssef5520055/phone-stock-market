import re

with open('app/globals.css', 'r', encoding='utf-8') as f:
    css = f.read()

colors = '''
  --bg-primary: #1c1c1e;
  --bg-secondary: #2c2c2e;
  --bg-card: rgba(44, 44, 46, 0.7);
  --bg-card-hover: rgba(58, 58, 60, 0.8);
  
  --accent-blue: #0A84FF;
  --accent-blue-light: #5E5CE6;
  
  --text-primary: #ffffff;
  --text-secondary: rgba(235, 235, 245, 0.6);
  --text-muted: rgba(235, 235, 245, 0.3);
  
  --border-light: rgba(255, 255, 255, 0.1);
  --border-focus: rgba(10, 132, 255, 0.5);
  
  --color-up: #30D158;
  --color-down: #FF453A;
'''

css = re.sub(r'--bg-primary:.*--color-down: [^;]+;', colors, css, flags=re.DOTALL)

with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.write(css)
