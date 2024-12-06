// import { create } from "zustand";
// import CartStore from "../components/Types/CartStore.d";
// import { Products } from "../components/Types/products.d";
// import { persist } from "zustand/middleware";

// export const useCartStore = create(
//   persist<CartStore>(
//     (set) => ({
//       items: [],
//       count: 0,

//       addToCart: (product: Products) => {
//         set((state) => {
//           const existingProduct = state.items.some(
//             (item) => item.id === product.id
//           );

//           if (existingProduct) {
//             return state;
//           }

//           return {
//             items: [...state.items, product],
//             count: state.count + 1,
//           };
//         });
//       },

//       removeFromCart: (productId: string) =>
//         set((state) => ({
//           items: state.items.filter((item) => item.id !== productId),
//           count: state.count > 0 ? state.count - 1 : 0,
//         })),

//       clearCart: () => {
//         set({ items: [], count: 0 });
//       },
//     }),
//     {
//       name: "cart-store",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Products } from "../components/Types/products.d";

interface CartItem extends Products {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  count: number;
  addToCart: (product: Products) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      count: 0,

      // Add product to the cart
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
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        });
      },

      // Remove product from the cart
      removeFromCart: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      // Increment product quantity
      incrementQuantity: (id: string) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },

      // Decrement product quantity
      decrementQuantity: (id: string) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }));
      },

      // Clear the cart
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-store",
    }
  )
);
