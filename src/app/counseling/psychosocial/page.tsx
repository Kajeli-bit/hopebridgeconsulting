import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psychosocial Support | Hope Bridge",
  description:
    "Holistic psychosocial support for life challenges, personal development, and emotional wellbeing.",
};

export default function PsychosocialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/counseling" className="text-[#7bc67e] hover:underline">
              Counseling
            </Link>
            <span className="text-zinc-400">/</span>
            <span>Psychosocial Support</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Psychosocial Support
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Holistic support addressing your emotional, social, and psychological
            needs. We help you build resilience and navigate life&apos;s
            challenges with strength.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center rounded-full bg-[#4a9e6e] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
                Holistic Support for Your Wellbeing
              </h2>
              <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Psychosocial support goes beyond traditional counseling to
                  address the full range of factors that affect your wellbeing —
                  emotional, social, cultural, and spiritual.
                </p>
                <p>
                  Whether you&apos;re facing life challenges, seeking personal
                  development, or need emotional support during difficult times,
                  our team is here to walk alongside you.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800">
              <h3 className="text-xl font-semibold text-[#1e3a5f] dark:text-white">
                How We Can Help
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Life challenges and transitions",
                  "Personal development and growth",
                  "Emotional support and processing",
                  "Coping strategies for stress",
                  "Building resilience",
                  "Social and community integration",
                  "Cultural and identity exploration",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-1 text-[#4a9e6e]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4a9e6e] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            You Don&apos;t Have to Face It Alone
          </h2>
          <p className="mt-2 text-white/80">
            Reach out today for compassionate psychosocial support.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#4a9e6e] transition-colors hover:bg-zinc-100"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </>
  );
}
