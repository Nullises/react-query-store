import { ProductList } from "..";
import useProducts from "../hooks/useProducts";

export const WomensPage = () => {
  const { isLoading, products } = useProducts({
    filterKey: "women's clothing",
  });

  {
    isLoading && <div>Loading...</div>;
  }
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      <ProductList products={products!} />
    </div>
  );
};
