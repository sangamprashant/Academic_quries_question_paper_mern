import Reviews from "@/component/rating/Reviews";

function page() {
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h5>COMMENTS</h5>
            <h2>Client Says</h2>
          </div>
          <Reviews />
        </div>
      </section>
    </div>
  );
}

export default page;
