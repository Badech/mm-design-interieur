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
  const [isClosing, setIsClosing] = useState(false);
  const isRTL = language === "ar";

  const closeMenu = () => {
    if (!isMobileMenuOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsMobileMenuOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    // Lock background scroll while mobile menu is open
    const originalOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
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
            onClick={() => (isMobileMenuOpen ? closeMenu() : setIsMobileMenuOpen(true))}
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
          <div className="lg:hidden fixed inset-0 z-[60] bg-transparent" role="dialog" aria-modal="true" aria-label="Mobile navigation menu" onClick={closeMenu}>
            <div className="absolute inset-0 bg-black/40 opacity-100 transition-opacity duration-200" aria-hidden="true" />
            {/* Backdrop handles outside click; no extra button */}

            {/* Simple Sidebar Panel */}
            <div
              className={`fixed top-20 ${isRTL ? (isClosing ? "left-0 animate-mobile-menu-exit-rtl" : "left-0 animate-mobile-menu-rtl") : (isClosing ? "right-0 animate-mobile-menu-exit-ltr" : "right-0 animate-mobile-menu-ltr")} w-screen max-w-none bg-white shadow-xl ring-1 ring-black/5 focus:outline-none flex flex-col` }
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button (X) */}
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className={`absolute top-2 ${isRTL ? 'left-2' : 'right-2'} p-2 rounded-full hover:bg-secondary/60 active:bg-secondary/80 transition`}
              >
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Nav links */}
              <nav className={`px-6 py-8 ${isRTL ? "text-right" : "text-left"}`} aria-label="Primary">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`block w-full px-4 py-4 min-h-[48px] text-lg font-medium transition-colors rounded-lg ${
                          isActive ? "text-accent bg-secondary/50" : "text-primary hover:bg-secondary/30 active:bg-secondary/40"
                        }`}
                      >
                        <span className="truncate inline-block">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Language selector */}
                <div className="mt-6">
                  <div className="flex items-center justify-center gap-2" role="group" aria-label="Language selector">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-150 ${
                          language === lang.code ? "bg-secondary" : "hover:bg-secondary/60"
                        }`}
                        title={lang.label}
                        aria-pressed={language === lang.code}
                        aria-label={`Switch to ${lang.label}`}
                      >
                        <Image src={lang.src} alt={lang.alt} width={20} height={20} className="w-5 h-5 rounded-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
