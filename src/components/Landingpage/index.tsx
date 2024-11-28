import { BASE_URL } from "../../api/apiUrl";
import useApi from "../../hooks/useApi";
import ProductCard from "../Products";
import { Products } from "../Types/products.d";
import { useState } from "react";

const Landingpage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useApi<Products[]>(`${BASE_URL}`);

  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products. Please try again later.</p>;

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on input
        placeholder="Search products..."
        className="border p-2 rounded mb-4 w-full"
      />
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
