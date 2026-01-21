import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import CTASection from '@/components/CTASection';
import { SEO } from '@/data/brand';

export const metadata: Metadata = {
  title: SEO.portfolio.title,
  description: SEO.portfolio.description,
};

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-greige hover:text-ink transition-colors duration-300 font-sans text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Home
            </Link>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink mb-4 sm:mb-6">
            Design Direction
          </h1>
          
          <p className="prose-editorial text-base sm:text-lg text-ink/90 leading-relaxed max-w-3xl mb-4 sm:mb-6">
            A selection of consulting work and design direction. Each project represents 
            strategic guidance and collaborative decision-making with clients who value 
            clarity and intention in their spaces.
          </p>
          
          <p className="font-sans text-xs sm:text-sm text-greige italic max-w-3xl">
            These projects represent consulting guidance and design direction, not full-service execution.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-linen">
        <div className="max-w-7xl mx-auto pt-6 sm:pt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="aspect-[4/3] bg-stone/20 mb-4 sm:mb-6 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: `url('${project.image}')`
                    }}
                  />
                </div>
                
                <div className="mb-1 sm:mb-2">
                  <span className="font-sans text-xs text-clay tracking-wide uppercase">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-serif text-lg sm:text-xl text-ink mb-2 sm:mb-3 group-hover:text-clay transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="font-sans text-greige text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        heading="Interested in Working Together?"
        subheading="Let's discuss how Form & Feeling can provide direction for your space."
        buttonText="Begin the Conversation"
        buttonHref="/contact"
      />
    </main>
  );
}
