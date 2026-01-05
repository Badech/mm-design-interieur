import type { Metadata } from "next";
import ClientServices from "./ClientServices";

export const metadata: Metadata = {
  title: "Nos Services | Architecture & Design d'intérieur",
  description: "Services complets de design d'intérieur : Villas, Appartements, Bureaux, Restaurants et Visualisation 3D. Expertise sur mesure au Maroc.",
  alternates: {
    canonical: "https://mm-design-interieur.vercel.app/services",
  },
};

export default function ServicesPage() {
  return <ClientServices />;
}