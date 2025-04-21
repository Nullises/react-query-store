import { type Product, productsApi } from "..";
import { ProductsPayload } from "../interfaces/product";

interface GetProductsOption {
  filterKey?: string;
  id?: number;
}

export const getProducts = async ({
  filterKey,
}: GetProductsOption): Promise<Product[]> => {
  const filterUrl = filterKey ? `?category=${filterKey}` : "";

  const { data } = await productsApi.get<Product[]>(`/products${filterUrl}`);
  return data;
};

export const getProduct = async ({
  filterKey,
  id,
}: GetProductsOption): Promise<Product> => {
  const filterUrl = filterKey ? `?category=${filterKey}` : "";

  const { data } = await productsApi.get<Product>(
    `/products${filterUrl}/${id}`
  );
  return data;
};

export const addProduct = async (
  payload: ProductsPayload
): Promise<ProductsPayload> => {
  const { data } = await productsApi.post<ProductsPayload>(
    "/products",
    payload
  );
  return data;
};
