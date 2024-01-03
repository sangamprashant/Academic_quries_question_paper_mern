import { useRouter } from 'next/navigation'

function TableDataShowing({ filteredData }) {
  const router = useRouter();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Subject Name</th>
          <th>Year</th>
          <th>College/University</th>
          <th>Contributor</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((data) => (
          <tr
            className="course-paper-item"
            key={data._id}
            onClick={() => {
              const url = `/course/${data._id}`;
              router.push(url);
            }}
          >
            <td className="p-3">{data.subject}</td>
            <td className="p-3">{data.year}</td>
            <td className="p-3">{data.type}</td>
            <td className="p-3">{data.name ? data.name : "Admin"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableDataShowing;
