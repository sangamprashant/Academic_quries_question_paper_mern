import React from "react";
import UserUploadPaper from "./UserUploadPaper";
import ContributeNotes from "./ContributeNotes";
import { Tabs } from "antd";

const Contribute = () => {
  const items = [
    {
      key: "0",
      label: "UPLOAD PAPER",
      children: <UserUploadPaper />,
    },
    {
      key: "1",
      label: "UPLOAD NOTES",
      children: <ContributeNotes />,
    },
  ];
  return (
    <div style={{ marginTop: "70px" }}>
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title">
            <h1>CONTRIBUTE</h1>
            <p>Your contribution is valuable to us :)</p>
            <p>Format should be in PDF!</p>
            <p className="smiley"></p>
            <Tabs
              defaultActiveKey={0}
              items={items}
              centered
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contribute;
