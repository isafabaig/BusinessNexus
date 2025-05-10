'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed z-50 bg-white/80 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/image/logo-removebg-preview.png" 
            alt="Business Nexus Logo" 
            width={100} 
            height={10} 
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className=" text-blue-900 transition ">Home</Link>
          <Link href="{'/About'}" className="text-black hover:text-blue-900 transition">About Us</Link>
          <Link href="{'/Services'}" className="text-black hover:text-blue-900 transition">Services</Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link href={'/login'}>
          <button className="group relative overflow-hidden border px-5 py-2 rounded-full transition bg-white hover:bg-gradient-to-r hover:bg-blue-100 font-medium hover:cursor-pointer">
            Log-in 
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-800">Home</Link>
          <Link href="#about" className="block py-2 text-gray-800">About Us</Link>
          <Link href="#services" className="block py-2 text-gray-800">Services</Link>
          <button className="mt-2 w-full border px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition group">
            Contact us 
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
