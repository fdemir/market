import {
  nextPage,
  prevPage,
  selectPageCount,
} from "~/app/features/pagination/pagination-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import { ReactComponent as LeftArrowIcon } from "~/assets/arrow.svg";

import styled from "styled-components";

const ControlButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondaryDarken};
  cursor: pointer;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 7px;

  &:hover,
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
`;

const PageList = styled.div`
  display: flex;
  gap: 4px;
`;

const PageItem = styled.button`
  border: 0;
  background-color: transparent;
  width: 32px;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.secondaryDarken};

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

const Pagination = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <ControlButton onClick={() => dispatch(prevPage())}>
        <Arrow prev={true} />
        <span>Prev</span>
      </ControlButton>
      <PageList>
        <PageItem key={1}>{1}</PageItem>
      </PageList>
      <ControlButton onClick={() => dispatch(nextPage())}>
        <span>Next</span>
        <Arrow />
      </ControlButton>
    </Wrapper>
  );
};

export default Pagination;
