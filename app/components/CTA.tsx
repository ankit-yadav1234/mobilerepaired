export default function CTA() {
  return (
    <section className="max-w-5xl mx-auto mt-20 bg-white rounded-3xl shadow-[0px_8px_30px_-10px_rgba(0,0,0,0.15)] px-10 py-14 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-poppins font-semibold text-neutral-700 leading-snug">
        Get Your Mobile Device Repaired Today!
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
        We use high-quality parts and trained technicians to give you the best repair
        experience. Most repairs are completed on the same day!
      </p>

      {/* Button */}
      <div className="mt-8">
        <a
          href="/book"
          className="inline-block px-12 py-3 bg-emerald-500 text-white font-semibold text-base rounded-full shadow hover:bg-emerald-600 transition-all"
        >
          Book a Repair
        </a>
      </div>

    </section>
  );
}
