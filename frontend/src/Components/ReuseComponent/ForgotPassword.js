import React, { useState, useEffect } from "react";
import "../css/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function ForgotPassword() {
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  const navigate = useNavigate();

  const token = localStorage.getItem("jwt");

  const [email, setEmail] = useState("");
  const [inputOtp, setInputOtp] = useState();
  const [enterOtp,setEnterOtp] = useState(false)
  const [password,setPassword] = useState("");
  const [rePassword,setRePassword] = useState("");
  const [passwordPart,setPasswordPart] = useState(false)

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  const postData = () => {
    // Sending data to server
    fetch("http://localhost:5000/api/admin/forgot/password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          notifyB(data.message);
          
          navigate("/");
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          notifyA(data.error);
        }
        console.log(data);
      });
  };

  const verifyOtp = () =>{
    //when otp match
    setPasswordPart(true)
  }

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="contact" class="contact section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Forgot password</h2>
          </div>
          <div class="row mt-5 justify-content-center">
            <div class="col-lg-5 ">
              <form role="form" class="signin">
                {!passwordPart?<><><div class="form-group mt-3">
                  <input
                  type="email"
                    class="form-control"
                    placeholder="Email"
                    value={email}
                    readOnly={`${!enterOtp?"":"readonly"}`}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <p style={{color:"red"}}>Enter your email..</p>
                </>
                {enterOtp&&<><div class="form-group mt-3">
                  <input
                  type="number"
                    class="form-control"
                    placeholder="Otp"
                    value={inputOtp}
                    onChange={(e) => {
                        setInputOtp(e.target.value);
                    }}
                  />
                </div>
                <p style={{color:"red"}}>Wrong otp, Please check your email..</p>
                </>}
                {!enterOtp?<div class="text-center">
                  <button
                    type="button"
                    onClick={() => {
                     // postData();
                      setEnterOtp(true);
                    }}
                  >
                    Generate otp
                  </button>
                </div>:
                <div class="text-center">
                  <button
                    type="button"
                    onClick={() => {
                        verifyOtp();
                    }}
                  >
                    Verify
                  </button>
                </div>}</>:
                <><div class="form-group mt-3">
                  <input
                  type="password"
                    class="form-control"
                    placeholder="New password"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                  type="password"
                    class="form-control"
                    placeholder="Re-enter"
                    value={inputOtp}
                    onChange={(e) => {
                        setInputOtp(e.target.value);
                    }}
                  />
                </div>
                <p style={{color:"red"}}>Password did not match..</p>
                <div class="text-center">
                  <button
                    type="button"
                    onClick={() => {
                     // postData();
                    }}
                  >
                    Set New Password
                  </button>
                </div></>}
                <Link to="/signin" className="forgot_password">
                  SignIn
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;
