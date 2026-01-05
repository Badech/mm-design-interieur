"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { buildWhatsAppMessage, getWhatsAppUrl } from "@/lib/config";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  const whatsappUrl = getWhatsAppUrl(buildWhatsAppMessage(t.whatsapp.message));

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-4 sm:p-5 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 hidden lg:flex"
      aria-label={t.nav.contact}
    >
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.963 11.963 0 0012 0C5.372 0 0 5.372 0 12c0 2.115.55 4.11 1.515 5.838L0 24l6.342-1.5A11.96 11.96 0 0012 24c6.628 0 12-5.372 12-12 0-3.197-1.248-6.208-3.48-8.52zM12 22.001a9.96 9.96 0 01-5.083-1.394l-.364-.217-3.764.89.802-3.846-.237-.373A9.96 9.96 0 012.001 12c0-5.514 4.486-9.999 9.999-9.999 2.673 0 5.185 1.04 7.071 2.928A9.955 9.955 0 0122 12c0 5.513-4.486 10.001-10 10.001zm5.3-7.987c-.29-.145-1.72-.848-1.985-.944-.266-.097-.459-.145-.652.147-.193.291-.752.943-.922 1.136-.17.193-.341.212-.63.071-.29-.145-1.217-.45-2.322-1.431-.859-.764-1.44-1.708-1.608-1.996-.167-.289-.017-.444.127-.588.131-.13.29-.33.434-.494.144-.165.191-.283.288-.475.097-.193.049-.355-.024-.498-.072-.145-.65-1.545-.891-2.116-.236-.556-.474-.477-.651-.486-.168-.008-.361-.01-.555-.01-.193 0-.506.072-.771.355-.265.281-1.011.988-1.011 2.41 0 1.422 1.036 2.796 1.179 2.988.145.193 2.04 3.113 4.938 4.217.69.299 1.228.477 1.648.611.692.22 1.323.189 1.823.114.557-.083 1.72-.703 1.963-1.38.243-.677.243-1.257.169-1.38-.072-.124-.265-.193-.556-.337z" />
      </svg>
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-primary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {t.nav.contact}
      </span>
    </a>
  );
}
