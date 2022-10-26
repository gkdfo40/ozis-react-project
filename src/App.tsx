import styled from "styled-components";
import DropDown from "./pages/DropDownPage";

const App = () => {
  return (
    <AppContainer>
      <DropDown />
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
