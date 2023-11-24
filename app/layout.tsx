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
      <body className="h-[100dvh] w-[100dvw] xl:overflow-hidden flex flex-col lg:flex-row no-scrollbar">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
