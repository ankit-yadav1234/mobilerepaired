"use client";
import { useState } from "react";
import StepDevice from "../components/book/StepDevice";
import StepIssue from "../components/book/StepIssue";
import StepContact from "../components/book/StepContact";
import StepReview from "../components/book/StepReview";
import StepWaiting from "../components/book/StepWaiting";
import Stepper from "../components/book/Stepper";

import { BookingData } from "@/types";

export default function BookPage() {
  const [step, setStep] = useState<number>(0);

  const [data, setData] = useState<BookingData>({
    device: null,
    issue: "",
    details: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    zip: "",
    address: "",
  });

  const updateData = (patch: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  };

  const steps = [
    "Choose Device",
    "Select Issue",
    "Contact Info",
    "Technicians",
    "Waiting",
  ];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const goto = (i: number) => setStep(i);

  return (
    <main className="min-h-screen bg-neutral-50/50 pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Book a <span className="text-emerald-500 underline decoration-emerald-200 decoration-wavy underline-offset-8">Repair</span>
              </h1>
              <p className="text-lg text-neutral-500 font-medium">
                Our experts will assess your device and get it back to you in no time.
              </p>
            </div>
            <div className="text-sm font-bold text-neutral-400 bg-neutral-100 px-4 py-2 rounded-full hidden md:block">
              {steps.length} Simple Steps
            </div>
          </div>
          
          <div className="mt-10">
            <Stepper steps={steps} current={step} onSelect={(i) => goto(i)} />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-neutral-100 min-h-[500px] flex flex-col justify-center animate-in fade-in zoom-in-95 duration-500">
          {step === 0 && (
            <StepDevice data={data} onChange={updateData} onNext={next} />
          )}

          {step === 1 && (
            <StepIssue
              data={data}
              onChange={updateData}
              onNext={next}
              onBack={prev}
            />
          )}

          {step === 2 && (
            <StepContact
              data={data}
              onChange={updateData}
              onNext={next}
              onBack={prev}
            />
          )}

          {step === 3 && (
            <StepReview data={data} onBack={prev} onAccept={next} />
          )}

          {step === 4 && (
            <StepWaiting
              data={data}
              onDone={() => {
                setStep(0);
                setData({
                  device: null,
                  issue: "",
                  details: "",
                  firstName: "",
                  lastName: "",
                  phone: "",
                  email: "",
                  city: "",
                  zip: "",
                  address: "",
                });
              }}
            />
          )}
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center text-neutral-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            SSL Secure
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            90-Day Warranty
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Free Diagnostics
          </div>
        </div>
      </div>
    </main>
  );
}
