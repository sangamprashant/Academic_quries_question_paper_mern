import Link from "next/link";

export async function fetchProjectsLanguages() {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/get/projects/language`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching project language:", error);
    return [];
  }
}

async function ProjectLanguages() {
  const pdfFiles = await fetchProjectsLanguages();

  return (
    <div className="language-container">
      {pdfFiles.map((Projects) => (
        <div
          className="m-2 portfolio-item filter-app wow fadeInUp"
          key={Projects._id}
        >
          <Link href={`/projects/${Projects.ProjectName}`}>
            <div className="portfolio-wrap">
              <figure>
                <img
                  src={`${Projects.ProjectImage}`}
                  type="application/pdf"
                  width="100%"
                  height="200px"
                />
              </figure>
              <div className="portfolio-info">
                <h4>
                  <a>{Projects.ProjectName}</a>
                </h4>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectLanguages;
