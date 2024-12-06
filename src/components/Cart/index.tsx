// import { useCartStore } from "../../Store/cartStore";
// import { useState } from "react";
// import { Products } from "../Types/products.d";

// export const Cart = ({ products }: { products: Products }) => {
//   const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
//   const { removeFromCart } = useCartStore();

//   const incrementQuantity = (id: string) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: (prev[id] || 1) + 1,
//     }));
//   };

//   const decrementQuantity = (id: string) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] > 1 ? prev[id] - 1 : 1,
//     }));
//   };

//   return (
//     <div className="flex flex-col w-1/3 bg-white shadow-md p-4 rounded-lg">
//       <h2 className="text-lg font-bold">Cart</h2>
//       <div className="flex flex-col mt-4 space-y-4">
//         {products.map((product: Products) => (
//           <div key={products.id} className="flex justify-between">
//             <p>{products.title}</p>
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => decrementQuantity(products.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 -
//               </button>
//               <p>{quantities[product.id] || 1}</p>
//               <button
//                 onClick={() => incrementQuantity(product.id)}
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-between mt-4">
//         <p>Total</p>
//         <p>100 NOK</p>
//       </div>
//       <button
//         onClick={() => removeFromCart("1")}
//         className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//       >
//         Clear Cart
//       </button>
//     </div>
//   );
// };

import { useCartStore } from "../../Store/cartStore";

const Cart = () => {
  const {
    items,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
  } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center p-4 border"
              >
                <div>
                  <h2>{product.title}</h2>
                  <p>
                    {product.discountedPrice.toFixed(2)} NOK x{" "}
                    {product.quantity}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <p>Total:</p>
            <p>{total.toFixed(2)} NOK</p>
          </div>
          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
