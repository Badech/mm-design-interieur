"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Link from "next/link";

type ProjectCategory = "all" | "villa" | "apartment" | "office" | "restaurant";

export default function ClientPortfolio() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
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

  const filters: { key: ProjectCategory; label: string }[] = [
    { key: "all", label: t.portfolio.all },
    { key: "villa", label: t.portfolio.villa },
    { key: "apartment", label: t.portfolio.apartment },
    { key: "office", label: t.portfolio.office },
    { key: "restaurant", label: t.portfolio.restaurant },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? t.projects
      : t.projects.filter((project) => project.category === activeFilter);

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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div id="portfolio-galleries" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-72 sm:h-64 overflow-hidden flex-shrink-0">
                  {/* Mobile: swipeable gallery with pagination */}
                  <div className="block lg:hidden h-full">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      modules={[Pagination]}
                      className="h-full w-full"
                    >
                      {project.gallery.map((src, idx) => (
                        <SwiperSlide key={idx}>
                          <a
                            href={src}
                            data-pswp-src={src}
                            data-pswp-width="1600"
                            data-pswp-height="1200"
                            aria-label={`${project.title} - image ${idx + 1}`}
                            className="block h-full w-full relative"
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
                  
                  {/* Desktop: single image with lightbox trigger */}
                  <a
                    href={project.gallery[0]}
                    data-pswp-src={project.gallery[0]}
                    data-pswp-width="1600"
                    data-pswp-height="1200"
                    className="hidden lg:block h-full w-full relative"
                    aria-label={project.title}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </a>

                  {/* Hidden gallery items for lightbox navigation (Desktop only) */}
                  <div className="hidden">
                    {project.gallery.slice(1).map((src, idx) => (
                      <a
                        key={idx}
                        href={src}
                        data-pswp-src={src}
                        data-pswp-width="1600"
                        data-pswp-height="1200"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                      {filters.find((f) => f.key === project.category)?.label}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-4 mb-6 flex-1">
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1">{t.portfolio.problem}</h4>
                      <p className="text-secondary-gray text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1">{t.portfolio.solution}</h4>
                      <p className="text-secondary-gray text-sm leading-relaxed">{project.solution}</p>
                    </div>
                    {project.clientQuote && (
                      <div className={`bg-secondary/50 p-3 rounded-lg ${isRTL ? 'border-r-2' : 'border-l-2'} border-accent mt-3`}>
                        <p className="text-xs italic text-primary/80">&quot;{project.clientQuote}&quot;</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button className="text-primary font-bold hover:text-accent transition-colors text-sm flex items-center gap-2 group/btn">
                      {t.portfolio.viewProject}
                      <span className={`transition-transform ${isRTL ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`}>
                        {isRTL ? '←' : '→'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
