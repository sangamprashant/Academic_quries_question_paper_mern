"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

function AppLinkForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoadig] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.info("Email is required.");
    }

    setIsLoadig(true);

    try {
      // Make a POST request to your server endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/send-app-link`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email.trim() }),
        }
      );

      if (response.ok) {
        toast.success("App link sent successfully!");
        setEmail("");
      } else {
        toast.error("Failed to send app link. Please try again.");
      }
    } catch (error) {
      console.error("Error sending app link:", error);
      toast.error("Failed to send app link. Please try again.");
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
          className="btn btn-primary rounded-5 p-3 px-5 text-nowrap"
        >
          {!isLoading ? "Get App Link" : "Please wait.."}
        </button>
      </div>
    </form>
  );
}

export default AppLinkForm;
