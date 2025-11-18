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

// About Component (Homepage Section)
export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-24 sm:py-32 bg-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Text Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              About Us
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Award-Winning Craftsmanship & Design
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              For over 20 years, Wood-Works has been the premier choice for
              discerning homeowners and designers. We aren't just builders; we
              are artisans dedicated to the timeless beauty of wood.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 shrink-0 text-green-500" />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Bespoke Design Process:
                  </strong>{' '}
                  Tailored solutions that perfectly fit your space and style.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 shrink-0 text-green-500" />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Master-Level Artistry:
                  </strong>{' '}
                  Meticulous attention to detail, from dovetail joints to
                  hand-rubbed finishes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 shrink-0 text-green-500" />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Premium Materials:
                  </strong>{' '}
                  We source only the finest hardwoods and sustainable
                  materials.
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <Button href="pages/About" variant="primary">
                Read Our Full Story
              </Button>
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="bg (2).jpg"
              alt="Detailed woodworking joint"
              className="aspect-square w-full rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <img
              src="bg (3).jpg"
              alt="Carpenter working in shop"
              className="aspect-square w-full rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};