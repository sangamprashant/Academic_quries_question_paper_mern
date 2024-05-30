import { Capacitor } from "@capacitor/core";
import { Modal } from "antd";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  handleBackButton,
  handleFontToDefault,
  logCurrentNetworkStatus,
} from "./Components/IonicFunction";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Footer from "./Components/ReuseComponent/Footer";
import { AppName } from "./Strings/Strings";
import { AppContext } from "./context/AppContext";
import ResultPage from "./Components/ReuseComponent/Result";

const noInternet = {
    status: "500",
  title: "No Internet Connection",
  subTitle: "Sorry, it looks like you are not connected to the internet.",
  extra: (
    <button
      className="btn btn-primary"
      onClick={() => window.location.reload()}
    >
      Reload
    </button>
  ),
};

function App() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [isInNetwork, setIsInNetwork] = React.useState(false);
  React.useEffect(() => {
    logCurrentNetworkStatus(setIsInNetwork);
    handleBackButton(mobileNavOpen, setMobileNavOpen);
    handleFontToDefault(0.8);
  }, []);
  const [modal2Open, setModal2Open] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  return (
    <AppContext.Provider
      value={{
        setModal2Open,
        setModalContent,
        handleModel,
        setMobileNavOpen,
        mobileNavOpen,
        isInNetwork,
      }}
    >
      <BrowserRouter>
        <Navbar />
        {isInNetwork ? (
          <>
            <Main />
            {/* only in web */}
            {!Capacitor.isNativePlatform() && <Footer />}
          </>
        ) : (
          <ResultPage {...noInternet} />
        )}
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
