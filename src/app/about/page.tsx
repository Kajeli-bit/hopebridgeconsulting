import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hope Bridge",
  description:
    "Learn about Hope Bridge Counseling and Consultancy — our story, mission, vision, and approach.",
};

const values = [
  {
    title: "Hope",
    description: "We believe in the possibility of positive change and the resilience of the human spirit.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Trust",
    description: "We build relationships grounded in honesty, confidentiality, and mutual respect.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Professionalism",
    description: "We uphold the highest standards of professional practice and ethical conduct.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Compassion",
    description: "We approach every individual and organization with empathy, understanding, and genuine care.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Anna Christopher Mbeyela",
    role: "Overall Leadership, Administration and Strategic Coordinator",
    bio: "Providing visionary leadership and strategic coordination to drive Hope Bridge's mission of delivering professional counseling and consultancy services.",
    image: "/team/anna-christopher-mbeyela.jpg",
    initials: "AM",
  },
  {
    name: "Dr. Felix Peter Mkini",
    role: "Deputy Coordinator",
    bio: "Supporting strategic coordination and operational leadership to ensure the effective delivery of counseling and consultancy services.",
    image: "/team/dr-felix-peter-mkini.jpg",
    initials: "FM",
  },
  {
    name: "Levina Athanas",
    role: "Head of Consultancy, Research and Knowledge Management",
    bio: "Leading consultancy, research initiatives, and knowledge management to drive evidence-based solutions and organizational impact.",
    image: "/team/levina-athanas.jpg",
    initials: "LA",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#244a72] to-[#2d5a87] px-6 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4a9e6e]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#d4a843]/8 blur-3xl" />
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-5" fill="none" viewBox="0 0 800 600">
            <circle cx="400" cy="300" r="200" stroke="white" strokeWidth="0.5" />
            <circle cx="400" cy="300" r="300" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#7bc67e]">
            Our Story
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold md:text-5xl">About Hope Bridge</h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-300">
            Professional counseling and consultancy services supporting
            individuals, families, organizations, and communities in Dar es
            Salaam, Tanzania.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
                Who We Are
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/10 text-[#4a9e6e]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#1e3a5f] dark:text-white">
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
      <section className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10 text-[#1e3a5f]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
                Our Mission
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                To deliver professional counseling and consultancy services that
                support mental health, strengthen relationships, and build
                organizational capacity, contributing to the wellbeing of
                individuals, families, and communities.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4a843]/10 text-[#d4a843]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
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
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#d4a843]">
              Our Principles
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Our Values
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4a9e6e]/10 to-[#4a9e6e]/5 text-[#4a9e6e]">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1e3a5f] dark:text-white">
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
      <section className="relative overflow-hidden bg-[#1e3a5f] px-6 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4a9e6e]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#d4a843]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#7bc67e]">
            Our Advantage
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">What Makes Us Different</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9e6e]/20 text-[#7bc67e]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#7bc67e]">
                Integrated Model
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-300">
                We combine professional counseling with organizational
                consultancy — a unique approach that addresses both personal
                wellbeing and organizational effectiveness.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4a843]/20 text-[#d4a843]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 01-5.982-2.275M12 21a8.966 8.966 0 005.982-2.275M15.75 3.186a24.284 24.284 0 01-1.5 0M3.75 21h16.5M6.25 3.186a24.284 24.284 0 00-1.5 0" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#7bc67e]">
                Evidence-Based
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-300">
                Our approaches are grounded in research and proven methodologies,
                ensuring effective and sustainable outcomes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-zinc-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#7bc67e]">
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
      <section className="px-6 py-24" id="team">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
              The People
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Our Team
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-zinc-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="relative mx-auto w-full overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-zinc-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1e3a5f] dark:text-white">
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
      <section className="relative overflow-hidden bg-[#4a9e6e] px-6 py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-white">
            Ready to Work With Us?
          </h2>
          <p className="mt-3 text-white/80">
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
