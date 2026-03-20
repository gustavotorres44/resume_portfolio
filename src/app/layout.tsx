import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { PageTransition } from "@/components/ui/PageTransition";
import { BackToTop } from "@/components/ui/BackToTop";
import { Analytics } from "@vercel/analytics/react";

const displayFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gustavo A. Torres Murphy — Portfolio",
  description:
    "Industrial Engineering student at Georgia Tech. Experience at Goldman Sachs, Accenture, and Toyota. Operations, technology, and community builder.",
  openGraph: {
    title: "Gustavo A. Torres Murphy — Portfolio",
    description:
      "Industrial Engineering student at Georgia Tech. Experience at Goldman Sachs, Accenture, and Toyota.",
    url: "https://resume-portfolio-xi-kohl.vercel.app",
    siteName: "Gustavo Torres",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Gustavo Torres",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo A. Torres Murphy — Portfolio",
    description:
      "Industrial Engineering student at Georgia Tech. Experience at Goldman Sachs, Accenture, and Toyota.",
    images: ["/images/avatar.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <ChatWidget />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
