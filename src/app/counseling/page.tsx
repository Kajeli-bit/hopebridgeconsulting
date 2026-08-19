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
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
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
            className="mt-8 inline-flex items-center rounded-full bg-[#4a9e6e] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
          >
            Book a Counseling Session
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
                className="rounded-2xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
                  {category.title}
                </h2>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="text-[#4a9e6e]">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-4">
                  <Link
                    href={category.href}
                    className="rounded-full bg-[#1e3a5f] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2d5a87] dark:bg-[#4a9e6e]"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/book"
                    className="rounded-full border border-[#1e3a5f] px-6 py-2.5 text-sm font-semibold text-[#1e3a5f] transition-colors hover:bg-[#1e3a5f]/5 dark:border-[#4a9e6e] dark:text-[#4a9e6e]"
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
          <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
            Your Privacy Matters
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
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
