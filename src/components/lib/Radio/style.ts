import styled from "styled-components";
import { ReactComponent as Checkmark } from "~/assets/checkmark.svg";

const CheckmarkIcon = styled(Checkmark)`
  transition: all 0.2s ease-in-out;
  opacity: 0;
`;

const StyledRadioCircle = styled.div`
  width: 22px;
  height: 22px;
  border: 2px solid ${({ theme }) => theme.colors.februraryFrost};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease-in-out;
`;

const StyledRadioWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:focus {
    outline: none;

    ${StyledRadioCircle} {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const StyledRadio = styled.input`
  &:checked ~ ${StyledRadioCircle} ${CheckmarkIcon} {
    opacity: 1;
  }

  &:checked ~ ${StyledRadioCircle} {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const RadioLabel = styled.span`
  user-select: none;
`;

export {
  StyledRadioWrapper,
  StyledRadio,
  StyledRadioCircle,
  CheckmarkIcon,
  RadioLabel,
};
