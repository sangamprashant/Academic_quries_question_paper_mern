import { fetchOpenNotes } from "@/api_calls";
import React from "react";

async function NotesOpen({ params }) {
  const data = await fetchOpenNotes(params.id);
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2 className=" text-capitalize">
              {data.subject} Notes of {data.s_name}
            </h2>
            <p></p>
            <p>{data.type}</p>
          </div>
          <iframe src={data.f_path} width={"100%"} height={"80%"}></iframe>
        </div>
      </section>
    </div>
  );
}

export default NotesOpen;
