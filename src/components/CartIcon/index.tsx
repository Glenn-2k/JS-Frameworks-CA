import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../../Store/cartStore";

function CartIcon() {
  const { count } = useCartStore();

  return (
    <div className="relative text-cream text-2xl cursor-pointer">
      <span className="sr-only">Cart</span>
      <FaShoppingCart />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-rosewood text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
