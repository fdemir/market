import {
  nextPage,
  prevPage,
  selectPageCount,
  setPage,
} from "~/app/features/pagination/pagination-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import { ReactComponent as LeftArrowIcon } from "~/assets/arrow.svg";

import styled from "styled-components";
import { useMemo } from "react";
import useMediaQuery from "~/hooks/useMediaQuery";

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

  @media (max-width: 768px) {
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

const Pagination = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const dispatch = useAppDispatch();
  const pageCount = useTypedSelector(selectPageCount);
  const currentPage = useTypedSelector((state) => state.pagination.page);

  const pages = useMemo(() => {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }, [pageCount]);

  return (
    <Wrapper>
      <ControlButton
        onClick={() => dispatch(prevPage())}
        disabled={currentPage == 1}
      >
        <Arrow prev={true} />
        <span>Prev</span>
      </ControlButton>
      <PageList>
        {pages.map((page, idx) => {
          if ([pages[0]].includes(page)) {
            return (
              <PageItem
                onClick={() => dispatch(setPage(page))}
                active={currentPage == page}
              >
                {page}
              </PageItem>
            );
          }
          if (currentPage > 4 && idx == 2 && !isMobile) {
            return <PageItem>...</PageItem>;
          }

          if (currentPage - 1 <= page && page <= currentPage + 1) {
            return (
              <PageItem
                onClick={() => dispatch(setPage(page))}
                active={currentPage == page}
              >
                {page}
              </PageItem>
            );
          }

          if (page > currentPage + 2 && idx == currentPage + 2) {
            return <PageItem>...</PageItem>;
          }

          if (
            [pages[pages.length - 1], pages[pages.length - 2]].includes(page)
          ) {
            return (
              <PageItem
                onClick={() => dispatch(setPage(page))}
                active={currentPage == page}
              >
                {page}
              </PageItem>
            );
          }

          return null;
        })}
      </PageList>
      <ControlButton
        onClick={() => dispatch(nextPage())}
        disabled={currentPage === pageCount}
      >
        <span>Next</span>
        <Arrow />
      </ControlButton>
    </Wrapper>
  );
};

export default Pagination;
