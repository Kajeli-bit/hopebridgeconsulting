import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Coaching | Hope Bridge",
  description:
    "Customized training programs, workshops, and coaching for teams and leadership.",
};

export default function TrainingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/consultancy" className="text-[#d4a843] hover:underline">
              Consultancy
            </Link>
            <span className="text-zinc-400">/</span>
            <span>Training & Coaching</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Training & Coaching
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Customized training programs, workshops, and coaching to build
            skills, develop leadership, and drive organizational performance.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c49a38]"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
                Building Skills & Capacity
              </h2>
              <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Our training and coaching services are designed to meet your
                  organization&apos;s specific needs. We develop custom programs
                  that are practical, engaging, and results-oriented.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Leadership development programs",
                  "Team building workshops",
                  "Communication and interpersonal skills",
                  "Conflict resolution training",
                  "Project management training",
                  "Organizational change management",
                  "Executive coaching",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-1 text-[#d4a843]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800">
              <h3 className="text-xl font-semibold text-[#1e3a5f] dark:text-white">
                Expected Outcomes
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Enhanced team skills and performance",
                  "Stronger leadership capabilities",
                  "Improved communication and collaboration",
                  "Practical tools for immediate application",
                  "Sustainable behavior change",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                    <span className="mt-1 text-[#4a9e6e]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d4a843] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">Invest in Your Team</h2>
          <p className="mt-2 text-white/80">Let&apos;s design a training program tailored to your organization&apos;s needs.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#d4a843] transition-colors hover:bg-zinc-100">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
