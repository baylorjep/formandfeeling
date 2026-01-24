import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Terms of Service | Form & Feeling',
  description: 'Terms of Service for Form & Feeling interior design consulting.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-greige hover:text-ink transition-colors duration-300 font-sans text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Home
            </Link>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink mb-4">
            Terms of Service
          </h1>
          
          <p className="font-sans text-greige text-sm">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-linen">
        <div className="max-w-3xl mx-auto pt-8 sm:pt-12">
          <div className="prose prose-ink max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Agreement to Terms
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                By accessing or using the {BRAND.name} website, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Services Description
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                {BRAND.name} provides interior design consulting services, including but not limited 
                to design direction, space planning guidance, and material recommendations. We provide 
                consulting and guidance services only; we do not provide full-service interior design, 
                procurement, or project management services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Intellectual Property
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                All content on this website, including text, images, logos, and design elements, 
                is the property of {BRAND.name} and is protected by copyright and other intellectual 
                property laws. You may not reproduce, distribute, or use any content without our 
                prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Limitation of Liability
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                {BRAND.name} provides design consulting and recommendations only. We are not 
                responsible for the final execution of any design decisions, including but not 
                limited to contractor work, product purchases, or installation. Implementation 
                of our recommendations is at your own discretion and risk.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Confidentiality
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                We respect your privacy and will treat all project information as confidential. 
                We may use anonymized project photos or descriptions in our portfolio with your 
                prior consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Changes to Terms
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will 
                be effective immediately upon posting to this website. Your continued use of 
                the website constitutes acceptance of any changes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Contact
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a 
                  href="mailto:nicole@formandfeeling.design" 
                  className="text-clay hover:text-ink transition-colors"
                >
                  nicole@formandfeeling.design
                </a>
              </p>
            </div>

            <div className="pt-8 border-t border-stone/30">
              <p className="font-sans text-greige text-xs">
                © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
