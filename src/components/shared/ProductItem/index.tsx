import Text from "~/components/lib/Text";
import styled from "styled-components";

const StyledProductItem = styled.div`
  width: 100%;
  min-height: 225px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing[1]};
`;

// FIXME: placeholder
const StyledImage = styled.div`
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: 1px solid ${({ theme }) => theme.colors.purpleLightAlt};
  width: 124px;
  height: 124px;

  & > div {
    width: 100%;
    height: 100%;
    background: lightgray;
  }
`;

const AddButton = styled.button`
  width: 100%;
  height: 22px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: none;
  cursor: pointer;
`;

const Name = styled(Text)`
  min-height: 40px;
  display: block;
`;

const ProductItem = () => {
  return (
    <StyledProductItem>
      <StyledImage>
        <div></div>
      </StyledImage>
      <Text color="primary" fw="semiBold">
        ₺ 14,99
      </Text>
      <Name color="dark" fw="semiBold">
        Gorgeous Office Mug{" "}
      </Name>
      <AddButton>Add</AddButton>
    </StyledProductItem>
  );
};

export default ProductItem;
