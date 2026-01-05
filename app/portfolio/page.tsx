"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type ProjectCategory = "all" | "villa" | "apartment" | "office" | "restaurant";

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  // Init PhotoSwipe lightbox for galleries
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#portfolio-galleries",
      children: "a[data-pswp-src]",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Villa Moderne Casablanca",
      category: "villa" as ProjectCategory,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1631889993954-2d01d442f712?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      description: "Transformation complète d'une villa moderne avec design luxe et industriel.",
    },
    {
      id: 2,
      title: "Appartement Luxe Rabat",
      category: "apartment" as ProjectCategory,
      image: "https://images.unsplash.com/photo-1631889993954-2d01d442f712?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1631889993954-2d01d442f712?w=800&h=600&fit=crop",
      description: "Optimisation d'un appartement avec solutions de rangement innovantes.",
    },
    {
      id: 3,
      title: "Bureau Executive Marrakech",
      category: "office" as ProjectCategory,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description: "Aménagement d'un espace de travail moderne et fonctionnel.",
    },
    {
      id: 4,
      title: "Restaurant Marrakech",
      category: "restaurant" as ProjectCategory,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: "Création d'une ambiance unique pour restaurant haut de gamme.",
    },
    {
      id: 5,
      title: "Villa Traditionnelle Tanger",
      category: "villa" as ProjectCategory,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      description: "Mélange harmonieux entre tradition marocaine et modernité.",
    },
    {
      id: 6,
      title: "Studio Design Casablanca",
      category: "apartment" as ProjectCategory,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1631889993954-2d01d442f712?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description: "Transformation d'un studio en espace fonctionnel et élégant.",
    },
  ];

  const filters: { key: ProjectCategory; label: string }[] = [
    { key: "all", label: t.portfolio.all },
    { key: "villa", label: t.portfolio.villa },
    { key: "apartment", label: t.portfolio.apartment },
    { key: "office", label: t.portfolio.office },
    { key: "restaurant", label: t.portfolio.restaurant },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=800&fit=crop"
            alt="Portfolio"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            {t.portfolio.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 min-h-[44px] ${
                  activeFilter === filter.key
                    ? "bg-accent text-primary"
                    : "bg-white text-primary hover:bg-accent/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div id="portfolio-galleries" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Mobile: swipeable gallery; Desktop: single image */}
                  <div className="block lg:hidden">
                    <Swiper spaceBetween={8} slidesPerView={1}>
                      {[project.beforeImage, project.afterImage, project.image].map((src, idx) => (
                        <SwiperSlide key={idx}>
                          <a
                            href={src}
                            data-pswp-src={src}
                            data-pswp-width="1600"
                            data-pswp-height="1200"
                            aria-label={`${project.title} - image ${idx + 1}`}
                          >
                            <Image
                              src={src}
                              alt={`${project.title} ${idx + 1}`}
                              fill
                              className="object-cover"
                              sizes="100vw"
                            />
                          </a>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="hidden lg:block">
                    <a
                      href={project.image}
                      data-pswp-src={project.image}
                      data-pswp-width="1600"
                      data-pswp-height="1200"
                      aria-label={`${project.title}`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </a>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-accent text-sm font-medium">
                      {filters.find((f) => f.key === project.category)?.label}
                    </span>
                    <p className="text-sm mt-1">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-gray text-sm leading-relaxed mb-3">{project.description}</p>
                  <Link
                    href="#"
                    className="text-accent font-medium hover:text-accent-orange transition-colors text-sm"
                  >
                    {t.portfolio.viewProject}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
                {t.portfolio.beforeAfter.title}
              </h2>
              <p className="text-lg text-secondary-gray">
                {t.portfolio.beforeAfter.subtitle}
              </p>
            </div>
            <div className="space-y-12">
              {filteredProjects.slice(0, 3).map((project) => (
                <div key={project.id} className="bg-white rounded-lg p-4 shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
                    {project.title}
                  </h3>
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    alt={project.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* CTA Section */}
     <section className="py-20 bg-primary text-white">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">{t.services.cta.title}</h2>
         <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{t.services.cta.subtitle}</p>
         <Link href="/contact" className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105">{t.home.hero.cta1}</Link>
       </div>
     </section>
   </div>
 );
}
