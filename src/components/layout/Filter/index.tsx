import styled from "styled-components";
import Brand from "~/components/shared/Brand";
import FilterBox from "~/components/shared/FilterCard";
import Sorting from "~/components/shared/Sorting";
import Tag from "~/components/shared/Tag";

const StyledFilter = styled.aside`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Filter = () => {
  return (
    <StyledFilter>
      <FilterBox title="Sorting">
        <Sorting />
      </FilterBox>
      <FilterBox title="Brands">
        <Brand />
      </FilterBox>
      <FilterBox title="Tags">
        <Tag />
      </FilterBox>
    </StyledFilter>
  );
};

export default Filter;
