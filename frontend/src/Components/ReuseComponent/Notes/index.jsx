import axios from "axios";
import React from "react";
import { SERVER } from "../../../config/domain";
import Card from "../Reuse/Card";
import "./Notes.css";
import { Spinner } from "react-bootstrap";

const Notes = () => {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notesData")) || []
  );
  const [isLoading, setIsLoading] = React.useState(true);

  React.useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Notes</h2>
          </div>
          <div className="language-container">
            {!notes && isLoading ? (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
                <p>Loading...</p>
              </div>
            ) : (
              notes.map((note) => (
                <Card
                  path={`/notes/${note.subjectPath}`}
                  text={note.subjectName}
                  image={note.subjectImage}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get(`${SERVER}/api/subjects`);
      localStorage.setItem("notesData", JSON.stringify(response.data));
      setNotes(response.data);
    } catch (error) {
      setIsLoading(false);
    }
  }
};

export default Notes;
