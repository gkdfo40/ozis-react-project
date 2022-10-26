import styled from "styled-components";
import DropDown from "./pages/DropDownPage";
import PopupModalPage from "./pages/PopupModalPage";

const App = () => {
  return (
    <AppContainer>
      <DropDown />
      <PopupModalPage />
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
