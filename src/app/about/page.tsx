import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hope Bridge",
  description:
    "Learn about Hope Bridge Counseling and Consultancy — our story, mission, vision, and approach.",
};

const values = [
  {
    title: "Hope",
    description:
      "We believe in the possibility of positive change and the resilience of the human spirit.",
    icon: "🌱",
  },
  {
    title: "Trust",
    description:
      "We build relationships grounded in honesty, confidentiality, and mutual respect.",
    icon: "🤝",
  },
  {
    title: "Professionalism",
    description:
      "We uphold the highest standards of professional practice and ethical conduct.",
    icon: "🎓",
  },
  {
    title: "Compassion",
    description:
      "We approach every individual and organization with empathy, understanding, and genuine care.",
    icon: "💛",
  },
];

const team = [
  {
    name: "Dr. Grace Mwangoka",
    role: "Founder & Lead Consultant",
    bio: "A seasoned counselor and organizational development specialist with extensive experience in mental health, capacity building, and community development.",
    initials: "GM",
  },
  {
    name: "Counseling Team",
    role: "Professional Counselors",
    bio: "Our team of licensed counselors specializes in individual, couples, family, and psychosocial support.",
    initials: "CT",
  },
  {
    name: "Consultancy Team",
    role: "Technical Consultants",
    bio: "Experienced consultants in organizational development, project management, research, and training.",
    initials: "CN",
  },
];

export default function AboutPage() {
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
            Our Story
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">About Hope Bridge</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Professional counseling and consultancy services supporting
            individuals, families, organizations, and communities in Dar es
            Salaam, Tanzania.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
                Who We Are
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-zinc-600 leading-relaxed dark:text-zinc-400">
                <p>
                  Hope Bridge Counseling and Consultancy was founded with a
                  clear vision: to be a bridge connecting people to hope,
                  healing, and professional growth.
                </p>
                <p>
                  We recognized that individuals, families, and organizations
                  often face challenges that require professional support — but
                  accessing that support shouldn&apos;t be difficult or
                  intimidating.
                </p>
                <p>
                  By combining professional counseling services with
                  organizational consultancy, we offer a unique integrated
                  approach that addresses both personal wellbeing and
                  organizational effectiveness.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 transition-shadow hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/10">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#1e3a5f] dark:text-white">
                Our Purpose
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                To provide professional, confidential, and evidence-based
                counseling and consultancy services that empower individuals,
                strengthen relationships, and build organizational capacity
                across Tanzania and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                <span className="text-xl">🚀</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-[#1e3a5f] dark:text-white">
                Our Mission
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                To deliver professional counseling and consultancy services that
                support mental health, strengthen relationships, and build
                organizational capacity, contributing to the wellbeing of
                individuals, families, and communities.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4a843]/10">
                <span className="text-xl">🔭</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-[#1e3a5f] dark:text-white">
                Our Vision
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                To be a leading provider of integrated counseling and
                consultancy services, creating lasting positive change in the
                lives of individuals, the strength of organizations, and the
                wellbeing of communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
              Our Principles
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Our Values
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4a9e6e]/10 to-[#4a9e6e]/5">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f] dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative overflow-hidden bg-[#1e3a5f] px-6 py-20 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4a9e6e]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#d4a843]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#7bc67e]">
            Our Advantage
          </span>
          <h2 className="mt-2 text-3xl font-bold">What Makes Us Different</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/20">
                <span className="text-xl">🔗</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#7bc67e]">
                Integrated Model
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-300">
                We combine professional counseling with organizational
                consultancy — a unique approach that addresses both personal
                wellbeing and organizational effectiveness.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4a843]/20">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#7bc67e]">
                Evidence-Based
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-300">
                Our approaches are grounded in research and proven methodologies,
                ensuring effective and sustainable outcomes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <span className="text-xl">❤️</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#7bc67e]">
                Client-Centered
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-300">
                Every client — individual or organization — receives personalized
                attention and solutions tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="px-6 py-20" id="team">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              The People
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Our Team
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-zinc-100 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] text-lg font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f] dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#4a9e6e]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {member.bio}
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
            Ready to Work With Us?
          </h2>
          <p className="mt-2 text-white/80">
            Whether you need personal support or organizational consultancy,
            we&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
