"use client";
import Image from "next/image";
import { BookingData } from "@/types";

const devices = [
  { id: "iphone", name: "iPhone", img: "/iphone.svg" },
  { id: "ipad", name: "iPad", img: "/ipad.svg" },
  { id: "android", name: "Android", img: "/android.svg" },
  { id: "tablet", name: "Tablet", img: "/tablet.svg" },
];

type Props = {
  data: BookingData;
  onChange: (patch: Partial<BookingData>) => void;
  onNext: () => void;
};

export default function StepDevice({ data, onChange, onNext }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
          What kind of device are you having trouble with?
        </h2>
        <p className="text-lg text-neutral-500 font-medium">
          Select your device type to help our technicians prepare for your repair.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full">
        {devices.map((d) => {
          const active = data.device === d.id;

          return (
            <button
              key={d.id}
              onClick={() => onChange({ device: d.id })}
              className={`
                aspect-[4/5] rounded-[2rem] bg-white
                flex flex-col items-center justify-center p-6
                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                border-2 transition-all duration-300 group
                ${active 
                  ? "border-emerald-500 bg-emerald-50/10 scale-[1.02] shadow-xl shadow-emerald-50" 
                  : "border-neutral-50 hover:border-emerald-100 hover:bg-neutral-50 hover:-translate-y-1"}
              `}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors ${active ? "bg-emerald-100/50" : "bg-neutral-50 group-hover:bg-emerald-50"}`}>
                <Image
                  src={d.img}
                  width={48}
                  height={48}
                  alt={d.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${active ? "text-emerald-700" : "text-neutral-700"}`}>
                {d.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center w-full max-w-sm">
        <button
          onClick={onNext}
          disabled={!data.device}
          className={`
            w-full py-5 rounded-2xl text-lg font-bold transition-all
            ${data.device
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
