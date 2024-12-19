import { Products } from "../Types/products.d.tsx";
import { useCartStore } from "../../Store/cartStore.tsx";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ products }: { products: Products }) => {
  const discount = products.price - products.discountedPrice;
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);

  const handleCardClick = () => {
    navigate(`/products/${products.id}`);
  };

  const { addToCart } = useCartStore();
  const handleAddToCart = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (!isAdded) {
      addToCart(products);
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 1000);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white shadow-md flex flex-col h-full rounded-lg p-4 relative cursor-pointer hover:shadow-xl transition-all ease-in duration-150"
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
              onClick={handleAddToCart}
              className="hidden xl:block bg-emerald-700 text-white px-4 py-2 rounded-lg z-10 mr-4 hover:bg-green-950 transition-all ease-in duration-150 "
            >
              {" "}
              {isAdded ? (
                <>
                  <FaCheck />
                </>
              ) : (
                <>Add to cart</>
              )}
            </button>
            <div
              onClick={handleAddToCart}
              className=" xl:hidden bg-emerald-700 text-white px-4 py-2 rounded-lg z-10 hover:bg-green-950 transition-all ease-in duration-150 "
            >
              {" "}
              {isAdded ? (
                <>
                  <FaCheck />
                </>
              ) : (
                <>
                  <FaShoppingCart className="text-xl" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
