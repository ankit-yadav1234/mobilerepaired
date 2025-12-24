import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">

      {/* Left Text Section */}
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-cyan-800 font-lato leading-tight">
          Fast, affordable and reliable repairs
        </h1>

        <p className="text-xl text-slate-400 font-lato">
          for your mobile devices
        </p>

        {/* Single Button (Figma match) */}
        <a
          href="/book"
          className="px-16 py-3 bg-emerald-400 text-white font-semibold rounded-lg outline outline-[1.6px] outline-offset-[-0.8px] inline-flex justify-center shadow-md hover:bg-emerald-500 transition"
        >
          Book a Repair
        </a>
      </div>

      {/* Right Image Section */}
      <div className="w-full h-96 rounded-3xl bg-white shadow-[2px_4px_30px_-10px_rgba(0,0,0,0.25)] overflow-hidden relative">
        <Image
          src="/GOPROTO.jpg"
          alt="Device Repair"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </section>
  );
}
