import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { BRAND, BRAND_STATEMENT } from '@/data/brand';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="brand-name text-base sm:text-lg tracking-brand mb-4">
              {BRAND.name}
            </h3>
            <p className="text-taupe text-sm leading-relaxed max-w-xs">
              {BRAND.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-sans font-medium tracking-wide mb-6 text-ivory">
              Explore
            </h4>
            <nav className="space-y-3">
              <Link
                href="/services"
                className="block text-taupe hover:text-ivory transition-colors duration-300 text-sm"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block text-taupe hover:text-ivory transition-colors duration-300 text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block text-taupe hover:text-ivory transition-colors duration-300 text-sm"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-taupe hover:text-ivory transition-colors duration-300 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-sans font-medium tracking-wide mb-6 text-ivory">
              Connect
            </h4>
            <div className="space-y-4">
              <Link
                href="https://instagram.com/formandfeeling"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-taupe hover:text-ivory transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm">Instagram</span>
              </Link>
              <Link
                href="mailto:nicole@formandfeeling.design"
                className="flex items-center gap-3 text-taupe hover:text-ivory transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">nicole@formandfeeling.design</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Philosophy & Copyright */}
        <div className="border-t border-ivory/10 mt-10 sm:mt-16 pt-6 sm:pt-8">
          <p className="text-center font-serif text-base sm:text-lg text-taupe/80 mb-4 sm:mb-6 italic px-4">
            {BRAND_STATEMENT.philosophy}
          </p>
          <p className="text-center text-xs text-taupe/60">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
