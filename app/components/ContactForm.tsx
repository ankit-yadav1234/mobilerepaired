// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: submit to your API / service
    console.log("form submit", form);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-neutral-800">
        Send us a message
      </h3>
      <form onSubmit={onSubmit} className="mt-4 grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs text-neutral-500">First Name</span>
            <input
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border p-3 bg-white"
              placeholder="John"
              required
            />
          </label>

          <label className="block">
            <span className="text-xs text-neutral-500">Last Name</span>
            <input
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border p-3 bg-white"
              placeholder="Doe"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs text-neutral-500">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border p-3 bg-white"
              placeholder="email@example.com"
              required
            />
          </label>

          <label className="block">
            <span className="text-xs text-neutral-500">Phone</span>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border p-3 bg-white"
              placeholder="+1 012 3456 789"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-xs text-neutral-500">Subject</span>
          <select
            name="subject"
            value={form.subject}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border p-3 bg-white"
          >
            <option>General Inquiry</option>
            <option>Repair Request</option>
            <option>Partner / Vendor</option>
            <option>Other</option>
          </select>
        </label>

        <label className="block">
          <span className="text-xs text-neutral-500">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border p-3 bg-white h-36"
            placeholder="Write your message..."
            required
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-400 text-white rounded-md font-medium shadow"
          >
            Send Message
          </button>

          <div className="text-sm text-neutral-500">
            {sent
              ? "Message sent — we will reply soon."
              : "We reply within 24 hours"}
          </div>
        </div>
      </form>
    </div>
  );
}
