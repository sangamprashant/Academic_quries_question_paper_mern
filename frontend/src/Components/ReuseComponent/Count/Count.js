import React, { useEffect, useState } from "react";
import "../../css/Count.css";
import { SERVER } from "../../../config/domain";
import SubCountBox from "./SubCountBox";

function Count() {
  const [count, setCount] = useState(localStorage.getItem("countData") || 0);
  const [visitors, setVisitors] = useState(
    localStorage.getItem("visitorsData") || 0
  );

  React.useLayoutEffect(() => {
    const postRequestSent = localStorage.getItem("postRequestSent");
    if (!postRequestSent) {
      fetch(`${SERVER}/api/increment/visitors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setVisitors(data.count);
          localStorage.setItem("postRequestSent", "true");
        })
        .catch((error) => {
          console.error("Failed to save visitor count to the backend:", error);
        });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("postRequestSent");
    }, 60000);
  }, []);

  React.useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <SubCountBox
              value={visitors}
              name="Number of visitors"
              icon="eye"
            />
            <SubCountBox value={count} name="Papers" icon="file-text" />
            <SubCountBox value="24/7" name="Hours Of Support" icon="headset" />
            <SubCountBox value="02" name="Developers" icon="user" />
          </div>
        </div>
      </section>
    </div>
  );
  async function fetchData() {
    try {
      const [countResponse, visitorsResponse] = await Promise.all([
        fetch(`${SERVER}/api/count/valid-question-papers`),
        fetch(`${SERVER}/api/count/visitors`),
      ]);

      const [countData, visitorsData] = await Promise.all([
        countResponse.json(),
        visitorsResponse.json(),
      ]);

      localStorage.setItem("countData", countData);
      localStorage.setItem("visitorsData", visitorsData);

      setCount(countData);
      setVisitors(visitorsData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setCount(0);
      setVisitors(0);
    } 
  }
}

export default Count;
