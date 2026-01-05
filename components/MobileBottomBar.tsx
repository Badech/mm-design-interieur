"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { buildWhatsAppMessage, getWhatsAppUrl } from "@/lib/config";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileBottomBar() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show when scrolling up or at top, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 lg:hidden flex pb-safe ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={getWhatsAppUrl(buildWhatsAppMessage(t.whatsapp.message))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 active:bg-green-50"
      >
        <svg
          className="w-6 h-6 text-[#25D366] mb-1"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.963 11.963 0 0012 0C5.372 0 0 5.372 0 12c0 2.115.55 4.11 1.515 5.838L0 24l6.342-1.5A11.96 11.96 0 0012 24c6.628 0 12-5.372 12-12 0-3.197-1.248-6.208-3.48-8.52zM12 22.001a9.96 9.96 0 01-5.083-1.394l-.364-.217-3.764.89.802-3.846-.237-.373A9.96 9.96 0 012.001 12c0-5.514 4.486-9.999 9.999-9.999 2.673 0 5.185 1.04 7.071 2.928A9.955 9.955 0 0122 12c0 5.513-4.486 10.001-10 10.001zm5.3-7.987c-.29-.145-1.72-.848-1.985-.944-.266-.097-.459-.145-.652.147-.193.291-.752.943-.922 1.136-.17.193-.341.212-.63.071-.29-.145-1.217-.45-2.322-1.431-.859-.764-1.44-1.708-1.608-1.996-.167-.289-.017-.444.127-.588.131-.13.29-.33.434-.494.144-.165.191-.283.288-.475.097-.193.049-.355-.024-.498-.072-.145-.65-1.545-.891-2.116-.236-.556-.474-.477-.651-.486-.168-.008-.361-.01-.555-.01-.193 0-.506.072-.771.355-.265.281-1.011.988-1.011 2.41 0 1.422 1.036 2.796 1.179 2.988.145.193 2.04 3.113 4.938 4.217.69.299 1.228.477 1.648.611.692.22 1.323.189 1.823.114.557-.083 1.72-.703 1.963-1.38.243-.677.243-1.257.169-1.38-.072-.124-.265-.193-.556-.337z" />
        </svg>
        <span className="text-xs font-semibold text-primary">WhatsApp</span>
      </a>

      <div className="w-px bg-gray-200 h-10 my-auto"></div>

      <Link
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center py-3 active:bg-amber-50"
      >
        <svg
          className="w-6 h-6 text-accent mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="text-xs font-semibold text-primary">{t.nav.contact}</span>
      </Link>
    </div>
  );
}
