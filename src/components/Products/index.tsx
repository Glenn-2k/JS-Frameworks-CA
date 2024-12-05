import { Products } from "../Types/products.d.tsx";
import { Link } from "react-router-dom";
import useCartStore from "../../Store/CartStore.tsx";

const ProductCard = ({ products }: { products: Products }) => {
  const discount = products.price - products.discountedPrice;

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white shadow-md flex flex-col h-full rounded-lg p-4">
      <img
        src={products.image.url}
        alt={products.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{products.title}</h2>
      <p className="text-sm text-gray-600">{products.description}</p>
      <p className="text-lg font-semibold mt-2">
        Price: {products.discountedPrice.toFixed(2)} NOK
      </p>
      {discount > 0 && (
        <p className="text-sm text-red-500">Save {discount.toFixed(2)} NOK!</p>
      )}
      <div className="flex space-x-4 mt-auto justify-center">
        <Link
          to={`/products/${products.id}`}
          className="mt-4 w-1/2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 text-center"
        >
          View Product
        </Link>
        <button
          onClick={() =>
            addToCart({
              id: products.id,
              name: products.title,
              price: products.discountedPrice,
              quantity: 1,
            })
          }
          className="mt-4 w-1/2 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-950"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
