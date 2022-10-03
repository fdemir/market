import styled from "styled-components";

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

export { ItemList, Item, Count };
