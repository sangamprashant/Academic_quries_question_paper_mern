import React from "react";
import Rating from ".";
import { Avatar, List } from "antd";
import axios from "axios";
import { SERVER } from "../../../config/domain";
import { Images } from "./images";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  React.useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h5>COMMENTS</h5>
            <h2>Client Says</h2>
          </div>
          <Rating show={false} />
          <h4>Reviews</h4>
          {data && (
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`/images${Images[item.image]}`} />}
                    title={
                      <>
                        <div className="d-flex gap-3">
                          <Link>{item.name}</Link>
                          <div>{renderStars(item.stars)}</div>
                        </div>
                        <p>{item.email}</p>
                      </>
                    }
                    description={item.feedback}
                  />
                </List.Item>
              )}
            />
          )}
        </div>
      </section>
    </div>
  );

  async function fetchData() {
    try {
      const response = await axios.get(`${SERVER}/api/public/review`);
      setData(response.data);
    } catch (error) {}
  }

  // Function to render stars based on count
  function renderStars(count) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= count ? "text-warning" : "text-muted"}>
          &#9733;
        </span>
      );
    }
    return stars;
  }
};

export default Reviews;
