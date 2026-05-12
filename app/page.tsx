import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Featured Collections Section */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary text-xs font-bold tracking-[0.2em]">CRAFTED WITH CARE</span>
              <h2 className="text-4xl font-bold mt-2">FEATURED COLLECTIONS</h2>
            </div>
            <a href="#" className="text-sm border-b border-primary text-primary pb-1 font-medium hover:text-white hover:border-white transition-all">VIEW ALL</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Card 1 */}
            <div className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop" 
                alt="Women" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2">ESSENTIAL WOMEN</h3>
                <p className="text-gray-300 text-sm mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">Redefining elegance for the modern woman.</p>
                <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1920&auto=format&fit=crop" 
                alt="Men" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2">TIMELESS MEN</h3>
                <p className="text-gray-300 text-sm mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">Sophisticated staples for the contemporary gentleman.</p>
                <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Category Card 3 */}
            <div className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1920&auto=format&fit=crop" 
                alt="Accessories" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2">ACCESSORIES</h3>
                <p className="text-gray-300 text-sm mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">The perfect finishing touches to your identity.</p>
                <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />

      {/* Brand Ethos Section */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"Style is a way to say who you are without having to speak."</h2>
          <div className="w-20 h-[1px] bg-primary mx-auto mb-8" />
          <p className="text-gray-400 leading-loose">
            At ELVÉRA, we believe that fashion is more than just clothing—it's a medium of self-expression. 
            Our garments are crafted using the finest materials and ethical manufacturing processes, 
            ensuring that your style doesn't come at a cost to the planet.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
