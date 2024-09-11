import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

function Button({ className, children }: ButtonProps) {
  return (
    <button className={twMerge('bg-primary rounded-2xl px-20 py-6', className)}>
      {children || 'Click me'}
    </button>
  );
}

export default Button;
