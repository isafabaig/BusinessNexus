'use client'

import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">Business Nexus</h2>
        <nav className="space-y-2">
          <Link href="/dashboard/investor" className="block">Investor Dashboard</Link>
          <Link href="/dashboard/entrepreneur" className="block">Entrepreneur Dashboard</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}