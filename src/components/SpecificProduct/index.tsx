import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/apiUrl";
import useApi from "../../hooks/useApi";
import { Products } from "../Types/products.d";

function SpecificProduct() {
  const { id } = useParams();

  const {
    data: products,
    isLoading,
    isError,
  } = useApi<Products>(`${BASE_URL}/${id}`);

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Failed to load product. Please try again later.</p>;

  console.log("data from SpecificProduct", products);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{products?.title}</h1>
      <img
        src={products?.image.url}
        alt={products?.title}
        className="w-full h-48 object-cover rounded"
      />
      <p className="text-lg font-semibold mt-2">
        Price: {products?.discountedPrice} NOK
      </p>
      <p className="text-sm text-gray-600">{products?.description}</p>
      <p className="text-sm text-gray-600">
        Category: {products?.discountedPrice}
      </p>
      <p className="text-sm text-gray-600">Rating: {products?.rating}</p>
      <p className="text-sm text-gray-600">Stock: {products?.title}</p>
    </div>
  );
}

export default SpecificProduct;
