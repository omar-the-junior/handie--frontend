import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'rounded' | 'simple' | 'unstyled';
  id: string;
  className?: string;
}

const baseClasses =
  'shadow-sm text-sm font-medium font-poppins ring-primary focus:outline-none placeholder:font-medium placeholder:text-neutral';

const variantClasses = {
  rounded:
    'rounded-md border border-charcoal focus:ring-primary focus:border-primary',
  simple:
    'border-x-0 border-b-2 border-t-0 border-neutral pl-0 focus:ring-transparent shadow-none ring-charcoal focus:ring-charcoal ring-0 focus:ring-0 focus:border-primary',
  unstyled:
    'border-0 shadow-none focus:ring-transparent focus:border-transparent p-0',
};

const Input = ({
  variant = 'rounded',
  className,
  id,
  ...props
}: InputProps) => {
  const inputClasses = twMerge(baseClasses, variantClasses[variant], className);
  return <input id={id} className={inputClasses} {...props} />;
};

export default Input;
