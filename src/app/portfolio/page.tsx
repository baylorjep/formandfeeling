'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import CTASection from '@/components/CTASection';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(p => p.category))];
    return cats;
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

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
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-sans text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-ink text-ivory'
                    : 'bg-ivory border border-stone/50 text-greige hover:text-ink hover:border-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id} 
                href={`/portfolio/${project.id}`} 
                className="group block animate-fade-in"
              >
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
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-sans text-greige">No projects found in this category.</p>
            </div>
          )}
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
