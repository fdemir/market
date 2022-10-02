import { useGetProductsQuery } from "~/app/services/api";

function useProducts() {
  const result = useGetProductsQuery();

  return result;
}

export { useProducts };
