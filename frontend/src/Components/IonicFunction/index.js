import { Network } from "@capacitor/network";
import { App as CAPApp } from "@capacitor/app";
import { TextZoom } from "@capacitor/text-zoom";
import { Capacitor } from "@capacitor/core";

// ------------------handle back button -----------
const handleBackButton = (mobileNavOpen, setMobileNavOpen) => {
  CAPApp.addListener("backButton", ({ canGoBack }) => {
    if (mobileNavOpen) {
      setMobileNavOpen(false);
      return;
    }
    if (canGoBack) {
      window.history.back();
    } else {
      const exitConfirmation = window.confirm(
        "Are you sure you want to exit the app?"
      );
      if (exitConfirmation) {
        CAPApp.exitApp();
      }
    }
  });
};

//  ----------------  Network -----------
let previousStatus = {
  connected: true,
  connectionType: "unknown",
};

const showAlertIfNoInternet = (status) => {
  if (!status.connected) {
    alert("No internet connection. Please check your network settings.");
  }
};

const handleNetworkStatusChange = (status, setIsInNetwork) => {
  // console.log("Network status changed", status);
  setIsInNetwork(status.connected);
  if (
    status.connected !== previousStatus.connected ||
    status.connectionType !== previousStatus.connectionType
  ) {
    // Set the network status first to update the UI
    setIsInNetwork(status.connected);
    // Show alert for no internet connection
    showAlertIfNoInternet(status);
    if (status.connected) {
      window.location.reload(); // Reload the app if network is reconnected
    }
  }
  previousStatus = { ...status };
};

const logCurrentNetworkStatus = async (setIsInNetwork) => {
  const status = await Network.getStatus();
  // console.log("Network status:", status);
  setIsInNetwork(status.connected);
  showAlertIfNoInternet(status);
  previousStatus = { ...status };
  Network.addListener("networkStatusChange", (newStatus) => {
    handleNetworkStatusChange(newStatus, setIsInNetwork);
  });
};
//  ------------------- Network end ---------------

// --------------------font size control-------------
async function handleFontToDefault(val) {
  if (Capacitor.isNativePlatform()) {
    // Disable text zoom only on native platforms
    TextZoom.set({ value: val }).catch((error) =>
      console.error("Failed to set text zoom:", error)
    );
  }
}

export { handleBackButton, logCurrentNetworkStatus, handleFontToDefault };
