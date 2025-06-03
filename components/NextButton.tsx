import React from 'react';
import Link from 'next/link';

interface NextButtonProps {
  disabled: boolean;
  href: string;
  children: React.ReactNode;
}

const NextButton: React.FC<NextButtonProps> = ({ disabled, href, children }) => {
  if (disabled) {
    return (
      <Link href={''} type="button" className="bg-gray-400 text-white py-1 px-4 rounded cursor-not-allowed">
        {children}
      </Link>
    );
  }
  return (
    <Link href={href}>
      <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
        {children}
      </span>
    </Link>
  );
};

export default NextButton;
