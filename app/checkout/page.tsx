"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  clearCart,
  removeItem,
  selectCartItems,
  selectCartSubtotal,
  selectIsHydrated,
} from "@/store/cartSlice";
import { formatPrice } from "@/lib/format";

type Step = 1 | 2 | 3;

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const isHydrated = useAppSelector(selectIsHydrated);

  const [step, setStep] = useState<Step>(1);
  const [shippingMethod, setShippingMethod] = useState<"express" | "standard">(
    "express",
  );
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    saveInfo: false,
  });

  const shippingCost = subtotal > 0 ? (shippingMethod === "express" ? 45 : 0) : 0;
  const total = subtotal + shippingCost;

  function handleSubmitShipping(e: React.FormEvent) {
    e.preventDefault();
    setStep(2);
  }

  function handleSubmitPayment(e: React.FormEvent) {
    e.preventDefault();
    setStep(3);
    dispatch(clearCart());
  }

  const steps: { id: Step; label: string }[] = [
    { id: 1, label: "01 SHIPPING" },
    { id: 2, label: "02 PAYMENT" },
    { id: 3, label: "03 CONFIRMATION" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f5f1] text-black">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <aside className="lg:hidden bg-white p-6 sm:p-8 order-first">
              <CartSummary
                items={items}
                isHydrated={isHydrated}
                subtotal={subtotal}
                shippingCost={shippingCost}
                total={total}
                onRemove={(id, size) => dispatch(removeItem({ id, size }))}
                compact
              />
            </aside>

            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-4 sm:gap-8 border-b border-gray-200 pb-3 sm:pb-4 mb-8 sm:mb-12 text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] font-bold">
                {steps.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => s.id < step && setStep(s.id)}
                    className={`pb-2 transition-colors ${
                      step === s.id
                        ? "text-black border-b-2 border-black -mb-[13px] sm:-mb-[17px]"
                        : s.id < step
                          ? "text-black hover:opacity-70"
                          : "text-gray-400 cursor-default"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {step === 1 && (
                <form onSubmit={handleSubmitShipping}>
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    SHIPPING DETAILS
                  </h1>

                  <div className="space-y-6 sm:space-y-8">
                    <Field
                      label="EMAIL ADDRESS"
                      type="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      <Field
                        label="FIRST NAME"
                        placeholder="John"
                        value={form.firstName}
                        onChange={(v) => setForm({ ...form, firstName: v })}
                        required
                      />
                      <Field
                        label="LAST NAME"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={(v) => setForm({ ...form, lastName: v })}
                        required
                      />
                    </div>

                    <Field
                      label="STREET ADDRESS"
                      placeholder="House number and street name"
                      value={form.address}
                      onChange={(v) => setForm({ ...form, address: v })}
                      required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      <Field
                        label="CITY"
                        placeholder="Paris"
                        value={form.city}
                        onChange={(v) => setForm({ ...form, city: v })}
                        required
                      />
                      <Field
                        label="POSTAL CODE"
                        placeholder="75001"
                        value={form.postalCode}
                        onChange={(v) => setForm({ ...form, postalCode: v })}
                        required
                      />
                    </div>

                    <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.saveInfo}
                        onChange={(e) =>
                          setForm({ ...form, saveInfo: e.target.checked })
                        }
                        className="w-4 h-4 accent-black"
                      />
                      Save this information for next time
                    </label>
                  </div>

                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl mt-12 sm:mt-16 mb-6 sm:mb-8"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    SHIPPING METHOD
                  </h2>

                  <div className="space-y-3">
                    <ShippingOption
                      selected={shippingMethod === "express"}
                      onSelect={() => setShippingMethod("express")}
                      title="EXPRESS WORLDWIDE"
                      subtitle="Delivery within 2-3 business days"
                      price="€45.00"
                    />
                    <ShippingOption
                      selected={shippingMethod === "standard"}
                      onSelect={() => setShippingMethod("standard")}
                      title="STANDARD SHIPPING"
                      subtitle="Delivery within 5-7 business days"
                      price="FREE"
                    />
                  </div>

                  <div className="mt-10 sm:mt-12 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <Link
                      href="/cart"
                      className="text-[11px] tracking-[0.25em] uppercase text-gray-500 hover:text-black underline underline-offset-4 text-center sm:text-left"
                    >
                      ← Back to bag
                    </Link>
                    <button
                      type="submit"
                      disabled={items.length === 0}
                      className="bg-black text-white px-8 sm:px-12 py-4 text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:bg-[#1a1a1a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      CONTINUE TO PAYMENT
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmitPayment}>
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    PAYMENT
                  </h1>
                  <div className="space-y-6 sm:space-y-8">
                    <Field
                      label="CARD NUMBER"
                      placeholder="1234 5678 9012 3456"
                      value=""
                      onChange={() => {}}
                    />
                    <div className="grid grid-cols-2 gap-6 sm:gap-8">
                      <Field
                        label="EXPIRY"
                        placeholder="MM / YY"
                        value=""
                        onChange={() => {}}
                      />
                      <Field
                        label="CVV"
                        placeholder="123"
                        value=""
                        onChange={() => {}}
                      />
                    </div>
                    <Field
                      label="CARDHOLDER NAME"
                      placeholder="John Doe"
                      value=""
                      onChange={() => {}}
                    />
                  </div>

                  <div className="mt-10 sm:mt-12 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[11px] tracking-[0.25em] uppercase text-gray-500 hover:text-black underline underline-offset-4 text-center sm:text-left"
                    >
                      ← Back to shipping
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white px-8 sm:px-12 py-4 text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:bg-[#1a1a1a]"
                    >
                      PLACE ORDER
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="py-8 sm:py-12">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059]">
                    THANK YOU
                  </span>
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl mt-3 mb-5 sm:mb-6"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Your order is confirmed
                  </h1>
                  <p className="text-gray-600 max-w-md leading-relaxed">
                    A confirmation email has been sent to{" "}
                    <span className="text-black font-medium">
                      {form.email || "you"}
                    </span>
                    . Your ELVÉRA pieces are being prepared by our atelier.
                  </p>
                  <Link
                    href="/"
                    className="mt-8 sm:mt-10 inline-block bg-black text-white px-8 sm:px-12 py-4 text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:bg-[#1a1a1a]"
                  >
                    CONTINUE SHOPPING
                  </Link>
                </div>
              )}
            </div>

            <aside className="hidden lg:block bg-white p-8 h-fit lg:sticky lg:top-28">
              <CartSummary
                items={items}
                isHydrated={isHydrated}
                subtotal={subtotal}
                shippingCost={shippingCost}
                total={total}
                onRemove={(id, size) => dispatch(removeItem({ id, size }))}
              />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function CartSummary({
  items,
  isHydrated,
  subtotal,
  shippingCost,
  total,
  onRemove,
  compact = false,
}: {
  items: ReturnType<typeof selectCartItems>;
  isHydrated: boolean;
  subtotal: number;
  shippingCost: number;
  total: number;
  onRemove: (id: string, size: string) => void;
  compact?: boolean;
}) {
  return (
    <>
      <h2
        className={`mb-6 sm:mb-8 tracking-wider ${compact ? "text-xl" : "text-2xl"}`}
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        YOUR BAG{" "}
        <span className="text-gray-400">
          ({isHydrated ? String(items.length).padStart(2, "0") : "00"})
        </span>
      </h2>

      {isHydrated && items.length === 0 && (
        <p className="text-sm text-gray-400 mb-6">Your bag is empty.</p>
      )}

      <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-1">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}`} className="flex gap-3 sm:gap-4">
            <div className="w-16 h-20 sm:w-20 sm:h-24 bg-[#f7f5f1] shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className="text-sm leading-tight truncate"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {item.name.toUpperCase()}
              </h3>
              <p className="text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-400 mt-1 truncate">
                SIZE: {item.size} | {item.subtitle}
              </p>
              <div className="flex justify-between items-center mt-2 sm:mt-3">
                <button
                  type="button"
                  onClick={() => onRemove(item.id, item.size)}
                  className="text-[10px] tracking-[0.2em] uppercase text-gray-500 hover:text-black underline underline-offset-4"
                >
                  REMOVE
                </button>
                <span className="text-sm font-medium whitespace-nowrap">
                  {formatPrice(item.price * item.quantity).replace("$", "€")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 text-sm border-t border-gray-100 pt-5 sm:pt-6">
        <div className="flex justify-between tracking-wider">
          <span className="text-gray-500 text-[11px] uppercase">Subtotal</span>
          <span>{formatPrice(subtotal).replace("$", "€")}</span>
        </div>
        <div className="flex justify-between tracking-wider">
          <span className="text-gray-500 text-[11px] uppercase">Shipping</span>
          <span>{formatPrice(shippingCost).replace("$", "€")}</span>
        </div>
        <div className="flex justify-between tracking-wider">
          <span className="text-gray-500 text-[11px] uppercase">
            Duties & Taxes
          </span>
          <span className="text-gray-500 text-[11px]">INCLUDED</span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-5 sm:pt-6 mt-4 border-t border-gray-100">
        <span
          className="text-xl sm:text-2xl tracking-wider"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          TOTAL
        </span>
        <span
          className="text-xl sm:text-2xl text-[#c5a059]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {formatPrice(total).replace("$", "€")}
        </span>
      </div>

      <div className="mt-8 sm:mt-10 space-y-3 text-[11px] text-gray-500 tracking-wide">
        <p className="flex items-center gap-2">
          <span className="text-[#c5a059]">◇</span> AUTHENTICITY GUARANTEED
        </p>
        <p className="flex items-center gap-2">
          <span className="text-[#c5a059]">◇</span> COMPLIMENTARY GIFT PACKAGING
        </p>
      </div>
    </>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.25em] uppercase font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-gray-300 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
      />
    </div>
  );
}

function ShippingOption({
  selected,
  onSelect,
  title,
  subtitle,
  price,
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  subtitle: string;
  price: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 border text-left transition-colors ${
        selected ? "border-black bg-white" : "border-gray-200 bg-white/40"
      }`}
    >
      <span
        className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
          selected ? "border-black" : "border-gray-300"
        }`}
      >
        {selected && <span className="w-2 h-2 rounded-full bg-black" />}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
          {title}
        </div>
        <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
      </div>
      <div className="text-sm font-medium whitespace-nowrap">{price}</div>
    </button>
  );
}
