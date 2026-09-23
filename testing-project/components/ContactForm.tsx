"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CircleAlert, CircleCheck, Send } from "lucide-react";

type FieldName = "name" | "email" | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const emptyValues: FormValues = { name: "", email: "", message: "" };

// Deliberately permissive: enough to catch typos without rejecting valid addresses.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  }

  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[var(--color-dark-brown)] placeholder:text-[var(--color-dark-brown)]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-coffee-brown)]/40 sm:text-base";
const fieldValid = "border-[var(--color-light-brown)]/50 focus:border-[var(--color-coffee-brown)]";
const fieldInvalid = "border-[var(--color-coffee-brown)] bg-[var(--color-coffee-brown)]/5";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.target.name as FieldName;
    const nextValues = { ...values, [field]: event.target.value };
    setValues(nextValues);

    // Once a field has been flagged, clear its error as soon as it becomes valid.
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(nextValues)[field] }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    // Frontend-only: there is no backend to submit to.
    setValues(emptyValues);
    setIsSubmitted(true);
  }

  function fieldClassName(field: FieldName) {
    return `${fieldBase} ${errors[field] ? fieldInvalid : fieldValid}`;
  }

  function errorFor(field: FieldName) {
    if (!errors[field]) {
      return null;
    }

    return (
      <p
        id={`${field}-error`}
        className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-coffee-brown)]"
      >
        <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
        {errors[field]}
      </p>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-[var(--color-light-brown)]/30 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold text-[var(--color-dark-brown)]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClassName("name")}
        />
        {errorFor("name")}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-[var(--color-dark-brown)]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClassName("email")}
        />
        {errorFor("email")}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[var(--color-dark-brown)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us what's on your mind — bookings, feedback or just a hello."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClassName("message")} resize-y`}
        />
        {errorFor("message")}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-coffee-brown)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-dark-brown)] sm:text-base"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </button>

      <p aria-live="polite" className="sr-only">
        {isSubmitted ? "Thanks! Your message has been received." : ""}
      </p>

      {isSubmitted && (
        <div className="flex items-center gap-2 rounded-xl bg-[var(--color-coffee-brown)]/10 px-4 py-3 text-sm font-medium text-[var(--color-coffee-brown)]">
          <CircleCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
          Thanks! Your message has been received.
        </div>
      )}
    </form>
  );
}
