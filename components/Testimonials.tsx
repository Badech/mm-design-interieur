"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Testimonials() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  // Show first 3 testimonials on homepage
  const displayTestimonials = t.testimonials.items.slice(0, 3);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">
            {t.home.testimonials.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary">
            {t.home.testimonials.title}
          </h2>
        </div>

        {/* Card Grid - 1/2/3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 md:p-8 flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-10 h-10 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
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

              {/* Testimonial Text */}
              <p className={`text-base text-secondary-gray mb-6 leading-relaxed italic flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                &quot;{testimonial.text}&quot;
              </p>

              {/* Project Type Badge */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm font-semibold text-accent">{testimonial.project}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h4 className="font-heading font-bold text-base text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary-gray">{testimonial.role}</p>
                  <div className="flex items-center gap-1 text-xs text-accent mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
