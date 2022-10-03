import { setItemType } from "~/app/features/item-type/item-type-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import { ItemType } from "~/types";
import { TypeButton } from "./style";

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
