import { BASE_URL } from "../../api/apiUrl";
import useApi from "../../hooks/useApi";
import ProductCard from "../Products";
import { Products } from "../Types/products.d";

const Landingpage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useApi<Products[]>(`${BASE_URL}`);

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products. Please try again later.</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
      </div>
    </div>
  );
};

export default Landingpage;
