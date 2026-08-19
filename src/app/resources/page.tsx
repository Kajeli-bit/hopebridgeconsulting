import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Hope Bridge",
  description:
    "Articles, guides, and resources for mental health, relationships, workplace wellbeing, and organizational development.",
};

const categories = [
  {
    title: "Mental Health",
    icon: "🧠",
    color: "#4a9e6e",
    items: [
      "Understanding Anxiety: Signs, Causes, and Coping",
      "The Impact of Stress on Your Health",
      "When to Seek Professional Counseling",
      "Building Resilience: A Practical Guide",
    ],
  },
  {
    title: "Relationships",
    icon: "💑",
    color: "#4a9e6e",
    items: [
      "Communication Tips for Couples",
      "Navigating Family Conflict",
      "The Art of Active Listening",
      "Building Trust in Relationships",
    ],
  },
  {
    title: "Workplace",
    icon: "💼",
    color: "#d4a843",
    items: [
      "Recognizing Burnout Before It&apos;s Too Late",
      "Work-Life Balance Strategies",
      "Managing Workplace Stress",
      "Building a Healthy Work Environment",
    ],
  },
  {
    title: "Consultancy",
    icon: "📊",
    color: "#d4a843",
    items: [
      "Introduction to Organizational Development",
      "Project Management Best Practices",
      "Building Effective Teams",
      "Strategic Planning for NGOs",
    ],
  },
];

const faqs = [
  {
    q: "How do I know if I need counseling?",
    a: "If you're experiencing emotional distress, relationship difficulties, or life challenges that feel overwhelming, counseling can help. There's no requirement to be in crisis to benefit from professional support.",
  },
  {
    q: "Is counseling confidential?",
    a: "Yes. All counseling sessions are strictly confidential in accordance with professional ethical standards and our privacy policy.",
  },
  {
    q: "How long does counseling take?",
    a: "The duration varies depending on individual needs. Some concerns may be addressed in a few sessions, while others may benefit from longer-term support. Your counselor will work with you to determine what's appropriate.",
  },
  {
    q: "Do you offer online counseling?",
    a: "Yes, we offer both in-person and online counseling sessions to accommodate your preferences and needs.",
  },
  {
    q: "How can my organization request consultancy services?",
    a: "Simply contact us through our contact page or call us directly. We'll schedule an initial consultation to understand your needs and develop a tailored approach.",
  },
];

export default function ResourcesPage() {
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
            Knowledge Hub
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Resources</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Articles, guides, and practical resources to support your mental
            health, relationships, and organizational growth.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-zinc-100 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    <span className="text-xl">{cat.icon}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
                    {cat.title}
                  </h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                    >
                      <span
                        className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                        style={{
                          backgroundColor: `${cat.color}15`,
                          color: cat.color,
                        }}
                      >
                        •
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              Common Questions
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-zinc-100 bg-white p-6 transition-shadow hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
              >
                <h3 className="font-semibold text-[#1e3a5f] dark:text-white">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#4a9e6e] px-6 py-16">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Need Professional Support?
          </h2>
          <p className="mt-2 text-white/80">
            Talk to Hope Bridge for personalized guidance.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#4a9e6e] shadow-lg transition-all hover:bg-zinc-100 hover:shadow-xl"
          >
            Book a Session
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
