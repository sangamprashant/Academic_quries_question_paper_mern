"use server";
export const fetchCourse = async () => {
  const res = await fetch("https://www.academicqueries.me/api/get/course");
  const data = await res.json();
  console.log(data);
  return data;
};
