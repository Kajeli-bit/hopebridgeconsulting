import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizational Capacity Development | Hope Bridge",
  description:
    "Strengthen your organization's capabilities through strategic planning, process improvement, and team development.",
};

export default function OrganizationalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/consultancy" className="text-[#d4a843] hover:underline">
              Consultancy
            </Link>
            <span className="text-zinc-400">/</span>
            <span>Organizational Development</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Organizational Capacity Development
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Build your organization&apos;s capacity to achieve its mission
            through strategic planning, systems strengthening, and team
            development.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c49a38]"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
                What We Offer
              </h2>
              <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  We help organizations identify gaps, strengthen systems, and
                  build the internal capacity needed to deliver on their mandate
                  effectively and sustainably.
                </p>
                <p>
                  Our approach is collaborative — we work alongside your team to
                  ensure that capacity building is embedded in your
                  organization&apos;s culture and processes.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Organizational assessments",
                  "Strategic planning facilitation",
                  "Policy and procedure development",
                  "Team building and leadership development",
                  "Monitoring and evaluation systems",
                  "Resource mobilization support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                  >
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
                  "Strengthened organizational systems and processes",
                  "Improved team performance and collaboration",
                  "Enhanced governance and leadership",
                  "Sustainable capacity for long-term impact",
                  "Clear strategic direction and action plans",
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
      <section className="bg-[#d4a843] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Strengthen Your Organization
          </h2>
          <p className="mt-2 text-white/80">
            Let&apos;s discuss your organization&apos;s capacity development
            needs.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#d4a843] transition-colors hover:bg-zinc-100"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
