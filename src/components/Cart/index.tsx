import { useCartStore } from "../../Store/cartStore";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  const {
    items,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
  } = useCartStore();

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Your cart is empty! Add items before proceeding to checkout.");
      return;
    }

    navigate("/checkout");
  };

  const total = items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-lg">Your cart is empty.</p>
            <a href="/" className="text-blue-500 hover:underline mt-4 block">
              Start shopping now!
            </a>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {product.discountedPrice.toFixed(2)} NOK x{" "}
                      {product.quantity}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => decrementQuantity(product.id)}
                      className="bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-800"
                    >
                      -
                    </button>
                    <button
                      onClick={() => incrementQuantity(product.id)}
                      className="bg-emerald-700 text-white px-3 py-1 rounded hover:bg-emerald-900"
                    >
                      +
                    </button>
                    <button onClick={() => removeFromCart(product.id)}>
                      <TrashIcon className="size-5 text-gray-900" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-200 rounded-md shadow-md flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>{total.toFixed(2)} NOK</span>
            </div>

            <div className="flex justify-between mt-6 space-x-4">
              <button
                onClick={clearCart}
                className="w-1/2 bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-800"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="w-1/2 bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-900"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
