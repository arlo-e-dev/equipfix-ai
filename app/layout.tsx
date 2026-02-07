import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EquipFix AI - Enterprise AI Software Support | 24/7 Automated IT Assistance",
  description: "Enterprise-grade AI-powered software support. Instant diagnosis and resolution of any software issue. 70% cheaper than traditional IT support. Available 24/7/365.",
  keywords: "AI IT support, enterprise software support, automated tech support, AI help desk, remote software assistance, business IT solutions, AI troubleshooting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
