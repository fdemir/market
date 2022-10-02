import { useState } from "react";
import styled from "styled-components";
import Modal from "~/components/lib/Modal";
import Brand from "~/components/shared/Brand";
import FilterBox from "~/components/shared/FilterCard";
import FilterColumn from "~/components/shared/FilterColumn";
import Sorting from "~/components/shared/Sorting";
import Tag from "~/components/shared/Tag";
import useMediaQuery from "~/hooks/useMediaQuery";

const FilterButton = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 8px;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.purpleLight};
  color: ${({ theme }) => theme.colors.primary};
`;

const Filter = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
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
