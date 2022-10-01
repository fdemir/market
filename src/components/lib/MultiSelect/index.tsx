import { useRef, useState } from "react";
import styled from "styled-components";
import Checkbox from "../Checkbox";
import Input from "../Input";

const ItemList = styled.div`
  height: 214px;
  overflow-y: scroll;
  width: 100%;
  margin-top: 17px;
  margin: 15px -15px 0 -15px;
  padding: 0 15px;
`;

const Item = styled.div`
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  width: 100%;

  &:first-child {
    margin-top: 5px;
  }
`;

const Count = styled.span`
  color: ${({ theme }) => theme.colors.grayAlt};
  padding-left: 4px;
`;

interface MultiSelectItem {
  label: string;
  id: string;
  count: number;
  checked: boolean;
}

interface MultiSelectProps {
  placeholder?: string;
  items: MultiSelectItem[];
  onCheck: (id: string) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  onCheck,
  placeholder,
}) => {
  const [filterText, setFilterText] = useState("");
  const timeout = useRef<NodeJS.Timeout>();

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current!);

    timeout.current = setTimeout(() => {
      setFilterText(e.target.value);
    }, 400);
  };

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <Input placeholder={placeholder} onChange={handleFilterTextChange} />
      <ItemList>
        {filteredItems.map((item) => (
          <Item key={item.id}>
            <Checkbox
              label={
                <>
                  {item.label} <Count>({item.count})</Count>{" "}
                </>
              }
              checked={item.checked}
              onChange={() => onCheck(item.id)}
            />
          </Item>
        ))}
      </ItemList>
    </div>
  );
};

MultiSelect.defaultProps = {
  items: [],
  placeholder: "Search",
};

export default MultiSelect;
