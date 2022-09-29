import Input from "~/components/lib/Input";
import FilterBox from "~/components/shared/FilterBox";
import { filterFields } from "~/utils/constants";

const Filter = () => {
  return (
    <div>
      <FilterBox title="Sorting">
        {filterFields.map((field) => (
          <div>
            <input
              type="radio"
              name="sorting"
              value={field.value}
              key={field.value}
            />
            <span>{field.label}</span>
          </div>
        ))}
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
