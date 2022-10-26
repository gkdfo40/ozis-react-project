import Modal from "react-modal";
import useModal from "../../hooks/useModals";
import { customStyles } from "../../styles/ModalStyle.style";
import SecondModal from "./SecondModal";

interface MyModalProps {
  onSubmit: () => {};
  onClose: () => {};
}

const FirstModal = ({ onSubmit, onClose }: MyModalProps) => {
  const { openModal } = useModal();
  const handleClickSubmit = () => {
    openModal(SecondModal as JSX.Element | any, {
      onSubmit: () => {
        console.log("open B Modal");
      },
    });
    onSubmit();
  };
  const handleClickCancel = () => {
    onClose();
  };
  return (
    <Modal isOpen style={customStyles} onRequestClose={handleClickCancel}>
      <div>팝업 A.</div>
      <div>
        <button onClick={handleClickSubmit}>open B</button>
        <button onClick={handleClickCancel}>close</button>
      </div>
    </Modal>
  );
};
export default FirstModal;
