import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import GlobalStyle from "./styles/GlobalStyle.style";
import ModalsProvider from "./context/ModalPropvider";

Modal.setAppElement("#root");
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalsProvider>
      <App />
    </ModalsProvider>
    <GlobalStyle />
  </React.StrictMode>
);
