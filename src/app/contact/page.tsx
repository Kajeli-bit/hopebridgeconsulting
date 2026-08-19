import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hope Bridge",
  description:
    "Get in touch with Hope Bridge Counseling and Consultancy. Contact us for counseling sessions or consultancy inquiries.",
};

export default function ContactPage() {
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
            Reach Out
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            We&apos;re here to help. Whether you need counseling support or
            organizational consultancy, reach out and let&apos;s start the
            conversation.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4a9e6e]">
                Get in Touch
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#1e3a5f] dark:text-white">
                Contact Information
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                    <svg className="h-5 w-5 text-[#1e3a5f] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] dark:text-white">
                      Address
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      P.O. Box 32724
                      <br />
                      Msigani, Malambamawili, Ubungo
                      <br />
                      Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                    <svg className="h-5 w-5 text-[#1e3a5f] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] dark:text-white">
                      Phone
                    </h3>
                    <p className="mt-1">
                      <a href="tel:+255683410417" className="text-sm text-zinc-600 transition-colors hover:text-[#4a9e6e] dark:text-zinc-400">
                        0683 410 417
                      </a>
                    </p>
                    <p>
                      <a href="tel:+255655806343" className="text-sm text-zinc-600 transition-colors hover:text-[#4a9e6e] dark:text-zinc-400">
                        0655 806 343
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://wa.me/255683410417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#20bd5a] hover:shadow-md"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+255683410417"
                    className="inline-flex items-center gap-2 rounded-full border border-[#1e3a5f] px-6 py-3 text-sm font-semibold text-[#1e3a5f] transition-all hover:bg-[#1e3a5f] hover:text-white dark:border-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-700"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white">
                  Send Us a Message
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <form className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm transition-colors placeholder:text-zinc-400 focus:border-[#4a9e6e] focus:outline-none focus:ring-2 focus:ring-[#4a9e6e]/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm transition-colors placeholder:text-zinc-400 focus:border-[#4a9e6e] focus:outline-none focus:ring-2 focus:ring-[#4a9e6e]/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm transition-colors placeholder:text-zinc-400 focus:border-[#4a9e6e] focus:outline-none focus:ring-2 focus:ring-[#4a9e6e]/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="reason"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Reason for Contact
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm transition-colors focus:border-[#4a9e6e] focus:outline-none focus:ring-2 focus:ring-[#4a9e6e]/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                      >
                        <option value="">Select a reason</option>
                        <option value="counseling">Counseling Inquiry</option>
                        <option value="consultancy">Consultancy Inquiry</option>
                        <option value="hope-talks">Hope Talks / Guest Inquiry</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="mt-1.5 w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm transition-colors placeholder:text-zinc-400 focus:border-[#4a9e6e] focus:outline-none focus:ring-2 focus:ring-[#4a9e6e]/20 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#4a9e6e] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#3d8a5e] hover:shadow-md"
                  >
                    Send Message
                  </button>
                </form>
                <p className="mt-4 text-center text-xs text-zinc-500 dark:text-zinc-400">
                  🔒 Your information will be handled confidentially in accordance
                  with our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
