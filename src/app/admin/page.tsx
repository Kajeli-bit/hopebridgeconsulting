"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  bookings: number;
  team: number;
  resources: number;
  episodes: number;
  pendingBookings: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [bookings, team, resources, episodes, pending] = await Promise.all([
          fetch("/api/bookings").then((r) => r.json()),
          fetch("/api/team").then((r) => r.json()),
          fetch("/api/resources").then((r) => r.json()),
          fetch("/api/episodes").then((r) => r.json()),
          fetch("/api/bookings?status=pending").then((r) => r.json()),
        ]);
        setStats({
          bookings: bookings.data?.length || 0,
          team: team.data?.length || 0,
          resources: resources.data?.length || 0,
          episodes: episodes.data?.length || 0,
          pendingBookings: pending.data?.length || 0,
        });
      } catch (e) {
        console.error("Failed to fetch stats:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const cards = [
    {
      label: "Total Bookings",
      value: stats?.bookings ?? 0,
      href: "/admin/bookings",
      color: "bg-[#4a9e6e]",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
    {
      label: "Pending Bookings",
      value: stats?.pendingBookings ?? 0,
      href: "/admin/bookings",
      color: "bg-[#d4a843]",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Team Members",
      value: stats?.team ?? 0,
      href: "/admin/team",
      color: "bg-[#1e3a5f]",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      label: "Resources",
      value: stats?.resources ?? 0,
      href: "/admin/resources",
      color: "bg-[#7bc67e]",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      label: "Episodes",
      value: stats?.episodes ?? 0,
      href: "/admin/episodes",
      color: "bg-purple-600",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
        Dashboard
      </h1>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        Welcome to the Hope Bridge admin panel.
      </p>

      {loading ? (
        <div className="mt-12 flex justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4a9e6e] border-t-transparent" />
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {card.label}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white">
                    {card.value}
                  </p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${card.color}`}>
                  {card.icon}
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-[#4a9e6e] transition-all group-hover:gap-1">
                View Details →
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
