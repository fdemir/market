import styled from "styled-components";
import { ReactComponent as LeftArrowIcon } from "~/assets/arrow.svg";

const ControlButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondaryDarken};
  cursor: pointer;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 7px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover,
  &focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 2px;
  }
`;

const PageList = styled.div`
  display: flex;
  gap: 4px;
`;

const PageItem = styled.button<{ active?: boolean }>`
  border: 0;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : "transparent"};
  width: 32px;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.secondaryDarken};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Arrow = styled(LeftArrowIcon)<{
  prev?: boolean;
  active?: boolean;
}>`
  width: 14px;
  height: 14px;
  ${({ prev }) => prev && `transform: rotate(180deg)`};
`;

export { ControlButton, Wrapper, PageList, PageItem, Arrow };
