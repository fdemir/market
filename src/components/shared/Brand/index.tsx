import { useMemo } from "react";
import { selectBrands, toggleBrand } from "~/app/features/brand/brand-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import MultiSelect from "~/components/lib/MultiSelect";
import useCompanies from "~/hooks/useCompaines";

const Brands = () => {
  const dispatch = useAppDispatch();
  const { companiesWithProductCounts: companies } = useCompanies();
  const selectedBrands = useTypedSelector(selectBrands);

  const items = useMemo(() => {
    if (!companies) return [];
    return companies.map((company) => ({
      label: company.name,
      value: company.slug,
      id: company.slug,
      count: company.productCount,
      checked: selectedBrands.includes(company.slug),
    }));
  }, [companies, selectedBrands]);

  return (
    <div>
      <MultiSelect
        placeholder="Search a brand"
        items={items}
        onCheck={(id) => dispatch(toggleBrand(id))}
      />
    </div>
  );
};

export default Brands;
