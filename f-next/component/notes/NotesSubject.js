import Link from "next/link";

async function NotesSubject({pdfFiles}) {
  return (
    <div className="language-container">
      {pdfFiles.map((Subjects) => (
        <div
          className="m-2 portfolio-item filter-app wow fadeInUp"
          key={Subjects._id}
        >
          <Link href={`/notes/${Subjects.subjectPath}`}>
            <div className="portfolio-wrap">
              <figure>
                <img
                  src={`${Subjects.subjectImage}`}
                  type="application/pdf"
                  width="100%"
                  height="200px"
                />
              </figure>
              <div className="portfolio-info">
                <h4>
                  <a>{Subjects.subjectName}</a>
                </h4>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NotesSubject;
