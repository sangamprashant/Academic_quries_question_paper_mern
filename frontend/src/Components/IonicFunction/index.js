import { Network } from "@capacitor/network";
import { App as CAPApp } from "@capacitor/app";
import { TextZoom } from "@capacitor/text-zoom";
import { Capacitor } from "@capacitor/core";

let previousStatus = {
  connected: true,
  connectionType: "unknown",
};

// ------------------handle back button -----------
const handleBackButton = () => {
  CAPApp.addListener("backButton", ({ canGoBack }) => {
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

//  ----------------  Newtwork -----------
const showAlertIfNoInternet = (status) => {
  if (!status.connected) {
    alert("No internet connection. Please check your network settings.");
  }
};

const handleNetworkStatusChange = (status) => {
  console.log("Network status changed", status);
  showAlertIfNoInternet(status);

  if (
    status.connected !== previousStatus.connected ||
    status.connectionType !== previousStatus.connectionType
  ) {
    window.location.reload(); // Reload the app if network is connected or connection type changes
  }

  previousStatus = { ...status };
};

Network.addListener("networkStatusChange", handleNetworkStatusChange);

const logCurrentNetworkStatus = async () => {
  const status = await Network.getStatus();
  console.log("Network status:", status);
  showAlertIfNoInternet(status);
  previousStatus = { ...status };
};
//  -------------------Network end ---------------

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
