"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              Admin Login
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Sign in to access the admin dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#4a9e6e] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
