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

  // Safe update function for all steps
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
    <main className="min-h-screen bg-zinc-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-cyan-900 mb-4">Book a Repair</h1>
        <p className="text-slate-500 mb-6">
          Our experts will assess your device and get it back to you in no time.
        </p>

        <Stepper steps={steps} current={step} onSelect={(i) => goto(i)} />

        <div className="mt-8 bg-white rounded-2xl shadow p-6">
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
                alert("Booking submitted (demo).");
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
      </div>
    </main>
  );
}
