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
  },
  {
    title: "Institutional Strengthening",
    description:
      "Build robust institutional frameworks, governance structures, and operational systems.",
    href: "/consultancy/institutional",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project management support from planning and design through implementation and evaluation.",
    href: "/consultancy/project-management",
  },
  {
    title: "Research & Consultancy",
    description:
      "Evidence-based research, assessments, and consultancy to inform decision-making and strategy.",
    href: "/consultancy/research",
  },
  {
    title: "Training & Coaching",
    description:
      "Customized training programs, workshops, and coaching for teams and leadership.",
    href: "/consultancy/training",
  },
  {
    title: "Technical Consultancy",
    description:
      "Specialized technical expertise across various sectors and domains.",
    href: "/consultancy/technical",
  },
];

export default function ConsultancyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
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
            className="mt-8 inline-flex items-center rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c49a38]"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.href}
                className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-[#d4a843] hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#d4a843] hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
            Who We Work With
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-800"
              >
                <span className="text-[#d4a843]">✦</span>
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
          <h2 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
            Our Approach
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
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
              <div key={item.step}>
                <span className="text-4xl font-bold text-[#d4a843]">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#1e3a5f] dark:text-white">
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

      {/* CTA */}
      <section className="bg-[#1e3a5f] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Partner With Us?
          </h2>
          <p className="mt-2 text-zinc-300">
            Let&apos;s discuss how we can support your organization&apos;s
            goals and mission.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-[#d4a843] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c49a38]"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
