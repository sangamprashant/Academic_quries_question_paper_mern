import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../css/Course.css";

function Course() {
  const { branch, course } = useParams();
  const [pdfFiles, setPdfFiles] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchType, setSearchType] = useState("");
  const [uniqueYears, setUniqueYears] = useState([]);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch PDF file data from the server
    fetch(`/api/course/${branch}`)
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
      });
  }, [branch]);

  useEffect(() => {
    // Extract unique years from the PDF files
    const years = [...new Set(allData.map((file) => file.year))];
    setUniqueYears(years);

    // Extract unique types from the PDF files
    const types = [...new Set(allData.map((file) => file.type))];
    setUniqueTypes(types);
  }, [allData]);

  useEffect(() => {
    let filteredPdfFiles = allData;

    if (searchYear) {
      filteredPdfFiles = filteredPdfFiles.filter(
        (file) => file.year === Number(searchYear)
      );
    }

    if (searchType) {
      filteredPdfFiles = filteredPdfFiles.filter((file) =>
        file.type.toLowerCase().includes(searchType.toLowerCase())
      );
    }

    if (searchInput) {
      filteredPdfFiles = filteredPdfFiles.filter((file) => {
        const subject = file.subject.toLowerCase();
        const searchTerm = searchInput.toLowerCase();
        return subject.includes(searchTerm);
      });
    }

    setPdfFiles(filteredPdfFiles);
  }, [allData, searchYear, searchType, searchInput]);

  return (
    <div style={{ marginTop: "70px" }}>
      <div style={{ marginTop: "70px" }}>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Papers of {course}</h2>
              <input
                className="Paper_search"
                placeholder="Name search.."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <select
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  padding: "2px",
                }}
                className="Paper_search"
                value={searchYear}
                onChange={(e) => setSearchYear(e.target.value)}
              >
                <option value="">All Years</option>
                {/* Render the unique years */}
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <input
                className="Paper_search"
                placeholder="College search.."
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              />
            </div>

            <div class="sales-boxes">
              <div class="recent-sales box">
                <div class="title">List of Papers</div>
                <div class="sales-details" style={{ paddingRight: "20px" }}>
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Subject Name</li>
                    {pdfFiles.length !== 0 ? (
                      pdfFiles.map((Papers) => (
                        <React.Fragment key={Papers._id}>
                          <hr />
                          <li>
                            <a
                              onClick={() =>
                                navigate(`/selected-paper/${Papers.subject}`, {
                                  state: { paperData: Papers },
                                })
                              }
                              style={{ height: "30px", whiteSpace: "nowrap" }}
                            >
                              {Papers.subject}
                            </a>
                          </li>
                        </React.Fragment>
                      ))
                    ) : (
                      <li>No papers found</li>
                    )}
                  </ul>
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Year</li>
                    {pdfFiles.length !== 0 ? (
                      pdfFiles.map((Papers) => (
                        <React.Fragment key={Papers._id}>
                          <hr />
                          <li>
                            <a
                              onClick={() =>
                                navigate(`/selected-paper/${Papers.subject}`, {
                                  state: { paperData: Papers },
                                })
                              }
                              style={{ height: "30px", whiteSpace: "nowrap" }}
                            >
                              {Papers.year}
                            </a>
                          </li>
                        </React.Fragment>
                      ))
                    ) : (
                      <li>No papers found</li>
                    )}
                  </ul>
                  <ul class="details">
                    <li class="topic">College/University</li>
                    {pdfFiles.length !== 0 ? (
                      pdfFiles.map((Papers) => (
                        <React.Fragment key={Papers._id}>
                          <hr />
                          <li>
                            <a
                              onClick={() =>
                                navigate(`/selected-paper/${Papers.subject}`, {
                                  state: { paperData: Papers },
                                })
                              }
                              style={{ height: "30px", whiteSpace: "nowrap" }}
                            >
                              {Papers.type}
                            </a>
                          </li>
                        </React.Fragment>
                      ))
                    ) : (
                      <li>No papers found</li>
                    )}
                  </ul>
                  <ul class="details">
                    <li class="topic">Contributor</li>
                    {pdfFiles.length !== 0 ? (
                      pdfFiles.map((Papers) => (
                        <React.Fragment key={Papers._id}>
                          <hr />
                          <li>
                            <a
                              onClick={() =>
                                navigate(`/selected-paper/${Papers.subject}`, {
                                  state: { paperData: Papers },
                                })
                              }
                              style={{ height: "30px", whiteSpace: "nowrap" }}
                            >
                              {Papers.name ? Papers.name : "Admin"}
                            </a>
                          </li>
                        </React.Fragment>
                      ))
                    ) : (
                      <li>No papers found</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Course;
