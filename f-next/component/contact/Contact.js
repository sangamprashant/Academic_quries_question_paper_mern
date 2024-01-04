"use client";
import React, { useState } from "react";
import "./Contact.css";
import Form from "./Form";
import { toast } from "react-toastify";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [MailData, setMailData] = useState({
    name: "",
    to: "",
    subject: "",
    input: "",
  });

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!MailData.name.trim() || !MailData.to.trim() || !MailData.subject.trim() || !MailData.input.trim()) {
      toast.error("Please fill in all the fields.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/public/sendemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(MailData),
      });

      const data = await response.json();
      if (data.message) {
        toast.success("Your message has been sent. Thank you!");
        setMailData({
          name: "",
          to: "",
          subject: "",
          input: "",
        });
      } else {
        toast.error("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to send the message. Please try again later.");
    } finally{
      setLoading(false)
    }
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>We're Happy to Hear from You!</p>
            <p>
              Thank you for reaching out. We appreciate your interest and will
              get back to you soon.
            </p>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <div className="row d-flex justify-content-around">
                <div className="col-lg-4 info mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
                  <i className="fa fa-envelope"></i>
                  {/* <h4>Email:</h4> */}
                  <a href="mailto: queriesacademic@gmail.com">
                    queriesacademic@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Form
            loading={loading}
            MailData={MailData}
            setMailData={setMailData}
            handleSubmit={handleSendEmail}
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
