import React from "react";
import { BookingData } from "@/types";

type Props = {
  data: BookingData;
  onBack: () => void;
  onAccept: () => void;
};

export default function StepReview({ data, onBack, onAccept }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-emerald-900 mb-2">
        Review your booking
      </h2>
      <p className="text-slate-500 mb-6">Check details before submitting.</p>

      <div className="space-y-3">
        <div className="p-3 rounded-lg border bg-emerald-50">
          <div className="text-sm text-slate-600">Device</div>
          <div className="text-lg font-semibold text-slate-800">
            {data.device ?? "—"}
          </div>
        </div>

        <div className="p-3 rounded-lg border bg-white">
          <div className="text-sm text-slate-600">Issue</div>
          <div className="text-lg text-slate-800">{data.issue ?? "—"}</div>
          {data.details && (
            <div className="text-sm text-slate-600 mt-2">{data.details}</div>
          )}
        </div>

        <div className="p-3 rounded-lg border bg-white">
          <div className="text-sm text-slate-600">Contact</div>
          <div className="text-lg text-slate-800">
            {data.firstName} {data.lastName}
          </div>
          <div className="text-sm text-slate-600">
            {data.phone} • {data.email}
          </div>
          <div className="text-sm text-slate-600 mt-1">
            {data.address} {data.city} {data.zip}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="px-4 py-2 rounded-lg border">
          Back
        </button>

        <button
          onClick={onAccept} // ✔ THIS MUST BE onAccept
          className="px-6 py-2 rounded-lg bg-emerald-400 text-white font-semibold"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}
