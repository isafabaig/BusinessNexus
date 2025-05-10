'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/navbar';
import { motion } from 'framer-motion';

const heading = "Welcome to Business Nexus";

const Home = () => {
  return (
    <main>
      <Navbar />
      <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/image/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-bus.jpg"
          alt="Business background"
          fill
          priority
          className="object-cover z-[-2] opacity-40"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-950 z-[-1] opacity-60" />

        {/* Overlay Content */}
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-3xl sm:text-5xl font-semibold mb-4 bg-gradient-to-r from-blue-950 via-blue-800 to-white text-transparent bg-clip-text transition-all duration-500 flex flex-wrap justify-center">
            {heading.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <p className="text-sm sm:text-xl mb-8 text-gray-100">
            Empowering businesses with innovative solutions and unparalleled expertise.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
