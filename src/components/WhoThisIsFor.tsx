import { WHO_THIS_IS_FOR } from '@/data/brand';
import { Check } from 'lucide-react';

interface WhoThisIsForProps {
  variant?: 'default' | 'compact';
  showHeading?: boolean;
}

export default function WhoThisIsFor({ 
  variant = 'default',
  showHeading = true 
}: WhoThisIsForProps) {
  const items = variant === 'compact' ? WHO_THIS_IS_FOR.slice(0, 4) : WHO_THIS_IS_FOR;

  return (
    <section className={`px-4 sm:px-6 bg-linen ${variant === 'compact' ? 'py-12 sm:py-16' : 'py-16 sm:py-24'}`}>
      <div className="max-w-4xl mx-auto">
        {showHeading && (
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-ink mb-4">
              Who This Is For
            </h2>
            <p className="font-sans text-greige text-sm sm:text-base max-w-xl mx-auto">
              Our consulting services are designed for clients who value guidance over handholding.
            </p>
          </div>
        )}

        <div className={`grid ${variant === 'compact' ? 'sm:grid-cols-2' : 'sm:grid-cols-2'} gap-3 sm:gap-4`}>
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-ivory/70 border border-stone/20"
            >
              <Check className="flex-shrink-0 w-5 h-5 text-clay mt-0.5" />
              <p className="font-sans text-ink text-sm leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
