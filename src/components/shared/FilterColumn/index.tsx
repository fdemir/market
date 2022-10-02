import Brand from "../Brand";
import FilterBox from "../FilterCard";
import Sorting from "../Sorting";
import Tag from "../Tag";

const FilterColumn = () => {
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

export default FilterColumn;
