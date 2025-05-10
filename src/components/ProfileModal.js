'use client';

import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

const ProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-black relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/image/investor-1.jpg"
            alt="Investor"
            width={96} 
            height={96}  
            className="rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold">Zara Ahmed</h2>
          <p className="text-sm text-center">Long-term equity investor with 10+ years of experience. Focuses on technology and healthcare sectors.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;