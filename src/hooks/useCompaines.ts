import { useMemo } from "react";
import { useGetCompaniesQuery } from "~/app/services/company";
import { useProducts } from "./useProducts";

function useCompanies() {
  const { data: companies } = useGetCompaniesQuery();
  const { data: products } = useProducts();

  const companiesWithProductCounts = useMemo(() => {
    if (!companies || !products) {
      return [];
    }

    return companies.map((company) => ({
      ...company,
      productCount: products.filter(
        (product) => product.manufacturer === company.slug
      ).length,
    }));
  }, [companies, products]);

  return {
    companiesWithProductCounts,
  };
}

export default useCompanies;
