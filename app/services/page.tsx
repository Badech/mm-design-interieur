"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      id: "villa",
      icon: "🏡",
      title: t.services.villa.title,
      description: t.services.villa.description,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      features: t.services.features.villa,
    },
    {
      id: "apartment",
      icon: "🏢",
      title: t.services.apartment.title,
      description: t.services.apartment.description,
      image: "https://images.unsplash.com/photo-1631889993954-2d01d442f712?w=800&h=600&fit=crop",
      features: t.services.features.apartment,
    },
    {
      id: "office",
      icon: "💼",
      title: t.services.office.title,
      description: t.services.office.description,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      features: t.services.features.office,
    },
    {
      id: "restaurant",
      icon: "🍽️",
      title: t.services.restaurant.title,
      description: t.services.restaurant.description,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      features: t.services.features.restaurant,
    },
    {
      id: "visualization",
      icon: "🎨",
      title: t.services.visualization.title,
      description: t.services.visualization.description,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      features: t.services.features.visualization,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=800&fit=crop"
            alt="Our Services"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            {t.services.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-secondary-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-secondary-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105"
                  >
                    {t.home.hero.cta1}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            {t.services.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.services.cta.subtitle}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105"
          >
            {t.home.hero.cta1}
          </Link>
        </div>
      </section>
    </div>
  );
}
