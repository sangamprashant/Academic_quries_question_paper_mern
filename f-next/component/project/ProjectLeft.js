import { fetchRecentProjects } from "@/api_calls";
import Link from "next/link";

async function ProjectLeft() {
  const projects = await fetchRecentProjects();
  return (
    <div className="project-type">
      <h4>Top Projects {projects.length}</h4>
      <div className="project-by-language-container">
        {projects.map((project) => (
          <div className="project-by-language" key={project._id}>
            <Link
              href={`/projects/${project.type}/${project._id}`}
              className=" text-black"
            >
              <p>{project.type}</p>
              <h5>{project.topic}</h5>
              <p>{project.createdAt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectLeft;
