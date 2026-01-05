"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { buildWhatsAppMessage, getWhatsAppUrl } from "@/lib/config";

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

      {/* WhatsApp Primary CTA */}
      <section className="py-12 bg-[#f0fff5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={getWhatsAppUrl(
              buildWhatsAppMessage(t.whatsapp.message, { page: "Contact", language: language })
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl shadow-lg hover:bg-[#20BA5A] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
            aria-label={t.whatsapp.ariaLabel}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.963 11.963 0 0012 0C5.372 0 0 5.372 0 12c0 2.115.55 4.11 1.515 5.838L0 24l6.342-1.5A11.96 11.96 0 0012 24c6.628 0 12-5.372 12-12 0-3.197-1.248-6.208-3.48-8.52zM12 22.001a9.96 9.96 0 01-5.083-1.394l-.364-.217-3.764.89.802-3.846-.237-.373A9.96 9.96 0 012.001 12c0-5.514 4.486-9.999 9.999-9.999 2.673 0 5.185 1.04 7.071 2.928A9.955 9.955 0 0122 12c0 5.513-4.486 10.001-10 10.001zm5.3-7.987c-.29-.145-1.72-.848-1.985-.944-.266-.097-.459-.145-.652.147-.193.291-.752.943-.922 1.136-.17.193-.341.212-.63.071-.29-.145-1.217-.45-2.322-1.431-.859-.764-1.44-1.708-1.608-1.996-.167-.289-.017-.444.127-.588.131-.13.29-.33.434-.494.144-.165.191-.283.288-.475.097-.193.049-.355-.024-.498-.072-.145-.65-1.545-.891-2.116-.236-.556-.474-.477-.651-.486-.168-.008-.361-.01-.555-.01-.193 0-.506.072-.771.355-.265.281-1.011.988-1.011 2.41 0 1.422 1.036 2.796 1.179 2.988.145.193 2.04 3.113 4.938 4.217.69.299 1.228.477 1.648.611.692.22 1.323.189 1.823.114.557-.083 1.72-.703 1.963-1.38.243-.677.243-1.257.169-1.38-.072-.124-.265-.193-.556-.337z" />
            </svg>
            <span className="font-semibold">{t.home.hero.cta1} {t.contact.viaWhatsapp}</span>
          </a>
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
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
                  {t.contact.locationTitle}
                </h2>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.473865426804!2d-7.615067684831573!3d33.57327778073756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d293319a3d5%3A0x409ce34b3175f80!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}