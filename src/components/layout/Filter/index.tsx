import { FilterButton } from "./style";
import { useState } from "react";
import Modal from "~/components/lib/Modal";
import FilterColumn from "~/components/shared/FilterColumn";
import useMediaQuery from "~/hooks/useMediaQuery";
import { theme } from "~/theme/variables";

const Filter = () => {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const [show, setShow] = useState(false);

  return isMobile ? (
    <div>
      <FilterButton onClick={() => setShow(true)}>Filters</FilterButton>
      <Modal title="Filters" show={show} onClose={() => setShow(false)}>
        <FilterColumn />
      </Modal>
    </div>
  ) : (
    <FilterColumn />
  );
};

export default Filter;
