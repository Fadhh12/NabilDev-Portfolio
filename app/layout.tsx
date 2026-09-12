import type { Metadata } from "next";
import { Anton, Inter, Caveat, Space_Mono, Stardos_Stencil } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalBackground from "@/components/GlobalBackground";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono-accent",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Chunky stencil display font for the big section titles (ABOUT, PROJECTS,
// LET'S TALK, the hero name, ...) — matches the reference template's look.
const stardosStencil = Stardos_Stencil({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="en" className={cn("scroll-smooth", "font-sans", inter.variable)}>
      <body
        className={`${anton.variable} ${caveat.variable} ${spaceMono.variable} ${stardosStencil.variable} font-sans antialiased relative min-h-screen bg-surface`}
      >
        <GlobalBackground />
        <Nav />
        {children}
      </body>
    </html>
  );
}
