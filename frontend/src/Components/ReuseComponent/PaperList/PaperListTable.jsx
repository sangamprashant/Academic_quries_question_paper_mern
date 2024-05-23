import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import VisibilityIcon from "@mui/icons-material/Visibility";

function PaperListTable({ filteredData }) {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Subject Name",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "College/University",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      dataIndex: "Papers",
      key: "Papers",
      render: (text, record) => (
        <a
          className="btn btn-outline-secondary"
          onClick={() => handleRowClick(record)}
        >
          View
        </a>
      ),
    },
  ];

  const handleRowClick = (record) => {
    navigate(`/selected-paper/${record.subject}`, {
      state: { paperData: record },
    });
  };

  return (
    <Table
      dataSource={filteredData}
      columns={columns}
      rowClassName="hoverable-row"
    />
  );
}

export default PaperListTable;
