import React from 'react';

const products = [
  {
    id: 1,
    name: "Structured Poplin Shirt",
    subtitle: "Signature White",
    price: "$420.00",
    image: "https://images.unsplash.com/photo-1598559069352-3d8437b0d42c?q=80&w=1974&auto=format&fit=crop",
    limited: false
  },
  {
    id: 2,
    name: "Tailored Wool Blazer",
    subtitle: "Anthracite Grey",
    price: "$1,250.00",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    limited: true
  },
  {
    id: 3,
    name: "Asymmetric Trousers",
    subtitle: "Deep Black",
    price: "$680.00",
    image: "https://images.unsplash.com/photo-1594932224030-94005439401b?q=80&w=1974&auto=format&fit=crop",
    limited: false
  },
  {
    id: 4,
    name: "Modern Trench Coat",
    subtitle: "Desert Beige",
    price: "$1,800.00",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    limited: false
  },
  {
    id: 5,
    name: "Textile Study 01",
    subtitle: "Gold Leaf Fabric",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1550634163-4f9e1f576e2c?q=80&w=2070&auto=format&fit=crop",
    limited: false
  },
  {
    id: 6,
    name: "Minimalist Tote Bag",
    subtitle: "Obsidian Leather",
    price: "$950.00",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
    limited: false
  }
];

export default function ProductGrid() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-black font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-100 pb-8">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">READY-TO-WEAR</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">Essential Collection</h2>
          </div>
          <div className="flex gap-10 mt-8 md:mt-0 text-[10px] font-bold tracking-[0.2em] uppercase">
            <button className="flex items-center gap-2 hover:opacity-50">
              SORT BY 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <span className="text-gray-400">24 ITEMS</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 space-y-12 shrink-0">
            {/* Category */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-6">Category</h3>
              <ul className="space-y-4 text-xs font-medium">
                <li className="text-gray-400 hover:text-black cursor-pointer">All Pieces</li>
                <li className="flex justify-between items-center cursor-pointer font-bold">
                  <span>Architectural Shirts</span>
                  <span className="text-[9px] font-bold">42</span>
                </li>
                <li className="text-gray-400 hover:text-black cursor-pointer">Tailored Outerwear</li>
              </ul>
              <div className="pt-4 border-b border-gray-100 w-full" />
            </div>

            {/* Size */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-bold tracking-widest uppercase">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button 
                    key={size}
                    className={`h-10 text-[9px] font-bold border ${size === 'S' ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-400 hover:border-black hover:text-black'} transition-colors`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="pt-4 border-b border-gray-100 w-full" />
            </div>

            {/* Color */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-bold tracking-widest uppercase">Color</h3>
              <div className="flex gap-4">
                <button className="w-5 h-5 rounded-full bg-black ring-2 ring-offset-2 ring-black" />
                <button className="w-5 h-5 rounded-full bg-white border border-gray-200" />
                <button className="w-5 h-5 rounded-full bg-gray-600" />
                <button className="w-5 h-5 rounded-full bg-[#c5a059]" />
                <button className="w-5 h-5 rounded-full bg-gray-200" />
              </div>
              <div className="pt-4 border-b border-gray-100 w-full" />
            </div>

            {/* Price */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold tracking-widest uppercase">Price</h3>
              <div className="relative pt-2">
                <div className="h-[2px] w-full bg-gray-100 relative">
                  <div className="absolute left-[20%] right-[30%] h-full bg-gray-300" />
                  <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full cursor-pointer" />
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400">
                  <span>$250</span>
                  <span>$2,500</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-[#f9f9f9] overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.limited && (
                    <div className="absolute bottom-4 left-4 bg-black text-white text-[8px] font-bold tracking-[0.2em] px-2 py-1 uppercase">
                      LIMITED
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif">{product.name}</h3>
                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{product.subtitle}</p>
                  <p className="text-xs font-bold pt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
