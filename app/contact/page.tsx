// app/contact/page.tsx
import ContactForm from "@/app/components/ContactForm";
import ContactInfo from "@/app/components/ContactInfo";
import ContactMap from "@/app/components/ContactMap";
import LocationsList from "@/app/components/LocationsList";

export const metadata = {
  title: "Contact Us — Mobile Repair",
  description: "Get in touch for repairs, locations and support.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-100 pb-20">

      {/* Heading */}
      <div className="text-center pt-16 pb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700">
          Contact Us
        </h1>
        <p className="text-neutral-500 mt-2">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg p-6 md:p-10">

        {/* Left Green Box */}
        <div className="bg-emerald-600 text-white rounded-xl p-8 flex flex-col">
          <ContactInfo />
        </div>

        {/* Right Form Box */}
        <div className="bg-white rounded-xl p-4 md:p-6">
          <ContactForm />
        </div>

      </div>

      {/* OUR LOCATIONS */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-emerald-700 mt-20">
        Our Locations
      </h2>

      {/* MAP + LOCATION LIST */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Map */}
        <ContactMap />

        {/* Location List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-neutral-800 mb-4">
            Title
          </h3>

          <div className="space-y-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold">
                    📍
                  </div>
                  <div>
                    <h4 className="text-neutral-700 font-semibold">
                      Location
                    </h4>
                    <p className="text-neutral-500 text-sm">
                      Description
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>

    </div>
  );
}