import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLACKPRINT — Roadmap de Marca Techwear de Cero a Drop",
  description:
    "Guía maestra interactiva para crear una marca streetwear techwear desde cero en 6 meses. Diseñada para principiantes absolutos: roadmap visual, cursos, recursos gratis y hardware.",
  keywords: [
    "streetwear",
    "techwear",
    "marca de ropa",
    "roadmap",
    "Shopify",
    "branding",
    "principiantes",
  ],
  authors: [{ name: "Blackprint Guide" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "BLACKPRINT — Roadmap de Marca Techwear",
    description:
      "De cero a primer drop en 6 meses. Guía interactiva minimalista para principiantes absolutos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
