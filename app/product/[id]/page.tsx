"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { use, useState } from "react";
import { getProduct } from "@/data/products";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/cartSlice";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProduct(id);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!product) return notFound();

  const gallery = product.gallery?.length ? product.gallery : [product.image];

  function addToCart() {
    if (!product) return false;
    if (!selectedSize) {
      setFeedback("Please select a size");
      setTimeout(() => setFeedback(null), 1800);
      return false;
    }
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        subtitle: product.subtitle,
        size: selectedSize,
        price: product.price,
        priceLabel: product.priceLabel,
        image: product.image,
      }),
    );
    return true;
  }

  function handleAddToBag() {
    if (addToCart()) {
      setFeedback("Added to bag");
      setTimeout(() => setFeedback(null), 1600);
    }
  }

  function handleBuyNow() {
    if (addToCart()) router.push("/checkout");
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <nav className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-6 sm:mb-8 flex flex-wrap items-center gap-y-1">
            <Link href="/" className="hover:text-black">
              HOME
            </Link>
            <span className="mx-2">/</span>
            <span className="truncate max-w-[50vw] sm:max-w-none">
              {product.collection}
            </span>
            <span className="mx-2">/</span>
            <span className="text-black truncate max-w-[60vw] sm:max-w-none">
              {product.name}
            </span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="relative w-full aspect-[3/4] bg-[#0a0a0a] overflow-hidden">
                <img
                  src={gallery[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-3 sm:mt-4 grid grid-cols-4 gap-2 sm:gap-3">
                  {gallery.slice(0, 4).map((src, idx) => (
                    <button
                      key={src + idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative aspect-[3/4] overflow-hidden border ${
                        idx === activeImage
                          ? "border-black"
                          : "border-transparent hover:border-gray-300"
                      } transition-colors`}
                    >
                      <img
                        src={src}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">
                {product.collection}
              </span>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl mt-2 sm:mt-3 leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {product.name}
              </h1>
              <p className="mt-3 sm:mt-4 text-[#c5a059] text-lg font-medium">
                {product.priceLabel}
              </p>

              <div className="mt-6 sm:mt-8 border-t border-gray-100 pt-5 sm:pt-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-bold">
                    Select Size
                  </span>
                  <button className="text-[10px] tracking-[0.2em] uppercase text-gray-500 hover:text-black underline underline-offset-4">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    const isDisabled = size === "IT 52";
                    return (
                      <button
                        key={size}
                        disabled={isDisabled}
                        onClick={() => setSelectedSize(size)}
                        className={`h-11 sm:h-12 text-[11px] font-bold tracking-wider border transition-colors ${
                          isDisabled
                            ? "border-gray-100 text-gray-300 line-through cursor-not-allowed"
                            : isSelected
                              ? "border-black bg-black text-white"
                              : "border-gray-200 text-black hover:border-black"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 space-y-3">
                <button
                  onClick={handleAddToBag}
                  className="w-full h-12 sm:h-14 bg-black text-white text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:bg-[#1a1a1a] transition-colors"
                >
                  ADD TO BAG
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full h-12 sm:h-14 border border-black text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-colors"
                >
                  BUY NOW
                </button>
                <button className="w-full h-12 sm:h-14 border border-gray-200 text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:border-black transition-colors">
                  ADD TO WISHLIST
                </button>

                {feedback && (
                  <div className="text-center text-[11px] tracking-[0.2em] uppercase text-[#c5a059] pt-2">
                    {feedback}
                  </div>
                )}
              </div>

              <div className="mt-8 sm:mt-10 border-t border-gray-100">
                <button
                  onClick={() => setDetailsOpen((v) => !v)}
                  className="w-full flex justify-between items-center py-4 sm:py-5 text-[11px] font-bold tracking-[0.25em] uppercase"
                >
                  Details & Care
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`transition-transform ${detailsOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {detailsOpen && (
                  <div className="pb-5 sm:pb-6 space-y-3 sm:space-y-4 text-sm text-gray-700 leading-relaxed">
                    <p>{product.description}</p>
                    <ul className="space-y-2 pl-5 list-disc marker:text-[#c5a059]">
                      {product.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100">
                <button
                  onClick={() => setShippingOpen((v) => !v)}
                  className="w-full flex justify-between items-center py-4 sm:py-5 text-[11px] font-bold tracking-[0.25em] uppercase"
                >
                  Shipping & Returns
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`transition-transform ${shippingOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {shippingOpen && (
                  <div className="pb-5 sm:pb-6 text-sm text-gray-700 leading-relaxed space-y-3">
                    <p>
                      Complimentary express delivery worldwide. Orders are
                      dispatched within 24 hours.
                    </p>
                    <p>
                      Returns accepted within 30 days of delivery in original
                      condition.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
