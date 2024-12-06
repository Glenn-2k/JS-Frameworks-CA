import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Products } from "../components/Types/products.d";

interface CartItem extends Products {
  quantity: number;
}

interface CartStoreType {
  items: CartItem[];
  count: number;
  addToCart: (product: Products) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      items: [],
      count: 0,

      addToCart: (product: Products) => {
        set((state) => {
          const existingProduct = state.items.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              count: get().items.reduce(
                (acc, item) =>
                  acc +
                  (item.id === product.id ? item.quantity + 1 : item.quantity),
                0
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
            count: get().items.reduce((acc, item) => acc + item.quantity, 1),
          };
        });
      },

      removeFromCart: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
          count: get().items.reduce(
            (acc, item) => (item.id !== id ? acc + item.quantity : acc),
            0
          ),
        }));
      },

      incrementQuantity: (id: string) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          count: get().items.reduce(
            (acc, item) =>
              acc + (item.id === id ? item.quantity + 1 : item.quantity),
            0
          ),
        }));
      },

      decrementQuantity: (id: string) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          count: get().items.reduce(
            (acc, item) =>
              acc +
              (item.id === id && item.quantity > 1
                ? item.quantity - 1
                : item.quantity),
            0
          ),
        }));
      },

      clearCart: () => {
        set({ items: [], count: 0 });
      },
    }),
    {
      name: "cart-store",
    }
  )
);
