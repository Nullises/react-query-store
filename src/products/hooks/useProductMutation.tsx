import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productActions } from "..";
import { ProductsPayload } from "../interfaces/product";

const useProductMutation = () => {
  const queryClient = useQueryClient();
  const productMutation = useMutation({
    mutationFn: (payload: ProductsPayload) =>
      productActions.addProduct(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [
          "products",
          {
            "filterKey": data.category,
          },
        ],
      });
    },
  });

  return productMutation;
};

export default useProductMutation;
