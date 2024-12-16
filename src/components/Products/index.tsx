import { Products } from "../Types/products.d.tsx";
import { Link } from "react-router-dom";
import { useCartStore } from "../../Store/cartStore.tsx";
import Cart from "../Cart/index.tsx";
import CartIcon from "../CartIcon/index.tsx";

const ProductCard = ({ products }: { products: Products }) => {
  const discount = products.price - products.discountedPrice;

  const { addToCart } = useCartStore();

  return (
    <Link
      to={`/products/${products.id}`}
      className="bg-white shadow-md flex flex-col h-full rounded-lg p-4 relative"
    >
      {discount > 0 && (
        <div className="absolute top-2 right-2 bg-red-400 text-white px-2 py-1 rounded text-xs">
          Save {discount.toFixed(2)} NOK
        </div>
      )}
      <img
        src={products.image.url}
        alt={products.title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-bold">{products.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{products.description}</p>

      <div className="mt-auto">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-emerald-800">
            {products.discountedPrice.toFixed(2)} NOK
          </p>
          <div className="flex mt-2 justify-end ">
            <button
              onClick={() => addToCart(products)}
              className="hidden xl:block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-green-950 transition-all ease-in duration-150 "
            >
              Add to cart
            </button>
            <div
              onClick={() => addToCart(products)}
              className=" xl:hidden bg-emerald-700 text-white px-4 py-2 rounded hover:bg-green-950 transition-all ease-in duration-150 "
            >
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
