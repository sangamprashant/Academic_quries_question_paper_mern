import { fetchCourse } from "./action";
export default async function Amone() {
  const data = await fetchCourse();
  return (
    <div>
      <h1>Hello</h1>
      {data?.map((da) => (
        <div key={da._id}>
          <p >na {da._id}</p>
          <img src={da.courseImage} />
        </div>
      ))}
    </div>
  );
}
