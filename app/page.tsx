import CTA from "./components/CTA";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Features from "./components/Features";


export default function Page() {
  return (
 <>
      <Hero />
      <section className="mt-12 ">
        <Features />
      </section>
      
      <section className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Services />
      </section>

      <section className="mt-6">
        <CTA />
      </section>
      
    </>
  );
}

