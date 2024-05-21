import axios from "axios";
import React from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SERVER } from "../../../config/domain";
import { Result } from "antd";

const NoteOpen = () => {
  const { id } = useParams();
  const [data, setData] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);

  React.useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>
              Notes{" "}
              {data?.s_topic
                ? `for ${data?.s_topic}`
                : loading
                ? "Loading"
                : "Not Found"}
            </h2>
          </div>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
              <p>Loading...</p>
            </div>
          ) : data ? (
            <React.Fragment>
              <iframe
                src={data.f_path}
                frameborder="0"
                width="100%"
                height={600}
              ></iframe>
            </React.Fragment>
          ) : (
            <Result
              status="warning"
              title="There are some problems with your operation."
            />
          )}
        </div>
      </section>
    </div>
  );

  async function fetchData() {
    try {
      const response = await axios.get(`${SERVER}/api/subject-notes/id/${id}`);
      setData(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
};

export default NoteOpen;
