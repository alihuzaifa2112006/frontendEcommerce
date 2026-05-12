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

      <div className="relative z-20 text-center px-6 max-w-5xl animate-fade-in text-white">
        <span className="text-white font-bold tracking-[0.4em] text-xs mb-6 block uppercase">SPRING / SUMMER 2024</span>
        <h1 className="text-5xl md:text-8xl font-serif mb-10 tracking-tight leading-none">
          The Architecture of Silence
        </h1>
        <div className="flex justify-center mt-12">
          <button className="bg-black text-white font-bold px-12 py-5 rounded-none hover:bg-white hover:text-black transition-all tracking-widest text-xs uppercase border border-black">
            SHOP COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
}
