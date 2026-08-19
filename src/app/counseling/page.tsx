import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counseling Services | Hope Bridge",
  description:
    "Professional, confidential counseling services for individuals, couples, and families in Dar es Salaam, Tanzania.",
};

const categories = [
  {
    title: "Individual Counseling",
    description:
      "Professional support for personal challenges, emotional wellbeing, and personal growth.",
    href: "/counseling/individual",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 01-5.982-2.275M12 21a8.966 8.966 0 005.982-2.275M15.75 3.186a24.284 24.284 0 01-1.5 0M3.75 21h16.5M6.25 3.186a24.284 24.284 0 00-1.5 0" />
      </svg>
    ),
    services: [
      "Stress & Anxiety",
      "Grief & Loss",
      "Trauma & Crisis",
      "Anger Management",
      "Self-Esteem & Personal Growth",
      "Workplace Stress & Burnout",
      "Life Transitions",
    ],
  },
  {
    title: "Marriage & Couples Counseling",
    description:
      "Strengthen your relationship through improved communication, conflict resolution, and deeper connection.",
    href: "/counseling/marriage",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    services: [
      "Premarital Counseling",
      "Relationship Challenges",
      "Communication Issues",
      "Conflict Resolution",
      "Trust & Intimacy",
    ],
  },
  {
    title: "Family Counseling",
    description:
      "Build stronger family bonds through improved understanding, communication, and conflict resolution.",
    href: "/counseling/family",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    services: [
      "Family Conflict",
      "Parenting Support",
      "Family Communication",
      "Relationship Challenges",
      "Life Transitions",
    ],
  },
  {
    title: "Psychosocial Support",
    description:
      "Holistic support for life challenges, personal development, and emotional wellbeing.",
    href: "/counseling/psychosocial",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    services: [
      "Life Challenges",
      "Personal Development",
      "Emotional Support",
      "Coping Strategies",
      "Resilience Building",
    ],
  },
];

export default function CounselingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#244a72] to-[#2d5a87] px-6 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4a9e6e]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#d4a843]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#7bc67e]">
            Our Services
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold md:text-5xl">
            Counseling Services
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-300">
            Professional, confidential counseling supporting your emotional,
            psychological, relational, and social wellbeing. Our experienced
            counselors provide a safe space for healing and growth.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4a9e6e] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4a9e6e]/25 transition-all hover:bg-[#3d8a5e] hover:shadow-xl"
          >
            Book a Counseling Session
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.href}
                className="group rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a9e6e]/30 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/10 text-[#4a9e6e]">
                    {category.icon}
                  </div>
                  <h2 className="font-heading text-xl font-bold text-[#1e3a5f] dark:text-white">
                    {category.title}
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4a9e6e]/10 text-xs text-[#4a9e6e]">
                        ✓
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-3">
                  <Link
                    href={category.href}
                    className="rounded-full bg-[#1e3a5f] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#2d5a87] hover:shadow-md dark:bg-[#4a9e6e] dark:hover:bg-[#3d8a5e]"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/book"
                    className="rounded-full border border-[#1e3a5f] px-6 py-2.5 text-sm font-semibold text-[#1e3a5f] transition-all hover:bg-[#1e3a5f]/5 dark:border-[#4a9e6e] dark:text-[#4a9e6e] dark:hover:bg-[#4a9e6e]/10"
                  >
                    Book a Session
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/10 text-[#4a9e6e]">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h2 className="mt-5 font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
            Your Privacy Matters
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            All counseling sessions are confidential. Your information will be
            handled with the utmost care in accordance with our privacy policy
            and professional ethical standards. The detailed conversation happens
            through our professional counseling process — we don&apos;t store
            unnecessary personal details in our systems.
          </p>
        </div>
      </section>
    </>
  );
}
