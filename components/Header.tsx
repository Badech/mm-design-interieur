"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = language === "ar";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const pathname = usePathname();

  const languages: { code: Language; src: string; label: string; alt: string }[] = [
    { code: "fr", src: "/flags/fr.svg", label: "Français", alt: "France flag" },
    { code: "en", src: "/flags/gb.svg", label: "English", alt: "United Kingdom flag" },
    { code: "ar", src: "/flags/ma.svg", label: "العربية", alt: "Morocco flag" },
  ];

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/testimonials", label: t.nav.testimonials },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="M.M Design d'intérieur Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center overflow-x-auto whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? "text-accent" : "text-primary hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center justify-center w-10 h-10 text-2xl rounded-full transition-all duration-300 ${
                  language === lang.code
                    ? "bg-accent scale-110 shadow-lg ring-2 ring-accent/50"
                    : "bg-secondary hover:bg-accent/20 hover:scale-105"
                }`}
                title={lang.label}
                aria-label={`Switch to ${lang.label}`}
              >
                <Image src={lang.src} alt={lang.alt} width={28} height={28} className="w-7 h-7 rounded-full object-cover" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Bottom Sheet) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
            {/* Overlay */}
            <button
              aria-label="Close menu"
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Sheet */}
            <div className="fixed inset-0 bg-white shadow-2xl animate-slide-up focus:outline-none flex flex-col">
              {/* Handle + Close */}
              <div className="flex items-center justify-between px-5 pt-4 pb-2">
                <span className="mx-auto h-1.5 w-12 rounded-full bg-secondary" aria-hidden="true" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Fermer le menu"
                  className="absolute right-3 top-3 w-11 h-11 grid place-items-center rounded-full bg-secondary hover:bg-secondary/80 active:scale-95 transition transform duration-150"
                >
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="px-5 pb-24 pt-2 overflow-y-auto flex-1">
                {/* Nav links */}
                <nav className="flex flex-col divide-y divide-secondary/60" aria-label="Primary">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    const sideBorder = isRTL ? "border-r-2 pr-3" : "border-l-2 pl-3";
                    const sideBorderColor = isActive ? "border-accent" : "border-transparent";
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`group flex items-center gap-3 py-5 text-xl leading-8 ${
                          isActive ? "text-accent" : "text-primary"
                        } ${sideBorder} ${sideBorderColor} focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/20 transition-colors hover:bg-secondary/40 rounded-lg px-3`}
                      >
                        <span className="flex-1 font-semibold tracking-wide">{link.label}</span>
                        <svg className="w-4 h-4 text-secondary-gray opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          {isRTL ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
                        </svg>
                      </Link>
                    );
                  })}
                </nav>

                {/* Language selector */}
                <div className="mt-6 border-t border-secondary pt-4">
                  <div className="rounded-xl border border-secondary bg-secondary/40 p-2">
                    <div className="flex items-center justify-center gap-3" role="group" aria-label="Language selector">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang.code)}
                          className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200 ${
                            language === lang.code
                              ? "bg-white shadow ring-2 ring-accent/50"
                              : "hover:bg-white/70"
                          }`}
                          title={lang.label}
                          aria-pressed={language === lang.code}
                          aria-label={`Switch to ${lang.label}`}
                        >
                          <Image src={lang.src} alt={lang.alt} width={22} height={22} className="w-5 h-5 rounded-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
