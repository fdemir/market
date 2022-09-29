import { SortingTypes } from "~/types";

export const filterFields = [
  {
    label: "Price low to high",
    value: SortingTypes.PriceLowToHigh,
  },
  {
    label: "Price high to low",
    value: SortingTypes.PriceHighToLow,
  },
  {
    label: "New to old",
    value: SortingTypes.CreatedNewest,
  },
  {
    label: "Old to new",
    value: SortingTypes.CreatedNewest,
  },
];
