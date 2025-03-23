import type { Metadata } from "next";
import {  Cairo } from "next/font/google";
import "./globals.css";


const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrontVerse",
  description: "my simple next-ts and tilewaind projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` scroll-smooth  ${cairo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
