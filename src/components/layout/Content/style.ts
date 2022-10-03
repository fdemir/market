import styled from "styled-components";
import Card from "~/components/lib/Card";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  row-gap: 20px;
`;

const StyledProductListCard = styled(Card)`
  padding: 20px !important;
`;

export { StyledContent, StyledProductListCard };
