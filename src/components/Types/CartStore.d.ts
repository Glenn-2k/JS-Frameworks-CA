import { Products } from "./products.d";

interface CartStore {
  items: Products[];
  count: number;
  addToCart: (Products: Products) => void;
  removeFromCart: (ProductId: string) => void;
  clearCart: () => void;
}

export default CartStore;
