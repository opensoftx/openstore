import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

// Import the Work Sans font
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenStore - Discover Free & Open Source Apps",
  description: "Explore a curated list of free and open-source applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${workSans.variable} font-sans bg-gray-50 text-gray-900 antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
