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
  },
  {
    number: 2,
    title: "Building Stronger Family Bonds",
    description:
      "How families can navigate challenges, improve communication, and create lasting connections.",
    category: "Family",
  },
  {
    number: 3,
    title: "The Power of Seeking Help",
    description:
      "Breaking the stigma around counseling and mental health support.",
    category: "Mental Health",
  },
  {
    number: 4,
    title: "Leadership in Challenging Times",
    description:
      "How leaders can maintain resilience and support their teams during difficult periods.",
    category: "Leadership & Organizations",
  },
];

export default function HopeTalksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
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
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-[#d4a843] hover:text-[#d4a843] dark:border-zinc-700 dark:text-zinc-300"
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
          <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
            Latest Episode
          </h2>
          <div className="mt-6 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4a843]">
                <span className="text-xl">🎙️</span>
              </div>
              <div>
                <span className="text-xs font-medium text-[#d4a843]">
                  Episode {episodes[0].number}
                </span>
                <h3 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                  {episodes[0].title}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              {episodes[0].description}
            </p>
            <span className="mt-3 inline-block rounded-full bg-[#d4a843]/10 px-3 py-1 text-xs font-medium text-[#d4a843]">
              {episodes[0].category}
            </span>
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
                className="rounded-2xl border border-zinc-200 p-6 transition-all hover:border-[#d4a843] hover:shadow-md dark:border-zinc-700"
              >
                <span className="text-xs font-medium text-[#d4a843]">
                  Episode {ep.number}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-[#1e3a5f] dark:text-white">
                  {ep.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
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
      <section className="bg-[#d4a843] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Become a Guest on Hope Talks
          </h2>
          <p className="mt-2 text-white/80">
            Are you a counselor, consultant, community leader, or someone with a
            story to share? We&apos;d love to have you on the show.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#d4a843] transition-colors hover:bg-zinc-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
