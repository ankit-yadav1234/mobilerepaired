"use client";

import { useState } from "react";
import Link from "next/link";

export default function FaqSection() {
  const faqs = [
    {
      q: "Do you have a revenue share?",
      a: "No, we offer a buy-rate, interchange-plus pricing model giving you the most control over your revenue.",
    },
    { q: "Do you have any minimum fees or fixed monthly fees?", a: null },
    { q: "Do you charge any PCI DSS program or non-compliance fees?", a: null },
    { q: "Can I set the pricing to my merchants?", a: null },
    { q: "Are the pricing tiers “pick a tier” or “fill a tier”?", a: null },
    { q: "Do you charge an ACH volume-based fee?", a: null },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-zinc-100 py-28">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-semibold text-emerald-900">
          Most Frequently Asked FAQ&apos;s
        </h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-8">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-5 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="mt-1 w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center">
                {openIndex === index ? (
                  <div className="w-3 h-0.5 bg-emerald-900 rotate-45"></div>
                ) : (
                  <div className="w-2.5 h-2.5 bg-emerald-900 rounded-sm"></div>
                )}
              </div>

              {/* Question */}
              <h3 className="text-2xl text-emerald-900 leading-8">{item.q}</h3>
            </div>

            {/* Answer */}
            {openIndex === index && item.a && (
              <p className="mt-4 ml-12 text-lg text-gray-700 leading-7">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Big spacing before CTA card */}
      <div className="mt-28"></div>

      {/* CTA Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-14 text-center">
        <h3 className="text-3xl font-bold text-gray-700 mb-4">
          Still have questions or want to know more?
        </h3>

        <p className="text-lg text-gray-400 mb-10 leading-7 max-w-2xl mx-auto">
          We use only the highest quality parts and offer a wide range of repair
          services, from simple screen replacements to complex motherboard
          repairs. We also offer same-day repairs in most cases!
        </p>

        <Link
          href="/contact"
          className="px-14 py-3 bg-emerald-500 hover:bg-emerald-600 transition rounded-full text-white font-semibold text-base inline-block"
        >
          Contact Us
        </Link>
      </div>

      <div className="pb-32"></div>
    </section>
  );
}


