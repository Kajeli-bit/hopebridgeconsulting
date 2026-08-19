import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage & Couples Counseling | Hope Bridge",
  description:
    "Strengthen your relationship with professional marriage and couples counseling.",
};

const services = [
  {
    title: "Premarital Counseling",
    description:
      "Build a strong foundation for your marriage with guided conversations about expectations, communication, and values.",
  },
  {
    title: "Relationship Challenges",
    description:
      "Work through difficult periods in your relationship with professional guidance and evidence-based strategies.",
  },
  {
    title: "Communication Issues",
    description:
      "Learn to express your needs, listen effectively, and understand your partner on a deeper level.",
  },
  {
    title: "Conflict Resolution",
    description:
      "Develop healthy ways to disagree, negotiate, and find resolution without damaging your relationship.",
  },
  {
    title: "Trust & Intimacy",
    description:
      "Rebuild trust and deepen emotional and physical intimacy after betrayal, distance, or life changes.",
  },
];

export default function MarriageCounselingPage() {
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
            <span>Marriage & Couples</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Marriage & Couples Counseling
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Strengthen your relationship through improved communication, deeper
            understanding, and professional guidance. Every relationship
            deserves support.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center rounded-full bg-[#4a9e6e] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
                Strengthening Your Relationship
              </h2>
              <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Whether you&apos;re preparing for marriage, navigating a
                  difficult period, or simply wanting to deepen your connection,
                  our couples counseling provides a safe space for both partners
                  to be heard.
                </p>
                <p>
                  Our counselors help couples identify patterns, improve
                  communication, and develop stronger emotional bonds. We work
                  with all types of couples and relationships.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800">
              <h3 className="text-xl font-semibold text-[#1e3a5f] dark:text-white">
                What to Expect
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  A neutral, supportive environment for both partners
                </li>
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  Evidence-based techniques tailored to your relationship
                </li>
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  Practical tools you can use between sessions
                </li>
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  Both individual and joint sessions available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
            How We Can Help
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-800"
              >
                <h3 className="text-lg font-semibold text-[#1e3a5f] dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4a9e6e] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Invest in Your Relationship
          </h2>
          <p className="mt-2 text-white/80">
            Take the first step toward a stronger, healthier partnership.
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
