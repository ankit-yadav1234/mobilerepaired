"use client";
import React from "react";

interface Props {
  steps: string[];
  current: number;
  onSelect?: (i: number) => void;
}

export default function Stepper({ steps, current, onSelect }: Props) {
  return (
    <div className="w-full py-4 overflow-x-auto no-scrollbar">
      <div className="flex items-center justify-between min-w-max md:min-w-0 gap-2 md:gap-4 px-2">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col md:flex-row items-center gap-2 group cursor-pointer" onClick={() => onSelect?.(i)}>
              <div
                className={
                  "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all " +
                  (i <= current
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-100"
                    : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200")
                }
              >
                {i + 1}
              </div>
              <span
                className={
                  "text-[10px] md:text-sm whitespace-nowrap transition-colors " +
                  (i === current ? "text-emerald-700 font-bold" : "text-zinc-400 font-medium hidden md:block")
                }
              >
                {s}
              </span>
            </div>
            
            {i < steps.length - 1 && (
              <div className="flex-1 min-w-[20px] md:min-w-[40px] h-[2px] bg-zinc-100 mx-1">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500" 
                  style={{ width: i < current ? "100%" : "0%" }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
