"use client";
import React from "react";
import { BookingData } from "@/types";

type Props = {
  data: BookingData;
  onBack: () => void;
  onAccept: () => void;
};

export default function StepReview({ data, onBack, onAccept }: Props) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
          Review your booking
        </h2>
        <p className="text-lg text-neutral-500 font-medium leading-relaxed">
          Please check the details below. Our technicians use this information to provide the best service.
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {/* Device & Issue Card */}
        <div className="p-6 rounded-3xl bg-neutral-50/50 border-2 border-neutral-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Device Type</div>
            <div className="text-xl font-bold text-neutral-800 capitalize">{data.device ?? "—"}</div>
          </div>
          <div className="sm:text-right">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Reported Issue</div>
            <div className="text-xl font-bold text-neutral-800">{data.issue ?? "—"}</div>
          </div>
        </div>

        {/* Details Card */}
        {data.details && (
          <div className="p-6 rounded-3xl bg-white border-2 border-neutral-50 shadow-sm shadow-black/5">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Additional Details</div>
            <p className="text-neutral-700 font-medium leading-relaxed italic">
              "{data.details}"
            </p>
          </div>
        )}

        {/* Contact info Card */}
        <div className="p-6 rounded-3xl bg-white border-2 border-neutral-50 shadow-sm shadow-black/5">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">Contact Information</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Full Name</div>
              <div className="text-base font-bold text-neutral-800">{data.firstName} {data.lastName}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Phone Number</div>
              <div className="text-base font-bold text-neutral-800">{data.phone}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Email Address</div>
              <div className="text-base font-bold text-neutral-800">{data.email || "Not provided"}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Location</div>
              <div className="text-base font-bold text-neutral-800">{data.city}{data.zip ? `, ${data.zip}` : ""}</div>
            </div>
          </div>
          {data.address && (
            <div className="mt-8 pt-6 border-t border-neutral-50">
              <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">Street Address</div>
              <div className="text-base font-bold text-neutral-800">{data.address}</div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl">
        <button
          onClick={onBack}
          className="w-full sm:w-1/3 py-5 rounded-2xl bg-neutral-100 text-neutral-600 font-bold hover:bg-neutral-200 transition-colors"
        >
          Go back
        </button>

        <button
          onClick={onAccept}
          className="w-full sm:w-2/3 py-5 rounded-2xl text-lg font-bold bg-emerald-500 text-white shadow-xl shadow-emerald-200 hover:bg-emerald-600 active:scale-95 transition-all text-center"
        >
          Confirm & Submit Request
        </button>
      </div>
    </div>
  );
}
