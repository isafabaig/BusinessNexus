'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { entrepreneurs } from '../../../../../public/data/entrepreneurs';
import ChatModal from '@/components/ChatModal'; // make sure this works
import Image from 'next/image';

const EntrepreneurAccount = () => {
  const { id } = useParams();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const entrepreneur = entrepreneurs.find((e) => e.id === id);

  if (!entrepreneur) {
    return <p className="p-6 text-red-500">No Entrepreneur profile found.</p>;
  }

  return (
    <div className="flex h-screen text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 p-6 space-y-6">
        <h1 className="text-xl font-bold">Entrepreneur Panel</h1>
        <ul className="space-y-4">
          <li><a href="#" className="hover:text-yellow-400">Dashboard</a></li>
          <li><a href="#" className="hover:text-yellow-400">Portfolio</a></li>
          <li>
            <button onClick={() => setIsProfileOpen(true)} className="hover:text-yellow-400 cursor-pointer">Profile</button>
          </li>
          <li>
            <button onClick={() => setIsChatOpen(true)} className="hover:text-yellow-400 cursor-pointer">Chat</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white text-gray-900 p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome, {entrepreneur.name}</h2>
        <p className="text-lg text-gray-600">{entrepreneur.description}</p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Quick Info</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Email: <a href={`mailto:${entrepreneur.email}`} className="text-blue-500">{entrepreneur.email}</a></li>
            <li>Phone: {entrepreneur.phone}</li>
            <li>Website: <a href={entrepreneur.website} className="text-blue-500" target="_blank">{entrepreneur.website}</a></li>
          </ul>
        </div>
      </div>

      {/* Profile Modal */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button onClick={() => setIsProfileOpen(false)} className="absolute top-2 right-3 text-gray-500">✕</button>
            <div className="flex flex-col items-center">
              <Image
                src={entrepreneur.profileImage}
                alt={entrepreneur.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">{entrepreneur.name}</h2>
              <p className="text-gray-600">{entrepreneur.role}</p>
              <p className="mt-4 text-center">{entrepreneur.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {isChatOpen && <ChatModal onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default EntrepreneurAccount;
