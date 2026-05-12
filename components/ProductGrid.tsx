"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/cartSlice";

export default function ProductGrid() {
  const dispatch = useAppDispatch();
  const [addedId, setAddedId] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  function handleAdd(e: React.MouseEvent, productId: string) {
    e.preventDefault();
    e.stopPropagation();
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        subtitle: product.subtitle,
        size: product.sizes[0] ?? "ONE SIZE",
        price: product.price,
        priceLabel: product.priceLabel,
        image: product.image,
      }),
    );
    setAddedId(productId);
    setTimeout(() => setAddedId(null), 1400);
  }

  const filters = (
    <div className="space-y-10 lg:space-y-12">
      <div className="space-y-4">
        <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4 lg:mb-6">
          Category
        </h3>
        <ul className="space-y-3 lg:space-y-4 text-xs font-medium">
          <li className="cursor-pointer font-bold flex justify-between items-center">
            <span>All Pieces</span>
            <span className="text-[9px] font-bold">{products.length}</span>
          </li>
          <li className="text-gray-400 hover:text-black cursor-pointer">
            Architectural Shirts
          </li>
          <li className="text-gray-400 hover:text-black cursor-pointer">
            Tailored Outerwear
          </li>
          <li className="text-gray-400 hover:text-black cursor-pointer">
            Accessories
          </li>
        </ul>
        <div className="pt-4 border-b border-gray-100 w-full" />
      </div>

      <div className="space-y-4 lg:space-y-6">
        <h3 className="text-[10px] font-bold tracking-widest uppercase">
          Size
        </h3>
        <div className="grid grid-cols-5 sm:grid-cols-4 gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`h-10 text-[9px] font-bold border ${
                size === "S"
                  ? "bg-black text-white border-black"
                  : "border-gray-200 text-gray-400 hover:border-black hover:text-black"
              } transition-colors`}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="pt-4 border-b border-gray-100 w-full" />
      </div>

      <div className="space-y-4 lg:space-y-6">
        <h3 className="text-[10px] font-bold tracking-widest uppercase">
          Color
        </h3>
        <div className="flex gap-4">
          <button className="w-5 h-5 rounded-full bg-black ring-2 ring-offset-2 ring-black" />
          <button className="w-5 h-5 rounded-full bg-white border border-gray-200" />
          <button className="w-5 h-5 rounded-full bg-gray-600" />
          <button className="w-5 h-5 rounded-full bg-[#c5a059]" />
          <button className="w-5 h-5 rounded-full bg-gray-200" />
        </div>
        <div className="pt-4 border-b border-gray-100 w-full" />
      </div>

      <div className="space-y-6 lg:space-y-8">
        <h3 className="text-[10px] font-bold tracking-widest uppercase">
          Price
        </h3>
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
    </div>
  );

  return (
    <section
      id="products"
      className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 text-black font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 border-b border-gray-100 pb-6 sm:pb-8 gap-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">
              READY-TO-WEAR
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Essential Collection
            </h2>
          </div>
          <div className="flex gap-6 sm:gap-10 text-[10px] font-bold tracking-[0.2em] uppercase items-center">
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="lg:hidden flex items-center gap-2 hover:opacity-50"
            >
              {filtersOpen ? "HIDE" : "FILTERS"}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${filtersOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <button className="hidden sm:flex items-center gap-2 hover:opacity-50">
              SORT BY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <span className="text-gray-400">{products.length} ITEMS</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {filtersOpen && (
            <aside className="lg:hidden border border-gray-100 p-6">
              {filters}
            </aside>
          )}
          <aside className="hidden lg:block w-64 shrink-0">{filters}</aside>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-16">
            {products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="group block"
              >
                <div className="relative aspect-[3/4] bg-[#f9f9f9] overflow-hidden mb-4 sm:mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.limited && (
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black text-white text-[8px] font-bold tracking-[0.2em] px-2 py-1 uppercase">
                      LIMITED
                    </div>
                  )}
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <h3
                    className="text-base sm:text-lg"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                    {product.subtitle}
                  </p>
                  <p className="text-xs font-bold pt-1">{product.priceLabel}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <button
                      onClick={(e) => handleAdd(e, product.id)}
                      className={`font-bold px-3 sm:px-4 py-2 rounded-full transition-all text-[10px] tracking-widest uppercase ${
                        addedId === product.id
                          ? "bg-green-700 text-white"
                          : "bg-[#c5a059] text-black hover:scale-105"
                      }`}
                    >
                      {addedId === product.id ? "ADDED ✓" : "ADD TO BAG"}
                    </button>
                    <span className="bg-black text-white font-bold px-3 sm:px-4 py-2 rounded-full hover:opacity-80 transition-opacity text-[10px] tracking-widest uppercase">
                      VIEW
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
