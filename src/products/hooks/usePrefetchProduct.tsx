import { useQueryClient } from "@tanstack/react-query";
import { productActions } from "..";

const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchProduct = async (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ["product", id],
      queryFn: () =>
        productActions.getProduct({
          id,
        }),
    });
  };

  return prefetchProduct;
};

export default usePrefetchProduct;
