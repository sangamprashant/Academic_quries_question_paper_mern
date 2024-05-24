import { Modal } from "antd";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/ReuseComponent/Footer";
import Main from "./Components/Main";
import { AppName } from "./Strings/Strings";
import { AppContext } from "./context/AppContext";

import { Capacitor } from "@capacitor/core";
import { handleBackButton } from "./Components/IonicFunction";

function App() {
  handleBackButton();
  const [modal2Open, setModal2Open] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  return (
    <AppContext.Provider
      value={{ setModal2Open, setModalContent, handleModel }}
    >
      <BrowserRouter>
        <Navbar />
        <Main />
        {/* only in web */}
        {!Capacitor.isNativePlatform() && <Footer />}
        <ToastContainer theme="dark" />
        <Modal
          title={`${AppName}' says`}
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          {modalContent}
        </Modal>
      </BrowserRouter>
    </AppContext.Provider>
  );
  function handleModel(data) {
    setModal2Open(true);
    setModalContent(data);
  }
}

export default App;
