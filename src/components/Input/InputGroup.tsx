import { ReactElement } from 'react';
import { InputProps } from './Input';
import { twMerge } from 'tailwind-merge';

export interface InputGroupProps {
  label?: string;
  error?: string;
  children: ReactElement<InputProps>;
  className?: string;
}

const InputGroup = ({ label, error, children, className }: InputGroupProps) => {
  return (
    <div className={twMerge('flex flex-col gap-1', className)}>
      {label && (
        <label
          htmlFor={children.props.id}
          className="font-poppins text-sm font-semibold text-charcoal"
        >
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-sm font-medium text-error">{error}</p>}
    </div>
  );
};

export default InputGroup;
