import { useQuery } from "@tanstack/react-query";
import { productActions } from "..";

interface Options {
  id: number;
  filterKey?: string;
}

const useProduct = ({ filterKey, id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: product,
    isFetching,
  } = useQuery({
    queryKey: ["product", { filterKey, id }],
    queryFn: () => productActions.getProduct({ filterKey, id }),
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
    isError,
    isFetching,
    error,
    product,
  };
};

export default useProduct;
