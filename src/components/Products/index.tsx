import { Products } from "../Types/products.d.tsx";

const ProductCard = ({ products }: { products: Products }) => {
  const discount = products.price - products.discountedPrice;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={products.image.url}
        alt={products.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{products.title}</h2>
      <p className="text-sm text-gray-600">{products.description}</p>
      <p className="text-lg font-semibold mt-2">
        Price: {products.discountedPrice} NOK
      </p>
      {discount > 0 && (
        <p className="text-sm text-red-500">
          Save {discount} NOK! (Original: {products.price} NOK)
        </p>
      )}
      <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
        View Product
      </button>
    </div>
  );
};

export default ProductCard;
