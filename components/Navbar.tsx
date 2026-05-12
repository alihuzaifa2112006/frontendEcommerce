import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 px-6 md:px-12 grid grid-cols-3 items-center text-black">

      <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-wider uppercase">
        <Link href="/" className="hover:opacity-50 transition-opacity">SHIRTS</Link>
        <Link href="/" className="hover:opacity-50 transition-opacity">PANTS</Link>
        <Link href="/" className="hover:opacity-50 transition-opacity">SHOES</Link>
        <Link href="/" className="hover:opacity-50 transition-opacity">COLLECTIONS</Link>
        <Link href="/" className="hover:opacity-50 transition-opacity">ABOUT</Link>
      </div>

      {/* Center: Logo */}
      <div className="flex justify-center">
        <span className="text-2xl md:text-3xl font-serif tracking-widest uppercase">ELVÉRA</span>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center justify-end gap-6">
        <button className="hover:opacity-50 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        </button>
        <button className="hover:opacity-50 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
        </button>
        <button className="hover:opacity-50 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </button>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
        </button>
      </div>
    </nav>
  );
}
