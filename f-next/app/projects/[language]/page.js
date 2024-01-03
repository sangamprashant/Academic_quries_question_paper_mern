import ProjectByLanguageTable from "@/component/project/ProjectByLanguage/ProjectByLanguageTable";

export async function fetchProjectByLanguage(language) {
  const res = await fetch(
    `${process.env.DOMAIN}/api/get/projects/language/${language}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

async function ProjectLanguage({ params }) {
  const projects = await fetchProjectByLanguage(params.language);
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects List for {params.language}</h2>
          </div>

          <div className="project-type">
            <h4>Top Projects ({projects.length})</h4>
            <div className="table-responsive">
              <ProjectByLanguageTable projects={projects} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectLanguage;
