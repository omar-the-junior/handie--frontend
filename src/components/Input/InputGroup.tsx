import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputGroupProps {
  label?: string;
  error?: string;
  children: ReactElement;
  className?: string;
}

const InputGroup = ({ label, error, children, className }: InputGroupProps) => {
  return (
    <div className={twMerge('flex flex-col gap-1', className)}>
      {label && (
        <label
          htmlFor={children.props.id}
          className="text-base-r font-poppins font-semibold text-charcoal"
        >
          {label}
          {children.props.required ? (
            <span className="text-alert">*</span>
          ) : (
            <span className="text-neutral"> (Optional)</span>
          )}
        </label>
      )}
      {children}
      {error && <p className="text-sm font-medium text-error">{error}</p>}
    </div>
  );
};

export default InputGroup;
