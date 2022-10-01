import styled from "styled-components";
import Basket from "~/components/shared/Basket";

const StyledSidebar = styled.aside`
  @media (max-width: 1235px) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Basket />
    </StyledSidebar>
  );
};

export default Sidebar;
