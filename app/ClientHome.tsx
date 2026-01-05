"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildWhatsAppMessage, getWhatsAppUrl } from "@/lib/config";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function ClientHome() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#home-featured-gallery",
      children: "a[data-pswp-src]",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const featuredProjects = t.projects.slice(0, 4);

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
              aria-label={t.whatsapp.ariaLabel}
            >
              {t.whatsapp.cta}
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
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
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

          <div id="home-featured-gallery" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <a
                  href={project.image}
                  data-pswp-src={project.image}
                  data-pswp-width="800"
                  data-pswp-height="600"
                  className="block h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-300" />
                  <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">
                      {t.portfolio[project.category]}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            {t.home.hero.cta2}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.home.intro.description}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105"
          >
            {t.home.hero.cta1}
          </Link>
        </div>
      </section>
    </>
  );
}