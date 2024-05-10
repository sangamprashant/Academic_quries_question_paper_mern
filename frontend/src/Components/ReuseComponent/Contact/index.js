import React, { useEffect, useState } from "react";
import "../../css/Contact.css";
import { contactStrings } from "../../../Strings/Strings";
import { SERVER } from "../../../config/domain";
import { AppContext } from "../../../context/AppContext";

function Contact() {
  const { handleResponse } = React.useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSendEmail = () => {
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      handleResponse(
        <p className="p-0 m-0 text-warning">
          {contactStrings.allFieldsRequired}
        </p>
      );
      return;
    }
    setLoading(true);
    const requestBody = {
      name: name,
      to: email,
      subject: subject,
      input: message,
    };
    fetch(`${SERVER}/api/public/sendemail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.message) {
          handleResponse(
            <p className="p-0 m-0 text-success">
              {contactStrings.messageSentSuccess}
            </p>
          );
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          handleResponse(
            <p className="p-0 m-0 text-danger">
              {contactStrings.messageSendFailed}
            </p>
          );
        }
      })
      .catch((error) => {
        setLoading(false);
        handleResponse(
          <p className="p-0 m-0 text-danger">
            {contactStrings.messageSendFailed}
          </p>
        );
        // console.error("Failed to send the message:", error);
      });
  };

  const strings = {
    sendButtonText: loading ? "Please wait.." : "Send Message",
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title">
            <h2>{contactStrings.contactTitle}</h2>
            <p>{contactStrings.contactDescription}</p>
            <p>{contactStrings.contactThanks}</p>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <div className="row d-flex justify-content-around">
                <div className="col-lg-4 info mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
                  <i className="fa fa-envelope"></i>
                  <a href="mailto: queriesacademic@gmail.com">
                    {contactStrings.emailAddress}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10">
              <form role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="my-3">
                  {loading && (
                    <div className="loading">{contactStrings.loadingText}</div>
                  )}
                </div>
                <div className="text-center">
                  <button type="button" onClick={handleSendEmail}>
                    {strings.sendButtonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
