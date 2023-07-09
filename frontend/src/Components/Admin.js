import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
function Admin() {
  const { setUserLogin } = useContext(LoginContext);
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });
  const handelLogout = () => {
    localStorage.clear();
    navigate("/signin");
    setUserLogin(false);
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
        <Link className="navbar-brand" to="/upload">
          {" "}
          Upload
        </Link>
        <Link className="navbar-brand" to="/responses">
          {" "}
          Responses
        </Link>
        <Link className="navbar-brand" to="/upload">
          {" "}
          Add Type
        </Link>
        <Link className="navbar-brand" to="/upload">
          {" "}
          Add Course{" "}
        </Link>
        <Link
          className="navbar-brand"
          onClick={() => {
            handelLogout();
          }}
          style={{ color: "red" }}
        >
          {" "}
          Logout
        </Link>
      </nav>
      <div class="row">
        <div class="col-sm-6  my-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6  my-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6  my-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6  my-5  ">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
