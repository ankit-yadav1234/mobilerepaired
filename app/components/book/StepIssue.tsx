const issuesLeft = [
  { id: "battery", name: "Battery" },
  { id: "screen", name: "Broken Screen" },
];

const issuesRight = ["Charging Port", "Camera Lens", "Free Diagnostic"];

export default function StepIssue({ data, onChange, onNext, onBack }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-[38px] font-bold text-[#2b2b2b] mb-2">
        What's wrong with it?
      </h2>

      <p className="text-[18px] text-[#8794b5] mb-12">
        Don’t worry, we will fix it!
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Left big cards */}
        <div className="grid grid-cols-2 gap-6">
          {issuesLeft.map((i) => {
            const active = data.issue === i.name;
            return (
              <button
                key={i.id}
                onClick={() => onChange({ issue: i.name })}
                className={`
                  w-[230px] h-[200px] bg-white rounded-[35px]
                  flex flex-col items-center justify-center
                  shadow-[0_0_30px_rgba(0,0,0,0.15)]
                  transition-all duration-200
                  ${active ? "scale-105 shadow-[0_0_45px_rgba(0,0,0,0.25)]" : "hover:scale-105"}
                `}
              >
                <div className="w-[85px] h-[85px] bg-[#bdeeff] rounded-xl mb-5" />
                <span className="text-[22px] font-semibold text-[#2c3443]">
                  {i.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right small options */}
        <div className="flex flex-col gap-4">
          {issuesRight.map((i) => {
            const active = data.issue === i;
            return (
              <button
                key={i}
                onClick={() => onChange({ issue: i })}
                className={`
                  w-[220px] py-4 rounded-[30px] text-[20px]
                  bg-white shadow-[0_0_22px_rgba(0,0,0,0.15)]
                  ${active ? "scale-105 border border-[#6aa8ff]" : "hover:scale-105"}
                `}
              >
                {i}
              </button>
            );
          })}
        </div>
      </div>

      {/* Textarea */}
      <textarea
        value={data.details}
        onChange={(e) => onChange({ details: e.target.value })}
        placeholder="describe other issues"
        className="
          w-full mt-8 p-5 text-[18px] rounded-[35px] 
          bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]
          outline-none resize-none h-[160px]
        "
      />

      {/* Buttons */}
      <div className="mt-10 flex justify-between px-10">
        <button
          onClick={onBack}
          className="px-14 py-4 rounded-[30px] bg-[#4b4b4b] text-white text-[20px]"
        >
          Go back
        </button>

        <button
          onClick={onNext}
          disabled={!data.issue}
          className={`
            px-14 py-4 rounded-[30px] text-[20px]
            ${data.issue
              ? "bg-[#4b4b4b] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"}
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
