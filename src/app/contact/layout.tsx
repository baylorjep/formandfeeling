import { Metadata } from 'next';
import { SEO } from '@/data/brand';

export const metadata: Metadata = {
  title: SEO.contact.title,
  description: SEO.contact.description,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
