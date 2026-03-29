"use client";
import React from "react";
import { BookingData } from "@/types";

interface Props {
  data: BookingData;
  onDone: () => void;
}

export default function StepWaiting({ onDone, data }: Props) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="relative w-full max-w-sm aspect-square bg-white rounded-[3rem] shadow-2xl shadow-emerald-100 border border-neutral-50 flex flex-col items-center justify-center p-10 text-center">
        {/* Animated Loading Indicator */}
        <div className="relative mb-12">
          <div className="w-32 h-32 rounded-full border-8 border-neutral-50 border-t-emerald-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-emerald-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-neutral-800 tracking-tight mb-4">
          Please Wait
        </h2>

        <p className="text-lg text-neutral-500 font-medium leading-relaxed max-w-[280px]">
          Our technicians are reviewing your request. We&apos;ll respond shortly!
        </p>

        <button
          onClick={onDone}
          className="mt-12 w-full py-5 bg-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 hover:bg-emerald-600 active:scale-95 transition-all"
        >
          Return Home
        </button>

        {/* Floating decoration */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-50 rounded-2xl rotate-12 -z-10" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-50 rounded-full -z-10" />
      </div>
    </div>
  );
}
