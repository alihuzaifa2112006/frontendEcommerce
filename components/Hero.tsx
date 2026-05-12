import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Fashion Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl animate-fade-in text-white py-24">
        <span className="text-white/80 font-bold tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs mb-4 sm:mb-6 block uppercase">
          SPRING / SUMMER 2024
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 sm:mb-10 tracking-tight leading-[1.05]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          The Architecture of Silence
        </h1>
        <div className="flex justify-center mt-8 sm:mt-12">
          <Link
            href="#products"
            className="bg-white text-black font-bold px-8 sm:px-12 py-4 sm:py-5 hover:bg-black hover:text-white transition-all tracking-[0.25em] sm:tracking-[0.3em] text-[11px] sm:text-xs uppercase border border-white"
          >
            SHOP COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
}
