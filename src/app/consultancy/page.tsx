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
    icon: "🏢",
  },
  {
    title: "Institutional Strengthening",
    description:
      "Build robust institutional frameworks, governance structures, and operational systems.",
    href: "/consultancy/institutional",
    icon: "🏛️",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project management support from planning and design through implementation and evaluation.",
    href: "/consultancy/project-management",
    icon: "📊",
  },
  {
    title: "Research & Consultancy",
    description:
      "Evidence-based research, assessments, and consultancy to inform decision-making and strategy.",
    href: "/consultancy/research",
    icon: "🔍",
  },
  {
    title: "Training & Coaching",
    description:
      "Customized training programs, workshops, and coaching for teams and leadership.",
    href: "/consultancy/training",
    icon: "📚",
  },
  {
    title: "Technical Consultancy",
    description:
      "Specialized technical expertise across various sectors and domains.",
    href: "/consultancy/technical",
    icon: "⚙️",
  },
];

export default function ConsultancyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#244a72] to-[#2d5a87] px-6 py-20 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4a843]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
            Professional Services
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Consultancy Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.href}
                className="group rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a843]/30 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4a843]/10">
                  <span className="text-xl">{service.icon}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-[#1e3a5f] dark:text-white">
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
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
              Our Clients
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Who We Work With
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800"
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              How We Work
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Our Approach
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1e3a5f] px-6 py-16">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4a843]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Partner With Us?
          </h2>
          <p className="mt-2 text-zinc-300">
            Let&apos;s discuss how we can support your organization&apos;s
            goals and mission.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#d4a843]/25 transition-all hover:bg-[#c49a38] hover:shadow-xl"
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
