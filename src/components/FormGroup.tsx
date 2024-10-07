import { ReactNode } from 'react';

interface FormGroupProps {
  title: string;
  children: ReactNode;
}

function FormGroup({ title, children }: FormGroupProps) {
  return (
    <fieldset className="mb-6">
      <legend className="mb-4 text-xl font-semibold">{title}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
