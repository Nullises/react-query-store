import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { ProductCard } from "..";

export const ProductById = () => {
  const { id } = useParams();

  const { isLoading, product } = useProduct({
    id: Number(id),
  });

  {
    isLoading && <div>Loading...</div>;
  }

  return (
    <div className="flex-col">
      {product && <ProductCard product={product} showDetailed={true} />}
    </div>
  );
};
