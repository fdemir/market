import Container from "~/components/lib/Container";
import { StyledMain } from "./style";

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
