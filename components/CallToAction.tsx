'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { buildWhatsAppMessage, getWhatsAppUrl } from '@/lib/config';

interface CallToActionProps {
  variant?: 'services' | 'portfolio' | 'testimonials' | 'footer';
  className?: string;
}

export default function CallToAction({ variant = 'services', className = '' }: CallToActionProps) {
  const { t, language } = useLanguage();

  const ctaContent = {
    services: {
      title: language === 'fr' ? 'Prêt à Transformer Votre Espace ?' : language === 'en' ? 'Ready to Transform Your Space?' : 'هل أنت مستعد لتحويل مساحتك؟',
      subtitle: language === 'fr' ? 'Obtenez une consultation gratuite et découvrez comment nous pouvons créer l\'intérieur de vos rêves' : language === 'en' ? 'Get a free consultation and discover how we can create your dream interior' : 'احصل على استشارة مجانية واكتشف كيف يمكننا خلق تصميمك الداخلي المثالي',
      primaryCTA: t.home.hero.cta1,
      secondaryCTA: t.whatsapp.cta,
    },
    portfolio: {
      title: language === 'fr' ? 'Votre Projet Mérite le Meilleur' : language === 'en' ? 'Your Project Deserves the Best' : 'مشروعك يستحق الأفضل',
      subtitle: language === 'fr' ? 'Discutons de votre vision et créons ensemble un espace qui vous ressemble' : language === 'en' ? 'Let\'s discuss your vision and create a space that reflects you' : 'دعنا نناقش رؤيتك ونخلق مساحة تعكس شخصيتك',
      primaryCTA: language === 'fr' ? 'Démarrer mon projet' : language === 'en' ? 'Start my project' : 'ابدأ مشروعي',
      secondaryCTA: language === 'fr' ? 'Consultation immédiate' : language === 'en' ? 'Instant consultation' : 'استشارة فورية',
    },
    testimonials: {
      title: language === 'fr' ? 'Rejoignez Nos Clients Satisfaits' : language === 'en' ? 'Join Our Satisfied Clients' : 'انضم إلى عملائنا الراضين',
      subtitle: language === 'fr' ? 'Des centaines de clients nous font confiance pour transformer leurs espaces' : language === 'en' ? 'Hundreds of clients trust us to transform their spaces' : 'مئات العملاء يثقون بنا لتحويل مساحاتهم',
      primaryCTA: t.home.hero.cta1,
      secondaryCTA: language === 'fr' ? 'WhatsApp direct' : language === 'en' ? 'Direct WhatsApp' : 'واتساب مباشر',
    },
    footer: {
      title: language === 'fr' ? 'Concrétisons Votre Vision Ensemble' : language === 'en' ? 'Let\'s Bring Your Vision to Life' : 'دعنا نحقق رؤيتك معاً',
      subtitle: language === 'fr' ? 'Contactez-nous dès aujourd\'hui pour une consultation personnalisée et gratuite' : language === 'en' ? 'Contact us today for a personalized free consultation' : 'اتصل بنا اليوم للحصول على استشارة مجانية مخصصة',
      primaryCTA: language === 'fr' ? 'Planifier un rendez-vous' : language === 'en' ? 'Schedule appointment' : 'حدد موعداً',
      secondaryCTA: t.whatsapp.cta,
    },
  };

  const content = ctaContent[variant];
  const whatsappMessage = buildWhatsAppMessage(
    t.whatsapp.message,
    { page: `CTA-${variant}`, language }
  );

  return (
    <section className={`py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/95 text-white relative overflow-hidden ${className}`}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            {content.title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            {/* Primary CTA - Contact Page */}
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-accent text-primary px-8 py-5 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02] shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-primary flex items-center justify-center gap-3 group"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{content.primaryCTA}</span>
            </Link>

            {/* Secondary CTA - WhatsApp */}
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-[1.02] shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 focus:ring-offset-2 focus:ring-offset-primary flex items-center justify-center gap-3 group"
              aria-label={t.whatsapp.ariaLabel}
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>{content.secondaryCTA}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
