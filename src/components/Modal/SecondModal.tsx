import Modal from "react-modal";
import useModal from "../../hooks/useModals";
import { customStyles } from "../../styles/ModalStyle.style";
import ThirdModal from "./ThirdModal";

interface MyModalProps {
  onSubmit: () => {};
  onClose: () => {};
}

const SecondModal = ({ onSubmit, onClose }: MyModalProps) => {
  const { openModal } = useModal();
  const handleClickSubmit = () => {
    openModal(ThirdModal as JSX.Element | any, {
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
      <div>팝업 B.</div>
      <div>
        <button onClick={handleClickSubmit}>open C</button>
        <button onClick={handleClickCancel}>close</button>
      </div>
    </Modal>
  );
};
export default SecondModal;
