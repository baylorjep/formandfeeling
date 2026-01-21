import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICE_PACKAGES } from '@/data/brand';

interface ServicePackagesProps {
  showCTA?: boolean;
}

export default function ServicePackages({ showCTA = true }: ServicePackagesProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-4">
            Service Packages
          </h2>
          <p className="font-sans text-greige max-w-xl mx-auto">
            Three tiers of consulting support, designed to meet you where you are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {SERVICE_PACKAGES.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`relative p-6 sm:p-8 border transition-all duration-300 hover:border-clay/50 ${
                index === 1 
                  ? 'bg-linen border-stone/50 md:-mt-4 md:mb-4' 
                  : 'bg-ivory border-stone/30'
              }`}
            >
              {/* Package indicator */}
              <div className="text-clay text-xs font-sans tracking-wide uppercase mb-4">
                {pkg.ideal}
              </div>
              
              {/* Package name */}
              <h3 className="font-serif text-2xl text-ink mb-4">
                {pkg.name}
              </h3>
              
              {/* Description */}
              <p className="font-sans text-greige text-sm leading-relaxed mb-6">
                {pkg.description}
              </p>
              
              {/* Divider */}
              <div className="h-px bg-stone/30 mb-6" />
              
              {/* CTA */}
              {showCTA && (
                <Link 
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-ink font-sans text-sm font-medium hover:text-clay transition-colors duration-300"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
