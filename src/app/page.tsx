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
  },
  {
    title: "Confidential",
    description: "Your privacy and trust are our highest priority.",
  },
  {
    title: "Evidence-Based",
    description: "Approaches grounded in research and proven outcomes.",
  },
  {
    title: "Integrated Approach",
    description: "Combining counseling expertise with organizational consultancy.",
  },
];

const whoWeServe = [
  {
    category: "Individuals",
    items: ["Personal challenges", "Mental wellbeing", "Personal growth"],
  },
  {
    category: "Couples & Families",
    items: ["Relationships", "Marriage", "Parenting"],
  },
  {
    category: "Organizations",
    items: ["Capacity building", "Training", "Organizational strengthening"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#4a9e6e]" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#d4a843]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Find Your Way Forward
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Professional counseling and consultancy supporting individuals,
              families, organizations, and communities.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-[#4a9e6e] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
              >
                Book a Counseling Session
              </Link>
              <Link
                href="/consultancy"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Explore Consultancy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help? */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
            How Can We Help?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
            Choose the path that best describes what you&apos;re looking for.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-[#4a9e6e] hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-[#4a9e6e]"
              >
                <span className="text-4xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f] group-hover:text-[#4a9e6e] dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#4a9e6e]">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hope Bridge? */}
      <section className="bg-white px-6 py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
            Why Hope Bridge?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyHopeBridge.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4a9e6e]/10">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
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
          <h2 className="text-center text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
            Who Can We Support?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whoWeServe.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-800"
              >
                <h3 className="text-xl font-semibold text-[#1e3a5f] dark:text-white">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="text-[#4a9e6e]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#1e3a5f] p-8 text-center text-white">
            <h3 className="text-xl font-semibold">
              Development Partners & Institutions
            </h3>
            <p className="mt-2 text-zinc-300">
              Research • Projects • Consultancy • Technical Support
            </p>
            <Link
              href="/consultancy"
              className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1e3a5f] transition-colors hover:bg-zinc-100"
            >
              Explore Our Services
            </Link>
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
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Our podcast explores mental health, relationships, organizational
                leadership, and community development through meaningful
                conversations with experts and practitioners.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/hope-talks"
                  className="inline-flex items-center justify-center rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c49a38]"
                >
                  Explore Podcast
                </Link>
                <Link
                  href="/hope-talks"
                  className="inline-flex items-center justify-center rounded-full border border-[#d4a843] px-8 py-3.5 text-sm font-semibold text-[#d4a843] transition-colors hover:bg-[#d4a843]/10"
                >
                  Latest Episode
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a843]">
                  <span className="text-lg">🎙️</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Latest Episode
                  </p>
                  <p className="font-semibold text-[#1e3a5f] dark:text-white">
                    Understanding Workplace Burnout
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Feeling overwhelmed at work? In this episode, we explore the signs
                of burnout and practical strategies for recovery and prevention.
              </p>
              <Link
                href="/counseling/individual"
                className="mt-4 inline-flex items-center text-sm font-medium text-[#4a9e6e] hover:underline"
              >
                Explore Workplace Stress Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4a9e6e] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Take the Next Step
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether you need someone to talk to or professional consultancy for
            your organization, we&apos;re here to help.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#4a9e6e] transition-colors hover:bg-zinc-100"
            >
              Book a Session
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
