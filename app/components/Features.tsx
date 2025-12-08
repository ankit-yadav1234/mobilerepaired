import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-17 max-w-6xl mx-auto px-4">
        {/* Card 1 */}
        <div className="w-72 h-64 relative bg-white rounded-3xl shadow-[2px_4px_10px_-10px_rgba(0,0,0,0.25)] mx-auto">
          <Image
            src="/TrustedProfessionals.svg"
            alt="Trusted Professionals"
            width={48}
            height={48}
            className="absolute left-[115px] top-[20px]"
          />
          <div className="absolute left-[29px] top-[85px] text-neutral-600 text-xl font-bold">
            Trusted Professionals
          </div>
          <p className="absolute left-[29px] top-[125px] w-56 text-slate-400 text-lg font-normal leading-relaxed">
            Rely on our team of professional technicians. We have a vast network
            of experts ready to assist you.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-72 h-64 relative bg-white rounded-3xl shadow-[2px_4px_10px_-10px_rgba(0,0,0,0.25)] mx-auto">
          <Image
            src="/QuickTurnaround.svg"
            alt="Quick Turnaround"
            width={48}
            height={48}
            className="absolute left-[115px] top-[20px]"
          />
          <div className="absolute left-[29px] top-[85px] text-neutral-600 text-xl font-bold">
            Quick Turnaround
          </div>
          <p className="absolute left-[29px] top-[125px] w-56 text-slate-400 text-lg font-normal leading-relaxed">
            We aim to return your device as swiftly as possible, often
            completing repairs in 30 minutes or less.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-72 h-64 relative bg-white rounded-3xl shadow-[2px_4px_10px_-10px_rgba(0,0,0,0.25)] mx-auto">
          <Image
            src="/Stethoscope.svg"
            alt="Free Diagnostics"
            width={48}
            height={48}
            className="absolute left-[115px] top-[20px]"
          />
          <div className="absolute left-[29px] top-[85px] text-neutral-600 text-xl font-bold">
            Free Diagnostics
          </div>
          <p className="absolute left-[29px] top-[125px] w-56 text-slate-400 text-lg font-normal leading-relaxed">
            Unsure about the issue with your device? Don’t worry, we offer a
            complimentary diagnosis.
          </p>
        </div>
      </div>

      <h2 className="text-center text-cyan-800 text-3xl md:text-4xl font-bold mt-20">
        All kinds of repairs. For real.
      </h2>
    </>
  );
}
