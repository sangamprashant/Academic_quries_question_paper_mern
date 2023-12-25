"use server";
export const fetchCourse = async () => {
  const res = await fetch(`${process.env.DOMAIN}/api/get/course`);
  const data = await res.json();
  return data;
};
