"use server";
export const fetchPaperCount = async () => {
  const res = await fetch(`${process.env.DOMAIN}/api/count/visitors`);
  const data = await res.json();
  console.log(data)
  return data[0].counts.length;
};
