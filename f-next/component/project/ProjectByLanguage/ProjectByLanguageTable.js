"use client";
import { useRouter } from "next/navigation";

function ProjectByLanguageTable({ projects }) {
  const router = useRouter();
  return (
    <table className="table table-striped">
      <thead className="head">
        <tr>
          <th>Sr no.</th>
          <th>Topic</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr
            key={project._id}
            onClick={() =>
              router.push(`/projects/${project.type}/${project._id}`)
            }
          >
            <td>{index + 1}</td>
            <td>{project.topic}</td>
            <td>{project.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectByLanguageTable;
