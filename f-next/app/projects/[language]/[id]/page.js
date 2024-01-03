import ProjectLeft from "@/component/project/ProjectLeft";
import ProjectOpenComponent from "@/component/project/ProjectOpen/ProjectOpen";
import "../../Project.css";

export async function fetchProjectById(id) {
  const res = await fetch(`${process.env.DOMAIN}/api/get/projects/id/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

async function ProjectOpen({ params }) {
  const project = await fetchProjectById(params.id);
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Project Language {params.language}</h2>
          </div>
          <div className="row">
            <div className="project-list-left">
              <ProjectLeft />
            </div>
            <div className="project-list-right">
              <ProjectOpenComponent project={project} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectOpen;
