import React from 'react';
// import Link from 'next/link'; // Link is not available in this environment

// We extend ButtonHTMLAttributes to get standard props like onClick, type, disabled, etc.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string; // This optional prop was missing, causing your error
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) => {
  const baseStyle =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform text-center inline-block cursor-pointer';
  
  const styles = {
    primary:
      'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg focus:ring-4 focus:ring-amber-300',
    secondary:
      'bg-gray-800 text-white hover:bg-gray-900 hover:shadow-lg focus:ring-4 focus:ring-gray-300',
    outline:
      'bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-orange',
  };

  const fullClassName = `${baseStyle} ${styles[variant]} ${className}`;

  // If an 'href' is provided, render a standard <a> tag instead of Next.js Link
  // This ensures compatibility with the preview environment
  if (href) {
    return (
      <a href={href} className={fullClassName}>
        {children}
      </a>
    );
  }

  // Otherwise, render a standard HTML button
  return (
    <button className={fullClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;