import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hope Talks | Hope Bridge",
  description:
    "Conversations that create hope — our podcast exploring mental health, relationships, and community development.",
};

const categories = [
  "Mental Health",
  "Relationships",
  "Family",
  "Workplace",
  "Leadership & Organizations",
  "Community Development",
  "Personal Growth",
];

const episodes = [
  {
    number: 1,
    title: "Understanding Workplace Burnout",
    description:
      "Feeling overwhelmed at work? We explore the signs of burnout and practical strategies for recovery and prevention.",
    category: "Workplace",
    date: "Aug 2026",
  },
  {
    number: 2,
    title: "Building Stronger Family Bonds",
    description:
      "How families can navigate challenges, improve communication, and create lasting connections.",
    category: "Family",
    date: "Jul 2026",
  },
  {
    number: 3,
    title: "The Power of Seeking Help",
    description:
      "Breaking the stigma around counseling and mental health support.",
    category: "Mental Health",
    date: "Jun 2026",
  },
  {
    number: 4,
    title: "Leadership in Challenging Times",
    description:
      "How leaders can maintain resilience and support their teams during difficult periods.",
    category: "Leadership & Organizations",
    date: "May 2026",
  },
];

export default function HopeTalksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#244a72] to-[#2d5a87] px-6 py-20 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4a843]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
            Our Podcast
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Hope Talks</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Conversations that create hope. Our podcast explores mental health,
            relationships, organizational leadership, and community development
            through meaningful conversations with experts and practitioners.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-zinc-100 px-6 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition-all hover:border-[#d4a843] hover:bg-[#d4a843]/5 hover:text-[#d4a843] dark:border-zinc-700 dark:text-zinc-400"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="bg-zinc-50 px-6 py-16 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
            Featured
          </span>
          <h2 className="mt-1 text-2xl font-bold text-[#1e3a5f] dark:text-white">
            Latest Episode
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
            <div className="grid items-center gap-6 p-8 md:grid-cols-[auto_1fr]">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#d4a843]">
                <span className="text-2xl">🎙️</span>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[#d4a843]">
                    Episode {episodes[0].number}
                  </span>
                  <span className="text-xs text-zinc-400">•</span>
                  <span className="text-xs text-zinc-400">{episodes[0].date}</span>
                </div>
                <h3 className="mt-1 text-xl font-bold text-[#1e3a5f] dark:text-white">
                  {episodes[0].title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {episodes[0].description}
                </p>
                <span className="mt-3 inline-block rounded-full bg-[#d4a843]/10 px-3 py-1 text-xs font-medium text-[#d4a843]">
                  {episodes[0].category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
            All Episodes
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {episodes.map((ep) => (
              <div
                key={ep.number}
                className="group rounded-2xl border border-zinc-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a843]/30 hover:shadow-lg dark:border-zinc-700"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[#d4a843]">
                    Episode {ep.number}
                  </span>
                  <span className="text-xs text-zinc-400">•</span>
                  <span className="text-xs text-zinc-400">{ep.date}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-[#1e3a5f] group-hover:text-[#d4a843] dark:text-white">
                  {ep.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {ep.description}
                </p>
                <span className="mt-3 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                  {ep.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Guest */}
      <section className="relative overflow-hidden bg-[#d4a843] px-6 py-16">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Become a Guest on Hope Talks
          </h2>
          <p className="mt-2 text-white/80">
            Are you a counselor, consultant, community leader, or someone with a
            story to share? We&apos;d love to have you on the show.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#d4a843] shadow-lg transition-all hover:bg-zinc-100 hover:shadow-xl"
          >
            Get in Touch
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
