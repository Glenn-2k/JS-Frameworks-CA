import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/apiUrl";
import useApi from "../../hooks/useApi";
import { Products } from "../Types/products.d";
import { useCartStore } from "../../Store/cartStore";
import ProductRating from "../ProductRating";
import { FaShoppingCart } from "react-icons/fa";

function SpecificProduct() {
  const { id } = useParams<{ id: string }>();

  const { addToCart } = useCartStore();

  const {
    data: products,
    isLoading,
    isError,
  } = useApi<Products>(`${BASE_URL}/${id}`);

  if (!id) return <p>Product ID is missing!</p>;
  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Failed to load product. Please try again later.</p>;
  if (!products) return <p>Product data is unavailable!</p>;

  return (
    <div className="container mx-auto p-8">
      {/* Grid layout for image and details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-xl p-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={products.image.url}
            alt={products.title}
            className="w-full max-w-md h-auto object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{products.title}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-2">
            Price: {products.discountedPrice.toFixed(2)} NOK
          </p>
          {products.price > products.discountedPrice && (
            <p className="text-sm text-red-500 mb-4">
              Save {products.price - products.discountedPrice} NOK!
            </p>
          )}
          <p className="text-gray-600 mb-4">{products.description}</p>
          <p className="text-gray-700">
            <strong>Rating:</strong> <ProductRating rating={products.rating} />
          </p>
          <p className="text-gray-700 mt-4">
            <strong>Tags:</strong>{" "}
            {products.tags?.length > 0 ? products.tags.join(", ") : "N/A"}
          </p>
          <button
            onClick={() => addToCart(products)}
            className="hidden xl:block mt-4  bg-green-900 text-white px-4 py-2 rounded hover:bg-green-950 transition-all ease-in duration-150"
          >
            Add to cart
          </button>
          <button
            onClick={() => addToCart(products)}
            className="xl:hidden mt-4  bg-green-900 text-white px-8 py-2 rounded hover:bg-green-950 transition-all ease-in duration-150"
          >
            <FaShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecificProduct;
