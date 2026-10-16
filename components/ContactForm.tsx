"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "ok" | "err" | "mailto_fallback";

interface ContactFormProps {
  recipientEmail?: string;
}

export default function ContactForm({
  recipientEmail = "mohamedshaeen680@gmail.com",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Spam honeypot detection
    const honeypot = String(formData.get("botcheck") ?? "");
    if (honeypot) {
      setStatus("ok");
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    // Client-side validation
    const errs: Record<string, string> = {};
    if (!payload.name) errs.name = "Please enter your name";
    if (!payload.email || !/^\S+@\S+\.\S+$/.test(payload.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!payload.subject) errs.subject = "Please enter a subject";
    if (payload.message.length < 5) {
      errs.message = "Message must be at least 5 characters long";
    }

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");

    // Check for configured external form services
    const formEndpoint =
      process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
      (process.env.NEXT_PUBLIC_FORMSPREE_ID
        ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
        : null);

    const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (formEndpoint) {
      try {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          form.reset();
          setStatus("ok");
          return;
        } else {
          setStatus("err");
        }
      } catch {
        setStatus("err");
      }
    } else if (web3FormsKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            ...payload,
          }),
        });

        if (res.ok) {
          form.reset();
          setStatus("ok");
          return;
        } else {
          setStatus("err");
        }
      } catch {
        setStatus("err");
      }
    } else {
      // Graceful client-side fallback: Pre-fills email in user's default email client
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        payload.subject
      )}&body=${encodeURIComponent(
        `Hi Mohamed,\n\n${payload.message}\n\n---\nFrom: ${payload.name} (${payload.email})`
      )}`;

      window.location.href = mailtoUrl;
      form.reset();
      setStatus("mailto_fallback");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-4">
      {/* Anti-spam honeypot */}
      <input
        type="text"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Your Name <span className="text-teal">*</span>
          </label>
          <input
            id="name"
            name="name"
            placeholder="Jane Doe"
            className="input"
          />
          {errors.name && <p className="err">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email Address <span className="text-teal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            className="input"
          />
          {errors.email && <p className="err">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="label">
          Subject / Opportunity <span className="text-teal">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          placeholder="Junior Data Analyst Inquiry"
          className="input"
        />
        {errors.subject && <p className="err">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message <span className="text-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Hi Mohamed, we reviewed your portfolio and would like to discuss an opportunity..."
          className="input resize-y"
        />
        {errors.message && <p className="err">{errors.message}</p>}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full sm:w-auto !px-6 !py-3 text-sm font-semibold"
        >
          {status === "sending" ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Dispatching Message…</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>Send Message</span>
              <span aria-hidden="true">&rarr;</span>
            </span>
          )}
        </button>
      </div>

      {status === "ok" && (
        <div
          role="status"
          className="rounded-xl border border-teal/30 bg-teal/10 p-4 text-sm font-medium text-teal"
        >
          ✓ Message dispatched successfully. I will review and reply within 24 hours.
        </div>
      )}

      {status === "mailto_fallback" && (
        <div
          role="status"
          className="rounded-xl border border-teal/30 bg-teal/10 p-4 text-sm font-medium text-teal"
        >
          ✓ Pre-filled message in your email client. You can also contact me directly at{" "}
          <a href={`mailto:${recipientEmail}`} className="underline font-bold">
            {recipientEmail}
          </a>
          .
        </div>
      )}

      {status === "err" && (
        <div
          role="alert"
          className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-500"
        >
          <p className="font-semibold">Unable to submit the form automatically.</p>
          <p className="mt-1">
            Please reach out directly at{" "}
            <a href={`mailto:${recipientEmail}`} className="font-bold underline">
              {recipientEmail}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
