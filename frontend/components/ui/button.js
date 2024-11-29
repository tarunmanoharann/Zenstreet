// ./components/ui/button.js
import React from 'react';

export const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-white text-blue-500 font-bold py-2 px-4 rounded-3xl ${className}`}
    {...props}
  >
    {children}
  </button>
);