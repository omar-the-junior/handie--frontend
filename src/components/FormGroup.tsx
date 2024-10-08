import { ReactNode, FieldsetHTMLAttributes } from 'react';

interface FormGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  title: string;
  children: ReactNode;
}

function FormGroup({ title, children, className, ...props }: FormGroupProps) {
  return (
    <fieldset className={className} {...props}>
      <legend className="h4 font-semibold">{title}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
