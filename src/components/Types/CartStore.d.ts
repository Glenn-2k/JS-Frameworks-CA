import { Products } from "./products.d";
import { create } from "zustand";

interface CartStore {
  items: Products;
  count: number;
  addToCart: (Products: Products) => void;
  removeFromCart: (Products: Products) => void;
  clearCart: () => void;
}

export default CartStore;
