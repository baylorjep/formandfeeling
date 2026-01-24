import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { ABOUT_FORM_FEELING, ABOUT_NICOLE, SEO, BRAND } from '@/data/brand';

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
};

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-greige hover:text-ink transition-colors duration-300 font-sans text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Home
            </Link>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink mb-4">
            About
          </h1>
        </div>
      </section>

      {/* About Form & Feeling */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linen">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-ink mb-8 sm:mb-10">
            About {BRAND.name}
          </h2>
          
          <div className="space-y-6 max-w-3xl">
            {ABOUT_FORM_FEELING.map((paragraph, index) => (
              <p 
                key={index}
                className="prose-editorial text-lg text-ink/90 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* About Nicole */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            {/* Portrait Section */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-stone/20 relative">
                <Image
                  src="/images/nicole.jpeg"
                  alt="Nicole Harker, founder of Form & Feeling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>
            </div>

            {/* Bio Section */}
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-ink mb-6 sm:mb-8">
                Meet Nicole
              </h2>
              
              <p className="prose-editorial text-lg text-ink/90 leading-relaxed mb-8">
                {ABOUT_NICOLE}
              </p>

              {/* Approach highlights */}
              <div className="space-y-4 mt-10">
                <h3 className="font-serif text-xl text-ink mb-4">
                  How Nicole Works
                </h3>
                
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-clay rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="font-sans text-ink/80 text-sm leading-relaxed">
                    <span className="text-ink font-medium">Collaborative:</span> Your vision is the foundation. Nicole listens first, advises second.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-clay rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="font-sans text-ink/80 text-sm leading-relaxed">
                    <span className="text-ink font-medium">Practical:</span> Clear frameworks and actionable guidance, not abstract concepts.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-clay rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="font-sans text-ink/80 text-sm leading-relaxed">
                    <span className="text-ink font-medium">Empowering:</span> The goal is your confidence, not your dependence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        heading="Let's Work Together"
        subheading="Ready to bring clarity and intention to your space?"
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
