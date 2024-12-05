import { create } from "zustand";
import CartStore from "../components/Types/CartStore.d";
import { Products } from "../components/Types/products.d";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      items: [],
      count: 0,

      addToCart: (product: Products) => {
        set((state) => {
          const existingProduct = state.items.some(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return state;
          }

          return {
            items: [...state.items, product],
            count: state.count + 1,
          };
        });
      },

      removeFromCart: (productId: string) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
          count: state.count > 0 ? state.count - 1 : 0,
        })),

      clearCart: () => {
        set({ items: [], count: 0 });
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
