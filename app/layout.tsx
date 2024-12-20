import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Title from "../components/title/Title";
import { ShoppingCartProvider } from "@/components/context/ShoppingCart";

export const metadata: Metadata = {
  title: "Cozy Threads",
  description: "An innovative e-commerce site that is focused on high quality, ethically sourced apparel and accessories. ",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ShoppingCartProvider>
          <Title />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
