import React, { useEffect, useState } from "react";
import "../css/Contact.css";
import { toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const handleSendEmail = () => {
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("All fields are required.")
      return;
    }
    setLoading(true);
    const requestBody = {
      name: name,
      to: email,
      subject: subject,
      input: message,
    };
    fetch("/api/public/sendemail", {
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
          toast.success("Your message has been sent. Thank you!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          toast.error(
            "Failed to send the message. Please try again later."
          );
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Failed to send the message. Please try again later.");
        console.error("Failed to send the message:", error);
      });
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
                  {loading && <div className="loading">Loading</div>}

                </div>
                <div className="text-center">
                  <button type="button" onClick={handleSendEmail}>
                    {loading?"Please wait..":"Send Message"}
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
