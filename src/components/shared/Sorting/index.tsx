import React, { useState } from "react";
import styled from "styled-components";
import {
  setSortBy,
  setSortDirection,
} from "~/app/features/sorting/sorting-slice";
import { useAppDispatch } from "~/app/store";
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
  const [value, setValue] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);

    const field = filterFields.find((item) => item.key === value);
    if (!field) return;

    dispatch(setSortBy(field.name));
    dispatch(setSortDirection(field.direction));
  };

  return (
    <div>
      <RadioGroup onChange={handleOnChange} value={value}>
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
