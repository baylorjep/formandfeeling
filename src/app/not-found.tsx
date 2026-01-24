import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-20 flex items-center justify-center bg-ivory">
      <div className="max-w-xl mx-auto px-4 text-center">
        {/* 404 Display */}
        <div className="mb-8">
          <span className="font-serif text-8xl md:text-9xl font-light text-stone/50">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="font-serif text-3xl md:text-4xl font-light text-ink mb-4">
          Page Not Found
        </h1>
        
        <p className="font-sans text-greige text-base mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          
          <Link 
            href="/contact"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
