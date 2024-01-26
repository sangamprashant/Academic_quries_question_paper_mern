import Link from "next/link";

async function NotesSubject({ pdfFiles }) {
  return (
    <div className="notes-container">
      {pdfFiles.map((Subjects) => (
        <div className="p-3 text-center"
          key={Subjects._id}
        >
          <Link href={`/notes/${Subjects.subjectPath}`}>
            <div className="card shadow rounded border-0">
              <figure>
                <img
                className="object-fit-contain"
                  src={`${Subjects.subjectImage}`}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                />
              </figure>
              <p className="p-1">
                <a>{Subjects.subjectName}</a>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NotesSubject;
