import HomeHero from '@/components/HomeHero';
import ServicesPreview from '@/components/ServicesPreview';
import ProcessSteps from '@/components/ProcessSteps';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import { HOMEPAGE_INTRO } from '@/data/brand';

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <HomeHero />

      {/* Introduction Section */}
      <ScrollReveal>
        <section className="py-24 px-4 bg-ivory">
          <div className="max-w-3xl mx-auto text-center">
            <p className="prose-editorial text-lg md:text-xl text-ink/90 leading-relaxed">
              {HOMEPAGE_INTRO}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Subtle Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="divider-subtle" />
      </div>

      {/* Services Preview */}
      <ScrollReveal>
        <ServicesPreview />
      </ScrollReveal>

      {/* Process Steps */}
      <ScrollReveal>
        <ProcessSteps />
      </ScrollReveal>

      {/* Who This Is For - Compact version for homepage */}
      <ScrollReveal>
        <WhoThisIsFor variant="compact" />
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      {/* CTA Section */}
      <CTASection 
        heading="Begin the Conversation"
        subheading="Ready to bring clarity to your space? Let's discuss how Form & Feeling can help."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
