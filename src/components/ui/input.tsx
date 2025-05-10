import { InputHTMLAttributes } from 'react';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="w-full border p-2 rounded" {...props} />;
}
