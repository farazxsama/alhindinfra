import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import CallButton from "@/components/CallButton";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Open Plots Near Shamshabad | Al Hind Infra",
  description:
    "Invest in premium open plots near Shamshabad with Al Hind Infra. Clear title, spot registration, gated community, and well-planned layouts at attractive prices.",
    authors: 'Al Hind Infra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <CallButton/>
        <WhatsappButton/>
        <Footer/>
        </body>
    </html>
  );
}
