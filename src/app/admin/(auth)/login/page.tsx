"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LuShieldCheck, LuArrowRight, LuSparkles } from "react-icons/lu";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, isLoading, isAuthenticated } = useAdminAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await login(username, password);
      router.replace("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to authenticate.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/admin");
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10" />
        <div className="absolute top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-16 right-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[420px] rounded-[28px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)]">
        <div className="mb-10 space-y-3 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/40">
            <LuShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white">Admin Access</h1>
          <p className="text-sm text-gray-300">
            Sign in with your backend credentials to manage appointments, schedules, and blocked slots.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="admin-username" className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
              Username
            </label>
            <input
              id="admin-username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-gray-900/60 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              placeholder="admin"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-gray-900/60 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          {error ? (
            <div className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-indigo-500/40 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{isSubmitting ? "Verifying" : "Enter Console"}</span>
            <LuArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => {
              setUsername("demo");
              setPassword("demo123");
              setError(null);
            }}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            <LuSparkles className="h-4 w-4" />
            Use Demo Credentials
          </button>
        </form>

        <div className="mt-8 space-y-3 text-center text-xs uppercase tracking-[0.35em] text-gray-500">
          <p className="text-[0.65rem] lowercase tracking-[0.4em] text-indigo-200">
            Demo credentials: demo / demo123
          </p>
          <Link href="/" className="text-indigo-300 transition hover:text-indigo-200">
            Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}

