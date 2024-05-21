import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../../css/ProjectsList.css";
import { SERVER } from "../../../config/domain";
import { Table } from "antd";

function ProjectsListSelected() {
  const { language } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  React.useLayoutEffect(() => {
    fetchProjects();
  }, [language]);

  const tableContent = [
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (id) => {
        return (
          <Link
            type="button"
            className="btn btn-primary"
            to={`/project/Java-SE/${id}`}
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
            <h2>Projects List for {language}</h2>
          </div>
          {isLoading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
              <p>Loading...</p>
            </div>
          ) : (
            <div className="project-type">
              <h4>Top Projects ({projects.length})</h4>
              <Table dataSource={projects} columns={tableContent} />
            </div>
          )}
        </div>
      </section>
    </div>
  );

  async function fetchProjects() {
    fetch(`${SERVER}/api/get/project/by/type/${language}`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(
          data.map((project) => ({
            ...project,
            createdAt: new Date(project.createdAt).toLocaleDateString(),
          }))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
        setIsLoading(false);
      });
  }
}

export default ProjectsListSelected;
