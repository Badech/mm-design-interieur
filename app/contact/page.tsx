"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { buildWhatsAppMessage, getWhatsAppUrl } from "@/lib/config";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Bonjour, je m'appelle ${formData.name}.\n\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = getWhatsAppUrl(
      buildWhatsAppMessage(message, { page: "Contact", language: "fr" })
    );

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              buildWhatsAppMessage(t.whatsapp.message, { page: "Contact", language: "fr" })
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl shadow-lg hover:bg-[#20BA5A] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
            aria-label="Contactez-nous sur WhatsApp"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.963 11.963 0 0012 0C5.372 0 0 5.372 0 12c0 2.115.55 4.11 1.515 5.838L0 24l6.342-1.5A11.96 11.96 0 0012 24c6.628 0 12-5.372 12-12 0-3.197-1.248-6.208-3.48-8.52zM12 22.001a9.96 9.96 0 01-5.083-1.394l-.364-.217-3.764.89.802-3.846-.237-.373A9.96 9.96 0 012.001 12c0-5.514 4.486-9.999 9.999-9.999 2.673 0 5.185 1.04 7.071 2.928A9.955 9.955 0 0122 12c0 5.513-4.486 10.001-10 10.001zm5.3-7.987c-.29-.145-1.72-.848-1.985-.944-.266-.097-.459-.145-.652.147-.193.291-.752.943-.922 1.136-.17.193-.341.212-.63.071-.29-.145-1.217-.45-2.322-1.431-.859-.764-1.44-1.708-1.608-1.996-.167-.289-.017-.444.127-.588.131-.13.29-.33.434-.494.144-.165.191-.283.288-.475.097-.193.049-.355-.024-.498-.072-.145-.65-1.545-.891-2.116-.236-.556-.474-.477-.651-.486-.168-.008-.361-.01-.555-.01-.193 0-.506.072-.771.355-.265.281-1.011.988-1.011 2.41 0 1.422 1.036 2.796 1.179 2.988.145.193 2.04 3.113 4.938 4.217.69.299 1.228.477 1.648.611.692.22 1.323.189 1.823.114.557-.083 1.72-.703 1.963-1.38.243-.677.243-1.257.169-1.38-.072-.124-.265-.193-.556-.337z" />
            </svg>
            <span className="font-semibold">{t.home.hero.cta1} via WhatsApp</span>
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
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-gray/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.form.name}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-gray/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.form.email}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-gray/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.form.phone}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-gray/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t.contact.form.message}
                  />
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
                  Informations de contact
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
                      <h3 className="font-semibold text-primary mb-1">Adresse</h3>
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
                      <h3 className="font-semibold text-primary mb-1">Téléphone</h3>
                      <a
                        href={`tel:${t.contact.info.phone}`}
                        className="text-secondary-gray hover:text-accent transition-colors"
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
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
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

              {/* Google Maps Embed */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  Notre localisation
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
