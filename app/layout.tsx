import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import BackgroundCyber from "@/components/portfolio/background-cyber";
import { Navbar } from "@/components/portfolio/navbar";
import TextColorizer from "@/components/interactive/text-colorizer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cybersecurity Portfolio",
  description: "Professional portfolio showcasing cybersecurity projects and experience.",
  generator: "v0.app",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground isolate">
        <BackgroundCyber />
        <div data-no-colorize="true">
          <Navbar />
        </div>

        {/* Example TextColorizer usage */}
        <div className="px-6 py-4">
          <TextColorizer
            text="Welcome to my Cybersecurity Portfolio"
            color="text-green-600"
            className="block mb-6 text-xl"
          />
        </div>

        <main className="relative z-10" role="main">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
