"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ConfirmDialog from "@/components/ConfirmDialog";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  order: number;
}

const REQUIRED_WIDTH = 562;
const REQUIRED_HEIGHT = 749;

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [form, setForm] = useState({ name: "", role: "", bio: "", image: "", initials: "", order: 0 });

  // Upload state
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageError, setImageError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Confirm dialog
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<TeamMember | null>(null);

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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageError("");

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setImageError("Please select an image file.");
      return;
    }

    // Validate dimensions
    const img = new window.Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      if (img.width !== REQUIRED_WIDTH || img.height !== REQUIRED_HEIGHT) {
        setImageError(
          `Image must be exactly ${REQUIRED_WIDTH}x${REQUIRED_HEIGHT} pixels. Your image is ${img.width}x${img.height}.`
        );
        return;
      }

      // Read as base64 for preview and upload
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setImagePreview(dataUrl);
        setImageFile(dataUrl);
      };
      reader.readAsDataURL(file);
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setImageError("Failed to read image file.");
    };
    img.src = objectUrl;
  };

  const removeImage = () => {
    setImagePreview("");
    setImageFile(null);
    setImageError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const resetForm = () => {
    setForm({ name: "", role: "", bio: "", image: "", initials: "", order: 0 });
    setImagePreview("");
    setImageFile(null);
    setImageError("");
    setEditing(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async () => {
    let imageUrl = form.image;

    // Upload new image if selected
    if (imageFile) {
      setUploading(true);
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file: imageFile, folder: "hopebridge/team" }),
        });
        const data = await res.json();
        if (!data.success) {
          setImageError(data.error || "Upload failed");
          setUploading(false);
          return;
        }
        imageUrl = data.data.url;
      } catch {
        setImageError("Failed to upload image");
        setUploading(false);
        return;
      }
      setUploading(false);
    }

    try {
      const payload = { ...form, image: imageUrl };
      if (editing) {
        await fetch(`/api/team/${editing._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/team", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      setShowForm(false);
      resetForm();
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
    setImagePreview(member.image || "");
    setImageFile(null);
    setImageError("");
    setEditing(member);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/team/${id}`, { method: "DELETE" });
      fetchMembers();
    } catch (e) {
      console.error("Failed to delete member:", e);
    }
  };

  return (
    <div>
      <ConfirmDialog
        open={confirmOpen}
        title="Delete Team Member"
        message={`Are you sure you want to remove ${deleteTarget?.name || ""} from the team? This cannot be undone.`}
        confirmLabel="Delete"
        danger
        onConfirm={() => { if (deleteTarget) handleDelete(deleteTarget._id); setConfirmOpen(false); setDeleteTarget(null); }}
        onCancel={() => { setConfirmOpen(false); setDeleteTarget(null); }}
      />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">Team Members</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Manage your team members.</p>
        </div>
        <button
          onClick={() => { setShowForm(true); resetForm(); }}
          className="rounded-full bg-[#4a9e6e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3d8a5e]"
        >
          + Add Member
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-800 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-[#1e3a5f] dark:text-white">
              {editing ? "Edit Member" : "Add Member"}
            </h2>
            <div className="mt-4 space-y-4">
              <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <input placeholder="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              <textarea placeholder="Bio" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} rows={3} className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Photo <span className="text-zinc-400">({REQUIRED_WIDTH}x{REQUIRED_HEIGHT} px)</span>
                </label>

                {imagePreview ? (
                  <div className="mt-2 relative inline-block">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={140}
                      height={186}
                      className="rounded-lg border border-zinc-200 object-cover dark:border-zinc-600"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 p-6 transition-colors hover:border-[#4a9e6e] hover:bg-[#4a9e6e]/5 dark:border-zinc-600 dark:hover:border-[#4a9e6e]"
                  >
                    <svg className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className="mt-2 text-sm text-zinc-500">Click to upload a photo</p>
                    <p className="mt-1 text-xs text-zinc-400">Must be exactly {REQUIRED_WIDTH}x{REQUIRED_HEIGHT} pixels</p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {imageError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{imageError}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Initials" value={form.initials} onChange={(e) => setForm({ ...form, initials: e.target.value })} className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
                <input type="number" placeholder="Order" value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => { setShowForm(false); resetForm(); }} className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-700">Cancel</button>
              <button
                onClick={handleSubmit}
                disabled={uploading || (!imageFile && !form.image)}
                className="rounded-lg bg-[#4a9e6e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3d8a5e] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploading ? "Uploading..." : editing ? "Update" : "Create"}
              </button>
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
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-bold text-white">
                      {member.initials || member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-[#1e3a5f] dark:text-white">{member.name}</p>
                    <p className="text-sm text-zinc-500">{member.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(member)} className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400">Edit</button>
                  <button onClick={() => { setDeleteTarget(member); setConfirmOpen(true); }} className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
