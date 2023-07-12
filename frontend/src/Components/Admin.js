import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import AdminNav from "./ReuseComponent/AdminNav";
import Count from "./ReuseComponent/Count";
function Admin() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the count of valid question papers
    fetch("/api/count/valid-question-papers")
      .then((response) => response.json())
      .then((data) => {
        setCount(data.count);
      })
      .catch((error) => {
        console.error("Failed to fetch count of valid question papers:", error);
      });
  }, []);
  return (
    <div style={{ marginTop: "70px" }}>
      <AdminNav />
      <div style={{ marginTop: "180px" }}>
    
      
      <Count count={count}/>
    </div>
     
    </div>
  );
}

export default Admin;
