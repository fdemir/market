import { createSelector } from "@reduxjs/toolkit";
import { Product } from "~/types";
import { selectBrands } from "../features/brand/brand-slice";
import { selectItemType } from "../features/item-type/item-type-slice";
import { selectSorting } from "../features/sorting/sorting-slice";
import { selectTags } from "../features/tag/tag-slice";
import { api } from "./api";

export const product = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products`,
    }),
  }),
});

// FIXME: move it to a separate file
export const selectProductResult = product.endpoints.getProducts.select();

export const selectFilteredProducts = createSelector(
  [
    selectProductResult,
    selectSorting,
    selectItemType,
    selectTags,
    selectBrands,
  ],
  (products, sorting, itemType, selectedTags, selectedBrands) => {
    if (!products.isSuccess) return products;

    let result: Product[] = Array.from(products.data);

    result = result.filter((product) => {
      let conditionResults = [];

      if (itemType) {
        conditionResults.push(product.itemType === itemType);
      }

      if (selectedTags.length > 0) {
        conditionResults.push(
          product.tags.some((tag) => selectedTags.includes(tag))
        );
      }

      if (selectedBrands.length > 0) {
        conditionResults.push(selectedBrands.includes(product.manufacturer));
      }

      return conditionResults.every(Boolean);
    });

    if (sorting.sortBy && sorting.sortDirection) {
      result.sort((a, b) => {
        if (sorting.sortBy) {
          if (sorting.sortDirection === "asc") {
            return a[sorting.sortBy] > b[sorting.sortBy] ? 1 : -1;
          } else {
            return a[sorting.sortBy] < b[sorting.sortBy] ? 1 : -1;
          }
        }
        return 1;
      });
    }

    return { ...products, data: result };
  }
);

export const { useGetProductsQuery } = product;
