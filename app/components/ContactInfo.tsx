// components/ContactInfo.tsx
export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-semibold">Contact Information</h3>
        <p className="mt-2 text-sm text-white/90">
          Say something to start a live chat or send us a message and we’ll get
          back shortly.
        </p>

        <div className="mt-6 space-y-4 text-sm">
          <div>
            <div className="font-medium text-white/95">Phone</div>
            <div className="text-white/90">+1 012 3456 789</div>
          </div>

          <div>
            <div className="font-medium text-white/95">Email</div>
            <div className="text-white/90">demo@gmail.com</div>
          </div>

          <div>
            <div className="font-medium text-white/95">Address</div>
            <div className="text-white/90">
              132 Dartmouth Street, Boston, MA 02156, United States
            </div>
          </div>
        </div>
      </div>

      {/* social / small footer in panel */}
      <div className="mt-6 flex gap-3 items-center">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">F</div>
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">T</div>
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">I</div>
        <div className="ml-auto text-xs text-white/80">Mon - Fri • 9am - 6pm</div>
      </div>
    </div>
  );
}
