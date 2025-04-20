import { type Product, productsApi } from "..";

interface GetProductsOption {
  filterKey?: string;
  id?: number;
}

export const getProducts = async ({ filterKey }: GetProductsOption) => {
  const filterUrl = filterKey ? `?category=${filterKey}` : "";

  const { data } = await productsApi.get<Product[]>(`/products${filterUrl}`);
  return data;
};

export const getProduct = async ({ filterKey, id }: GetProductsOption) => {
  const filterUrl = filterKey ? `?category=${filterKey}` : "";

  const { data } = await productsApi.get<Product[]>(
    `/products${filterUrl}/${id}`
  );
  return data;
};
