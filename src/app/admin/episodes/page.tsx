"use client";

import { useEffect, useState } from "react";

interface Episode {
  _id: string;
  title: string;
  description: string;
  number: number;
  category: string;
  url: string;
  image: string;
  published: boolean;
  createdAt: string;
}

export default function EpisodesPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Episode | null>(null);
  const [form, setForm] = useState({ title: "", description: "", number: 0, category: "", url: "", image: "", published: true });

  const fetchEpisodes = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/episodes");
      const data = await res.json();
      setEpisodes(data.data || []);
    } catch (e) {
      console.error("Failed to fetch episodes:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const handleSubmit = async () => {
    try {
      if (editing) {
        await fetch(`/api/episodes/${editing._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/episodes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setShowForm(false);
      setEditing(null);
      setForm({ title: "", description: "", number: 0, category: "", url: "", image: "", published: true });
      fetchEpisodes();
    } catch (e) {
      console.error("Failed to save episode:", e);
    }
  };

  const handleEdit = (episode: Episode) => {
    setForm({
      title: episode.title,
      description: episode.description,
      number: episode.number,
      category: episode.category,
      url: episode.url || "",
      image: episode.image || "",
      published: episode.published,
    });
    setEditing(episode);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this episode?")) return;
    try {
      await fetch(`/api/episodes/${id}`, { method: "DELETE" });
      fetchEpisodes();
    } catch (e) {
      console.error("Failed to delete episode:", e);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">Episodes</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Manage your Hope Talks podcast episodes.</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditing(null); setForm({ title: "", description: "", number: 0, category: "", url: "", image: "", published: true }); }}
          className="rounded-full bg-[#4a9e6e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3d8a5e]"
        >
          + Add Episode
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-800">
            <h2 className="text-lg font-bold text-[#1e3a5f] dark:text-white">{editing ? "Edit Episode" : "Add Episode"}</h2>
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="col-span-2 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
                <input type="number" placeholder="Episode #" value={form.number} onChange={(e) => setForm({ ...form, number: Number(e.target.value) })} className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
                <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              </div>
              <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <input placeholder="URL" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="rounded" />
                Published
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => { setShowForm(false); setEditing(null); }} className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-700">Cancel</button>
              <button onClick={handleSubmit} className="rounded-lg bg-[#4a9e6e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3d8a5e]">{editing ? "Update" : "Create"}</button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4a9e6e] border-t-transparent" />
          </div>
        ) : episodes.length === 0 ? (
          <div className="py-12 text-center text-zinc-500 dark:text-zinc-400">No episodes found.</div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-700">
            {episodes.map((episode) => (
              <div key={episode._id} className="flex items-center justify-between px-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-700/50">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-sm font-bold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    #{episode.number}
                  </div>
                  <div>
                    <p className="font-medium text-[#1e3a5f] dark:text-white">{episode.title}</p>
                    <p className="text-sm text-zinc-500">{episode.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${episode.published ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"}`}>
                    {episode.published ? "Published" : "Draft"}
                  </span>
                  <button onClick={() => handleEdit(episode)} className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400">Edit</button>
                  <button onClick={() => handleDelete(episode._id)} className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
