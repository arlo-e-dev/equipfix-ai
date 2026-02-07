import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EquipFix AI - Instant Computer Assistance | 70% Cheaper, 10x Faster",
  description: "Revolutionary AI-powered remote computer assistance. Fix any computer issue in minutes, not days. 70% cheaper than traditional tech support. Available 24/7.",
  keywords: "AI computer repair, remote tech support, computer assistance, AI help desk, instant computer fix, affordable tech support",
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
