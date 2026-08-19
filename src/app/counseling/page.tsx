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
    icon: "🧠",
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
    icon: "💑",
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
    icon: "👨‍👩‍👧‍👦",
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
    icon: "🌿",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#244a72] to-[#2d5a87] px-6 py-20 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4a9e6e]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#d4a843]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#7bc67e]">
            Our Services
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Counseling Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.href}
                className="group rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a9e6e]/30 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/10">
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                    {category.title}
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>
                <ul className="mt-5 space-y-2">
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
      <section className="bg-zinc-50 px-6 py-16 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/10">
            <span className="text-xl">🔒</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-[#1e3a5f] dark:text-white">
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
