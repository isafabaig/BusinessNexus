
'use client';
import { useEffect, useState } from 'react';

type Entrepreneur = {
  id: number;
  name: string;
  startup: string;
  pitch: string;
};

export default function InvestorDashboard() {
  const [entrepreneurs, setEntrepreneurs] = useState<Entrepreneur[]>([]);

  useEffect(() => {
    fetch('/data/entrepreneurs.json')
      .then((res) => res.json())
      .then((data) => setEntrepreneurs(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Entrepreneurs</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {entrepreneurs.map((e) => (
          <div key={e.id} className="border p-4 rounded bg-white shadow">
            <h2 className="text-lg font-semibold">{e.name}</h2>
            <p>{e.startup}</p>
            <p className="text-sm text-gray-600 mt-2">{e.pitch}</p>
            <a
              href={`/profile/entrepreneur/${e.id}`}
              className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded"
            >
              View Full Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
