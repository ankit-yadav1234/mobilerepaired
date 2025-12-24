import Image from "next/image";
import { BookingData } from "@/types";

const devices = [
  { id: "iphone", name: "iPhone", img: "/iphone.svg" },
  { id: "ipad", name: "iPad", img: "/Ipad.svg" },
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
    <div className="text-center">
      <h2 className="text-[38px] font-bold text-[#2b2b2b] mb-2">
        What kind of device are you having trouble with?
      </h2>

      <p className="text-[18px] text-[#8794b5] mb-12">
        Our experts will assess your device and get it back to you in no time.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center">
        {devices.map((d) => {
          const active = data.device === d.id;

          return (
            <button
              key={d.id}
              onClick={() => onChange({ device: d.id })}
              className={`
                w-[210px] h-[240px] rounded-[35px] bg-white
                flex flex-col items-center justify-center
                shadow-[0_0_30px_rgba(0,0,0,0.15)]
                transition-all duration-200
                ${active ? "scale-105 shadow-[0_0_45px_rgba(0,0,0,0.25)]" : "hover:scale-105"}
              `}
            >
              <Image
                src={d.img}
                width={90}
                height={90}
                alt={d.name}
                className="mb-6"
              />

              <span className="text-[22px] font-semibold text-[#2c3443]">
                {d.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-14 flex justify-center">
        <button
          onClick={onNext}
          disabled={!data.device}
          className={`
            px-12 py-4 rounded-[30px] text-[20px] font-medium
            ${data.device
              ? "bg-[#3a3a3a] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"}
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
