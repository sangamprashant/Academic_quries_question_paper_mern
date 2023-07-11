import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function AdminNav() {
  const { setUserLogin } = useContext(LoginContext);
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    setUserLogin(false);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark justify-content-evenly fixed-top"
        style={{ marginTop: "70px" }}
      >
        <Link className="navbar-brand" to="/admin/upload">
          Add Paper
        </Link>
        <Link className="navbar-brand" to="/responses">
          Responses
        </Link>
        <Link className="navbar-brand" to="/admin/add/type">
          Add Type
        </Link>
        <Link className="navbar-brand" to="/admin/add/course">
          Add Course
        </Link>
        <Link
          className="navbar-brand"
          onClick={() => {
            handleLogout();
          }}
          style={{ color: "red" }}
        >
          Logout
        </Link>
      </nav>
    </div>
  );
}

export default AdminNav;
