"use client";

import { useState } from "react";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FormData {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  caseType?: string;
  message?: string;
}

const caseTypes = [
  "Litigation & Court Cases",
  "Legal Drafting & Documentation",
  "ADR & Mediation",
  "Corporate Law Consultancy",
  "Shariah Law Matters",
  "Other Legal Consultation",
];

const nextSteps = [
  "Share the core facts of your matter",
  "Receive a practical first response",
  "Confirm documents, timelines, and next action",
];

const contactItems = [
  {
    label: "Phone",
    icon: Phone,
    lines: ["+92-306-5353880"],
    hrefs: ["tel:+923065353880"],
  },
  {
    label: "Email",
    icon: Mail,
    lines: ["hussainzahidadv@gmail.com"],
    hrefs: ["mailto:hussainzahidadv@gmail.com"],
  },
  {
    label: "Office",
    icon: MapPin,
    lines: ["Rawalpindi & Islamabad", "Pakistan"],
  },
  {
    label: "Working Hours",
    icon: Clock,
    lines: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";

    const phoneRegex = /^[\d\s\-+()]{10,}$/;
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Please enter a valid phone number";

    if (!formData.caseType) newErrors.caseType = "Please select a case type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", caseType: "", message: "" });
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputBase =
    "h-11 w-full rounded-lg border bg-[var(--surface-card)] px-4 text-base text-[var(--ink)] transition-all duration-200 placeholder:text-[var(--muted-soft)] focus:outline-none focus:ring-0";
  const inputNormal = `${inputBase} border-[var(--hairline-strong)] focus:border-[var(--ink)]`;
  const inputError = `${inputBase} border-[var(--semantic-error)] focus:border-[var(--semantic-error)]`;

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--canvas-soft)] py-24 lg:py-28">
      <div className="orb-field orb-mint right-[-8rem] top-20 h-72 w-72" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="label-eyebrow mb-5">Get In Touch</p>
            <h2 className="type-section mb-5 font-serif text-[var(--ink)]">
              Start With a Confidential Case Review
            </h2>
            <p className="type-body-lg mx-auto max-w-xl text-[var(--body)]">
              Send the essentials and get a clear next step for litigation,
              drafting, mediation, or Shariah law questions across Rawalpindi
              and Islamabad.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="editorial-card py-0">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8 grid gap-3 border-b border-[var(--hairline)] pb-7 sm:grid-cols-3">
                    {nextSteps.map((step, index) => (
                      <div key={step} className="flex gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--surface-strong)] text-xs font-medium text-[var(--ink)]">
                          {index + 1}
                        </span>
                        <p className="text-sm font-medium leading-snug text-[var(--body)]">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Full Name" error={errors.name} htmlFor="name">
                        <input id="name" name="name" value={formData.name} onChange={handleChange} required aria-invalid={errors.name ? "true" : "false"} className={errors.name ? inputError : inputNormal} placeholder="Your full name" />
                      </Field>
                      <Field label="Email Address" error={errors.email} htmlFor="email">
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required aria-invalid={errors.email ? "true" : "false"} className={errors.email ? inputError : inputNormal} placeholder="you@example.com" />
                      </Field>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Phone Number" error={errors.phone} htmlFor="phone">
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required aria-invalid={errors.phone ? "true" : "false"} className={errors.phone ? inputError : inputNormal} placeholder="+92-306-5353880" />
                      </Field>
                      <Field label="Case Type" error={errors.caseType} htmlFor="caseType">
                        <select id="caseType" name="caseType" value={formData.caseType} onChange={handleChange} required aria-invalid={errors.caseType ? "true" : "false"} className={errors.caseType ? inputError : inputNormal}>
                          <option value="">Select a case type</option>
                          {caseTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label="Message / Case Details" error={errors.message} htmlFor="message">
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} aria-invalid={errors.message ? "true" : "false"} className={`${errors.message ? inputError : inputNormal} h-auto resize-none py-3`} placeholder="Briefly explain what happened, deadlines, court dates, notices, or documents involved." />
                    </Field>

                    {submitStatus === "success" && (
                      <div role="alert" aria-live="polite" className="rounded-lg border border-[var(--semantic-success)]/30 bg-[var(--semantic-success)]/10 p-4">
                        <p className="text-center text-sm font-medium text-[var(--semantic-success)]">
                          Thank you. Your consultation request has been submitted.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div role="alert" aria-live="assertive" className="rounded-lg border border-[var(--semantic-error)]/30 bg-[var(--semantic-error)]/10 p-4">
                        <p className="text-center text-sm font-medium text-[var(--semantic-error)]">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    <Button type="submit" disabled={isSubmitting} className="ink-button h-11 w-full text-[15px] font-medium shadow-none disabled:cursor-not-allowed disabled:opacity-50">
                      {isSubmitting ? "Submitting..." : "Request Case Review"}
                    </Button>

                    <p className="text-center text-sm text-[var(--muted-copy)]">
                      Your details stay confidential. Avoid sharing passwords,
                      bank credentials, or unrelated private records in this form.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-5">
              <Card className="border-0 bg-[var(--surface-dark)] py-0 text-[var(--on-dark)] shadow-none">
                <CardContent className="p-8">
                  <h3 className="type-subsection mb-6 font-serif text-[var(--on-dark)]">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    {contactItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--surface-dark-elevated)]/12">
                            <Icon className="text-[var(--on-dark)]" size={16} aria-hidden="true" />
                          </div>
                          <div>
                            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--on-dark-soft)]">
                              {item.label}
                            </p>
                            {item.lines.map((line, index) =>
                              item.hrefs?.[index] ? (
                                <a key={line} className="block text-sm text-[var(--on-dark)]/82 hover:text-[var(--on-dark)]" href={item.hrefs[index]}>
                                  {line}
                                </a>
                              ) : (
                                <p key={line} className="text-sm text-[var(--on-dark)]/82">
                                  {line}
                                </p>
                              ),
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="editorial-card py-0">
                <CardContent className="p-8">
                  <h3 className="type-subsection mb-5 font-serif text-[var(--ink)]">
                    What Clients Value
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Focused legal practice across RWP/ISB",
                      "Session court familiarity",
                      "Free initial consultation",
                      "24-hour response target",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--surface-strong)] text-[var(--ink)]">
                          <Check size={12} aria-hidden="true" />
                        </span>
                        <span className="type-body text-[var(--body)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  children,
  error,
  htmlFor,
  label,
}: {
  children: React.ReactNode;
  error?: string;
  htmlFor: string;
  label: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="label-eyebrow block">
        {label} <span className="text-[var(--semantic-error)]">*</span>
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-xs font-medium text-[var(--semantic-error)]">
          {error}
        </p>
      )}
    </div>
  );
}
