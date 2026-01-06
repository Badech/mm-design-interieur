"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { buildWhatsAppMessage, getWhatsAppUrl } from "@/lib/config";
import SocialLinks from "@/components/SocialLinks";

export default function ClientContact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = language === 'fr' ? 'Le nom est requis' : language === 'en' ? 'Name is required' : 'الاسم مطلوب';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = language === 'fr' ? 'Le nom doit contenir au moins 2 caractères' : language === 'en' ? 'Name must be at least 2 characters' : 'يجب أن يحتوي الاسم على حرفين على الأقل';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'fr' ? 'Le téléphone est requis' : language === 'en' ? 'Phone is required' : 'رقم الهاتف مطلوب';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = language === 'fr' ? 'Numéro de téléphone invalide' : language === 'en' ? 'Invalid phone number' : 'رقم هاتف غير صالح';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = language === 'fr' ? 'Le message est requis' : language === 'en' ? 'Message is required' : 'الرسالة مطلوبة';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'fr' ? 'Le message doit contenir au moins 10 caractères' : language === 'en' ? 'Message must be at least 10 characters' : 'يجب أن تحتوي الرسالة على 10 أحرف على الأقل';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setShowSuccess(false);
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);

    const message = `Bonjour, je m'appelle ${formData.name}.\n\nTéléphone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = getWhatsAppUrl(
      buildWhatsAppMessage(message, { page: "Contact", language: language })
    );

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=800&fit=crop"
            alt="Contact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* WhatsApp Primary CTA - Enhanced for Conversions */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Compelling Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3 sm:mb-4">
              {language === 'fr' ? 'Réponse Instantanée sur WhatsApp' : language === 'en' ? 'Instant Response on WhatsApp' : 'رد فوري عبر واتساب'}
            </h2>
            <p className="text-base sm:text-lg text-secondary-gray mb-6 sm:mb-8 leading-relaxed">
              {language === 'fr' ? 'Contactez-nous maintenant et obtenez une réponse en quelques minutes. Parlez directement avec notre équipe.' : language === 'en' ? 'Contact us now and get a response within minutes. Speak directly with our team.' : 'اتصل بنا الآن واحصل على رد في دقائق. تحدث مباشرة مع فريقنا.'}
            </p>
            
            {/* WhatsApp CTA Button */}
            <a
              href={getWhatsAppUrl(
                buildWhatsAppMessage(t.whatsapp.message, { page: "Contact", language: language })
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-xl font-bold text-base sm:text-lg shadow-2xl hover:bg-[#20BA5A] hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 focus:ring-offset-2 w-full sm:w-auto group"
              aria-label={t.whatsapp.ariaLabel}
            >
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>{language === 'fr' ? 'Démarrer la Conversation' : language === 'en' ? 'Start Conversation' : 'ابدأ المحادثة'}</span>
            </a>
            
            {/* Trust Signals */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-secondary-gray">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{language === 'fr' ? 'Réponse rapide' : language === 'en' ? 'Fast response' : 'رد سريع'}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{language === 'fr' ? '100% Confidentiel' : language === 'en' ? '100% Confidential' : '100٪ سري'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
                {t.contact.sendMessage}
              </h2>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-start gap-3 animate-fade-in">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">
                      {language === 'fr' ? 'Message envoyé avec succès!' : language === 'en' ? 'Message sent successfully!' : 'تم إرسال الرسالة بنجاح!'}
                    </p>
                    <p className="text-sm mt-1">
                      {language === 'fr' ? 'Nous vous contacterons bientôt via WhatsApp.' : language === 'en' ? 'We will contact you soon via WhatsApp.' : 'سوف نتصل بك قريبا عبر واتساب.'}
                    </p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-secondary-gray/30 focus:ring-accent'
                    }`}
                    placeholder={t.contact.form.name}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-secondary-gray/30 focus:ring-accent'
                    }`}
                    placeholder={t.contact.form.phone}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all resize-none ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-secondary-gray/30 focus:ring-accent'
                    }`}
                    placeholder={t.contact.form.message}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
                  {t.contact.contactInfo}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.contact.addressLabel}</h3>
                      <p className="text-secondary-gray">{t.contact.info.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.contact.phoneLabel}</h3>
                      <a
                        href={`tel:${t.contact.info.phone}`}
                        className="text-secondary-gray hover:text-accent transition-colors"
                        dir="ltr"
                      >
                        {t.contact.info.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t.contact.form.email}</h3>
                      <a
                        href={`mailto:${t.contact.info.email}`}
                        className="text-secondary-gray hover:text-accent transition-colors"
                      >
                        {t.contact.info.email}
                      </a>
                    </div>
                  </div>
                  
                  {/* Social Media - With Direct Links */}
                  <div className="flex items-start pt-6 border-t border-gray-100 mt-6">
                    <svg
                      className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary mb-3">{t.footer.followUs}</h3>
                      <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a
                          href="https://www.facebook.com/mmdesign"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                          aria-label="Facebook"
                          title="Facebook"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        
                        {/* Instagram */}
                        <a
                          href="https://www.instagram.com/mmdesign"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                          aria-label="Instagram"
                          title="Instagram"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map - Mobile Optimized */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-4 sm:mb-6">
                  {t.contact.locationTitle}
                </h2>
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.473865426804!2d-7.615067684831573!3d33.57327778073756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d293319a3d5%3A0x409ce34b3175f80!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={language === 'fr' ? 'Notre emplacement' : language === 'en' ? 'Our location' : 'موقعنا'}
                    className="absolute inset-0"
                  />
                </div>
                {/* Get Directions Button */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Casablanca,Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  {language === 'fr' ? 'Obtenir l\'itinéraire' : language === 'en' ? 'Get directions' : 'احصل على الاتجاهات'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}