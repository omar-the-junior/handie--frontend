import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  size?: 'small' | 'normal' | 'large';
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'black';
}

const sizeClasses = {
  small: 'px-6 py-4 text-base',
  normal: 'px-12 py-6 text-lg',
  large: 'px-16 py-8 text-2xl',
};

const buttonVariant = {
  primary: {
    solid: 'bg-primary text-white',
    outline: 'bg-transparent border-2 border-primary text-primary',
  },
  black: {
    solid: 'bg-black text-white',
    outline: 'bg-transparent border-2 border-black text-black',
  },
};

function Button({
  className,
  children,
  size = 'normal',
  variant = 'solid',
  color = 'primary',
}: ButtonProps) {
  const sizeClass = sizeClasses[size];
  const variantClass = buttonVariant[color][variant];

  return (
    <button
      className={twMerge('rounded-2xl', sizeClass, variantClass, className)}
    >
      {children || 'Click me'}
    </button>
  );
}

export default Button;
