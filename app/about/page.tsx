import type { Metadata } from "next";
import ClientAbout from "./ClientAbout";

export const metadata: Metadata = {
  title: "À Propos de Nous | M.M Design d'intérieur",
  description: "Découvrez l'histoire, la vision et l'expertise de M.M Design d'intérieur. Créateurs d'espaces uniques au Maroc depuis plus de 10 ans.",
  alternates: {
    canonical: "https://mm-design-interieur.vercel.app/about",
  },
};

export default function AboutPage() {
  return <ClientAbout />;
}