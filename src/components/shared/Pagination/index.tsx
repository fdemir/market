import {
  nextPage,
  prevPage,
  selectPageCount,
  setPage,
} from "~/app/features/pagination/pagination-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";

import { useMemo } from "react";
import useMediaQuery from "~/hooks/useMediaQuery";
import { theme } from "~/theme/variables";
import { Arrow, ControlButton, PageItem, PageList, Wrapper } from "./style";

const Pagination = () => {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
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
        disabled={currentPage === 1}
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
                active={currentPage === page}
              >
                {page}
              </PageItem>
            );
          }
          if (currentPage > 4 && idx === 2 && !isMobile) {
            return <PageItem>...</PageItem>;
          }

          if (currentPage - 1 <= page && page <= currentPage + 1) {
            return (
              <PageItem
                onClick={() => dispatch(setPage(page))}
                active={currentPage === page}
              >
                {page}
              </PageItem>
            );
          }

          if (page > currentPage + 2 && idx === currentPage + 2) {
            return <PageItem>...</PageItem>;
          }

          if (
            [pages[pages.length - 1], pages[pages.length - 2]].includes(page)
          ) {
            return (
              <PageItem
                onClick={() => dispatch(setPage(page))}
                active={currentPage === page}
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
