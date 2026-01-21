import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '@/data/brand';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        {/* Warm overlay for brand cohesion */}
        <div className="absolute inset-0 bg-ivory/85" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-24 sm:py-32">
        {/* Brand Name */}
        <h1 className="brand-name text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-brand text-ink mb-4 sm:mb-6 animate-fade-in">
          {BRAND.name}
        </h1>
        
        {/* Tagline */}
        <p className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink/80 mb-3 sm:mb-4 animate-slide-up">
          {BRAND.tagline}
        </p>
        
        {/* Descriptor */}
        <p className="font-sans text-sm md:text-base text-greige tracking-wide mb-8 sm:mb-12 animate-slide-up-delayed">
          {BRAND.descriptor}
        </p>
        
        {/* CTA */}
        <div className="animate-slide-up-delayed">
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-3 btn-primary"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
