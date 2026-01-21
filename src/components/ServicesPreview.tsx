import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONSULTING_SERVICES } from '@/data/brand';

export default function ServicesPreview() {
  // Show first 4 services in preview
  const previewServices = CONSULTING_SERVICES.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-linen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-4">
            How We Help
          </h2>
          <p className="font-sans text-greige max-w-2xl mx-auto">
            Design consulting that provides clarity without complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {previewServices.map((service, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-ivory/60 border border-stone/30"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-stone/50 text-clay text-sm font-sans">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="font-sans text-ink text-sm leading-relaxed">
                {service}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-2 text-ink font-sans text-sm font-medium hover:text-clay transition-colors duration-300"
          >
            View all services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
