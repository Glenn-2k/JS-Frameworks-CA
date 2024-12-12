import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../../Store/cartStore";

function CartIcon() {
  const { count } = useCartStore();

  return (
    <div className="relative text-2xl cursor-pointer hover:animate-wiggle-more animate-twice animate-ease-out">
      <span className="sr-only">Cart</span>
      <FaShoppingCart />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-900 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
