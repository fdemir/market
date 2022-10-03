import Card from "~/components/lib/Card";
import { StyledFilterBox, StyledTitle } from "./style";

type FilterBoxProps = {
  title: string;
  children?: React.ReactNode;
};

const FilterBox = ({ title, children }: FilterBoxProps) => {
  return (
    <StyledFilterBox>
      <StyledTitle size="sm" color="secondary" fw="medium">
        {title}
      </StyledTitle>
      <Card>{children}</Card>
    </StyledFilterBox>
  );
};

export default FilterBox;
