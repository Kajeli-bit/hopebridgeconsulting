import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Counseling | Hope Bridge",
  description:
    "Professional family counseling to strengthen bonds, improve communication, and resolve conflicts.",
};

export default function FamilyCounselingPage() {
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
            <span>Family</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Family Counseling
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Build stronger family bonds through improved understanding,
            communication, and conflict resolution. Every family faces
            challenges — we&apos;re here to help you navigate them together.
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
                Strengthening Family Connections
              </h2>
              <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Family dynamics can be complex. Whether you&apos;re dealing with
                  ongoing conflict, major transitions, or simply want to improve
                  how your family communicates, family counseling can help.
                </p>
                <p>
                  Our approach brings family members together in a safe,
                  structured environment where everyone&apos;s voice is heard and
                  valued.
                </p>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-[#1e3a5f] dark:text-white">
                Areas We Work On
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Family conflict and communication",
                  "Parenting challenges",
                  "Blended family adjustments",
                  "Grief and loss within the family",
                  "Major life transitions",
                  "Sibling relationships",
                  "Parent-child relationships",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-1 text-[#4a9e6e]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800">
              <h3 className="text-xl font-semibold text-[#1e3a5f] dark:text-white">
                What to Expect
              </h3>
              <div className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Family sessions typically involve multiple family members
                  attending together. The number of sessions and their frequency
                  will be discussed during your initial consultation.
                </p>
                <p>
                  Our counselors create a balanced environment where each family
                  member feels safe to express themselves, while working toward
                  shared goals for the family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4a9e6e] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Strengthen Your Family Today
          </h2>
          <p className="mt-2 text-white/80">
            Book a family counseling session and start building stronger
            connections.
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
