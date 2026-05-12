"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectCartCount, selectIsHydrated } from "@/store/cartSlice";

export default function Navbar() {
  const count = useAppSelector(selectCartCount);
  const isHydrated = useAppSelector(selectIsHydrated);
  const router = useRouter();

  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    setSearchOpen(false);
    router.push(`/?q=${encodeURIComponent(trimmed)}#products`);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 text-black">
      <div className="py-4 sm:py-5 px-4 sm:px-6 md:px-12 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-semibold tracking-wider uppercase">
          <Link href="/" className="hover:opacity-50 transition-opacity">
            SHIRTS
          </Link>
          <Link href="/" className="hover:opacity-50 transition-opacity">
            PANTS
          </Link>
          <Link href="/" className="hover:opacity-50 transition-opacity">
            SHOES
          </Link>
          <Link href="/" className="hover:opacity-50 transition-opacity">
            COLLECTIONS
          </Link>
          <Link href="/" className="hover:opacity-50 transition-opacity">
            ABOUT
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden justify-self-start p-2 -ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.25em] uppercase justify-self-center"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          ELVÉRA
        </Link>

        <div className="flex items-center justify-end gap-3 sm:gap-5 md:gap-6">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="hover:opacity-50 transition-opacity p-2 -mr-2 sm:m-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <button
            aria-label="Account"
            className="hover:opacity-50 transition-opacity hidden sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative hover:opacity-50 transition-opacity p-2 -mr-2 sm:m-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {isHydrated && count > 0 && (
              <span className="absolute top-0 right-0 sm:-top-2 sm:-right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-[#c5a059] text-white text-[10px] font-bold flex items-center justify-center leading-none">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-gray-100 bg-white animate-slide-down">
          <form
            onSubmit={onSearchSubmit}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-5 flex items-center gap-3 sm:gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 shrink-0"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search products, collections..."
              className="flex-1 min-w-0 bg-transparent outline-none text-sm tracking-wide placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-black shrink-0"
            >
              CLOSE
            </button>
          </form>
        </div>
      )}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span
                className="text-2xl tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                ELVÉRA
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col px-6 py-6 gap-1 text-[12px] font-semibold tracking-[0.2em] uppercase">
              {[
                { label: "SHIRTS", href: "/" },
                { label: "PANTS", href: "/" },
                { label: "SHOES", href: "/" },
                { label: "COLLECTIONS", href: "/" },
                { label: "ABOUT", href: "/" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 border-b border-gray-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto px-6 py-6 border-t border-gray-100 flex flex-col gap-3 text-[11px] tracking-[0.2em] uppercase">
              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                className="py-2 flex justify-between items-center"
              >
                <span>SHOPPING BAG</span>
                <span className="text-[#c5a059]">({isHydrated ? count : 0})</span>
              </Link>
              <Link
                href="/checkout"
                onClick={() => setMobileOpen(false)}
                className="py-2"
              >
                CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
