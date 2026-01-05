import type { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "M.M Design d'intérieur | Architecture & Design d'intérieur au Maroc",
  description: "Spécialiste en design d'intérieur luxe au Maroc. Conception de villas, appartements, bureaux et restaurants. Expertise marocaine en décoration intérieure moderne et industrielle.",
  alternates: {
    canonical: "https://mm-design-interieur.vercel.app/",
  },
};

export default function HomePage() {
  return <ClientHome />;
}