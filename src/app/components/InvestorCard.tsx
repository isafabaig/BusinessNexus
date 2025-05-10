'use client';

import Link from 'next/link';

interface InvestorCardProps {
  id: string;
  name: string;
  interests: string;
  portfolio: string;
}

export default function InvestorCard({
  id,
  name,
  interests,
  portfolio,
}: InvestorCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">Investment Interests: {interests}</p>
        <p className="text-sm mt-2">Portfolio: {portfolio}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <Link
          href={`/profile/investor/${id}`}
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
        >
          View Profile
        </Link>
        <Link
          href={`/chat/${id}`}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          💬 Message
        </Link>
      </div>
    </div>
  );
}
