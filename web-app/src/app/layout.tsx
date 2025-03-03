import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CoinContextProvider } from "@/context/CoinContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kreepto",
  description: "A Simple Crypto Price Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CoinContextProvider>
          {children}
        </CoinContextProvider>
      </body>
    </html>
  );
}
