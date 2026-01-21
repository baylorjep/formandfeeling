'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { BRAND } from '@/data/brand';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    timeline: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build email body from form data
    const subject = `Form & Feeling Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}`;
    
    // Open default email client with pre-filled content
    const mailtoLink = `mailto:nicole_harker@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto">
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
            Begin the Conversation
          </h1>
          
          <p className="prose-editorial text-base sm:text-lg text-ink/90 leading-relaxed max-w-2xl">
            Ready to bring clarity and intention to your space? Tell us about your project 
            and we&apos;ll be in touch to discuss how {BRAND.name} can help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-linen">
        <div className="max-w-5xl mx-auto pt-6 sm:pt-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-ink mb-6 sm:mb-8">
                Tell Us About Your Project
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-sans text-sm font-medium text-ink mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-ivory border border-stone/50 focus:border-clay focus:outline-none font-sans text-sm text-ink transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-sans text-sm font-medium text-ink mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-ivory border border-stone/50 focus:border-clay focus:outline-none font-sans text-sm text-ink transition-colors duration-300"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block font-sans text-sm font-medium text-ink mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ivory border border-stone/50 focus:border-clay focus:outline-none font-sans text-sm text-ink transition-colors duration-300"
                      >
                        <option value="">Select project type</option>
                        <option value="single-room">Single Room Consultation</option>
                        <option value="multi-room">Multiple Rooms</option>
                        <option value="whole-home">Whole Home Direction</option>
                        <option value="specific-question">Specific Design Question</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block font-sans text-sm font-medium text-ink mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ivory border border-stone/50 focus:border-clay focus:outline-none font-sans text-sm text-ink transition-colors duration-300"
                      >
                        <option value="">When are you looking to start?</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="exploring">Just exploring options</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-sans text-sm font-medium text-ink mb-2">
                      About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-ivory border border-stone/50 focus:border-clay focus:outline-none font-sans text-sm text-ink transition-colors duration-300 resize-none"
                      placeholder="Tell us about your space, your goals, and what kind of guidance would be most helpful..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Send Message
                  </button>
                </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-light text-ink mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-ivory border border-stone/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-clay" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-medium text-ink mb-1">
                      Email
                    </h3>
                    <a 
                      href="mailto:nicole_harker@yahoo.com"
                      className="font-sans text-greige hover:text-ink transition-colors duration-300 text-sm"
                    >
                      nicole_harker@yahoo.com
                    </a>
                    <p className="font-sans text-xs text-greige/70 mt-1">
                      We respond within 2 business days
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-ivory border border-stone/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-clay" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-medium text-ink mb-1">
                      Based In
                    </h3>
                    <p className="font-sans text-greige text-sm">
                      Utah
                    </p>
                    <p className="font-sans text-xs text-greige/70 mt-1">
                      Virtual consultations available nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-12 p-6 bg-ivory border border-stone/30">
                <h3 className="font-serif text-lg text-ink mb-4">
                  What Happens Next
                </h3>
                <ul className="space-y-3 font-sans text-greige text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-clay">01</span>
                    <span>We review your project details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay">02</span>
                    <span>We schedule an introductory call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay">03</span>
                    <span>We discuss your goals and recommend next steps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
