import { PROCESS_STEPS } from '@/data/brand';

export default function ProcessSteps() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-4">
            Our Approach
          </h2>
          <p className="font-sans text-greige max-w-xl mx-auto">
            A thoughtful process designed to guide you from vision to clarity.
          </p>
        </div>

        <div className="relative">
          {/* Continuous connector line (desktop only) */}
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-stone/50" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.name} className="relative">
                <div className="relative z-10 text-center">
                  {/* Step number */}
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-linen border border-stone/50 text-clay font-sans text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Step name */}
                  <h3 className="font-serif text-xl text-ink mb-3">
                    {step.name}
                  </h3>
                  
                  {/* Step description */}
                  <p className="font-sans text-sm text-greige leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
