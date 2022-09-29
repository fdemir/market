import Input from "~/components/lib/Input";
import Radio from "~/components/lib/Radio";
import FilterBox from "~/components/shared/FilterBox";

const Filter = () => {
  return (
    <div>
      <FilterBox title="Sorting">
        <Radio />
      </FilterBox>
      <FilterBox title="Brands">
        <Input placeholder="Search brand" />
      </FilterBox>
      <FilterBox title="Tags">
        <Input placeholder="Search a tag" />
      </FilterBox>
    </div>
  );
};

export default Filter;
