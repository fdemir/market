import { useGetProductsQuery } from "~/app/services/product";

function useProducts() {
  const result = useGetProductsQuery();

  return result;
}

export { useProducts };
