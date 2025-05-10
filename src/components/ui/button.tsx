import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded" {...props}>
      {children}
    </button>
  );
}