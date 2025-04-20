import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

export const ProductById = () => {
  const { id } = useParams();
  console.log("id");

  const { isLoading, product } = useProduct({
    id: Number(id),
  });

  console.log("product", product);

  {
    isLoading && <div>Loading...</div>;
  }

  return (
    <div className="flex-col">
      {/* <h1 className="text-2xl font-bold">Todos los productos</h1>

      <ProductList products={products!} /> */}
    </div>
  );
};
