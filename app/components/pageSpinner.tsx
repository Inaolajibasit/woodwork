"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Spinner = () => (
  <motion.div
    key="spinner"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-white bg-opacity-75 backdrop-blur-sm"
  >
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-amber-600 border-t-transparent"></div>
  </motion.div>
);

export default function PageSpinner() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      setLoading(true);
      
      // We can't perfectly time the end of navigation,
      // so we'll show the spinner for a short duration.
      // A more robust solution might use Suspense.
      const timer = setTimeout(() => {
        setLoading(false);
        setPrevPath(pathname); // Update the path
      }, 300); // 300ms spinner duration

      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath]);

  return (
    <AnimatePresence>
      {loading && <Spinner />}
    </AnimatePresence>
  );
}