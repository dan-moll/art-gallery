import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meditation Series — Art Gallery",
  description: "A curated collection of minimalist meditation artworks by Helmut Relinger, presented in a refined aesthetic.",
  keywords: ["art", "gallery", "meditation", "minimalism", "contemporary art", "hypnosis", "mindfulness"],
  authors: [{ name: "Helmut Relinger" }],
  openGraph: {
    title: "Meditation Series — Art Gallery",
    description: "A curated collection of minimalist meditation artworks",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
