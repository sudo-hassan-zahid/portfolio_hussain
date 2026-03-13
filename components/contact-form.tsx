"use client";

import { useState } from "react";
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

  const caseTypes = [
    "Litigation & Court Cases",
    "Legal Drafting & Documentation",
    "ADR & Mediation",
    "Corporate Law Consultancy",
    "Shariah Law Matters",
    "Other Legal Consultation",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.caseType) {
      newErrors.caseType = "Please select a case type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      // TODO: Implement actual form submission to backend

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        caseType: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      // Handle error silently - user will see error message
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Shared input class — clean, gold focus ring
  const inputBase = "w-full px-4 py-3 rounded-xl border bg-white text-[#1D1D1F] text-sm transition-all duration-200 focus:outline-none focus:ring-2 placeholder:text-[#6E6E73]/60";
  const inputNormal = `${inputBase} border-[#D2D2D7] focus:border-[#8B6914] focus:ring-[#8B6914]/15`;
  const inputError = `${inputBase} border-red-400 focus:ring-red-400/20`;

  return (
    <section id="contact" className="py-28 lg:py-36 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,105,20,0.05) 0%, #ffffff 60%)' }}>
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16">
            <p className="label-eyebrow mb-5">Get In Touch</p>
            <h2
              className="type-section font-serif text-[#1D1D1F] mb-5"
            >
              Schedule Your Consultation
            </h2>
            <p className="type-body-lg text-[#6E6E73] max-w-xl mx-auto">
              Discuss your legal matter with an experienced professional. Free initial consultation available for qualifying cases.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border border-[#D2D2D7] bg-white shadow-none rounded-2xl">
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="label-eyebrow block"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={errors.name ? inputError : inputNormal}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" className="text-xs text-red-500 font-medium mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="label-eyebrow block"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={errors.email ? inputError : inputNormal}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="label-eyebrow block"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={errors.phone ? "true" : "false"}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          className={errors.phone ? inputError : inputNormal}
                          placeholder="+92 300 1234567"
                        />
                        {errors.phone && (
                          <p id="phone-error" role="alert" className="text-xs text-red-500 font-medium mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="caseType"
                          className="label-eyebrow block"
                        >
                          Case Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="caseType"
                          name="caseType"
                          value={formData.caseType}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={errors.caseType ? "true" : "false"}
                          aria-describedby={errors.caseType ? "caseType-error" : undefined}
                          className={errors.caseType ? inputError : inputNormal}
                        >
                          <option value="">Select a case type</option>
                          {caseTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.caseType && (
                          <p id="caseType-error" role="alert" className="text-xs text-red-500 font-medium mt-1">{errors.caseType}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="label-eyebrow block"
                      >
                        Message / Case Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        rows={6}
                        className={`${errors.message ? inputError : inputNormal} resize-none`}
                        placeholder="Please provide details about your legal matter..."
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="text-xs text-red-500 font-medium mt-1">{errors.message}</p>
                      )}
                    </div>

                    {submitStatus === "success" && (
                      <div role="alert" aria-live="polite" className="p-4 rounded-xl bg-green-50 border border-green-200">
                        <p className="text-green-800 font-medium text-sm text-center">
                          Thank you. Your consultation request has been submitted. We will contact you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div role="alert" aria-live="assertive" className="p-4 rounded-xl bg-red-50 border border-red-200">
                        <p className="text-red-800 font-medium text-sm text-center">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-sm font-semibold rounded-xl bg-[#1D1D1F] hover:bg-[#2D2D2F] text-white shadow-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Consultation Request"
                      )}
                    </Button>

                    <p className="text-center text-xs text-[#6E6E73]">
                      By submitting this form, you agree to our confidentiality policy. All consultations are strictly confidential.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">

              {/* Contact info — dark card */}
              <Card className="border-0 bg-[#1D1D1F] shadow-none rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="type-subsection text-white mb-6 font-serif">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 105, 20, 0.2)' }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: '#8B6914' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">Phone</p>
                        <p className="text-sm text-white/80">+92 300 1234567</p>
                        <p className="text-sm text-white/80">+92 51 1234567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 105, 20, 0.2)' }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: '#8B6914' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">Email</p>
                        <p className="text-sm text-white/80">contact@hussainzahid.law</p>
                        <p className="text-sm text-white/80">info@hussainzahid.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 105, 20, 0.2)' }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: '#8B6914' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">Office</p>
                        <p className="text-sm text-white/80">Rawalpindi &amp; Islamabad</p>
                        <p className="text-sm text-white/80">Pakistan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 105, 20, 0.2)' }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: '#8B6914' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1.5">Working Hours</p>
                        <p className="text-sm text-white/80">Mon – Fri: 9:00 AM – 6:00 PM</p>
                        <p className="text-sm text-white/80">Sat: 10:00 AM – 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why choose us — light card */}
              <Card className="border border-[#D2D2D7] bg-white shadow-none rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="type-subsection text-[#1D1D1F] mb-5 font-serif">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "8+ years of legal expertise",
                      "500+ successful cases",
                      "Free initial consultation",
                      "24-hour response time",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: 'rgba(139, 105, 20, 0.15)' }}
                        >
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: '#8B6914' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="type-body text-[#6E6E73]">{item}</span>
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
