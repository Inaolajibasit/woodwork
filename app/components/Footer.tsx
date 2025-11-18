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




// Footer Component
export const Footer: React.FC = () => {
  const footerNav = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
  ];

  // Auto-scroll for hash links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Column 1: Logo & About */}
          <div className="md:col-span-1">
            <a
              href="/"
              className="flex items-center gap-2"
              onClick={(e) => handleNavClick(e, '/')}
            >
              <Hammer className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-white">
                Wood-Works
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              Crafting heirloom-quality woodworking for over 20 years.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 transition-colors hover:text-white"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base transition-colors hover:text-white"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@wood-works.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>
                  123 Workshop Way,
                  <br />
                  Woodland, WA 98674
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Quote */}
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Start Your Project
            </h3>
            <p className="mt-4 text-sm">
              Get a free, no-obligation quote for your custom project.
            </p>
            <form className="mt-4">
              <label htmlFor="email-footer" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email-footer"
                placeholder="Enter your email"
                className="w-full rounded-md border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-amber-500 focus:ring-amber-500"
              />
              <Button
                variant="primary"
                className="mt-3 w-full"
                onClick={(e) => e.preventDefault()}
              >
                Get Quote
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Wood-Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};