"use client";

import { useEffect, useState } from "react";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  order: number;
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [form, setForm] = useState({ name: "", role: "", bio: "", image: "", initials: "", order: 0 });

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/team");
      const data = await res.json();
      setMembers(data.data || []);
    } catch (e) {
      console.error("Failed to fetch team:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleSubmit = async () => {
    try {
      if (editing) {
        await fetch(`/api/team/${editing._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/team", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setShowForm(false);
      setEditing(null);
      setForm({ name: "", role: "", bio: "", image: "", initials: "", order: 0 });
      fetchMembers();
    } catch (e) {
      console.error("Failed to save member:", e);
    }
  };

  const handleEdit = (member: TeamMember) => {
    setForm({
      name: member.name,
      role: member.role,
      bio: member.bio,
      image: member.image || "",
      initials: member.initials || "",
      order: member.order || 0,
    });
    setEditing(member);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) return;
    try {
      await fetch(`/api/team/${id}`, { method: "DELETE" });
      fetchMembers();
    } catch (e) {
      console.error("Failed to delete member:", e);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">Team Members</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Manage your team members.</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditing(null); setForm({ name: "", role: "", bio: "", image: "", initials: "", order: 0 }); }}
          className="rounded-full bg-[#4a9e6e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3d8a5e]"
        >
          + Add Member
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-800">
            <h2 className="text-lg font-bold text-[#1e3a5f] dark:text-white">
              {editing ? "Edit Member" : "Add Member"}
            </h2>
            <div className="mt-4 space-y-4">
              <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <input placeholder="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <textarea placeholder="Bio" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} rows={3} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Initials" value={form.initials} onChange={(e) => setForm({ ...form, initials: e.target.value })} className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
                <input type="number" placeholder="Order" value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => { setShowForm(false); setEditing(null); }} className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-700">Cancel</button>
              <button onClick={handleSubmit} className="rounded-lg bg-[#4a9e6e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3d8a5e]">{editing ? "Update" : "Create"}</button>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4a9e6e] border-t-transparent" />
          </div>
        ) : members.length === 0 ? (
          <div className="py-12 text-center text-zinc-500 dark:text-zinc-400">No team members found.</div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-700">
            {members.map((member) => (
              <div key={member._id} className="flex items-center justify-between px-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-700/50">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-bold text-white">
                    {member.initials || member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f] dark:text-white">{member.name}</p>
                    <p className="text-sm text-zinc-500">{member.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(member)} className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400">Edit</button>
                  <button onClick={() => handleDelete(member._id)} className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
