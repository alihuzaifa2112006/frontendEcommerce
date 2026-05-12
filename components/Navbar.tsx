import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center text-black">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center font-bold text-white">E</div>
        <span className="text-xl font-bold tracking-widest">ELVÉRA</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <Link href="/" className="hover:opacity-50 transition-opacity">COLLECTIONS</Link>
        <Link href="/" className="hover:opacity-50 transition-opacity">NEW ARRIVALS</Link>
        <Link href="/" className="hover:opacity-50 transition-opacity">STORY</Link>
        <Link href="/" className="hover:opacity-50 transition-opacity">CONTACT</Link>
      </div>

      <div className="flex items-center gap-6">
        <button className="hover:opacity-50 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button className="hover:opacity-50 transition-opacity relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span className="absolute -top-1 -right-2 bg-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </button>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
}
