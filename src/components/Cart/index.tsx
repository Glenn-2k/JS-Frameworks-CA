import useCartStore from "../../Store/cartStore";

const Cart = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((products) => (
            <div
              key={products.id}
              className="border p-4 flex justify-between items-center"
            >
              <div>
                <h2>{products.name}</h2>
                <p>
                  {products.price} NOK x {products.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(products.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
