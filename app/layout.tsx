import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhoneX Market — The Smartphone Stock Exchange",
  description:
    "Track, analyze, compare, and virtually trade smartphone prices like stocks. The world's first phone stock market platform powered by AI.",
  keywords: "phone stock market, smartphone trading, price tracker, AI predictions, market dashboard",
  openGraph: {
    title: "PhoneX Market — The Smartphone Stock Exchange",
    description: "NASDAQ meets smartphones. Trade phone prices like stocks with AI-powered insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#020408] text-[#f0f6ff] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
