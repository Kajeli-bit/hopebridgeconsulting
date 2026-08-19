import Link from "next/link";

const services = [
  {
    title: "Mental Health Counseling",
    description:
      "Professional support for stress, anxiety, grief, trauma, and personal growth.",
    href: "/counseling/individual",
    icon: "🧠",
  },
  {
    title: "Relationships & Family",
    description:
      "Marriage, couples, and family counseling to strengthen your closest bonds.",
    href: "/counseling/marriage",
    icon: "💑",
  },
  {
    title: "Organizational Development",
    description:
      "Capacity building, training, and institutional strengthening for organizations.",
    href: "/consultancy/organizational",
    icon: "🏢",
  },
  {
    title: "Project Consultancy",
    description:
      "Research, project management, and technical consultancy services.",
    href: "/consultancy/project-management",
    icon: "📊",
  },
];

const whyHopeBridge = [
  {
    title: "Professional",
    description: "Licensed and experienced counselors and consultants.",
    icon: "🎓",
  },
  {
    title: "Confidential",
    description: "Your privacy and trust are our highest priority.",
    icon: "🔒",
  },
  {
    title: "Evidence-Based",
    description: "Approaches grounded in research and proven outcomes.",
    icon: "📋",
  },
  {
    title: "Integrated Approach",
    description: "Combining counseling expertise with organizational consultancy.",
    icon: "🤝",
  },
];

const whoWeServe = [
  {
    category: "Individuals",
    items: ["Personal challenges", "Mental wellbeing", "Personal growth"],
    icon: "🧑",
  },
  {
    category: "Couples & Families",
    items: ["Relationships", "Marriage", "Parenting"],
    icon: "👨‍👩‍👧‍👦",
  },
  {
    category: "Organizations",
    items: ["Capacity building", "Training", "Organizational strengthening"],
    icon: "🏢",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#244a72] to-[#2d5a87] px-6 py-24 text-white md:py-36">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#4a9e6e]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#d4a843]/8 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-zinc-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a9e6e]" />
              Serving Dar es Salaam & beyond
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Find Your Way
              <span className="block text-[#7bc67e]">Forward</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Professional counseling and consultancy supporting individuals,
              families, organizations, and communities.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4a9e6e] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4a9e6e]/25 transition-all hover:bg-[#3d8a5e] hover:shadow-xl hover:shadow-[#4a9e6e]/30"
              >
                Book a Counseling Session
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/consultancy"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
              >
                Explore Consultancy
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#4a9e6e]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Confidential
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#4a9e6e]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Licensed Professionals
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#4a9e6e]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Online & In-Person
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help? */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              Our Services
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
              How Can We Help?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Choose the path that best describes what you&apos;re looking for.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a9e6e] hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-[#4a9e6e]"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#4a9e6e]/5 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#4a9e6e]/10" />
                <span className="relative text-4xl">{service.icon}</span>
                <h3 className="relative mt-4 text-lg font-semibold text-[#1e3a5f] group-hover:text-[#4a9e6e] dark:text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <span className="relative mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#4a9e6e] transition-all group-hover:gap-2">
                  Learn More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hope Bridge? */}
      <section className="bg-white px-6 py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
              Why Us
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
              Why Hope Bridge?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyHopeBridge.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4a9e6e]/10 to-[#4a9e6e]/5">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              For Everyone
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
              Who Can We Support?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whoWeServe.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-zinc-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                  <span className="text-xl">{group.icon}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1e3a5f] dark:text-white">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4a9e6e]/10 text-xs text-[#4a9e6e]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl bg-[#1e3a5f]">
            <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Development Partners & Institutions
                </h3>
                <p className="mt-2 text-zinc-300">
                  Research • Projects • Consultancy • Technical Support
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  href="/consultancy"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1e3a5f] transition-all hover:bg-zinc-100 hover:shadow-md"
                >
                  Explore Our Services
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hope Talks */}
      <section className="bg-white px-6 py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
                Hope Talks
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
                Conversations That Create Hope
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                Our podcast explores mental health, relationships, organizational
                leadership, and community development through meaningful
                conversations with experts and practitioners.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/hope-talks"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#d4a843]/25 transition-all hover:bg-[#c49a38] hover:shadow-xl"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Explore Podcast
                </Link>
                <Link
                  href="/hope-talks"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4a843] px-8 py-3.5 text-sm font-semibold text-[#d4a843] transition-all hover:bg-[#d4a843]/10"
                >
                  Latest Episode
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 transition-shadow hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#d4a843]">
                  <span className="text-xl">🎙️</span>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#d4a843]">
                    Latest Episode
                  </p>
                  <p className="font-semibold text-[#1e3a5f] dark:text-white">
                    Understanding Workplace Burnout
                  </p>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                Feeling overwhelmed at work? In this episode, we explore the signs
                of burnout and practical strategies for recovery and prevention.
              </p>
              <Link
                href="/counseling/individual"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#4a9e6e] transition-all hover:gap-2"
              >
                Explore Workplace Stress Support
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#4a9e6e] px-6 py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Take the Next Step
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Whether you need someone to talk to or professional consultancy for
            your organization, we&apos;re here to help.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#4a9e6e] shadow-lg transition-all hover:bg-zinc-100 hover:shadow-xl"
            >
              Book a Session
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
