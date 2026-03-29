import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
      
      {/* 1. Image Section (Moves to top in mobile) */}
      <div className="w-full h-80 sm:h-[450px] lg:h-[500px] rounded-[2.5rem] bg-white shadow-[0px_20px_50px_-20px_rgba(0,0,0,0.15)] overflow-hidden relative lg:order-2">
        <Image
          src="/GOPROTO.jpg"
          alt="Device Repair"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Text Section */}
      <div className="space-y-8 text-center lg:text-left lg:order-1">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#113547] leading-[1.1] tracking-tight">
          Fast, affordable and reliable repairs
        </h1>

        <p className="text-xl sm:text-2xl text-slate-500 font-medium">
          for your mobile devices
        </p>

        <div className="flex justify-center lg:justify-start pt-2">
          <a
            href="/book"
            className="px-14 py-4 bg-emerald-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-emerald-100 hover:bg-emerald-600 active:scale-95 transition-all inline-block"
          >
            Book a Repair
          </a>
        </div>
      </div>

    </section>
  );
}
