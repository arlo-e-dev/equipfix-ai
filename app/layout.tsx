import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EquipFix AI - Instant Audiology Equipment Repair | 70% Cheaper, 10x Faster",
  description: "Revolutionary AI-powered remote repair service for audiology equipment. Fix calibration issues in minutes, not days. 70% cheaper than traditional service calls. Available 24/7.",
  keywords: "audiology equipment repair, AI repair service, remote equipment service, equipment calibration, audiometer repair, cost-effective repair",
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
