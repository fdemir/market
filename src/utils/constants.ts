import { Product, SortingDirection } from "~/types";

type FilterField<T> = {
  name: keyof T;
  label: string;
  key: string;
  direction: SortingDirection;
};

export const filterFields: FilterField<Product>[] = [
  {
    key: "price-asc",
    label: "Price low to high",
    name: "price",
    direction: "asc",
  },
  {
    key: "price-desc",
    label: "Price high to low",
    name: "price",
    direction: "desc",
  },
  {
    key: "added-desc",
    label: "New to old",
    name: "added",
    direction: "desc",
  },
  {
    key: "added-asc",
    label: "Old to new",
    name: "added",
    direction: "asc",
  },
];

export const PAGE_LIMIT = 16;
