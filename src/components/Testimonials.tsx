'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/brand';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-ink text-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
            Client Stories
          </h2>
          <p className="font-sans text-taupe text-sm sm:text-base">
            What our clients say about working with Form & Feeling
          </p>
        </div>

        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-20">
            <Quote className="w-16 h-16 text-taupe" />
          </div>

          {/* Testimonial Content */}
          <div className="text-center px-4 sm:px-12">
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-8 text-ivory/90">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="mb-8">
              <p className="font-sans text-base text-ivory font-medium">
                {testimonial.author}
              </p>
              <p className="font-sans text-sm text-taupe">
                {testimonial.project}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center border border-taupe/30 text-taupe hover:text-ivory hover:border-ivory transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-clay' : 'bg-taupe/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center border border-taupe/30 text-taupe hover:text-ivory hover:border-ivory transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
