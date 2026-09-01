"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Counseling", href: "/counseling" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Hope Talks", href: "/hope-talks" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200 bg-white/90 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90"
          : "bg-white dark:bg-zinc-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/logo.jpg"
            alt="Hope Bridge Logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-white/20 sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px]"
            priority
          />
          <span className="hidden font-heading text-lg font-bold text-[#1e3a5f] sm:inline lg:text-xl">
            Hope Bridge
            <span className="block text-xs font-normal text-zinc-500">
              Counselling &amp; Consultancy
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-[#4a9e6e]"
                  : "text-zinc-600 hover:text-[#1e3a5f] dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#4a9e6e]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Admin */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/book"
            className="rounded-full bg-[#4a9e6e] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#3d8a5e] hover:shadow-md"
          >
            Book a Session
          </Link>
          <Link
            href="/admin/login"
            className="rounded-full bg-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100 lg:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-zinc-100 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-[#4a9e6e]/10 text-[#4a9e6e]"
                    : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-full bg-[#4a9e6e] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
            >
              Book a Session
            </Link>
            <Link
              href="/admin/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center text-xs font-medium text-zinc-400 hover:text-[#1e3a5f] dark:hover:text-white"
            >
              Admin Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
