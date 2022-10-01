import styled from "styled-components";

const StyledContainer = styled.div`
  width: 1235px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 1235px) {
    width: 100%;
  }
`;

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
