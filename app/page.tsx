import CTA from "./components/CTA";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      
      <section className="py-12">
        <Features />
      </section>
      
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Services />
        </div>
      </section>

      <CTA />
    </div>
  );
}

