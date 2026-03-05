import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "ZR Securities | 卓锐证券",
  description:
    "多资产类别聚合交易平台 - 加密货币、港股、美股、外汇一站式交易",
};

export const viewport: Viewport = {
  themeColor: "#0B0B0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
