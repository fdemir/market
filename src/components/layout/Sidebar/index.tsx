import styled from "styled-components";
import { hideBasketModal } from "~/app/features/basket/basket-slice";
import { useAppDispatch, useTypedSelector } from "~/app/store";
import Modal from "~/components/lib/Modal";
import Basket from "~/components/shared/Basket";
import useMediaQuery from "~/hooks/useMediaQuery";
import { theme } from "~/theme/variables";

const Sidebar = () => {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xl} )`);
  const isBasketModalOpen = useTypedSelector(
    (state) => state.basket.isBasketModalOpen
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      {isMobile ? (
        <Modal
          title="Cart"
          show={isBasketModalOpen}
          onClose={() => dispatch(hideBasketModal())}
        >
          <Basket />
        </Modal>
      ) : (
        <Basket />
      )}
    </div>
  );
};

export default Sidebar;
