import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Mental Health Counseling",
    description:
      "Professional support for stress, anxiety, grief, trauma, and personal growth.",
    href: "/counseling/individual",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 01-5.982-2.275M12 21a8.966 8.966 0 005.982-2.275M15.75 3.186a24.284 24.284 0 01-1.5 0M3.75 21h16.5M6.25 3.186a24.284 24.284 0 00-1.5 0" />
      </svg>
    ),
  },
  {
    title: "Relationships & Family",
    description:
      "Marriage, couples, and family counseling to strengthen your closest bonds.",
    href: "/counseling/marriage",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Organizational Development",
    description:
      "Capacity building, training, and institutional strengthening for organizations.",
    href: "/consultancy/organizational",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Project Consultancy",
    description:
      "Research, project management, and technical consultancy services.",
    href: "/consultancy/project-management",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const whyHopeBridge = [
  {
    title: "Professional",
    description: "Licensed and experienced counselors and consultants.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Confidential",
    description: "Your privacy and trust are our highest priority.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Evidence-Based",
    description: "Approaches grounded in research and proven outcomes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 01-5.982-2.275M12 21a8.966 8.966 0 005.982-2.275M15.75 3.186a24.284 24.284 0 01-1.5 0M3.75 21h16.5M6.25 3.186a24.284 24.284 0 00-1.5 0" />
      </svg>
    ),
  },
  {
    title: "Integrated Approach",
    description: "Combining counseling expertise with organizational consultancy.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const whoWeServe = [
  {
    category: "Individuals",
    items: ["Personal challenges", "Mental wellbeing", "Personal growth"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    category: "Couples & Families",
    items: ["Relationships", "Marriage", "Parenting"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    category: "Organizations",
    items: ["Capacity building", "Training", "Organizational strengthening"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
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
          {/* Decorative pattern */}
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-5" fill="none" viewBox="0 0 800 600">
            <circle cx="400" cy="300" r="200" stroke="white" strokeWidth="0.5" />
            <circle cx="400" cy="300" r="300" stroke="white" strokeWidth="0.5" />
            <circle cx="400" cy="300" r="400" stroke="white" strokeWidth="0.5" />
            <path d="M200,300 Q400,100 600,300 Q400,500 200,300" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
            
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-zinc-200 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4a9e6e]" />
                Serving Dar es Salaam & beyond
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
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

            {/* Hero visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4a9e6e]/20 to-[#d4a843]/20 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/20">
                        <svg className="h-6 w-6 text-[#7bc67e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <p className="mt-3 text-sm font-medium text-white">Compassionate Care</p>
                      <p className="mt-1 text-xs text-zinc-400">With empathy and understanding</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4a843]/20">
                        <svg className="h-6 w-6 text-[#d4a843]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </div>
                      <p className="mt-3 text-sm font-medium text-white">Proven Results</p>
                      <p className="mt-1 text-xs text-zinc-400">Evidence-based approaches</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <svg className="h-6 w-6 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                      <p className="mt-3 text-sm font-medium text-white">100% Confidential</p>
                      <p className="mt-1 text-xs text-zinc-400">Your privacy protected</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/20">
                        <svg className="h-6 w-6 text-[#7bc67e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="mt-3 text-sm font-medium text-white">Flexible Scheduling</p>
                      <p className="mt-1 text-xs text-zinc-400">Online & in-person sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help? */}
      <section className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              Our Services
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
              How Can We Help?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Choose the path that best describes what you&apos;re looking for.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a9e6e] hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-[#4a9e6e]"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#4a9e6e]/5 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#4a9e6e]/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/10 text-[#4a9e6e] transition-colors group-hover:bg-[#4a9e6e] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-[#1e3a5f] group-hover:text-[#4a9e6e] dark:text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#4a9e6e] transition-all group-hover:gap-2">
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
      <section className="bg-white px-6 py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
              Why Us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
              Why Hope Bridge?
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyHopeBridge.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4a9e6e]/10 to-[#4a9e6e]/5 text-[#4a9e6e]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1e3a5f] dark:text-white">
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
      <section className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              For Everyone
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
              Who Can We Support?
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {whoWeServe.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10 text-[#1e3a5f] dark:text-white">
                  {group.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#1e3a5f] dark:text-white">
                  {group.category}
                </h3>
                <ul className="mt-5 space-y-3">
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

          <div className="mt-14 overflow-hidden rounded-2xl bg-[#1e3a5f]">
            <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <h3 className="font-heading text-xl font-semibold text-white">
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
      <section className="bg-white px-6 py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
                Hope Talks
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white md:text-4xl">
                Conversations That Create Hope
              </h2>
              <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
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
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
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
              <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
                Feeling overwhelmed at work? In this episode, we explore the signs
                of burnout and practical strategies for recovery and prevention.
              </p>
              <Link
                href="/counseling/individual"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#4a9e6e] transition-all hover:gap-2"
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
      <section className="relative overflow-hidden bg-[#4a9e6e] px-6 py-24">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          <svg className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-10" fill="none" viewBox="0 0 600 600">
            <circle cx="300" cy="300" r="150" stroke="white" strokeWidth="1" />
            <circle cx="300" cy="300" r="250" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Take the Next Step
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
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
