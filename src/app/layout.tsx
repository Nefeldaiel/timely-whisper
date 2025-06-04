import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { APP_NAME } from "@/constants/app";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: "A comfortable letter management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-[#F8FAFC]`}>
      <body>{children}</body>
    </html>
  );
}
