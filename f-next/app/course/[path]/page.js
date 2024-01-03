export const fetchOpenPaper = async (id) => {
  const res = await fetch(`${process.env.DOMAIN}/api/get/paper/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

async function page({ params }) {
  const data = await fetchOpenPaper(params.path);
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>
              {data.subject} Paper of {data.year}
            </h2>
            <p>{data.type}</p>
          </div>
          <iframe src={data.pdfPath} width={"100%"} height={"80%"}></iframe>
        </div>
      </section>
    </div>
  );
}

export default page;
