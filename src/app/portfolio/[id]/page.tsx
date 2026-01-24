import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Layers, Check } from 'lucide-react';
import { projects, getProjectById } from '@/data/projects';
import CTASection from '@/components/CTASection';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(parseInt(id));
  
  if (!project) {
    return {
      title: 'Project Not Found | Form & Feeling',
    };
  }

  return {
    title: `${project.title} | Form & Feeling`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/10" />
      </section>

      {/* Header */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-greige hover:text-ink transition-colors duration-300 font-sans text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>

          {/* Category */}
          <div className="mb-3">
            <span className="font-sans text-xs text-clay tracking-wide uppercase">
              {project.category}
            </span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink mb-6">
            {project.title}
          </h1>
          
          <p className="prose-editorial text-base sm:text-lg text-ink/90 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details */}
      {project.details && (
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linen">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* Left Column - Info */}
              <div className="space-y-8">
                {project.details.location && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ivory border border-stone/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-clay" />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-medium text-ink mb-1">
                        Location
                      </h3>
                      <p className="font-sans text-greige text-sm">
                        {project.details.location}
                      </p>
                    </div>
                  </div>
                )}

                {project.details.scope && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ivory border border-stone/30 flex items-center justify-center flex-shrink-0">
                      <Layers className="h-4 w-4 text-clay" />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-medium text-ink mb-1">
                        Scope
                      </h3>
                      <p className="font-sans text-greige text-sm">
                        {project.details.scope}
                      </p>
                    </div>
                  </div>
                )}

                {project.details.services && project.details.services.length > 0 && (
                  <div>
                    <h3 className="font-sans text-sm font-medium text-ink mb-4">
                      Services Provided
                    </h3>
                    <div className="space-y-2">
                      {project.details.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-clay flex-shrink-0" />
                          <span className="font-sans text-sm text-greige">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Approach */}
              {project.details.approach && (
                <div>
                  <h2 className="font-serif text-2xl font-light text-ink mb-6">
                    Our Approach
                  </h2>
                  <p className="prose-editorial text-base text-ink/90 leading-relaxed">
                    {project.details.approach}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection 
        heading="Interested in Similar Results?"
        subheading="Let's discuss how Form & Feeling can provide direction for your space."
        buttonText="Begin the Conversation"
        buttonHref="/contact"
      />
    </main>
  );
}
