"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Counseling",
    href: "/counseling",
    children: [
      { label: "Individual Counseling", href: "/counseling/individual" },
      { label: "Marriage & Couples", href: "/counseling/marriage" },
      { label: "Family Counseling", href: "/counseling/family" },
      { label: "Psychosocial Support", href: "/counseling/psychosocial" },
    ],
  },
  {
    label: "Consultancy",
    href: "/consultancy",
    children: [
      { label: "Organizational Development", href: "/consultancy/organizational" },
      { label: "Institutional Strengthening", href: "/consultancy/institutional" },
      { label: "Project Management", href: "/consultancy/project-management" },
      { label: "Research & Consultancy", href: "/consultancy/research" },
      { label: "Training & Coaching", href: "/consultancy/training" },
      { label: "Technical Consultancy", href: "/consultancy/technical" },
    ],
  },
  { label: "Hope Talks", href: "/hope-talks" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-zinc-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#1e3a5f]">
            Hope<span className="text-[#4a9e6e]">Bridge</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-[#1e3a5f] dark:text-zinc-300"
              >
                {item.label}
                {item.children && (
                  <span className="ml-1 text-xs">▾</span>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-[#1e3a5f] dark:text-zinc-300 dark:hover:bg-zinc-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/book"
          className="hidden rounded-full bg-[#4a9e6e] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e] lg:inline-block"
        >
          Book a Session
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 lg:hidden dark:text-zinc-300"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 lg:hidden dark:border-zinc-700 dark:bg-zinc-900">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-[#4a9e6e] px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
