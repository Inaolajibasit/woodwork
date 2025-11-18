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

// Define the type for a testimonial
interface Testimonial {
  quote: string;
  name: string;
  project: string;
}

// Testimonials Component
export const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Define testimonial items data
  const testimonialItems: Testimonial[] = [
    {
      quote:
        'The kitchen cabinets are beyond what we dreamed. The quality and attention to detail are just incredible. True artisans!',
      name: 'Sarah & Tom L.',
      project: 'Kitchen Remodel',
    },
    {
      quote:
        'I commissioned a custom walnut desk and it is the centerpiece of my home office. The finish is flawless. Highly recommend.',
      name: 'Mark R.',
      project: 'Custom Desk',
    },
    {
      quote:
        'From the design to the installation of our library, the entire process was professional and seamless. The final result is breathtaking.',
      name: 'Emily C.',
      project: 'Library Built-ins',
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-gray-50 py-24 sm:py-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See What Our Clients Say
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonialItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-white p-8 shadow-lg"
            >
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="flex-grow text-gray-600 italic">"{item.quote}"</p>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <h4 className="text-md font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">{item.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};