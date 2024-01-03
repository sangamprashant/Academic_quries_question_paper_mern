"use client";
function Form({ loading, MailData, setMailData, handleSubmit }) {
  return (
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
                value={MailData.name}
                onChange={(e) =>
                  setMailData({ ...MailData, name: e.target.value })
                }
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
                value={MailData.to}
                onChange={(e) =>
                  setMailData({ ...MailData, to: e.target.value })
                }
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
              value={MailData.subject}
              onChange={(e) =>
                setMailData({ ...MailData, subject: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
              value={MailData.input}
              onChange={(e) =>
                setMailData({ ...MailData, input: e.target.value })
              }
            ></textarea>
          </div>
          <div className="text-center">
            <button type="button" disabled={loading} onClick={handleSubmit}>
              {loading ? "Please Wait.." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
