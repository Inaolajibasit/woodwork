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
import Button from './Button';
// import { Button } from './Button';


// Hero Component
export const Hero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.0, ease: 'easeIn' }}
      className="relative overflow-hidden min-h-[700px] bg-gray-900 text-white"
    >
      {/* Background Image */}
      <img
        src="/bg (1).jpg"
        alt="Carpentry workshop"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-amber-600 px-4 py-1 text-sm font-semibold">
            Your Vision, Our Craftsmanship
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Custom Cabinetry & Fine Woodworking
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            From timeless furniture to breathtaking built-ins, we bring your
            ideas to life with precision, passion, and unparalleled quality.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href="/#gallery"
              variant="primary"
              className="text-lg shadow-lg"
            >
              Explore Our Work
            </Button>
            <Button
              variant="outline"
              className="text-lg text-white border-white hover:bg-white hover:text-gray-900"
              href="/#contact"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};