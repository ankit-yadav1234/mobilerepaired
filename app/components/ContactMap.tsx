// components/ContactMap.tsx
export default function ContactMap() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-800">
          Find us on the map
        </h3>
        <p className="text-sm text-neutral-500 mt-1">
          Click “View larger map” on the map card to open full map.
        </p>
      </div>

      <div className="w-full h-[360px]">
        {/* Replace src with a real Google Maps embed when you have an API / URL */}
        <iframe
          title="Our locations map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01976415185!2d-122.3999720846819!3d37.78964197975614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e0a1c9d1%3A0x5a9c2b2e0e1111!2s415%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      <div className="p-4 text-sm text-neutral-500">
        Map data © Google — Terms of use
      </div>
    </div>
  );
}
