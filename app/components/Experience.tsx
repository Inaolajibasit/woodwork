"use client"; // For framer-motion animations

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import  Button  from './Button'; // Import your button component

// Experience Component
const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-gray-50 py-24 sm:py-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Image */}
          <div className="transform transition-transform duration-500 hover:scale-105">
            <img
              src="bg (7).jpg"
              alt="Experienced carpenter working on a piece of furniture"
              className="w-full rounded-lg object-cover shadow-2xl"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="rounded-lg bg-white p-10 shadow-xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              20+ Years of Experience
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience True Craftsmanship
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our founder, John Doe, is a second-generation woodworker who
              believes in quality above all else. This philosophy is at the
              heart of everything we build.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We merge traditional techniques with modern technology to
              create pieces that are both beautiful and built to last a
              lifetime.
            </p>
            <div className="mt-10">
              <Button href="/about" variant="primary">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;