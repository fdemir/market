import styled from "styled-components";
import { setItemType } from "~/app/features/item-type/item-type-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import { ItemType } from "~/types";

const TypeButton = styled.button<{ active: boolean }>`
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.purpleLight};
  padding: 6px 16px;
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing[1]};
  }
`;

const SelectItemType = () => {
  const selectedItemType = useTypedSelector((state) => state.itemType.itemType);
  const dispatch = useAppDispatch();

  return (
    <div>
      <TypeButton
        onClick={() => dispatch(setItemType(ItemType.mug))}
        active={selectedItemType === ItemType.mug}
      >
        mug
      </TypeButton>
      <TypeButton
        onClick={() => dispatch(setItemType(ItemType.shirt))}
        active={selectedItemType === ItemType.shirt}
      >
        shirt
      </TypeButton>
    </div>
  );
};

export default SelectItemType;
