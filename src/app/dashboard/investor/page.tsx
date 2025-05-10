'use client';
import { useEffect, useState } from 'react';

type Request = {
  id: number;
  investorId: number;
  status: string;
};

type Investor = {
  id: number;
  name: string;
};

export default function EntrepreneurDashboard() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [investors, setInvestors] = useState<Investor[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('/data/requests.json').then((res) => res.json()),
      fetch('/data/investors.json').then((res) => res.json()),
    ]).then(([reqs, invs]) => {
      setRequests(reqs);
      setInvestors(invs);
    });
  }, []);

  const getInvestor = (id: number) => investors.find((i) => i.id === id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Collaboration Requests</h1>
      <ul className="space-y-4">
        {requests.map((r) => {
          const investor = getInvestor(r.investorId);
          return (
            <li key={r.id} className="p-4 bg-white shadow rounded">
              <p>
                <strong>{investor?.name}</strong> — Request Status:{" "}
                <span className="capitalize">{r.status}</span>
              </p>
              <a
                href={`/profile/investor/${investor?.id}`}
                className="text-blue-500 underline mt-2 inline-block"
              >
                View Investor Profile
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
