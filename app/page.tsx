import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <ProductGrid />


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
