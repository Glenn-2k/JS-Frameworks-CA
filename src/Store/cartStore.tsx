import { create } from "zustand";
import CartStore from "../components/Types/CartStore.d";
import { Products } from "../components/Types/products.d";

const useCartStore = create<CartStore>((set) => ({
  items: [],
  count: 0,

  addToCart: (products: Products) =>
    set((state) => {
      const existingProduct = state.items.find(
        (item) => item.id === products.id
      );
      if (existingProduct) {
        return {
          cart: state.items.map((item) =>
            item.id === item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.items, { ...items, quantity: 1 }] };
    }),

  removeFromCart: (id: string) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
