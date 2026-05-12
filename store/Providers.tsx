"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "./index";
import { hydrate, setHydrated, type CartItem } from "./cartSlice";

const STORAGE_KEY = "elvera_cart_v1";

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) storeRef.current = makeStore();

  useEffect(() => {
    const store = storeRef.current;
    if (!store) return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const items: CartItem[] = JSON.parse(raw);
        store.dispatch(hydrate(items));
      } else {
        store.dispatch(setHydrated());
      }
    } catch {
      store.dispatch(setHydrated());
    }

    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      if (!state.cart.isHydrated) return;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart.items));
      } catch {
      }
    });

    return () => unsubscribe();
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
