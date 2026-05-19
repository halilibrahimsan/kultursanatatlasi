import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kültür & Sanat Atlası",
  description:
    "Resim Sanatı, Ressamlar, Sanat Akımları, Edebiyat, Sinema Tarihi ve Popüler Kültür hakkında kapsamlı Türkçe bilgi kaynağı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`h-full ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
