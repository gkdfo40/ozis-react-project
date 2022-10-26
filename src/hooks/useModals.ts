import { useContext } from "react";
import { ModalsDispatchContext } from "../context/ModalPropvider";

const useModal = () => {
  const { open, close } = useContext(ModalsDispatchContext);
  const openModal = (
    Component: React.ReactElement,
    props: { [key: string]: any }
  ) => {
    open(Component, props);
  };
  const closeModal = (Component: React.ReactElement) => {
    close(Component);
  };
  return { openModal, closeModal };
};
export default useModal;
