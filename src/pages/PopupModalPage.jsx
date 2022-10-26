import CommonLayOut from "../components/CommonLayOut";
import FirstModal from "../components/Modal/FirstModal";
import Modals from "../components/Modal/Modals";
import useModal from "../hooks/useModals";

const PopupModalPage = () => {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal(FirstModal, {
      onSubmit: () => {
        console.log("Open A Modal");
      },
    });
  };
  return (
    <CommonLayOut>
      <div>
        <button onClick={handleClick}>Open Modal</button>
      </div>
      <Modals />
    </CommonLayOut>
  );
};
export default PopupModalPage;
