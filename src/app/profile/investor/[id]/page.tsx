'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { investors } from '../../../../../public/data/investor';
import ChatModal from '@/components/ChatModal';

export default function InvestorProfilePage() {
  const { id } = useParams();
  const [investor, setInvestor] = useState<typeof investors[0] | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const found = investors.find((i) => String(i.id) === id);
    setInvestor(found || null);
  }, [id]);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  if (!investor) {
    return <p className="p-6 text-red-500">Investor not found.</p>;
  }

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Investor Profile</h1>
      <div className="flex items-center space-x-8">
        {/* Use Next.js Image component for optimization */}
        <Image
          src={investor.image}
          alt={investor.name}
          width={160}
          height={160}
          className="rounded-full border-4 border-blue-950 object-cover"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">{investor.name}</h2>
          <p className="text-xl text-gray-500">{investor.role}</p>
          <p className="mt-2 text-lg text-gray-600">{investor.bio}</p>
          <div className="mt-4 space-y-2">
            <p>Email: <a href={`mailto:${investor.email}`} className="text-blue-600 hover:underline">{investor.email}</a></p>
            <p>Phone: {investor.phone}</p>
            <p>Website: <a href={investor.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{investor.website}</a></p>
            <p>Organization: {investor.organization}</p>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button
        onClick={openChat}
        className="mt-6 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 cursor-pointer transition duration-300"
      >
        Chat with Investor
      </button>

      {/* Chat Modal */}
      {isChatOpen && <ChatModal onClose={closeChat} />}
    </div>
  );
}