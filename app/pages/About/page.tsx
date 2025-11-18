"use client"; // For framer-motion animations

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Target, CheckCircle } from 'lucide-react';
import { CTA } from '@/app/components/Cta';


// --- About Page Sections ---
// This is the main body of the "About Us" page.
const AboutPageBody: React.FC = () => {
  const storyRef = useRef(null);
  const philosophyRef = useRef(null);
  const teamRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });
  const philosophyInView = useInView(philosophyRef, {
    once: true,
    amount: 0.2,
  });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });

  const philosophyItems = [
    {
      icon: <Target className="h-8 w-8 text-amber-600" />,
      title: 'Uncompromising Quality',
      description:
        "We use only the finest, sustainably sourced hardwoods and materials. Our work isn't just built, it's crafted to last for generations.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-amber-600" />,
      title: 'Meticulous Craftsmanship',
      description:
        "From hand-cut dovetail joints to flawless finishes, we obsess over every detail. We believe true artistry is in the details you can't see.",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: 'Client-Centric Collaboration',
      description:
        'Your vision is our blueprint. We work closely with you and your designers at every step to ensure the final piece perfectly reflects your style.',
    },
  ];

  const teamMembers = [
    {
      img: 'https://placehold.co/400x400/808080/FFFFFF?text=John+Doe',
      name: 'John Doe',
      title: 'Founder & Master Carpenter',
      bio: 'A second-generation woodworker with over 25 years of experience, John leads every project with a passion for precision and artistry.',
    },
    {
      img: 'https://placehold.co/400x400/A0A0A0/FFFFFF?text=Jane+Smith',
      name: 'Jane Smith',
      title: 'Designer & Project Manager',
      bio: 'Jane bridges the gap between your ideas and our workshop, ensuring a seamless process from initial sketch to final installation.',
    },
    {
      img: 'https://placehold.co/400x400/808080/FFFFFF?text=Mark+Johnson',
      name: 'Mark Johnson',
      title: 'Finishing Specialist',
      bio: 'Mark is our in-house artist, responsible for the custom stains and flawless, hand-rubbed finishes that make every piece unique.',
    },
  ];

  return (
    <>
      {/* 1. About Hero / Our Story */}
      <motion.section
        ref={storyRef}
        initial={{ opacity: 0 }}
        animate={storyInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.0, ease: 'easeIn' }}
        className="relative bg-gray-50 py-24 sm:py-32"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                Our Story
              </span>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                We're Not Just Builders.
                <br />
                We're Artisans.
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                For over 20 years, Wood-Works has been the premier choice for
                discerning homeowners and designers. We aren't just builders; we
                are artisans dedicated to the timeless beauty of wood.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Founded by John Doe, a second-generation woodworker, our
                workshop was born from a simple philosophy: build it right, or
                don't build it at all. This belief in quality, durability, and
                timeless design is at the heart of everything we create, from
                complex kitchen remodels to one-of-a-kind heirloom furniture.
              </p>
            </div>
            <div className="transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://placehold.co/600x500/A0A0A0/FFFFFF?text=Our+Workshop"
                alt="Inside the carpentry workshop"
                className="w-full rounded-lg object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. Our Philosophy */}
      <motion.section
        ref={philosophyRef}
        initial={{ opacity: 0, y: 50 }}
        animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white py-24 sm:py-32"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Our Values
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Guiding Principles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              These core values guide every cut, every joint, and every project
              that leaves our workshop.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {philosophyItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-100 bg-gray-50 p-8 text-center shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. Meet the Team */}
      <motion.section
        ref={teamRef}
        initial={{ opacity: 0, y: 50 }}
        animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-gray-50 py-24 sm:py-32"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Our Team
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Artisans Behind the Work
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We are a small, dedicated team of craftspeople who share a passion
              for woodworking.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="mx-auto h-56 w-56 rounded-full object-cover shadow-lg"
                />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-base font-medium text-amber-600">
                  {member.title}
                </p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Re-usable CTA */}
      <CTA />
    </>
  );
};

// This is the default export for the page
export default function AboutPage() {
  return (
    <main>
      <AboutPageBody />
    </main>
  );
}