import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Trusted Professionals",
      description: "Rely on our team of professional technicians. We have a vast network of experts ready to assist you.",
      icon: "/TrustedProfessionals.svg"
    },
    {
      title: "Quick Turnaround",
      description: "We aim to return your device as swiftly as possible, often completing repairs in 30 minutes or less.",
      icon: "/QuickTurnaround.svg"
    },
    {
      title: "Free Diagnostics",
      description: "Unsure about the issue with your device? Don’t worry, we offer a complimentary diagnosis.",
      icon: "/Stethoscope.svg"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-[2px_4px_10px_-10px_rgba(0,0,0,0.25)] flex flex-col items-start"
            >
              <div className="mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-600 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-center text-cyan-800 text-3xl md:text-4xl font-bold mt-20">
          All kinds of repairs. For real.
        </h2>
      </div>
    </section>
  );
}
