import type { Metadata } from "next";
import ClientPortfolio from "./ClientPortfolio";

export const metadata: Metadata = {
  title: "Nos Réalisations | Portfolio Design d'intérieur",
  description: "Explorez nos projets de design d'intérieur : villas de luxe, appartements modernes, bureaux et restaurants au Maroc. Avant/Après et galeries.",
  alternates: {
    canonical: "https://mm-design-interieur.vercel.app/portfolio",
  },
};

export default function PortfolioPage() {
  return <ClientPortfolio />;
}