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
import CallToAction from "@/components/CallToAction";

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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight animate-slide-up">
            {t.home.hero.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed">
            {t.home.hero.subtitle}
          </p>
          
          {/* CTAs - Mobile First Design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto px-4">
            {/* Primary CTA - Consultation */}
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-accent text-primary px-8 py-5 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02] shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-primary flex items-center justify-center gap-3 group"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{t.home.hero.cta1}</span>
            </Link>
            
            {/* Secondary CTA - WhatsApp */}
            <a
              href={getWhatsAppUrl(buildWhatsAppMessage(t.whatsapp.message, { page: "Home", language: language }))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-[1.02] shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 focus:ring-offset-2 focus:ring-offset-primary flex items-center justify-center gap-3 group"
              aria-label={t.whatsapp.ariaLabel}
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>{t.whatsapp.cta}</span>
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

      {/* CTA after Portfolio */}
      <CallToAction variant="portfolio" />

      <WhyChooseUs />

      <Testimonials />

      {/* CTA before Footer - Final conversion opportunity */}
      <CallToAction variant="footer" />
    </>
  );
}