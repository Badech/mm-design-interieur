"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

export default function ClientAbout() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=800&fit=crop"
            alt="About Us"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold">
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
                  {t.about.story.title}
                </h2>
                <p className="text-lg text-secondary-gray leading-relaxed">
                  {t.about.story.content}
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Our Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
                  {t.about.vision.title}
                </h2>
                <p className="text-lg text-secondary-gray leading-relaxed">
                  {t.about.vision.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
              {t.about.expertise.title}
            </h2>
            <p className="text-lg text-secondary-gray leading-relaxed">
              {t.about.expertise.content}
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-secondary rounded-lg">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{t.about.values.excellence.title}</h3>
              <p className="text-secondary-gray">
                {t.about.values.excellence.description}
              </p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-lg">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{t.about.values.creativity.title}</h3>
              <p className="text-secondary-gray">
                {t.about.values.creativity.description}
              </p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{t.about.values.trust.title}</h3>
              <p className="text-secondary-gray">
                {t.about.values.trust.description}
              </p>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">{t.footer.followUs}</h3>
            <p className="text-secondary-gray mb-6">
              {language === 'fr' ? 'Rejoignez notre communauté et suivez nos dernières réalisations' : language === 'en' ? 'Join our community and follow our latest projects' : 'انضم إلى مجتمعنا وتابع أحدث مشاريعنا'}
            </p>
            <div className="flex justify-center">
              <SocialLinks variant="large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}