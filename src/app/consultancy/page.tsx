import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultancy Services | Hope Bridge",
  description:
    "Professional organizational and institutional consultancy services for capacity development, project management, and more.",
};

const services = [
  {
    title: "Organizational Capacity Development",
    description:
      "Strengthen your organization's capabilities through strategic planning, process improvement, and team development.",
    href: "/consultancy/organizational",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Institutional Strengthening",
    description:
      "Build robust institutional frameworks, governance structures, and operational systems.",
    href: "/consultancy/institutional",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "End-to-end project management support from planning and design through implementation and evaluation.",
    href: "/consultancy/project-management",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Research & Consultancy",
    description:
      "Evidence-based research, assessments, and consultancy to inform decision-making and strategy.",
    href: "/consultancy/research",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Training & Coaching",
    description:
      "Customized training programs, workshops, and coaching for teams and leadership.",
    href: "/consultancy/training",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Technical Consultancy",
    description:
      "Specialized technical expertise across various sectors and domains.",
    href: "/consultancy/technical",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.177a1.5 1.5 0 01-2.208-1.59L3.91 5.645a1.5 1.5 0 011.5-1.275h8.18M14.25 9.75l3 3m0 0l3 3m-3-3l-3-3m3 3l3-3M3.75 12h16.5" />
      </svg>
    ),
  },
];

export default function ConsultancyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#244a72] to-[#2d5a87] px-6 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4a843]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
            Professional Services
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold md:text-5xl">
            Consultancy Services
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-300">
            Empowering organizations and institutions through capacity
            development, project management, research, and technical expertise.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#d4a843]/25 transition-all hover:bg-[#c49a38] hover:shadow-xl"
          >
            Request a Consultation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.href}
                className="group rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a843]/30 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4a843]/10 text-[#d4a843]">
                  {service.icon}
                </div>
                <h2 className="mt-5 font-heading text-lg font-bold text-[#1e3a5f] dark:text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#d4a843] transition-all group-hover:gap-2"
                >
                  Learn More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
              Our Clients
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Who We Work With
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "NGOs & Civil Society Organizations",
              "Government Institutions",
              "Development Partners",
              "Private Sector Organizations",
              "Community-Based Organizations",
              "International Organizations",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#d4a843]/10 text-xs text-[#d4a843]">
                  ✦
                </span>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              How We Work
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Our Approach
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "We begin by understanding your organization's unique needs, challenges, and goals.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Develop a tailored approach with clear objectives, timelines, and deliverables.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Work alongside your team to implement solutions with hands-on support.",
              },
              {
                step: "04",
                title: "Evaluation",
                description:
                  "Measure outcomes, document learnings, and plan for sustainable impact.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4a843]/10 to-[#d4a843]/5">
                  <span className="text-lg font-bold text-[#d4a843]">
                    {item.step}
                  </span>
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1e3a5f] px-6 py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4a843]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-white">
            Ready to Partner With Us?
          </h2>
          <p className="mt-3 text-zinc-300">
            Let&apos;s discuss how we can support your organization&apos;s
            goals and mission.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#d4a843]/25 transition-all hover:bg-[#c49a38] hover:shadow-xl"
          >
            Request a Consultation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
