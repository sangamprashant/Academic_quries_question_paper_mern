import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import AdminNav from "./ReuseComponent/AdminNav";
import Count from "./ReuseComponent/Count";
function Admin() {
  return (
    <div style={{ marginTop: "70px" }}>
      <AdminNav />
      <div style={{ marginTop: "180px" }}>
        <Count />
      </div>
    </div>
  );
}

export default Admin;
