import Image from "next/image"; 
export default function Footer() {
  return (
    <footer className="w-full bg-cyan-950 text-white py-12 mt-5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Popular Brands */}
        <div>
          <Image src="Vector.svg" alt="" width={11} height={11} />
          <h4 className="text-sm font-semibold mb-1">Popular Brands</h4>
         
          <p className="text-xs leading-2 opacity-80">
            Apple<br />Samsung<br />Xiaomi<br />Realme<br />Oppo<br />Huawei<br />
            Infinix<br />Nokia<br />OnePlus<br />Google
          </p>
        </div>

        {/* Popular Mobiles */}
        <div>
          <div>
          <Image src="Vector.svg" alt="" width={11} height={11} />
          <h4 className="text-sm font-semibold mb-1">Popular Mobiles</h4>
          </div>
          
          <p className="text-xs leading-2 opacity-80">
            iPhone 15 Pro<br />Samsung Galaxy S22<br />OnePlus 12R<br />Realme C67<br />
            Oppo A18<br />Xiaomi Note 13<br />Samsung S23<br />Infinix Hot 40 Pro
          </p>
        </div>

        {/* Partner + Newsletter */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Want to be a Partner</h4>
          <p className="text-xs mb-4 opacity-80">Contact Us</p>

          <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
          <div className="flex bg-white rounded overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="name@email.com"
              className="text-xs text-neutral-700 px-2 py-1 w-full outline-none"
            />
            <button className="bg-emerald-400 text-white text-xs px-4">Subscribe</button>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-zinc-500 rounded-xl">
              <Image src="/Facebook.svg" alt="Facebook" width={24} height={24} />
            </div>
            <div className="w-6 h-6 bg-zinc-500 rounded-xl">
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
            </div>
            <div className="w-6 h-6 bg-zinc-500 rounded-xl">
              <Image src="x.svg" alt="Twitter" width={24} height={24} />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-[10px] opacity-60 mt-2 leading-5">
        Copyright © 2003 - 2024 (Pvt) Ltd. - All Rights Reserved.<br />
        Reproduction of material from any pages without permission is strictly prohibited.
      </div>
    </footer>
  );
}
