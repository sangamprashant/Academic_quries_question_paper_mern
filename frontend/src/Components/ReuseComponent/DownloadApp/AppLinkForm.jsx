import React, { useState, useContext } from "react";
import { SERVER } from "../../../config/domain";
import { AppContext } from "../../../context/AppContext";

const AppLinkForm = () => {
  const { handleModel } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleValidation = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return handleModel(<p className="text-danger">Email is required.</p>);
    }

    if (!handleValidation()) {
      return handleModel(<p className="text-danger">Invalid email format.</p>);
    }

    setIsLoading(true);

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
          <p className="text-danger">
            Failed to send app link. Please try again.
          </p>
        );
      }
    } catch (error) {
      handleModel(
        <p className="text-danger">
          Failed to send app link. Please try again.
        </p>
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex gap-3">
        <input
          type="email" // Change type to "email" for built-in browser validation
          placeholder="Email"
          className="form-control rounded-5 p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // Make the input required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary rounded-5 p-3 px-4 text-nowrap"
        >
          {!isLoading ? "Get App Link" : "Please wait..."}
        </button>
      </div>
    </form>
  );
};

export default AppLinkForm;
