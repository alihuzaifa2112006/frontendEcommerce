import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <Hero />

      <ProductGrid />

      <section className="py-20 sm:py-28 bg-[#0a0a0a] border-y border-white/5 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl md:text-5xl mb-6 sm:mb-8 italic leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            &ldquo;Style is a way to say who you are without having to
            speak.&rdquo;
          </h2>
          <div className="w-16 sm:w-20 h-[1px] bg-[#c5a059] mx-auto mb-6 sm:mb-8" />
          <p className="text-gray-400 leading-loose text-sm sm:text-base">
            At ELVÉRA, we believe that fashion is more than just clothing—it&apos;s
            a medium of self-expression. Our garments are crafted using the
            finest materials and ethical manufacturing processes, ensuring that
            your style doesn&apos;t come at a cost to the planet.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
