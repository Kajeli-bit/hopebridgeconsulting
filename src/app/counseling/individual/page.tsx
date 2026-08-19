import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Counseling | Hope Bridge",
  description:
    "Professional individual counseling for stress, anxiety, grief, trauma, and personal growth.",
};

const services = [
  {
    title: "Stress & Anxiety",
    description:
      "Learn effective strategies to manage stress and anxiety, regain control, and find calm in daily life.",
  },
  {
    title: "Grief & Loss",
    description:
      "Navigate the difficult journey of grief with professional support, honoring your process while finding a path forward.",
  },
  {
    title: "Trauma & Crisis",
    description:
      "Heal from traumatic experiences in a safe, supportive environment with evidence-based approaches.",
  },
  {
    title: "Anger Management",
    description:
      "Develop healthier ways to understand and express anger, improving your relationships and wellbeing.",
  },
  {
    title: "Self-Esteem & Personal Growth",
    description:
      "Build confidence, discover your strengths, and develop a more positive relationship with yourself.",
  },
  {
    title: "Workplace Stress & Burnout",
    description:
      "Address work-related stress, set healthy boundaries, and rediscover fulfillment in your career.",
  },
  {
    title: "Life Transitions",
    description:
      "Navigate major life changes — career shifts, relocation, divorce, retirement — with professional guidance.",
  },
];

export default function IndividualCounselingPage() {
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
            <span>Individual</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Individual Counseling
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Personalized one-on-one counseling to help you navigate life&apos;s
            challenges, improve your mental health, and achieve personal growth.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center rounded-full bg-[#4a9e6e] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
                What to Expect
              </h2>
              <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Our individual counseling provides a safe, confidential space
                  where you can explore your thoughts, feelings, and experiences
                  without judgment.
                </p>
                <p>
                  Each session is tailored to your unique needs. We use
                  evidence-based approaches including cognitive-behavioral
                  therapy, person-centered therapy, and other proven methods.
                </p>
                <p>
                  Whether you&apos;re dealing with a specific challenge or
                  seeking personal growth, our experienced counselors will work
                  alongside you to help you find clarity and develop effective
                  coping strategies.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800">
              <h3 className="text-xl font-semibold text-[#1e3a5f] dark:text-white">
                Who This May Help
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  Anyone experiencing stress, anxiety, or emotional difficulties
                </li>
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  People going through grief, loss, or major life changes
                </li>
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  Individuals recovering from trauma or crisis
                </li>
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  Professionals dealing with workplace burnout
                </li>
                <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-[#4a9e6e]">✓</span>
                  Anyone seeking personal growth and self-improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
            Areas We Can Work On
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

      {/* Confidentiality */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
            Confidentiality
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Your privacy is sacred to us. All counseling sessions are strictly
            confidential in accordance with professional ethical standards and
            our privacy policy. What you share stays between you and your
            counselor.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4a9e6e] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Take the First Step?
          </h2>
          <p className="mt-2 text-white/80">
            Book a confidential counseling session with one of our experienced
            professionals.
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
