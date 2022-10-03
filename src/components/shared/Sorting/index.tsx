import React from "react";
import styled from "styled-components";
import {
  selectSorting,
  setSelectedSortKey,
  setSortBy,
  setSortDirection,
} from "~/app/features/sorting/sorting-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import Radio from "~/components/lib/Radio";
import RadioGroup from "~/components/lib/RadioGroup";
import { filterFields } from "~/utils/constants";

const StyledSortingItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Sorting = () => {
  const dispatch = useAppDispatch();
  const { selectedSortKey } = useTypedSelector(selectSorting);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setSelectedSortKey(value));

    const field = filterFields.find((item) => item.key === value);
    if (!field) return;

    dispatch(setSortBy(field.name));
    dispatch(setSortDirection(field.direction));
  };

  return (
    <div>
      <RadioGroup onChange={handleOnChange} value={selectedSortKey}>
        {filterFields.map((field) => (
          <StyledSortingItem key={field.key}>
            <Radio name={field.key} value={field.key} label={field.label} />
          </StyledSortingItem>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Sorting;
