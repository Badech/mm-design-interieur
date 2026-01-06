"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isRTL = language === "ar";

  const closeMenu = useCallback(() => {
    if (!isMobileMenuOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsMobileMenuOpen(false);
    }, 300);
  }, [isMobileMenuOpen]);

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
  }, [isMobileMenuOpen, closeMenu]);

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
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
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
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-center overflow-x-auto whitespace-nowrap">
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
                    className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} h-0.5 bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0" dir="ltr">
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
                <Image src={lang.src} alt={lang.alt} width={28} height={28} className="w-7 h-7 rounded-full object-contain" unoptimized />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-primary min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open menu"
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
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </nav>
    </header>

    {/* Mobile Menu Portal (Outside header for proper z-index) */}
    {isMobileMenuOpen && (
      <div className="lg:hidden fixed inset-0 z-[9999] overflow-hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
        {/* Backdrop handles outside click */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300" 
          aria-hidden="true" 
          onClick={closeMenu}
        />

        {/* Side Drawer Panel */}
        <div
          className={`fixed top-0 ${isRTL ? "left-0" : "right-0"} bottom-0 h-screen w-[85vw] max-w-sm bg-white shadow-2xl focus:outline-none flex flex-col ${
            isRTL 
              ? (isClosing ? "animate-mobile-menu-exit-rtl" : "animate-mobile-menu-rtl")
              : (isClosing ? "animate-mobile-menu-exit-ltr" : "animate-mobile-menu-ltr")
          }`}
          onClick={(e) => e.stopPropagation()}
        >
              {/* Drawer Header with Close Button */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
                <span className="text-lg font-heading font-bold text-primary">{t.common.menu}</span>
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="p-2 rounded-full hover:bg-secondary/60 active:bg-secondary/80 transition min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
                >
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className={`px-6 py-6 flex-1 overflow-y-auto overscroll-contain ${isRTL ? "text-right" : "text-left"}`} aria-label="Primary">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={`block w-full px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
                          isActive ? "text-accent bg-accent/10" : "text-primary hover:bg-secondary/50 active:bg-secondary/70"
                        }`}
                      >
                        <span className="truncate inline-block">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Language selector */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">{t.common.language}</p>
                  <div className="flex items-center gap-4" role="group" aria-label="Language selector" dir="ltr">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-150 ${
                          language === lang.code ? "bg-accent/20 ring-2 ring-accent" : "bg-secondary hover:bg-secondary/60"
                        }`}
                        title={lang.label}
                        aria-pressed={language === lang.code}
                        aria-label={`Switch to ${lang.label}`}
                      >
                        <Image src={lang.src} alt={lang.alt} width={20} height={20} className="w-5 h-5 rounded-full object-contain" unoptimized />
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
        </div>
      </div>
    )}
    </>
  );
}
