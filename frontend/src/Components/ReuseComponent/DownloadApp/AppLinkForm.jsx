import React from "react";
import { SERVER } from "../../../config/domain";
import { AppContext } from "../../../context/AppContext";

const AppLinkForm = () => {
  const { handleModel } = React.useContext(AppContext);
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoadig] = React.useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return handleModel(<p className="text-danger">Email is required.</p>);
    }

    setIsLoadig(true);

    try {
      // Make a POST request to your server endpoint
      const response = await fetch(`${SERVER}/api/send-app-link`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        handleModel(
          <p className="text-success">App link sent successfully!</p>
        );
        setEmail("");
      } else {
        handleModel(
          <p className="text-sanger">
            Failed to send app link. Please try again.
          </p>
        );
      }
    } catch (error) {
      // console.error("Error sending app link:", error);
      handleModel(
        <p className="text-sanger">
          Failed to send app link. Please try again.
        </p>
      );
    } finally {
      setIsLoadig(false);
    }
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className="d-flex gap-3">
        <input
          type="text"
          placeholder="Email"
          className="form-control rounded-5 p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary rounded-5 p-3 px-4 text-nowrap"
        >
          {!isLoading ? "Get App Link" : "Please wait.."}
        </button>
      </div>
    </form>
  );
};

export default AppLinkForm;
