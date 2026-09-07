"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getUserRole, getUserId } from "@/lib/roles";

interface AdminUser {
  _id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

interface UserForm {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const emptyForm: UserForm = { email: "", name: "", password: "", confirmPassword: "", role: "admin" };

export default function UsersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<AdminUser | null>(null);
  const [form, setForm] = useState<UserForm>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const isSuperAdmin = getUserRole(session?.user) === "superadmin";
  const currentUserId = getUserId(session?.user);

  // Redirect non-super admins (defense in depth; nav already hides this page)
  useEffect(() => {
    if (status === "authenticated" && !isSuperAdmin) {
      router.replace("/admin");
    }
  }, [status, isSuperAdmin, router]);

  const fetchUsers = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      if (!data.success) {
        setMessage({ type: "error", text: data.error || "Failed to load users" });
        return;
      }
      setUsers(data.data || []);
    } catch (e) {
      console.error("Failed to fetch users:", e);
      setMessage({ type: "error", text: "Failed to load users" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated" && isSuperAdmin) {
      fetchUsers();
    }
  }, [status, isSuperAdmin]);

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm);
    setMessage(null);
    setShowForm(true);
  };

  const openEdit = (user: AdminUser) => {
    setEditing(user);
    setForm({
      email: user.email,
      name: user.name,
      password: "",
      confirmPassword: "",
      role: user.role,
    });
    setMessage(null);
    setShowForm(true);
  };

  const validate = (): string | null => {
    if (!form.email.trim() || !form.name.trim()) {
      return "Email and name are required";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return "Please enter a valid email address";
    }
    if (editing) {
      // Password is optional when editing
      if (form.password) {
        if (form.password.length < 8) {
          return "Password must be at least 8 characters";
        }
        if (form.password !== form.confirmPassword) {
          return "Passwords do not match";
        }
      }
      return null;
    }
    if (!form.password) {
      return "Password is required";
    }
    if (form.password.length < 8) {
      return "Password must be at least 8 characters";
    }
    if (form.password !== form.confirmPassword) {
      return "Passwords do not match";
    }
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validate();
    if (validationError) {
      setMessage({ type: "error", text: validationError });
      return;
    }

    setSubmitting(true);
    setMessage(null);
    try {
      if (editing) {
        const payload: Record<string, string> = {
          name: form.name.trim(),
          role: form.role,
        };
        if (form.password) {
          payload.password = form.password;
        }
        const res = await fetch(`/api/users/${editing._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!data.success) {
          setMessage({ type: "error", text: data.error || "Failed to update user" });
          setSubmitting(false);
          return;
        }
        setMessage({ type: "success", text: `${form.email.trim()} updated successfully` });
      } else {
        const res = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email.trim(),
            name: form.name.trim(),
            password: form.password,
            role: form.role,
          }),
        });
        const data = await res.json();
        if (!data.success) {
          setMessage({ type: "error", text: data.error || "Failed to create user" });
          setSubmitting(false);
          return;
        }
        setMessage({ type: "success", text: `User ${form.email.trim()} created successfully` });
      }

      setShowForm(false);
      setForm(emptyForm);
      setEditing(null);
      fetchUsers();
    } catch (e) {
      console.error("Failed to save user:", e);
      setMessage({ type: "error", text: "Something went wrong" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (user: AdminUser) => {
    if (!confirm(`Are you sure you want to delete ${user.name} (${user.email})?\n\nThis cannot be undone.`)) {
      return;
    }
    try {
      const res = await fetch(`/api/users/${user._id}`, { method: "DELETE" });
      const data = await res.json();
      if (!data.success) {
        setMessage({ type: "error", text: data.error || "Failed to delete user" });
        return;
      }
      setMessage({ type: "success", text: `${user.email} deleted` });
      fetchUsers();
    } catch (e) {
      console.error("Failed to delete user:", e);
      setMessage({ type: "error", text: "Failed to delete user" });
    }
  };

  // While session is loading, show a spinner
  if (status === "loading" || (status === "authenticated" && !isSuperAdmin)) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4a9e6e] border-t-transparent" />
      </div>
    );
  }

  const isEditingSelf = (user: AdminUser) => user._id === currentUserId;
  const roleLabel = (role: string) =>
    role === "superadmin" ? "Super Admin" : role === "admin" ? "Admin" : "User";

  const badgeColor = (role: string) =>
    role === "superadmin"
      ? "bg-[#1e3a5f] text-white"
      : role === "admin"
      ? "bg-[#4a9e6e]/10 text-[#4a9e6e]"
      : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400";

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">Users</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Create and manage accounts for the admin dashboard. Each user signs in with the email and password you set.
          </p>
        </div>
        <button
          onClick={openAdd}
          className="rounded-full bg-[#4a9e6e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3d8a5e]"
        >
          + Add User
        </button>
      </div>

      {/* Feedback Message */}
      {message && (
        <div
          className={`mt-4 rounded-lg p-4 text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* User Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-800">
            <h2 className="text-lg font-bold text-[#1e3a5f] dark:text-white">
              {editing ? `Edit User: ${editing.name}` : "Add New User"}
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {editing
                ? "Update the name or role, or type a new password to reset it. Leave password blank to keep it unchanged."
                : "The user will be able to sign in to the admin dashboard immediately with these credentials."}
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  disabled={!!editing}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:disabled:bg-zinc-900"
                  placeholder="user@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {editing ? "New Password (optional)" : "Password"}
                </label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  autoComplete="new-password"
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  placeholder={editing ? "Leave blank to keep current password" : "At least 8 characters"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Confirm Password</label>
                <input
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  autoComplete="new-password"
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  placeholder="Re-enter password"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditing(null);
                  setMessage(null);
                }}
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="rounded-lg bg-[#4a9e6e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3d8a5e] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Saving..." : editing ? "Save Changes" : "Create User"}
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
            No users found. Click &quot;Add User&quot; to create the first account.
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
                      {isEditingSelf(user) && (
                        <span className="ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                          You
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-zinc-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${badgeColor(user.role)}`}>
                    {roleLabel(user.role)}
                  </span>
                  <button
                    onClick={() => openEdit(user)}
                    className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user)}
                    disabled={isEditingSelf(user)}
                    className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-red-900/20 dark:text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
