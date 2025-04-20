import { useQuery } from "@tanstack/react-query";
import { productActions } from "..";

interface Options {
  filterKey?: string;
}

const useProducts = ({ filterKey }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: products,
    isFetching,
  } = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => productActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
    isError,
    isFetching,
    error,
    products,
  };
};

export default useProducts;
