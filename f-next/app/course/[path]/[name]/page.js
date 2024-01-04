import PaperTable from "@/component/paper/PaperTable";
import "./PaperTable.css";
import { fetchCourseOpen } from "@/api_calls";

async function page({ params }) {
  const pdfFiles = await fetchCourseOpen(params.path);
  return (
    <div style={{ marginTop: "70px" }}>
      <div style={{ marginTop: "70px" }}>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Papers of {params.name}</h2>
            </div>
            <PaperTable paperData={pdfFiles} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
