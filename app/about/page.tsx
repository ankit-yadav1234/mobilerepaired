import Image from "next/image";

export default function ValuesSection() {
  return (
    <section className="bg-zinc-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our values</h2>
          <p className="text-gray-600 mt-2">
            What we love and stand for every day
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* RELIABILITY */}
            <div className="rounded-2xl bg-white shadow-md overflow-hidden border border-gray-200">
              <div className="bg-neutral-50 p-6 pb-4">
                <Image src="/Reliabality.svg" width={40} height={40} alt="" />
                <h3 className="text-xl font-semibold mt-3 text-gray-900">
                  Reliability
                </h3>
              </div>
              <div className="p-6 space-y-4 text-gray-700">
                <p className="border-b pb-3">
                  We are open as a team and as a product.
                </p>
                <p className="border-b pb-3">
                  We don’t put walls up unless it’s necessary.
                </p>
                <p className="border-b pb-3">
                  We become better when we share information.
                </p>
                <p>
                  We are open to diversity of opinion, backgrounds, and thought.
                </p>
              </div>
            </div>

            {/* ONLINE ACCESS */}
            <div className="rounded-2xl bg-white shadow-md overflow-hidden border border-gray-200">
              <div className="bg-indigo-50 p-6 pb-4">
                <Image src="/OnlineAccess.svg" width={40} height={40} alt="" />
                <h3 className="text-xl font-semibold mt-3 text-gray-900">
                  Online Access
                </h3>
              </div>
              <div className="p-6 space-y-4 text-gray-700">
                <p className="border-b pb-3">
                  We play because we’re a creator tool.
                </p>
                <p className="border-b pb-3">
                  Life is short. Let’s build something meaningful.
                </p>
                <p className="border-b pb-3">
                  We play as a team because great teams build great things
                  together.
                </p>
                <p>We keep those standards high.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (2x2 GRID) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* PROFESSIONAL PARTNERS */}
            <div className="rounded-2xl bg-white shadow-md overflow-hidden border border-gray-200">
              <div className="bg-gray-50 p-6 pb-4">
                <Image src="/professinol.svg" width={40} height={40} alt="" />
                <h3 className="text-xl font-semibold mt-3 text-gray-900">
                  Professional Partners
                </h3>
              </div>
              <div className="p-6 space-y-4 text-gray-700">
                <p className="border-b pb-3">
                  We want the best for our customers and ourselves.
                </p>
                <p className="border-b pb-3">
                  We coach people to their best potential.
                </p>
                <p>
                  That’s why an “Arcader” is both a teammate and a customer.
                </p>
              </div>
            </div>

            {/* FAST SERVICE */}
            <div className="rounded-2xl bg-white shadow-md overflow-hidden border border-gray-200">
              <div className="bg-teal-50 p-6 pb-4">
                <Image src="/Fast Service.svg" width={40} height={40} alt="" />
                <h3 className="text-xl font-semibold mt-3 text-gray-900">
                  Fast Service
                </h3>
              </div>
              <div className="p-6 space-y-4 text-gray-700">
                <p className="border-b pb-3">We act like owners.</p>
                <p className="border-b pb-3">Let’s empower each other.</p>
                <p>
                  If we see something that needs change, we lead through it.
                </p>
              </div>
            </div>

            {/* TRUSTED (FULL WIDTH) */}
            <div className="md:col-span-2 rounded-2xl bg-white shadow-md overflow-hidden border border-gray-200">
              <div className="bg-emerald-50 p-6 pb-4">
                <Image src="/Trusted.svg" width={40} height={40} alt="" />
                <h3 className="text-xl font-semibold mt-3 text-gray-900">
                  Trusted
                </h3>
              </div>
              <div className="p-6 space-y-4 text-gray-700">
                <p className="border-b pb-3">We can be honest and kind.</p>
                <p className="border-b pb-3">
                  We can have high standards and be kind.
                </p>
                <p className="border-b pb-3">We can say no and be kind.</p>
                <p>
                  Kindness can vary across cultures, upbringings, and languages
                  – but we try our best to be kind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
