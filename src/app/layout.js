`"use client"`;
import { Geist, Geist_Mono } from "next/font/google";
import { Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Fahad Bin Siddique | Portfolio",
    template: "%s | Fahad Bin Siddique"
  },
  description: "Innovative developer specializing in interactive UI/UX and modern web technologies.",
  applicationName: "Fahad's Portfolio",
  authors: [{ name: "Fahad Bin Siddique", url: "https://yourwebsite.com" }],
  keywords: [
    "portfolio",
    "web developer",
    "UI/UX",
    "React",
    "Next.js",
    "Three.js",
    "animation"
  ],
  creator: "Fahad Bin Siddique",
  publisher: "Fahad Bin Siddique",
  metadataBase: new URL("https://yourwebsite.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fahad Bin Siddique | Portfolio",
    description: "Check out my latest projects & UI animations.",
    url: "https://yourwebsite.com",
    siteName: "Fahad's Portfolio",
    images: [
      {
        url: "/fahad-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Bin Siddique | Portfolio",
    description: "Check out my latest projects & UI animations.",
    creator: "@yourtwitterhandle",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const  viewportConfig  = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white selection:bg-purple-500 selection:text-white`}
      >
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}