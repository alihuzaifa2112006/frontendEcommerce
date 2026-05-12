export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Fashion Hero" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl animate-fade-in text-white">
        <span className="text-primary font-medium tracking-[0.3em] text-sm mb-4 block">SUMMER COLLECTION 2026</span>
        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
          ELEGANCE IN <br />
          <span className="text-gradient">EVERY THREAD</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Discover a curation of premium apparel designed for those who value sophistication and timeless style.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform tracking-wider">
            SHOP NOW
          </button>
          <button className="border border-white/20 backdrop-blur-sm hover:bg-white/10 px-10 py-4 rounded-full transition-all tracking-wider font-medium">
            VIEW LOOKBOOK
          </button>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-[10px] tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
