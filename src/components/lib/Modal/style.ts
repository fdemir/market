import styled from "styled-components";
import { ReactComponent as CloseIcon } from "~/assets/close.svg";

const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const ModalHeader = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const ModalContent = styled.div`
  padding: 16px;
`;

const ModalTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const ModalClose = styled(CloseIcon)`
  width: 24px;
  cursor: pointer;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export { ModalWrapper, ModalHeader, ModalContent, ModalTitle, ModalClose };
