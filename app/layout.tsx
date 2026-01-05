import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "M.M Design d'intérieur | Architecture & Design d'intérieur au Maroc",
  description: "Spécialiste en design d'intérieur luxe au Maroc. Conception de villas, appartements, bureaux et restaurants. Expertise marocaine en décoration intérieure moderne et industrielle.",
  keywords: "design intérieur, décoration, Maroc, villa, appartement, bureau, restaurant, luxe, architecture intérieure",
  openGraph: {
    title: "M.M Design d'intérieur | Design d'intérieur luxe au Maroc",
    description: "Transformez vos espaces avec notre expertise en design d'intérieur luxe au Maroc",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-24 text-base md:text-lg leading-relaxed overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
