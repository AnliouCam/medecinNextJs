import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";
import { DEFAULT_SEO } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées depuis siteData (personnalisables par client)
export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    type: DEFAULT_SEO.type,
    locale: DEFAULT_SEO.locale,
    siteName: DEFAULT_SEO.siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          // Variables CSS pour couleurs personnalisables depuis siteData
          "--color-primary": siteData.theme.primaryColor,
          "--color-secondary": siteData.theme.secondaryColor,
          "--color-accent": siteData.theme.accentColor,
        } as React.CSSProperties}
      >
        {/* Skip to main content pour accessibilité clavier */}
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>

        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
