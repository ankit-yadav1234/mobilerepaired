import React from "react";
import { BookingData } from "@/types";

type Props = {
  data: BookingData;
  onChange: (patch: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function StepContact({ data, onChange, onNext, onBack }: Props) {
  // Required fields for enabling continue
  const valid = data.firstName && data.phone && data.city;

  return (
    <div className="w-full max-w-[900px] mx-auto">

      {/* Heading */}
      <h2 className="text-[36px] font-[600] text-neutral-700 font-[Poppins]">
        Enter your information below
      </h2>
      <p className="text-slate-400 text-[18px] mt-3 font-[Lato]">
        We'll get your device back to you in no time, and at the best price.
      </p>

      {/* Inputs */}
      <div className="mt-10 space-y-4">

        {/* PHONE NUMBER */}
        <input
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder="Phone Number"
          className="w-72 px-5 py-3 bg-white rounded-lg border-[1.6px] border-zinc-200 text-sm text-slate-500 font-medium font-[Poppins]"
        />

        {/* FIRST NAME */}
        <input
          value={data.firstName}
          onChange={(e) => onChange({ firstName: e.target.value })}
          placeholder="First Name"
          className="w-72 px-5 py-3 bg-white rounded-lg border-[1.6px] border-zinc-200 text-sm text-slate-500 font-medium font-[Poppins]"
        />

        {/* LAST NAME */}
        <input
          value={data.lastName}
          onChange={(e) => onChange({ lastName: e.target.value })}
          placeholder="Last Name"
          className="w-72 px-5 py-3 bg-white rounded-lg border-[1.6px] border-zinc-200 text-sm text-slate-500 font-medium font-[Poppins]"
        />

        {/* CITY */}
        <input
          value={data.city}
          onChange={(e) => onChange({ city: e.target.value })}
          placeholder="City"
          className="w-72 px-5 py-3 bg-white rounded-lg border-[1.6px] border-zinc-200 text-sm text-slate-500 font-medium font-[Poppins]"
        />

        {/* ZIP */}
        <input
          value={data.zip}
          onChange={(e) => onChange({ zip: e.target.value })}
          placeholder="Zip Code"
          className="w-72 px-5 py-3 bg-white rounded-lg border-[1.6px] border-zinc-200 text-sm text-slate-500 font-medium font-[Poppins]"
        />

        {/* ADDRESS */}
        <input
          value={data.address}
          onChange={(e) => onChange({ address: e.target.value })}
          placeholder="Street Address"
          className="w-[610px] px-5 py-3 bg-white rounded-lg border-[1.6px] border-zinc-200 text-sm text-slate-500 font-medium font-[Poppins]"
        />
      </div>

      {/* Buttons */}
      <div className="mt-12 border-t border-slate-400 pt-6 flex justify-between">

        {/* Back */}
        <button
          onClick={onBack}
          className="w-64 h-14 bg-neutral-600 rounded-3xl shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] text-white text-2xl font-[Poppins]"
        >
          Go back
        </button>

        {/* Continue */}
        <button
          onClick={onNext}
          disabled={!valid}
          className={`
            w-64 h-14 rounded-3xl text-white text-2xl font-[Poppins]
            shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)]
            ${valid ? "bg-neutral-600" : "bg-neutral-400 cursor-not-allowed"}
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
