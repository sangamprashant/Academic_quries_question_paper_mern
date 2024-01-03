import ProjectLanguages from "@/component/project/ProjectLanguages";
import ProjectLeft from "@/component/project/ProjectLeft";
import "./Project.css"
import "../../component/course/Paper.css"

async function page() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects List</h2>
          </div>
          <div className="row">
            <div className="project-list-left">
              <ProjectLeft />
            </div>
            <div className="project-list-right">
              <h4>Languages</h4>
              <ProjectLanguages />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
