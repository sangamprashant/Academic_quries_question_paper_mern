"use client";
import React from "react";
import { useRouter } from "next/navigation";

function SubjectTable({ projects, subject }) {
  const router = useRouter();

  return (
    <table className="table table-hover">
      <thead className="head">
        <tr>
          <th>Sr.no</th>
          <th>Topic</th>
          <th>contributor</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((data, index) => (
          <tr
            key={data._id}
            onClick={() => {
              router.push(`/notes/${subject}/${data._id}`);
            }}
          >
            <td>{index + 1}</td>
            <td>{data.s_topic}</td>
            <td>{data.u_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubjectTable;
