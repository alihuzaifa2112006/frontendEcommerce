import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 sm:py-20 px-4 sm:px-6 md:px-12 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-6 sm:mb-8">
            <span
              className="text-2xl tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              ELVÉRA
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 sm:mb-8 max-w-xs">
            Redefining luxury fashion through minimalist design and
            architectural silhouettes. Crafted for the modern individual.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            COLLECTIONS
          </h4>
          <ul className="space-y-3 sm:space-y-4 text-[11px] font-medium text-gray-500 uppercase tracking-wider">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Essential Shirts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Tailored Pants
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Accessories
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            CLIENT CARE
          </h4>
          <ul className="space-y-3 sm:space-y-4 text-[11px] font-medium text-gray-500 uppercase tracking-wider">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Size Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Sustainability
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            NEWSLETTER
          </h4>
          <p className="text-gray-500 text-xs mb-5 sm:mb-6 leading-relaxed">
            Subscribe to receive updates on new collections and exclusive
            events.
          </p>
          <div className="relative max-w-sm">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-200 py-3 text-xs focus:outline-none focus:border-black transition-colors pr-20"
            />
            <button className="absolute right-0 bottom-3 text-[10px] font-bold tracking-widest uppercase hover:opacity-50 transition-opacity">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-[10px] font-medium tracking-widest text-gray-400 uppercase">
        <p>© 2026 ELVÉRA. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 sm:gap-10">
          <a href="#" className="hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
