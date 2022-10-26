import Modal from "react-modal";
import { customStyles } from "../../styles/ModalStyle.style";

interface MyModalProps {
  onSubmit?: () => {};
  onClose: () => {};
}

const ThirdModal = ({ onClose }: MyModalProps) => {
  const handleClickCancel = () => {
    onClose();
  };
  return (
    <Modal isOpen style={customStyles} onRequestClose={handleClickCancel}>
      <div>팝업 C.</div>
      <div>
        <button onClick={handleClickCancel}>close</button>
      </div>
    </Modal>
  );
};
export default ThirdModal;
