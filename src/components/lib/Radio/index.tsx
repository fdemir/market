import styled from "styled-components";

const StyledRadio = styled.input.attrs({
  type: "radio",
})`
  color: red;
`;

const Radio = () => {
  return <StyledRadio />;
};

export default Radio;
