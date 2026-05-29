import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Madurai | Instagram Ads, Websites & SEO — AurenStudio",
  description: "AurenStudio helps local businesses in Madurai grow with targeted Instagram ad campaigns, custom-coded websites, social media management & local SEO. Real results in 7 days. Call +91 73057 57075.",
  keywords: "digital marketing madurai, instagram ads madurai, web development madurai, social media management madurai, SEO madurai, bridal studio marketing, salon digital marketing madurai",
  openGraph: {
    title: "AurenStudio — Digital Growth for Madurai Businesses",
    description: "Instagram ads, custom websites & social media management for local businesses in Madurai & South Tamil Nadu. Starting ₹8,000/month.",
    url: "https://dinesssh.github.io/agency",
    siteName: "AurenStudio",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AurenStudio — Digital Marketing Agency, Madurai",
    description: "Instagram ads, websites & SEO for local businesses. Starting ₹8,000/month."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${space.variable}`}>
      <head>
        <link rel="canonical" href="https://dinesssh.github.io/agency" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Madurai" />
        <meta name="geo.position" content="9.9252;78.1198" />
        <meta name="ICBM" content="9.9252, 78.1198" />
      </head>
      <body className="font-sans bg-[#080808] text-white overflow-x-hidden w-full max-w-full">{children}</body>
    </html>
  );
}
