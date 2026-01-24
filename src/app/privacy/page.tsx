import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy | Form & Feeling',
  description: 'Privacy Policy for Form & Feeling interior design consulting.',
};

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                Information We Collect
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed mb-4">
                When you contact us through our website, we collect the information you provide, including:
              </p>
              <ul className="list-disc list-inside font-sans text-ink/90 text-sm leading-relaxed space-y-2 ml-4">
                <li>Your name and email address</li>
                <li>Information about your project</li>
                <li>Any other details you choose to share</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                How We Use Your Information
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                We use the information you provide solely to respond to your inquiries and to provide 
                our interior design consulting services. We do not sell, rent, or share your personal 
                information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Cookies and Analytics
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                Our website may use cookies and similar technologies to enhance your browsing experience. 
                We may also use analytics services to understand how visitors interact with our site. 
                This data is collected anonymously and is used to improve our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Data Security
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                We take reasonable measures to protect the information you provide from unauthorized 
                access, use, or disclosure. However, no method of transmission over the Internet is 
                completely secure.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Your Rights
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                You have the right to access, correct, or delete your personal information. 
                If you have any questions about your data or wish to exercise these rights, 
                please contact us.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-4">
                Contact Us
              </h2>
              <p className="font-sans text-ink/90 text-sm leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
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
