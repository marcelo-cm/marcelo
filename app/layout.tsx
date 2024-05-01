import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/molecules/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcelochaman.ca"),
  title: "Marcelo Chaman Mallqui",
  description: "A digital representation.",
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    images: "/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-[100dvh] w-[100dvw] xl:overflow-hidden flex flex-col lg:flex-row no-scrollbar">
        {children}
        <Navbar />
        <Analytics />
      </body>
    </html>
  );
}
