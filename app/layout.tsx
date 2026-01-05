import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";
import BackToTop from "@/components/BackToTop";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mm-design.ma';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "name": "M.M Design d'intérieur",
    "image": `${siteUrl}/logo.png`,
    "url": siteUrl,
    "telephone": "+212-612-345-678",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MA",
      "addressLocality": "Casablanca"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5731,
      "longitude": -7.5898
    },
    "sameAs": [
      "https://www.facebook.com/mmdesign",
      "https://www.instagram.com/mmdesign"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
    },
    "serviceType": [
      "Interior Design",
      "Architecture",
      "Space Planning",
      "Custom Furniture Design"
    ]
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-24 text-[17px] md:text-lg leading-relaxed md:leading-loose overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <MobileBottomBar />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
