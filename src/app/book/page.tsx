"use client";

import { useState } from "react";
import Link from "next/link";

const serviceTypes = [
  { id: "individual", label: "Individual Counseling", emoji: "🧠" },
  { id: "couples", label: "Marriage/Couples Counseling", emoji: "💑" },
  { id: "family", label: "Family Counseling", emoji: "👨‍👩‍👧‍👦" },
  { id: "consultancy", label: "Consultancy", emoji: "📊" },
  { id: "training", label: "Training/Coaching", emoji: "📚" },
  { id: "other", label: "Other", emoji: "💬" },
];

const serviceOptions: Record<string, string[]> = {
  individual: [
    "Stress & Anxiety",
    "Grief & Loss",
    "Trauma & Crisis",
    "Anger Management",
    "Self-Esteem & Personal Growth",
    "Workplace Stress & Burnout",
    "Life Transitions",
    "Other",
  ],
  couples: [
    "Premarital Counseling",
    "Relationship Challenges",
    "Communication Issues",
    "Conflict Resolution",
    "Trust & Intimacy",
    "Other",
  ],
  family: [
    "Family Conflict",
    "Parenting Support",
    "Family Communication",
    "Relationship Challenges",
    "Life Transitions",
    "Other",
  ],
  consultancy: [
    "Organizational Capacity Development",
    "Institutional Strengthening",
    "Project Management",
    "Research & Consultancy",
    "Technical Consultancy",
    "Other",
  ],
  training: [
    "Leadership Development",
    "Team Building",
    "Communication Skills",
    "Conflict Resolution",
    "Project Management",
    "Other",
  ],
  other: ["Please specify in the next step"],
};

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    format: "",
    name: "",
    phone: "",
    email: "",
    communication: "",
    notes: "",
  });

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId);
    setSelectedService("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const canProceed = () => {
    if (step === 1) return !!selectedType;
    if (step === 2) return !!selectedService;
    if (step === 3) return !!formData.date && !!formData.time && !!formData.format;
    if (step === 4) return !!formData.name && !!formData.phone;
    return true;
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: selectedType,
          service: selectedService,
          date: formData.date,
          time: formData.time,
          format: formData.format,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          communication: formData.communication,
          notes: formData.notes,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit booking");
      setStep(5);
    } catch (err: any) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">Book a Session</h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-300">
            Complete the form below to request an appointment. We&apos;ll
            confirm your booking as soon as possible.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          {/* Progress Steps */}
          <div className="mb-12 flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                    step >= s
                      ? "bg-[#4a9e6e] text-white"
                      : "bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
                  }`}
                >
                  {step > s ? "✓" : s}
                </div>
                {s < 4 && (
                  <div
                    className={`h-0.5 w-12 sm:w-20 ${
                      step > s ? "bg-[#4a9e6e]" : "bg-zinc-200 dark:bg-zinc-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Service Type */}
          {step === 1 && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
                What can we help you with?
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Select the type of support you&apos;re looking for.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {serviceTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type.id)}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                      selectedType === type.id
                        ? "border-[#4a9e6e] bg-[#4a9e6e]/5"
                        : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700"
                    }`}
                  >
                    <span className="text-2xl">{type.emoji}</span>
                    <span className="font-medium text-[#1e3a5f] dark:text-white">
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Specific Service */}
          {step === 2 && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
                Choose a service
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Select the specific service you&apos;re interested in.
              </p>
              <div className="mt-6 space-y-2">
                {(serviceOptions[selectedType] || []).map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                      selectedService === service
                        ? "border-[#4a9e6e] bg-[#4a9e6e]/5"
                        : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700"
                    }`}
                  >
                    <span className="font-medium text-[#1e3a5f] dark:text-white">
                      {service}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Appointment Details */}
          {step === 3 && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
                Preferred appointment
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Let us know when you&apos;d like to meet.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8:00 - 12:00)</option>
                    <option value="afternoon">Afternoon (12:00 - 17:00)</option>
                    <option value="evening">Evening (17:00 - 20:00)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Session Format
                  </label>
                  <div className="mt-2 flex gap-3">
                    {["Online", "In-person"].map((format) => (
                      <button
                        key={format}
                        onClick={() =>
                          setFormData({ ...formData, format: format.toLowerCase() })
                        }
                        className={`flex-1 rounded-xl border-2 p-3 text-sm font-medium transition-all ${
                          formData.format === format.toLowerCase()
                            ? "border-[#4a9e6e] bg-[#4a9e6e]/5 text-[#4a9e6e]"
                            : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400"
                        }`}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Your Information */}
          {step === 4 && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
                Your information
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Tell us how to reach you.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Preferred Communication Method
                  </label>
                  <select
                    name="communication"
                    value={formData.communication}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  >
                    <option value="">Select method</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Briefly tell us what type of support you&apos;re looking for
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#4a9e6e] focus:outline-none focus:ring-1 focus:ring-[#4a9e6e] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Your information will be handled confidentially in accordance
                  with our privacy policy.
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4a9e6e]/10">
                <span className="text-4xl">✓</span>
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold text-[#1e3a5f] dark:text-white">
                Thank You!
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Your request has been received. We&apos;ll get back to you
                shortly to confirm your appointment.
              </p>
              <div className="mt-8 rounded-xl bg-zinc-50 p-6 text-left dark:bg-zinc-800">
                <h3 className="font-semibold text-[#1e3a5f] dark:text-white">
                  Booking Summary
                </h3>
                <div className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>
                    <span className="font-medium">Service:</span>{" "}
                    {serviceTypes.find((t) => t.id === selectedType)?.label}
                  </p>
                  <p>
                    <span className="font-medium">Specific:</span>{" "}
                    {selectedService}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span> {formData.date}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span> {formData.time}
                  </p>
                  <p>
                    <span className="font-medium">Format:</span>{" "}
                    {formData.format}
                  </p>
                  <p>
                    <span className="font-medium">Name:</span> {formData.name}
                  </p>
                </div>
              </div>
              <Link
                href="/"
                className="mt-8 inline-flex items-center rounded-full bg-[#4a9e6e] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
              >
                Back to Home
              </Link>
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
              {submitError}
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <button
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className="rounded-full bg-[#4a9e6e] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || submitting}
                  className="rounded-full bg-[#4a9e6e] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8a5e] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
