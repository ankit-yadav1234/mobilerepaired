// components/LocationsList.tsx
export default function LocationsList() {
  const locations = [
    {
      title: "Downtown — 415 Mission St",
      address: "415 Mission St, San Francisco, CA 94105",
      desc: "Open Mon-Fri 9am-6pm",
    },
    {
      title: "Cambridge — 132 Dartmouth St",
      address: "132 Dartmouth St, Boston, MA 02156",
      desc: "Open Mon-Sat 10am-6pm",
    },
    {
      title: "Seattle — 220 Pine St",
      address: "220 Pine St, Seattle, WA 98101",
      desc: "Open Mon-Fri 9am-5pm",
    },
  ];

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {locations.map((l) => (
        <div key={l.title} className="bg-white rounded-xl p-4 shadow-sm">
          <h4 className="font-semibold text-neutral-800">{l.title}</h4>
          <p className="text-sm text-neutral-600 mt-1">{l.address}</p>
          <p className="text-sm text-neutral-500 mt-2">{l.desc}</p>
        </div>
      ))}
    </div>
  );
}
