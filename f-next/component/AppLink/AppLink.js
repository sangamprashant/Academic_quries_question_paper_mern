import React from "react";
import Mobile from "./icons/Mobile";
import AppLinkForm from "./AppLinkForm";

function AppLink() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-2">
          <div className="text-muted">
            <h2 className="">
              <strong className="text-black">Download</strong>{" "}
              <span className="">our app now!</span>
            </h2>
            <h5>Get question paper anytime and anywhere</h5>
          </div>
          <div>
            <div className="col-md-12">
              <AppLinkForm />
            </div>
            <div className="row d-flex justify-content-center gap-3 mt-4 text-muted">
              <span className="w-100 text-center">
                {<Mobile height={20} />}Experience the Academic Queries mobile
                app
              </span>
            </div>
            <div className="row d-flex justify-content-center gap-3 mt-1">
              {process.env.NEXT_PUBLIC_APP_AMAZON_LINK && (
                <a
                  href={process.env.NEXT_PUBLIC_APP_AMAZON_LINK}
                  target="_blank"
                  className="w-25 py-2  rounded-5 shadow"
                >
                  <div>
                    <img
                      className="object-fit-contain"
                      src="./amazon-logo.png"
                      width={"100%"}
                      alt="mobile"
                    />
                  </div>
                </a>
              )}
              {process.env.NEXT_PUBLIC_APP_DRIVE_LINK && (
                <a
                  href={process.env.NEXT_PUBLIC_APP_DRIVE_LINK}
                  target="_blank"
                  className="w-25 py-2  rounded-5 shadow"
                >
                  <div>
                    <img
                      className="object-fit-contain"
                      src="./google-drive.png"
                      width={"100%"}
                      alt="mobile"
                    />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <img
            width={"100%"}
            className=" object-fit-cover shadow"
            src="./app.png"
            alt="mobile"
          />
        </div>
      </div>
    </div>
  );
}

export default AppLink;
