import type { Metadata } from "next";
import ClientTestimonials from "./ClientTestimonials";

export const metadata: Metadata = {
  title: "Témoignages Clients | Avis M.M Design d'intérieur",
  description: "Découvrez ce que nos clients disent de nous. Satisfaction garantie pour vos projets de design d'intérieur et rénovation.",
  alternates: {
    canonical: "https://mm-design-interieur.vercel.app/testimonials",
  },
};

export default function TestimonialsPage() {
  return <ClientTestimonials />;
}