import { Table } from "antd";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { SERVER } from "../../../config/domain";

const SubjectOpen = () => {
  const { subject } = useParams();
  const [data, setData] = React.useState(undefined);

  React.useLayoutEffect(() => {
    if (subject) fetchData();
  }, [subject]);

  const dataTable = [
    {
      title: "Topic",
      dataIndex: "s_topic",
      key: "s_topic",
    },
    {
      title: "Uploaded By",
      dataIndex: "",
      key: "u_name",
      render: (data) => {
        return <>{data.u_name || "Admin"}</>;
      },
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (id) => {
        return (
          <Link
            type="button"
            className="btn btn-outline-secondary"
            to={`/notes/${subject}/${id}`}
          >
            View
          </Link>
        );
      },
    },
  ];

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Notes for {subject}</h2>
          </div>
          <Table dataSource={data} columns={dataTable} />
        </div>
      </section>
    </div>
  );

  async function fetchData() {
    try {
      const response = await axios.get(
        `${SERVER}/api/subject-notes/${subject}`
      );
      setData(response.data);
    } catch (error) {}
  }
};

export default SubjectOpen;
