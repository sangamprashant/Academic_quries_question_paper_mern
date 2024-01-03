
import ProjectLanguages from "./ProjectLanguages";
import "../../app/projects/Project.css"

function ProjectHome() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <ProjectLanguages />
        </div>
      </section>
    </div>
  );
}

export default ProjectHome;
