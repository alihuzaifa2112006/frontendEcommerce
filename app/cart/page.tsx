"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartSubtotal,
  selectIsHydrated,
  updateQuantity,
} from "@/store/cartSlice";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const count = useAppSelector(selectCartCount);
  const isHydrated = useAppSelector(selectIsHydrated);

  const shipping = subtotal > 0 ? 45 : 0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="border-b border-gray-100 pb-6 sm:pb-8 mb-8 sm:mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">
              ELVÉRA
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mt-2 sm:mt-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Shopping Bag{" "}
              <span className="text-gray-400 text-xl sm:text-2xl">
                ({isHydrated ? count : 0})
              </span>
            </h1>
          </div>

          {!isHydrated ? (
            <div className="py-24 text-center text-sm text-gray-400 tracking-widest uppercase">
              Loading bag...
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 sm:py-24 text-center">
              <p className="text-gray-500 mb-8 text-sm tracking-wider">
                Your shopping bag is empty.
              </p>
              <Link
                href="/"
                className="inline-block bg-black text-white px-8 sm:px-10 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#1a1a1a] transition-colors"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-5 sm:space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 sm:gap-6 border-b border-gray-100 pb-5 sm:pb-6"
                  >
                    <Link
                      href={`/product/${item.id}`}
                      className="w-20 h-28 sm:w-28 sm:h-36 bg-[#f7f5f1] shrink-0 overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex justify-between items-start gap-3 sm:gap-4">
                        <div className="min-w-0">
                          <Link
                            href={`/product/${item.id}`}
                            className="text-base sm:text-lg block hover:opacity-70 truncate"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                          >
                            {item.name}
                          </Link>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mt-1">
                            {item.subtitle}
                          </p>
                          <p className="text-[11px] tracking-wider mt-2 text-gray-600">
                            Size: <span className="font-bold">{item.size}</span>
                          </p>
                        </div>
                        <p className="text-sm font-bold whitespace-nowrap">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>

                      <div className="flex justify-between items-end mt-auto pt-3 sm:pt-4">
                        <div className="inline-flex items-center border border-gray-200">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  size: item.size,
                                  quantity: item.quantity - 1,
                                }),
                              )
                            }
                            className="w-8 h-8 sm:w-9 sm:h-9 hover:bg-gray-50 text-lg"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-8 sm:w-10 text-center text-sm font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  size: item.size,
                                  quantity: item.quantity + 1,
                                }),
                              )
                            }
                            className="w-8 h-8 sm:w-9 sm:h-9 hover:bg-gray-50 text-lg"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            dispatch(
                              removeItem({ id: item.id, size: item.size }),
                            )
                          }
                          className="text-[10px] tracking-[0.25em] uppercase text-gray-500 hover:text-black underline underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="bg-[#f7f5f1] p-6 sm:p-8 h-fit lg:sticky lg:top-28">
                <h2
                  className="text-xl sm:text-2xl mb-5 sm:mb-6"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm border-b border-gray-200 pb-5 sm:pb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500 tracking-wide">
                      Subtotal
                    </span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 tracking-wide">
                      Shipping
                    </span>
                    <span className="font-medium">{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 tracking-wide">
                      Duties & Taxes
                    </span>
                    <span className="font-medium text-gray-500">INCLUDED</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-5 sm:py-6">
                  <span
                    className="text-xl sm:text-2xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Total
                  </span>
                  <span className="text-xl sm:text-2xl text-[#c5a059] font-medium">
                    {formatPrice(total)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="block text-center w-full bg-black text-white py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#1a1a1a] transition-colors"
                >
                  PROCEED TO CHECKOUT
                </Link>

                <Link
                  href="/"
                  className="block text-center w-full mt-3 border border-gray-300 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:border-black transition-colors"
                >
                  CONTINUE SHOPPING
                </Link>

                <div className="mt-6 sm:mt-8 space-y-3 text-[11px] text-gray-500 tracking-wide">
                  <p className="flex items-center gap-2">
                    <span className="text-[#c5a059]">◇</span> Authenticity
                    Guaranteed
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#c5a059]">◇</span> Complimentary Gift
                    Packaging
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
