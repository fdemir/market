import styled from "styled-components";

const StyledContainer = styled.div`
  width: 1232px;
  margin: 0 auto;
  padding: 0 16px;
`;

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
