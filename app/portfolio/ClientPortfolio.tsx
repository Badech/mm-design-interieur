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
import CallToAction from "@/components/CallToAction";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type ProjectCategory = "all" | "villa" | "apartment" | "office" | "restaurant";

export default function ClientPortfolio() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

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
            {filteredProjects.map((project) => {
              // Extract city from title (last word)
              const titleParts = project.title.split(' ');
              const city = titleParts[titleParts.length - 1];
              
              return (
                <div
                  key={project.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Project Image with Overlay Captions */}
                  <div className="relative h-72 sm:h-64 lg:h-80 overflow-hidden flex-shrink-0">
                    {/* Main Image */}
                    <a
                      href={project.gallery[0]}
                      data-pswp-src={project.gallery[0]}
                      data-pswp-width="1600"
                      data-pswp-height="1200"
                      className="block h-full w-full relative"
                      aria-label={project.title}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        quality={85}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    </a>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-accent/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {filters.find((f) => f.key === project.category)?.label}
                      </span>
                    </div>

                    {/* City Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-primary">{city}</span>
                    </div>

                    {/* Gallery Count Badge */}
                    {project.gallery.length > 1 && (
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs font-semibold text-white">{project.gallery.length}</span>
                      </div>
                    )}

                    {/* Hidden gallery items for lightbox */}
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

                  {/* Project Info - Cleaner Design */}
                  <div className="p-5 lg:p-6 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-lg lg:text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    {/* One-line Description */}
                    <p className="text-sm text-secondary-gray mb-4 leading-relaxed line-clamp-2 flex-1">
                      {project.solution}
                    </p>

                    {/* Before/After Button - Only if images exist */}
                    {project.beforeImage && project.afterImage && (
                      <button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="text-primary font-semibold hover:text-accent transition-colors text-sm flex items-center gap-2 mb-3"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {expandedProject === project.id 
                          ? (language === 'fr' ? 'Masquer Avant/Après' : language === 'en' ? 'Hide Before/After' : 'إخفاء قبل/بعد')
                          : t.portfolio.beforeAfter.title
                        }
                      </button>
                    )}

                    {/* View Project Link */}
                    <button className="text-accent font-bold hover:text-accent/80 transition-colors text-sm flex items-center gap-2 group/btn mt-auto pt-4 border-t border-gray-100">
                      {t.portfolio.viewProject}
                      <span className={`transition-transform ${isRTL ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`}>
                        {isRTL ? '←' : '→'}
                      </span>
                    </button>
                  </div>

                  {/* Expandable Before/After Slider */}
                  {expandedProject === project.id && project.beforeImage && project.afterImage && (
                    <div className="px-5 lg:px-6 pb-6 animate-fade-in">
                      <div className="pt-4 border-t border-gray-100">
                        <BeforeAfterSlider
                          beforeImage={project.beforeImage}
                          afterImage={project.afterImage}
                          alt={project.title}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction variant="portfolio" />
    </div>
  );
}
