import { App as CAPApp } from "@capacitor/app";

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

export { handleBackButton };
