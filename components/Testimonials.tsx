"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">
            {t.home.testimonials.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            {t.home.testimonials.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            dir={isRTL ? "rtl" : "ltr"}
            key={language}
            className="pb-12"
          >
            {t.testimonials.items.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className={`bg-white p-8 md:p-10 rounded-2xl shadow-lg text-center mx-4 mb-4 ${isRTL ? 'rtl' : 'ltr'}`}>
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className={`text-lg md:text-xl text-secondary-gray italic mb-8 leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className={isRTL ? 'text-right' : 'text-center'}>
                    <h4 className="font-heading font-bold text-lg text-primary">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-accent uppercase tracking-wide font-medium">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
