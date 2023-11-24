import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo Chaman Mallqui",
  description: "A digital representation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.marcelochaman.ca" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="og:image"
          content="https://www.marcelochaman.ca/opengraph-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="marcelochaman.ca" />
        <meta property="twitter:url" content="https://marcelochaman.ca/" />
        <meta
          name="twitter:image"
          content="https://www.marcelochaman.ca/twitter-image.png"
        ></meta>
      </head>
      <body className="h-[100dvh] w-[100dvw] xl:overflow-hidden flex flex-col lg:flex-row no-scrollbar">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
