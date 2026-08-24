"use client";

import { useEffect, useState } from "react";

interface Resource {
  _id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  image: string;
  published: boolean;
  createdAt: string;
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Resource | null>(null);
  const [form, setForm] = useState({ title: "", description: "", category: "", url: "", image: "", published: true });

  const fetchResources = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/resources");
      const data = await res.json();
      setResources(data.data || []);
    } catch (e) {
      console.error("Failed to fetch resources:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleSubmit = async () => {
    try {
      if (editing) {
        await fetch(`/api/resources/${editing._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/resources", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setShowForm(false);
      setEditing(null);
      setForm({ title: "", description: "", category: "", url: "", image: "", published: true });
      fetchResources();
    } catch (e) {
      console.error("Failed to save resource:", e);
    }
  };

  const handleEdit = (resource: Resource) => {
    setForm({
      title: resource.title,
      description: resource.description,
      category: resource.category,
      url: resource.url || "",
      image: resource.image || "",
      published: resource.published,
    });
    setEditing(resource);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;
    try {
      await fetch(`/api/resources/${id}`, { method: "DELETE" });
      fetchResources();
    } catch (e) {
      console.error("Failed to delete resource:", e);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">Resources</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Manage your resources and articles.</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditing(null); setForm({ title: "", description: "", category: "", url: "", image: "", published: true }); }}
          className="rounded-full bg-[#4a9e6e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3d8a5e]"
        >
          + Add Resource
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-800">
            <h2 className="text-lg font-bold text-[#1e3a5f] dark:text-white">{editing ? "Edit Resource" : "Add Resource"}</h2>
            <div className="mt-4 space-y-4">
              <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
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
        ) : resources.length === 0 ? (
          <div className="py-12 text-center text-zinc-500 dark:text-zinc-400">No resources found.</div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-700">
            {resources.map((resource) => (
              <div key={resource._id} className="flex items-center justify-between px-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-700/50">
                <div className="flex-1">
                  <p className="font-medium text-[#1e3a5f] dark:text-white">{resource.title}</p>
                  <p className="text-sm text-zinc-500">{resource.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${resource.published ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"}`}>
                    {resource.published ? "Published" : "Draft"}
                  </span>
                  <button onClick={() => handleEdit(resource)} className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400">Edit</button>
                  <button onClick={() => handleDelete(resource._id)} className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
