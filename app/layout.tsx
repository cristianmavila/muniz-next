import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata = {
  title: "Muniz Branding",
  description:
    "O design estabelece valor, dá sentido ou simplesmente é prazer em ver. É um modo de vida, ponto de vista e maneira de ser relevante provocando relacionamento através do esclarecimento, da capacidade de síntese, da dramatização de uma palavra ou imagem. O bom design envolve um conjunto de fatores relacionados a estética, conhecimento técnico, economia, ergonomia, tecnologia e psicologia que se manifesta com a correta interpretação dessas particularidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>{children}</body>
      <GoogleAnalytics gaId="G-B7KC3YD0V6" />
    </html>
  );
}
