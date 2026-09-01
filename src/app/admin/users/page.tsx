"use client";

import { useEffect, useState } from "react";

interface User {
  _id: string;
  email: string;
  name: string;
  role: string;
  isInvited: boolean;
  createdAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ email: "", name: "", role: "user" });
  const [successMsg, setSuccessMsg] = useState("");
  const [warningMsg, setWarningMsg] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data.data || []);
    } catch (e) {
      console.error("Failed to fetch users:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInvite = async () => {
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/users/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setShowForm(false);
        setForm({ email: "", name: "", role: "user" });
        setSuccessMsg(`Invitation email sent to ${data.data.email}`);
        if (data.warning) {
          setWarningMsg(data.warning);
        }
        // Auto-clear messages after 5 seconds
        setTimeout(() => {
          setSuccessMsg("");
          setWarningMsg("");
        }, 5000);
        fetchUsers();
      } else {
        setError(data.error || "Failed to invite user");
      }
    } catch (e) {
      setError("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
            Users
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Manage admin users and invite new ones.
          </p>
        </div>
        <button
          onClick={() => {
            setShowForm(true);
            setSuccessMsg("");
            setWarningMsg("");
            setForm({ email: "", name: "", role: "user" });
          }}
          className="rounded-full bg-[#4a9e6e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3d8a5e]"
        >
          + Invite User
        </button>
      </div>

      {/* Success Toast */}
      {successMsg && (
        <div className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {successMsg}
          </div>
          {warningMsg && (
            <p className="mt-2 text-xs text-yellow-600 dark:text-yellow-400">
              ⚠️ {warningMsg}
            </p>
          )}
        </div>
      )}

      {/* Invite Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-800">
            <h2 className="text-lg font-bold text-[#1e3a5f] dark:text-white">
              Invite New User
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              An invitation email with a password setup link will be sent.
            </p>

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </div>
            )}

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  placeholder="user@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Role
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowForm(false);
                  setError("");
                }}
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-700"
              >
                Cancel
              </button>
              <button
                onClick={handleInvite}
                disabled={submitting}
                className="rounded-lg bg-[#4a9e6e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3d8a5e] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Invitation"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users List */}
      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4a9e6e] border-t-transparent" />
          </div>
        ) : users.length === 0 ? (
          <div className="py-12 text-center text-zinc-500 dark:text-zinc-400">
            No users found. Invite your first user!
          </div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-700">
            {users.map((user) => (
              <div
                key={user._id}
                className="flex items-center justify-between px-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-700/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-bold text-white">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f] dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-sm text-zinc-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      user.isInvited
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                        : user.role === "admin"
                        ? "bg-[#4a9e6e]/10 text-[#4a9e6e]"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    {user.isInvited
                      ? "Pending"
                      : user.role === "admin"
                      ? "Admin"
                      : "User"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
