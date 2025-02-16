import type { Metadata } from "next";
import { quantico } from "./fonts";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import VideoLoop from "@/app/components/VideoLoop";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quantico.className}`}>
        <VideoLoop />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
