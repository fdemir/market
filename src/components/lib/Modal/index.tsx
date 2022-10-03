import { useEffect } from "react";
import {
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalContent,
} from "./style";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  show: boolean;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ title, children, show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) return null;

  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalClose role="button" onClick={onClose} />
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
