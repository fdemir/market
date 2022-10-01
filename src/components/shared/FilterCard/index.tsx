import styled from "styled-components";
import Card from "~/components/lib/Card";
import Text from "~/components/lib/Text";

type FilterBoxProps = {
  title: string;
  children?: React.ReactNode;
};

const StyledFilterBox = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const StyledTitle = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  display: block;
`;

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
