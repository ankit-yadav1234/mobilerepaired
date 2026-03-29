"use client";
import React from "react";
import { BookingData } from "@/types";

type Props = {
  data: BookingData;
  onChange: (patch: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function StepContact({ data, onChange, onNext, onBack }: Props) {
  const valid = data.firstName && data.phone && data.city;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
          Enter your information below
        </h2>
        <p className="text-lg text-neutral-500 font-medium leading-relaxed">
          We&apos;ll get your device back to you in no time, and at the best price.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* FIRST NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700 ml-1">First Name *</label>
          <input
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            placeholder="John"
            className="w-full px-5 py-4 bg-neutral-50 focus:bg-white rounded-2xl border-2 border-transparent focus:border-emerald-500 transition-all outline-none font-medium text-neutral-800"
          />
        </div>

        {/* LAST NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700 ml-1">Last Name</label>
          <input
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            placeholder="Doe"
            className="w-full px-5 py-4 bg-neutral-50 focus:bg-white rounded-2xl border-2 border-transparent focus:border-emerald-500 transition-all outline-none font-medium text-neutral-800"
          />
        </div>

        {/* PHONE NUMBER */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700 ml-1">Phone Number *</label>
          <input
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className="w-full px-5 py-4 bg-neutral-50 focus:bg-white rounded-2xl border-2 border-transparent focus:border-emerald-500 transition-all outline-none font-medium text-neutral-800"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700 ml-1">Email (Optional)</label>
          <input
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-5 py-4 bg-neutral-50 focus:bg-white rounded-2xl border-2 border-transparent focus:border-emerald-500 transition-all outline-none font-medium text-neutral-800"
          />
        </div>

        {/* CITY */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700 ml-1">City *</label>
          <input
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            placeholder="New York"
            className="w-full px-5 py-4 bg-neutral-50 focus:bg-white rounded-2xl border-2 border-transparent focus:border-emerald-500 transition-all outline-none font-medium text-neutral-800"
          />
        </div>

        {/* ZIP */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700 ml-1">Zip Code</label>
          <input
            value={data.zip}
            onChange={(e) => onChange({ zip: e.target.value })}
            placeholder="10001"
            className="w-full px-5 py-4 bg-neutral-50 focus:bg-white rounded-2xl border-2 border-transparent focus:border-emerald-500 transition-all outline-none font-medium text-neutral-800"
          />
        </div>

        {/* ADDRESS */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700 ml-1">Street Address</label>
          <input
            value={data.address}
            onChange={(e) => onChange({ address: e.target.value })}
            placeholder="123 Example Street, Apt 4B"
            className="w-full px-5 py-4 bg-neutral-50 focus:bg-white rounded-2xl border-2 border-transparent focus:border-emerald-500 transition-all outline-none font-medium text-neutral-800"
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full">
        <button
          onClick={onBack}
          className="w-full sm:w-1/3 py-4 rounded-2xl bg-neutral-100 text-neutral-600 font-bold hover:bg-neutral-200 transition-colors"
        >
          Go back
        </button>

        <button
          onClick={onNext}
          disabled={!valid}
          className={`
            w-full sm:w-2/3 py-5 rounded-2xl text-lg font-bold transition-all
            ${valid 
              ? "bg-emerald-500 text-white shadow-xl shadow-emerald-100 hover:bg-emerald-600 active:scale-95" 
              : "bg-neutral-100 text-neutral-400 cursor-not-allowed"}
          `}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
