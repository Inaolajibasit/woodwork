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


// Define the type for a service item
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Services Component
export const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Define service items data
  const serviceItems: Service[] = [
    {
      icon: <Hammer className="h-10 w-10 text-amber-600" />,
      title: 'Custom Cabinetry',
      description:
        'Bespoke cabinets for kitchens, bathrooms, and offices, designed to your exact specifications.',
    },
    {
      icon: <Palette className="h-10 w-10 text-amber-600" />,
      title: 'Built-ins & Furniture',
      description:
        'Elegant bookcases, entertainment centers, and one-of-a-kind furniture pieces.',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-amber-600" />,
      title: 'Restoration & Repair',
      description:
        'Breathe new life into antique furniture and architectural woodwork with our expert restoration.',
    },
  ];

  return (
    <motion.section
      id="services"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-24 sm:py-32 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We Offer Quality Carpentry Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our comprehensive services cover every aspect of fine woodworking,
            from initial design to final installation.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="transform rounded-lg border border-gray-100 bg-gray-50 p-8 text-center shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.description}</p>
              <a
                href="#"
                className="mt-6 inline-block font-semibold text-amber-600 transition-colors hover:text-amber-700"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};