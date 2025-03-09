import type { Metadata } from "next";
import "./globals.css";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700", "600"], // Choose the weights you need
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Gallery of Fame",
  description: "View a collection of pure art, definitely not by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>{children}</body>
    </html>
  );
}
