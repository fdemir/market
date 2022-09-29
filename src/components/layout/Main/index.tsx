import styled from "styled-components";
import Container from "~/components/lib/Container";

const StyledMain = styled.main`
  padding: 40.88px 0;
  display: grid;
  grid-template-columns: 296px 1fr 296px;
  gap: ${({ theme }) => theme.spacing[3]};
`;

type MainProps = {
  children?: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Container>
      <StyledMain>{children}</StyledMain>
    </Container>
  );
};

export default Main;
