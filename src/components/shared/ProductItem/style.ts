import styled from "styled-components";
import Text from "~/components/lib/Text";

const StyledProductItem = styled.div`
  width: 100%;
  min-height: 225px;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing[1]};
`;

const StyledImage = styled.div`
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: 1px solid ${({ theme }) => theme.colors.purpleLightAlt};
  width: 124px;
  height: 124px;
  display: flex;
  align-self: center;

  img {
    width: 100%;
    height: 100%;
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

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.primaryDarken};
  }
`;

const Name = styled(Text)`
  min-height: 40px;
  display: block;
`;

export { StyledProductItem, StyledImage, AddButton, Name };
