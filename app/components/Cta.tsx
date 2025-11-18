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

// CTA Component
export const CTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Your Free Project Quote Today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Have an idea for a project? We'd love to hear about it. Contact us
            for a no-obligation consultation and quote.
          </p>
          <div className="mt-8">
            <Button href="/#contact" variant="primary" className="text-lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};