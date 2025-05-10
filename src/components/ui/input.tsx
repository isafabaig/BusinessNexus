import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return <input className="w-full border p-2 rounded" {...props} />;
}