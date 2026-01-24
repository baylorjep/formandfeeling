import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check } from 'lucide-react';
import ServicePackages from '@/components/ServicePackages';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import CTASection from '@/components/CTASection';
import { SERVICES_INTRO, CONSULTING_SERVICES, SEO } from '@/data/brand';

export const metadata: Metadata = {
  title: SEO.services.title,
  description: SEO.services.description,
};

export default function Services() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beautifully designed interior space"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/20" />
      </section>

      {/* Header */}
      <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-greige hover:text-ink transition-colors duration-300 font-sans text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Home
            </Link>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink mb-6 sm:mb-8">
            Services
          </h1>
          
          <p className="prose-editorial text-base sm:text-lg text-ink/90 leading-relaxed max-w-3xl">
            {SERVICES_INTRO}
          </p>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linen">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-ink mb-8 sm:mb-10">
            Consulting services may include
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {CONSULTING_SERVICES.map((service, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-ivory/80 border border-stone/20"
              >
                <Check className="flex-shrink-0 w-5 h-5 text-clay mt-0.5" />
                <p className="font-sans text-ink text-sm leading-relaxed">
                  {service}
                </p>
              </div>
            ))}
          </div>
          
          <p className="mt-8 font-sans text-sm text-greige italic">
            Services are tailored to your needs and may be combined based on your project scope.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <WhoThisIsFor />

      {/* Service Packages */}
      <ServicePackages />

      {/* CTA */}
      <CTASection 
        heading="Ready to Start?"
        subheading="Every project begins with a conversation. Tell us about your space and vision."
        buttonText="Schedule a Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
