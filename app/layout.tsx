import type { Metadata } from "next";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
// import Footer from "../components/Footer";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { TProvider } from "@/providers/toast-provider";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QEP Meals App",
  description: " Recipes from around the world."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
      
        <Providers>
          <Navbar />
          <TProvider />
          {children}
         {/* <Footer /> */}
        </Providers>
 
      </body>
    </html>
  );
}
