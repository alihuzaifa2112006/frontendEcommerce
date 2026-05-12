const products = [
  {
    id: 1,
    name: "Classic Silk Shirt",
    price: "$120.00",
    category: "Women",
    image: "https://images.unsplash.com/photo-1598559069352-3d8437b0d42c?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Premium Linen Trousers",
    price: "$145.00",
    category: "Men",
    image: "https://images.unsplash.com/photo-1594932224030-94005439401b?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Architectural Blazer",
    price: "$280.00",
    category: "Unisex",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Minimalist Leather Tote",
    price: "$190.00",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.3em]">NEW ARRIVALS</span>
          <h2 className="text-4xl font-bold mt-4 tracking-tight">CURATED FOR YOU</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-[#111]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black font-bold px-6 py-3 rounded-full text-xs tracking-widest hover:bg-primary transition-colors">
                    QUICK ADD
                  </button>
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors">{product.name}</h3>
                </div>
                <p className="text-sm font-bold text-primary">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
