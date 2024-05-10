import React, { useEffect, useState } from "react";
import "../../css/Count.css";
import { SERVER } from "../../../config/domain";
import SubCountBox from "./SubCountBox";

function Count() {
  const [count, setCount] = useState(0);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Check if the POST request has already been sent using local storage
    const postRequestSent = localStorage.getItem("postRequestSent");
    if (!postRequestSent) {
      // Send the visitor count to the backend
      fetch(`${SERVER}/api/increment/visitors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log({data})
          setVisitors(data.count);
          // Set the flag in local storage to prevent further POST requests
          localStorage.setItem("postRequestSent", "true");
        })
        .catch((error) => {
          console.error("Failed to save visitor count to the backend:", error);
        });
    }
  }, []); // Empty dependency array to run the effect only once on page load

  useEffect(() => {
    // Clear the flag after 10 seconds
    setTimeout(() => {
      localStorage.removeItem("postRequestSent");
    }, 10000);
  }, []); // Empty dependency array to run the effect only once on page load

  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const [countResponse, visitorsResponse] = await Promise.all([
          fetch(`${SERVER}/api/count/valid-question-papers`),
          fetch(`${SERVER}/api/count/visitors`)
        ]);

        const [countData, visitorsData] = await Promise.all([
          countResponse.json(),
          visitorsResponse.json()
        ]);

        setCount(countData);
        setVisitors(visitorsData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <SubCountBox value={visitors} name={"Number of visitors"} icon={"eye"}/>
            <SubCountBox value={count} name={"Papers"} icon={"file-text"}/>
            <SubCountBox value={"24/7"} name={"Hours Of Support"} icon={"headset"}/>
            <SubCountBox value={"02"} name={"Developers"} icon={"user"}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Count;
