import styled from "styled-components";
import Container from "~/components/lib/Container";

const StyledMain = styled.main`
  padding: 40.88px 0;
  display: grid;
  grid-template-columns: 296px 608px 296px;
  gap: 16px;
  place-content: center;

  @media (max-width: 1235px) {
    grid-template-columns: 296px 1fr;
  }

  @media (max-width: 768px) {
    padding-top: 16px;
    grid-template-columns: 100%;
    gap: 0;
  }
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
