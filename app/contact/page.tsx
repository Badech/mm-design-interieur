import type { Metadata } from "next";
import ClientContact from "./ClientContact";

export const metadata: Metadata = {
  title: "Contactez-nous | Devis Design d'intérieur Gratuit",
  description: "Discutez de votre projet avec M.M Design d'intérieur. Devis gratuit, consultation WhatsApp et accompagnement personnalisé à Casablanca, Rabat et partout au Maroc.",
  alternates: {
    canonical: "https://mm-design-interieur.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ClientContact />;
}