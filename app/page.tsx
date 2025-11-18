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
  Users,
  Target,
  BookOpen,
} from 'lucide-react';


import {Header} from './components/Header';
import { About } from './components/About';
import {Services} from './components/Service'; // Your file is named Service.tsx
import {CTA} from './components/Cta';
import {Gallery} from './components/Gallery';
import {Testimonials} from './components/Testimonial';
import {FAQ} from './components/Faq';
import Experience from './components/Experience';
import { Hero } from './components/Hero';
import {Footer} from './components/Footer';



// --- Type Definitions ---
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}
interface Testimonial {
  quote: string;
  name: string;
  project: string;
}
interface FaqItem {
  question: string;
  answer: string;
}

// --- Reusable Components ---

// Button Component
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) => {
  const baseStyle =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform text-center inline-block';
  const styles = {
    primary:
      'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg focus:ring-4 focus:ring-amber-300',
    secondary:
      'bg-gray-800 text-white hover:bg-gray-900 hover:shadow-lg focus:ring-4 focus:ring-gray-300',
    outline:
      'bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white',
  };
  const fullClassName = `${baseStyle} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={fullClassName} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={fullClassName} {...props}>
      {children}
    </button>
  );
};

// Header Component


// --- Main App Component (Homepage) ---
export default function Home() {
  // Effect to handle smooth scrolling on initial load if a hash is present
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {/* <Header /> */}
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <CTA />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      {/* <Footer /> */}
    </div>
  );
}