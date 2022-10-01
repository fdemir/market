import { useMemo } from "react";
import { selectPagination } from "~/app/features/pagination/pagination-slice";
import { selectTags } from "~/app/features/tag/tag-slice";
import { selectProductResult } from "~/app/services/product";
import { useTypedSelector } from "~/app/store";
import { Product } from "~/types";

const pagination = (page: number, limit: number) => {
  return (products: Product[]) => {
    return products.slice((page - 1) * limit, page * limit);
  };
};

/**
 * A hook that returns the list of products (with filter, and sorting, pagination).
 */
function useProductList() {
  const result = useTypedSelector(selectProductResult);
  const { sortBy, sortDirection } = useTypedSelector((state) => state.sorting);
  const { page, limit } = useTypedSelector(selectPagination);
  const { itemType } = useTypedSelector((state) => state.itemType);
  const selectedTags = useTypedSelector(selectTags);

  const filteredProducts = useMemo(() => {
    if (result?.data?.length) {
      let transformedProducts = Array.from(result.data);

      if (sortBy && sortDirection) {
        transformedProducts.sort((a, b) => {
          if (a[sortBy] && b[sortBy]) {
            if (sortDirection === "asc") {
              return a[sortBy] > b[sortBy] ? 1 : -1;
            } else {
              return a[sortBy] < b[sortBy] ? 1 : -1;
            }
          }
          return 1;
        });
      }

      transformedProducts = transformedProducts.filter(
        (product) => product.itemType === itemType
      );

      if (selectedTags.length) {
        transformedProducts = transformedProducts.filter((product) =>
          product.tags.some((tag) => selectedTags.includes(tag))
        );
      }

      return pagination(page, limit)(transformedProducts);
    }
  }, [result.data, sortBy, sortDirection, page, limit, itemType, selectedTags]);

  return { ...result, data: filteredProducts };
}

export { useProductList };
