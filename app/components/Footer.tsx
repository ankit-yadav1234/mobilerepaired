import Image from "next/image"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a2533] text-white pt-20 pb-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">

        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
               </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">MobileRepaired</span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed font-medium">
            Providing top-tier repair services for all your digital devices with speed and trust.
          </p>
        </div>

        {/* Popular Brands */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-emerald-400">Popular Brands</h4>
          <ul className="grid grid-cols-2 gap-y-3 text-sm text-neutral-400 font-medium">
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">• Apple</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">• Samsung</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">• Xiaomi</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">• OnePlus</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">• Google</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">• Huawei</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="text-lg font-bold mb-6 text-emerald-400">Stay Updated</h4>
          <p className="text-sm text-neutral-400 mb-6 font-medium">Subscribe to get the latest repair tips and offers.</p>
          <div className="flex bg-neutral-800/50 rounded-2xl p-1 border border-neutral-700 focus-within:border-emerald-500 transition-all">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-sm text-white px-4 py-2 w-full outline-none"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-5 py-2 rounded-xl transition-all">
              Go
            </button>
          </div>
        </div>

        {/* Contact/Follow */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-emerald-400">Follow Us</h4>
          <div className="flex gap-4">
            <div className="w-11 h-11 bg-neutral-800 rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all cursor-pointer">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </div>
            <div className="w-11 h-11 bg-neutral-800 rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all cursor-pointer">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
            <div className="w-11 h-11 bg-neutral-800 rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all cursor-pointer">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-800/50 flex flex-col items-center justify-center gap-6 text-sm text-neutral-500 font-medium">
        <div className="text-center">
          Copyright © {currentYear} Ankit Yadav | All Rights Reserved ❤️
        </div>
        <div className="flex gap-8 justify-center">
          <span className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
