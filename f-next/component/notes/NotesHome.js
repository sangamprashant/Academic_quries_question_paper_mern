import React from "react";
import "../../app/projects/Project.css";
import NotesSubject from "./NotesSubject";
import { fetchSubjectNames } from "@/api_calls";
import Link from "next/link";

async function NotesHome() {
  const pdfFiles = await fetchSubjectNames();

  return (
    <>
      {pdfFiles.length > 0 ? (
        <div style={{ marginTop: "70px" }}>
          <section id="portfolio" className="portfolio">
            <div className="container">
              <div className="section-title">
                <h2>Notes</h2>
              </div>
              <NotesSubject pdfFiles={pdfFiles} />
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NotesHome;
