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
  metadataBase: new URL("https://niklesh.dev"),

  title: {
    default: "Niklesh | Full Stack Software Engineer",
    template: "%s | Niklesh"
  },

  description: "Portfolio of Niki704, a Software Engineering undergraduate specializing in Web Development and System Architecture. Explore my work here.",

  keywords: ["Software Engineer", "Full Stack Developer", "Web Developer", "Next.js", "JavaScript", "TypeScript", "React", "Portfolio", "Niki704", "Niklesh", "Niklesh Karunaweera", "Web Development", "System Design", "System Architecture"],

  authors: [{ name: "Niklesh", url: "https://github.com/niki704" }],
  creator: "Niki704",
  publisher: "Niki704",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Niklesh - Full Stack Developer",
    description: "Specialized in Web Development. Explore my projects and technical skills.",
    siteName: "Niklesh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Niklesh Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niklesh - Full Stack Developer",
    description: "Software Engineering Undergraduate & System Architect.",
    creator: "@NikleshCN",
    images: ["/og-image.png"],
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
