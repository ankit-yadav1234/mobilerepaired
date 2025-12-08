"use client";
import React from "react";

interface Props {
  data: any;
  onDone?: () => void;
}

export default function StepWaiting({ onDone }: Props) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[500px] h-[500px] bg-white rounded-lg shadow-[2px_4px_30px_-10px_rgba(0,0,0,0.25)] border border-slate-300 flex flex-col items-center justify-center">
        {/* Loading Circle Animation (Figma Style) */}
        <div className="mb-8">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <span className="absolute w-32 h-32 rounded-full bg-emerald-200 animate-ping"></span>
            <span className="absolute w-20 h-20 rounded-full bg-emerald-300"></span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-neutral-600 text-xl font-normal mb-2">
          Please Wait
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm text-center px-4">
          Our Technicians will respond to your request soon.
        </p>

        {/* Optional auto continue button */}
        <button
          onClick={onDone}
          className="mt-8 px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
