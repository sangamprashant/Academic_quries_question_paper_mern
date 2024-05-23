import React, { useState, useEffect } from "react";
import "../../css/Course.css";
import { SERVER } from "../../../config/domain";
import LoadingComponent from "../../Loading";
import PaperListTable from "./PaperListTable";

function PaperControl({ branch }) {
  const [loading, setLoading] = React.useState(true);
  const [paperData, setPaperData] = React.useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchType, setSearchType] = useState("");

  const uniqueYears = [...new Set(paperData?.map((file) => file.year))];
  const uniqueTypes = [...new Set(paperData?.map((file) => file.type))];

  React.useLayoutEffect(() => {
    // Fetch PDF file data from the server
    fetch(`${SERVER}/api/course/${branch}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredData(data);
        setPaperData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch PDF files:", error);
        setLoading(false);
      });
  }, [branch]);

  const filterData = (sub, year, coll, paperData) => {
    let filteredPdfFiles = [...paperData];

    if (year) {
      filteredPdfFiles = filteredPdfFiles.filter(
        (file) => file.year === Number(year)
      );
    }

    if (coll) {
      filteredPdfFiles = filteredPdfFiles.filter((file) =>
        file.type.toLowerCase().includes(coll.toLowerCase())
      );
    }

    if (sub) {
      filteredPdfFiles = filteredPdfFiles.filter((file) => {
        const subject = file.subject.toLowerCase();
        const searchTerm = sub.toLowerCase();
        return subject.includes(searchTerm);
      });
    }

    setFilteredData(filteredPdfFiles);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-borderless p-0 m-0">
            <thead className="p-0 m-0">
              <tr className="w-100">
                <td>
                  <input
                    className="form-control w-100"
                    placeholder="Search by subject.."
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                      filterData(
                        e.target.value,
                        searchYear,
                        searchType,
                        paperData
                      );
                    }}
                  />
                </td>
                <td>
                  <select
                    className="form-control w-100"
                    value={searchYear}
                    onChange={(e) => {
                      setSearchYear(e.target.value);
                      filterData(
                        searchInput,
                        e.target.value,
                        searchType,
                        paperData
                      );
                    }}
                  >
                    <option value="">Select a Year</option>
                    {uniqueYears.map((yr) => (
                      <option value={yr} key={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-md-6 ">
          <table className="table table-borderless p-0 m-0">
            <thead className="p-0 m-0">
              <tr className="w-100">
                <td>
                  <select
                    className="form-control"
                    value={searchType}
                    onChange={(e) => {
                      setSearchType(e.target.value);
                      filterData(
                        searchInput,
                        searchYear,
                        e.target.value,
                        paperData
                      );
                    }}
                  >
                    <option value="">Select a College</option>
                    {uniqueTypes.map((call) => (
                      <option value={call} key={call}>
                        {call}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="shadow-lg">
        <h4 className="mt-5 pt-3 px-3">
          <strong>List of Papers</strong>
        </h4>
        {loading ? (
          <LoadingComponent />
        ) : (
          <PaperListTable filteredData={filteredData} />
        )}
      </div>
    </div>
  );
}

export default PaperControl;
