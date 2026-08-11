import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalBackground from "@/components/GlobalBackground";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NabilDev - AI Engineer & Full-Stack Developer",
  description: "Portfolio of Nabil Fadhlur Rahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth snap-y snap-mandatory", "font-sans", geist.variable)}>
      <body
        className={`${fraunces.variable} ${plusJakartaSans.variable} font-body antialiased relative min-h-screen bg-surface`}
      >
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
