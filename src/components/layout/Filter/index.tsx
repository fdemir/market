import Brand from "~/components/shared/Brand";
import FilterBox from "~/components/shared/FilterBox";
import Sorting from "~/components/shared/Sorting";
import Tag from "~/components/shared/Tag";

const Filter = () => {
  return (
    <div>
      <FilterBox title="Sorting">
        <Sorting />
      </FilterBox>
      <FilterBox title="Brands">
        <Brand />
      </FilterBox>
      <FilterBox title="Tags">
        <Tag />
      </FilterBox>
    </div>
  );
};

export default Filter;
