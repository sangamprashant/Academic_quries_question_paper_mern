import { fetchNotesBySubject } from "@/api_calls";
import React from "react";
import SubjectTable from "./SubjectTable";

async function SubjectOpen({ params }) {
  const projects = await fetchNotesBySubject(params.subject);
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Notes for {params.subject}</h2>
          </div>

          <div className=" shadow-lg">
            <h4 className="mt-5 pt-3 px-3">Top Projects ({projects.length})</h4>
            <div className="table-responsive">
              <SubjectTable projects={projects} subject={params.subject} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubjectOpen;
