"use client";
import React from "react";
import { BookingData } from "@/types";

type Props = {
  data: BookingData;
  onChange: (patch: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

const issuesLeft = [
  { id: "battery", name: "Battery" },
  { id: "screen", name: "Broken Screen" },
];

const issuesRight = ["Charging Port", "Camera Lens", "Free Diagnostic"];

export default function StepIssue({ data, onChange, onNext, onBack }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
          What&apos;s wrong with it?
        </h2>
        <p className="text-lg text-neutral-500 font-medium">
          Select the main issue or describe it below. Don&apos;t worry, we will fix it!
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Selection Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {issuesLeft.map((i) => {
              const active = data.issue === i.name;
              return (
                <button
                  key={i.id}
                  onClick={() => onChange({ issue: i.name })}
                  className={`
                    p-6 bg-white rounded-3xl border-2 transition-all duration-300
                    flex flex-col items-center justify-center gap-4 min-h-[140px]
                    ${active 
                      ? "border-emerald-500 bg-emerald-50/10 shadow-lg shadow-emerald-50 scale-[1.02]" 
                      : "border-neutral-50 hover:border-emerald-100 hover:bg-neutral-50"}
                  `}
                >
                  <div className={`w-12 h-12 rounded-xl transition-colors ${active ? "bg-emerald-200" : "bg-emerald-100"}`} />
                  <span className={`text-lg font-bold transition-colors ${active ? "text-emerald-700" : "text-neutral-700"}`}>
                    {i.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-3">
            {issuesRight.map((i) => {
              const active = data.issue === i;
              return (
                <button
                  key={i}
                  onClick={() => onChange({ issue: i })}
                  className={`
                    py-4 px-6 rounded-2xl text-base font-bold text-left transition-all border-2
                    ${active
                      ? "border-emerald-500 bg-emerald-50/10 text-emerald-700 shadow-lg shadow-emerald-50"
                      : "border-neutral-50 bg-neutral-50/50 text-neutral-600 hover:border-emerald-100 hover:bg-neutral-50"}
                  `}
                >
                  {i}
                </button>
              );
            })}
          </div>
        </div>

        {/* Textarea Area */}
        <div className="flex flex-col h-full">
          <textarea
            value={data.details}
            onChange={(e) => onChange({ details: e.target.value })}
            placeholder="Describe other issues or provide more details here..."
            className="
              w-full p-6 text-base rounded-3xl bg-neutral-50 border-2 border-transparent
              focus:border-emerald-500 focus:bg-white focus:outline-none transition-all
              min-h-[200px] lg:min-h-full resize-none font-medium text-neutral-700
            "
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl">
        <button
          onClick={onBack}
          className="w-full sm:w-1/3 py-4 rounded-2xl bg-neutral-100 text-neutral-600 font-bold hover:bg-neutral-200 transition-colors"
        >
          Go back
        </button>

        <button
          onClick={onNext}
          disabled={!data.issue}
          className={`
            w-full sm:w-2/3 py-5 rounded-2xl text-lg font-bold transition-all
            ${data.issue
              ? "bg-emerald-500 text-white shadow-xl shadow-emerald-100 hover:bg-emerald-600 active:scale-95"
              : "bg-neutral-100 text-neutral-400 cursor-not-allowed"}
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
