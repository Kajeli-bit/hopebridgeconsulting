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
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 01-5.982-2.275M12 21a8.966 8.966 0 005.982-2.275M15.75 3.186a24.284 24.284 0 01-1.5 0M3.75 21h16.5M6.25 3.186a24.284 24.284 0 00-1.5 0" />
      </svg>
    ),
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
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
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
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    color: "#d4a843",
    items: [
      "Recognizing Burnout Before It's Too Late",
      "Work-Life Balance Strategies",
      "Managing Workplace Stress",
      "Building a Healthy Work Environment",
    ],
  },
  {
    title: "Consultancy",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#244a72] to-[#2d5a87] px-6 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4a9e6e]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#d4a843]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#7bc67e]">
            Knowledge Hub
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold md:text-5xl">Resources</h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-300">
            Articles, guides, and practical resources to support your mental
            health, relationships, and organizational growth.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
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
      <section className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              Common Questions
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-300 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
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
      <section className="relative overflow-hidden bg-[#4a9e6e] px-6 py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-white">
            Need Professional Support?
          </h2>
          <p className="mt-3 text-white/80">
            Talk to Hope Bridge for personalized guidance.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#4a9e6e] shadow-lg transition-all hover:bg-zinc-100 hover:shadow-xl"
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
