import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  name: string;
  subtitle: string;
  size: string;
  price: number;
  priceLabel: string;
  image: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  isHydrated: boolean;
};

const initialState: CartState = {
  items: [],
  isHydrated: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrate(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
      state.isHydrated = true;
    },
    setHydrated(state) {
      state.isHydrated = true;
    },
    addItem: {
      reducer(
        state,
        action: PayloadAction<{ item: Omit<CartItem, "quantity">; quantity: number }>,
      ) {
        const { item, quantity } = action.payload;
        const existing = state.items.find(
          (it) => it.id === item.id && it.size === item.size,
        );
        if (existing) {
          existing.quantity += quantity;
        } else {
          state.items.push({ ...item, quantity });
        }
      },
      prepare(item: Omit<CartItem, "quantity">, quantity = 1) {
        return { payload: { item, quantity } };
      },
    },
    removeItem(
      state,
      action: PayloadAction<{ id: string; size: string }>,
    ) {
      state.items = state.items.filter(
        (it) =>
          !(it.id === action.payload.id && it.size === action.payload.size),
      );
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; size: string; quantity: number }>,
    ) {
      const { id, size, quantity } = action.payload;
      const item = state.items.find((it) => it.id === id && it.size === size);
      if (!item) return;
      if (quantity <= 0) {
        state.items = state.items.filter(
          (it) => !(it.id === id && it.size === size),
        );
      } else {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  hydrate,
  setHydrated,
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, it) => sum + it.quantity, 0);
export const selectCartSubtotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
export const selectIsHydrated = (state: { cart: CartState }) =>
  state.cart.isHydrated;
