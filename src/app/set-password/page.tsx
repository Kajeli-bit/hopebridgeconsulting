"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [validToken, setValidToken] = useState<boolean | null>(null);

  useEffect(() => {
    if (!token) {
      setValidToken(false);
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/users/set-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Password set successfully! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/admin/login";
        }, 2000);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (validToken === false) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4 dark:bg-zinc-950">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
            <div className="flex flex-col items-center">
              <Image
                src="/logo.jpg"
                alt="Hope Bridge Logo"
                width={64}
                height={64}
                className="rounded-full border-2 border-zinc-200"
              />
              <h1 className="mt-4 text-xl font-bold text-[#1e3a5f] dark:text-white">
                Invalid Invitation
              </h1>
              <p className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
                This invitation link is invalid or missing a token. Please contact your administrator for a new invitation.
              </p>
              <Link
                href="/admin/login"
                className="mt-6 rounded-full bg-[#4a9e6e] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
              >
                Go to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4 dark:bg-zinc-950">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.jpg"
              alt="Hope Bridge Logo"
              width={64}
              height={64}
              className="rounded-full border-2 border-zinc-200"
            />
            <h1 className="mt-4 text-xl font-bold text-[#1e3a5f] dark:text-white">
              Set Your Password
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Create a password to complete your account setup
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </div>
            )}
            {success && (
              <div className="rounded-lg bg-green-50 p-3 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
                {success}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                placeholder="At least 8 characters"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#4a9e6e] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Setting password..." : "Set Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
