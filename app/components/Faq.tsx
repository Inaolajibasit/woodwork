"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Menu,
  X,
  Hammer,
  Palette,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Star,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import  Button  from './Button';

// Define the type for a FAQ item
interface FaqItem {
  question: string;
  answer: string;
}

// FAQ Component
export const FAQ: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Define FAQ items data
  const faqItems: FaqItem[] = [
    {
      question: 'What is your process for a custom project?',
      answer:
        'Our process begins with a consultation to understand your vision. We then move to design and material selection, followed by crafting in our workshop, and finally, professional installation in your home.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on complexity. Custom cabinetry for a kitchen typically takes 8-12 weeks from design approval to installation. We provide a detailed timeline with every quote.',
    },
    {
      question: 'What kind of materials do you use?',
      answer:
        'We use high-quality, solid hardwoods like walnut, oak, maple, and cherry, as well as premium-grade plywoods for stability. We also work with sustainable and reclaimed materials upon request.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-white py-24 sm:py-32"
    >
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            FAQ
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-6 w-6 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};