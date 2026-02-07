import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Niklesh - Full Stack Software Engineer",
    template: "%s | Niklesh"
  },
  description: "Portfolio of Niki704, a Software Engineering undergraduate specializing in Next.js, React, and System Design. Explore my projects and skills.",
  keywords: ["Software Engineer", "Full Stack Developer", "Next.js", "React", "Portfolio", "Niki704", "Niklesh", "Web Development"],
  authors: [{ name: "Niklesh" }],
  creator: "Niklesh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://niklesh.dev", // Replace with actual domain
    title: "Niklesh - Full Stack Software Engineer",
    description: "Building digital experiences with code. Explore my projects and technical skills.",
    siteName: "Niklesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niklesh - Full Stack Software Engineer",
    description: "Software Engineering Undergraduate & Full Stack Developer.",
    creator: "@niki704", // Replace with actual handle
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

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
