"use client";

import { useEffect, useState } from "react";

interface Booking {
  _id: string;
  serviceType: string;
  service: string;
  date: string;
  time: string;
  format: string;
  name: string;
  phone: string;
  email: string;
  communication: string;
  notes: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const url = filter === "all" ? "/api/bookings" : `/api/bookings?status=${filter}`;
      const res = await fetch(url);
      const data = await res.json();
      setBookings(data.data || []);
    } catch (e) {
      console.error("Failed to fetch bookings:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [filter]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchBookings();
    } catch (e) {
      console.error("Failed to update booking:", e);
    }
  };

  const deleteBooking = async (id: string) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    try {
      await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      fetchBookings();
    } catch (e) {
      console.error("Failed to delete booking:", e);
    }
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "cancelled": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">Bookings</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Manage counseling and consultancy session requests.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex gap-2">
        {["all", "pending", "confirmed", "cancelled"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === status
                ? "bg-[#4a9e6e] text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4a9e6e] border-t-transparent" />
          </div>
        ) : bookings.length === 0 ? (
          <div className="py-12 text-center text-zinc-500 dark:text-zinc-400">
            No bookings found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 font-medium text-zinc-600 dark:text-zinc-400">Name</th>
                  <th className="px-4 py-3 font-medium text-zinc-600 dark:text-zinc-400">Service</th>
                  <th className="px-4 py-3 font-medium text-zinc-600 dark:text-zinc-400">Date</th>
                  <th className="px-4 py-3 font-medium text-zinc-600 dark:text-zinc-400">Phone</th>
                  <th className="px-4 py-3 font-medium text-zinc-600 dark:text-zinc-400">Status</th>
                  <th className="px-4 py-3 font-medium text-zinc-600 dark:text-zinc-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700">
                {bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-zinc-50 dark:hover:bg-zinc-700/50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-[#1e3a5f] dark:text-white">{booking.name}</p>
                      <p className="text-xs text-zinc-500">{booking.email}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-zinc-700 dark:text-zinc-300">{booking.service}</p>
                      <p className="text-xs text-zinc-500">{booking.serviceType}</p>
                    </td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{booking.date}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{booking.phone}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        {booking.status === "pending" && (
                          <button
                            onClick={() => updateStatus(booking._id, "confirmed")}
                            className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
                          >
                            Confirm
                          </button>
                        )}
                        {booking.status !== "cancelled" && (
                          <button
                            onClick={() => updateStatus(booking._id, "cancelled")}
                            className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400"
                          >
                            Cancel
                          </button>
                        )}
                        <button
                          onClick={() => deleteBooking(booking._id)}
                          className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
