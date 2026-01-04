"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">M.M Design d'intérieur</h3>
            <p className="text-secondary-gray text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-gray hover:text-accent transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-gray hover:text-accent transition-colors text-sm">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-gray hover:text-accent transition-colors text-sm">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-secondary-gray hover:text-accent transition-colors text-sm">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-gray hover:text-accent transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-secondary-gray">
              <li>{t.contact.info.address}</li>
              <li>
                <a href={`tel:${t.contact.info.phone}`} className="hover:text-accent transition-colors">
                  {t.contact.info.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${t.contact.info.email}`} className="hover:text-accent transition-colors">
                  {t.contact.info.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-sm text-secondary-gray">
          <p>
            © {currentYear} M.M Design d'intérieur. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
