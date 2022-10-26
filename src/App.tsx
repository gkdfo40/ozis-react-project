import styled from "styled-components";
import DropDown from "./pages/DropDownPage";
import MetaMaskWalletPage from "./pages/MetaMaskWalletPage";
import PopupModalPage from "./pages/PopupModalPage";

const App = () => {
  return (
    <AppContainer>
      <DropDown />
      <PopupModalPage />
      <MetaMaskWalletPage />
    </AppContainer>
  );
};

export default App;
const AppContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  gap: 10px;
`;
