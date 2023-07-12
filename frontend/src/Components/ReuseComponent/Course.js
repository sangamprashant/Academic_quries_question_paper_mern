import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Course.css";

function Course() {
  const { branch ,course} = useParams();
  const [pdfFiles, setPdfFiles] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchInput, setSetInput] = useState();
  const [searchYear, setSearchYear] = useState();
  const [getYears, setGetYears] = useState([]);
  const filteredPdfFiles = pdfFiles.filter(
    (file) => file.year === Number(searchYear)
  );
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
  }, []);
  // useEffect(() => {
  //   const fetchYears = async () => {
  //     try {
  //       const response = await fetch("/api/paper/years");
  //       const data = await response.json();
  //       setGetYears(data);
  //     } catch (error) {
  //       console.error("Failed to fetch unique years:", error);
  //     }
  //   };

  //   fetchYears();
  // }, [branch]);

  useEffect(() => {
    
    if (searchYear &&!searchInput) {
      const filteredPdfFiles = allData.filter(
        (file) => file.year === Number(searchYear)
      );
      setPdfFiles(filteredPdfFiles);
    }
    else if (searchInput &&!Number(searchYear)) {
      const filteredPdfFiles = allData.filter((file) => {
        const subject = file.subject.toLowerCase();
        const searchTerm = searchInput.toLowerCase();
        return subject.includes(searchTerm);
      });
      setPdfFiles(filteredPdfFiles);
    }else{
      setPdfFiles(allData);
    }
    
  }, [allData, searchYear, searchInput]);

  return (
    <div style={{ marginTop: "70px" }}>
      <div style={{ marginTop: "70px" }}>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Papers of {course}</h2>

              <input
                className="Paper_search"
                placeholder="Search.."
                onChange={(e) => {
                  setSetInput(e.currentTarget.value);
                }}
              />
            </div>

            <div class="sales-boxes">
              <div class="recent-sales box">
                <div class="title">List of Papers</div>
                <div class="sales-details">
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Subject Name</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id}>
                                <a href={`${Papers.pdfPath}`}>
                                  {Papers.subject}
                                </a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                  <ul class="details" style={{ marginRight: "20px" }}>
                    <li class="topic">Year</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id}>
                                <a href={`${Papers.pdfPath}`}>{Papers.year}</a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                  <ul class="details">
                    <li class="topic">Type</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id}>
                                <a href={`${Papers.pdfPath}`}>{Papers.type}</a>
                              </li>
                            </>
                          );
                        })
                      : ""}
                  </ul>
                  <ul class="details">
                    <li class="topic">Contributor</li>
                    {pdfFiles.length !== 0
                      ? pdfFiles.map((Papers) => {
                          return (
                            <>
                              <hr />
                              <li key={Papers._id}>
                                <a href={`${Papers.pdfPath}`}>
                                  {Papers.name ? Papers.name : "Admin"}
                                </a>
                              </li>
                            </>
                          );
                        })
                      : ""}
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
