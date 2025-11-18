"use client"; // Needs to be a client component for state and clicks

import { useState } from 'react';
import Link from 'next/link'; // Import next/link for App Router navigation
import { Menu, X, Hammer } from 'lucide-react';
import Button from './Button'; // Assuming you have this

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/pages/About' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Click handler to close the mobile menu
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith('/#')) {
      // For hash links, close the menu and let NextLink handle scrolling
      setIsMenuOpen(false);
    } else {
      // For page links, just close the menu
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Hammer className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">
              Wood-Works
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-600 transition-colors hover:text-amber-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            {/* Button component needs to handle 'href' prop and render a Link */}
            <Button href="/#contact" variant="primary" className="shadow-md">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute z-40 w-full bg-white shadow-xl md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-lg px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-600"
              >
                {item.name}
              </Link>
            ))}
            <Button
              href="/#contact"
              variant="primary"
              className="w-full"
              onClick={(e) => handleNavClick(e as any, '/#contact')}
            >
              Get a Free Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;