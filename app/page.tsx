"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildWhatsAppMessage, getWhatsAppUrl } from "@/lib/config";

export default function HomePage() {
  const { t } = useLanguage();

  // Placeholder project images (luxury interior design)
  const featuredProjects = [
    {
      id: 1,
      title: "Villa Moderne Casablanca",
      category: "Villa",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Appartement Luxe Rabat",
      category: "Apartment",
      image: "https://images.unsplash.com/photo-1631889993954-2d01d442f712?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Bureau Executive",
      category: "Office",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Restaurant Marrakech",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    },
  ];

  const testimonials = t.testimonials.items.slice(0, 2);

  const services = [
    {
      icon: "🏡",
      title: t.services.villa.title,
      description: t.services.villa.description,
      link: "/services#villa",
    },
    {
      icon: "🏢",
      title: t.services.apartment.title,
      description: t.services.apartment.description,
      link: "/services#apartment",
    },
    {
      icon: "💼",
      title: t.services.office.title,
      description: t.services.office.description,
      link: "/services#office",
    },
    {
      icon: "🍽️",
      title: t.services.restaurant.title,
      description: t.services.restaurant.description,
      link: "/services#restaurant",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
            alt="Luxury Interior Design"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-6 animate-slide-up">
            {t.home.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
            {t.home.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-accent/30"
            >
              {t.home.hero.cta1}
            </Link>
            <a
              href={getWhatsAppUrl(buildWhatsAppMessage(t.whatsapp.message, { page: "Home", language: "fr" }))}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
              aria-label="Contactez-nous sur WhatsApp"
            >
              Consultation gratuite WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              {t.home.intro.title}
            </h2>
            <p className="text-lg text-secondary-gray leading-relaxed">
              {t.home.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              {t.home.services.title}
            </h2>
            <p className="text-lg text-secondary-gray max-w-2xl mx-auto">
              {t.home.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-secondary focus:outline-none focus:ring-4 focus:ring-accent/30"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-gray text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-accent font-semibold">{t.home.projects.viewAll.replace(/→.*/, '')} →</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105">
              {t.home.hero.cta1}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              {t.home.projects.title}
            </h2>
            <p className="text-lg text-secondary-gray max-w-2xl mx-auto mb-8">
              {t.home.projects.subtitle}
            </p>
            <Link
              href="/portfolio"
              className="inline-block text-accent font-semibold hover:text-accent-orange transition-colors"
            >
              {t.home.projects.viewAll} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href="/portfolio"
                className="group relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                  <h3 className="text-2xl font-heading font-bold mt-2">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              {t.home.testimonials.title}
            </h2>
            <p className="text-lg text-secondary-gray max-w-2xl mx-auto">
              {t.home.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="md:col-span-2 mb-2 flex justify-center">
              <Link href="/contact" className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105">
                {t.home.hero.cta1}
              </Link>
            </div>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-secondary p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary-gray mb-6 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-secondary-gray">{testimonial.role} - {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/testimonials"
              className="inline-block text-accent font-semibold hover:text-accent-orange transition-colors"
            >
              {t.testimonials.viewAll}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
