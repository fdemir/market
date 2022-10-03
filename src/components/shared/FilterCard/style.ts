import styled from "styled-components";
import Text from "~/components/lib/Text";

const StyledFilterBox = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const StyledTitle = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  display: block;
`;

export { StyledFilterBox, StyledTitle };
