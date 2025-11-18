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

// Define the type for a gallery image
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

// Gallery Component
export const Gallery: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Define gallery images data
  const images: GalleryImage[] = [
    {
      src: 'bg (4).jpg',
      alt: 'Custom kitchen cabinets',
      category: 'Kitchens',
    },
    {
      src: 'bg (5).jpg',
      alt: 'Library built-in bookcase',
      category: 'Built-ins',
    },
    {
      src: 'bg (6).jpg',
      alt: 'Walnut dining table',
      category: 'Furniture',
    },
  ];

  return (
    <motion.section
      id="gallery"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-24 sm:py-32 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Our Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Recent Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Take a look at some of the custom pieces and spaces we've had the
            pleasure to create for our clients.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#00000042] bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-60"></div>
              <div className="absolute inset-0 flex translate-y-full items-end p-6 transition-transform duration-500 group-hover:translate-y-0">
                <div className="text-white">
                  <span className="text-sm font-semibold uppercase text-amber-300">
                    {image.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="#" variant="primary">
            View Full Gallery
          </Button>
        </div>
      </div>
    </motion.section>
  );
};