"use client";
import React, { useState } from "react";
import TableDataShowing from "./TableDataShowing";

function PaperTable({ paperData }) {
  const [filteredData, setFilteredData] = useState(paperData);
  const [searchInput, setSearchInput] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchType, setSearchType] = useState("");

  const uniqueYears = [...new Set(paperData.map((file) => file.year))];
  const uniqueTypes = [...new Set(paperData.map((file) => file.type))];

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
      <table className="table">
        <thead>
          <tr className="w-100">
            <td>
              <input
                className="form-control"
                placeholder="Search by subject.."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  filterData(e.target.value, searchYear, searchType, paperData);
                }}
              />
            </td>
            <td>
              <select
                className="form-control"
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

      <div className="shadow-lg">
        <h4 className="mt-5 pt-3 px-3">
          <strong>List of Papers</strong>
        </h4>
        <TableDataShowing filteredData={filteredData} />
      </div>
    </div>
  );
}

export default PaperTable;
