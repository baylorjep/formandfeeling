import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'default' | 'minimal';
}

export default function CTASection({
  heading = 'Begin the Conversation',
  subheading = "Ready to bring clarity to your space? Let's discuss how we can help.",
  buttonText = 'Get in Touch',
  buttonHref = '/contact',
  variant = 'default',
}: CTASectionProps) {
  if (variant === 'minimal') {
    return (
      <section className="py-16 px-4 bg-ivory border-t border-stone/30">
        <div className="max-w-2xl mx-auto text-center">
          <Link 
            href={buttonHref}
            className="group inline-flex items-center gap-3 font-serif text-2xl md:text-3xl text-ink hover:text-clay transition-colors duration-300"
          >
            {heading}
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-ink text-ivory">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light mb-4">
          {heading}
        </h2>
        
        <p className="font-sans text-taupe text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto">
          {subheading}
        </p>
        
        <Link 
          href={buttonHref}
          className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-ivory text-ink font-sans text-sm font-medium tracking-wide hover:bg-taupe transition-colors duration-300"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
