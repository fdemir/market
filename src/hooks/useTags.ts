import { useMemo } from "react";
import { selectProductResult } from "~/app/services/api";
import { useTypedSelector } from "~/app/store";

type TagMap = Record<string, number>;

function useTags() {
  const { data: products } = useTypedSelector(selectProductResult);

  const tags: TagMap = useMemo(() => {
    if (!products) return {};

    const result = products.reduce((acc, product) => {
      product.tags.forEach((tag) => {
        if (acc[tag]) {
          acc[tag]++;
        } else {
          acc[tag] = 1;
        }
      });
      return acc;
    }, {} as TagMap);

    return result;
  }, [products]);

  return {
    tags,
  };
}

export default useTags;
