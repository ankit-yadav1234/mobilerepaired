"use client";
import React from "react";

interface Props {
  steps: string[];
  current: number;
  onSelect?: (i: number) => void;
}

export default function Stepper({ steps, current, onSelect }: Props) {
  return (
    <div className="flex items-center gap-4">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-3">
          <button
            onClick={() => onSelect?.(i)}
            className={
              "w-8 h-8 rounded-full flex items-center justify-center text-sm " +
              (i === current
                ? "bg-emerald-400 text-white"
                : "bg-zinc-200 text-zinc-600")
            }
            aria-current={i === current}
          >
            {i + 1}
          </button>
          <div
            className={
              i === current ? "text-emerald-900 font-semibold" : "text-zinc-500"
            }
          >
            {s}
          </div>
          
          {i < steps.length - 1 && <div className="w-6 h-[1px] bg-zinc-200" />}
        </div>
      ))}
    </div>
  );
}
