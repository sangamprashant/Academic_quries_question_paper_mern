import React, { useEffect } from "react";
import "../css/Term.css";
import { Link } from "react-router-dom";

function Policy() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div style={{ marginTop: "70px" }}>
      <div class="space"></div>
      <div class="main">
        <h1>Privacy policy</h1>
        <p> Last updated: September 25, 2016</p>
        <p>
          This Privacy Policy ("Policy") describes how we collect, use, and
          disclose personal information when you use our ("Website"). By
          accessing or using the Website, you agree to the terms of this Policy.
        </p>

        <p>
          <strong>Information We Collect</strong>
        </p>
        <p>
          1.1. Personal Information: We may collect personal information that
          you voluntarily provide to us, such as your name, email address, and
          any other information you submit through forms or other interactions
          on the Website.
        </p>
        <p>
          1.2. Usage Information: We may collect non-personal information about
          your use of the Website, such as your IP address, browser type, device
          information, and browsing behavior.
        </p>

        <p>
          <strong>Use of Information</strong>
        </p>
        <p>2.1. We may use the collected information to:</p>
        <p>a) Provide and personalize the Website's content and features.</p>
        <p>b) Respond to your inquiries, comments, or requests.</p>
        <p>c) Send you administrative and promotional communications.</p>
        <p>
          d) Analyze and improve the Website's performance and user experience.
        </p>
        <p>
          2.2. We will not sell, rent, or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so.
        </p>

        <p>
          <strong>Cookies and Tracking Technologies</strong>
        </p>
        <p>
          3.1. We may use cookies and similar tracking technologies to enhance
          your browsing experience and collect information about how you use the
          Website.
        </p>
        <p>
          3.2. You have the option to disable or reject cookies in your browser
          settings, but please note that this may limit certain features or
          functionality of the Website.
        </p>
        <p>
          <strong>Third-Party Services and Links</strong>
        </p>
        <p>
          4.1. The Website may contain links to third-party websites or services
          that are not owned or controlled by us. We are not responsible for the
          privacy practices or content of those third parties.
        </p>
        <p>
          4.2. We may also use third-party service providers to assist with
          various aspects of the Website's operations. These service providers
          may have access to your personal information but are obligated to keep
          it confidential and use it only for the purposes specified by us.
        </p>

        <p>
          <strong>Data Security</strong>
        </p>
        <p>
          5.1. We implement appropriate technical and organizational measures to
          protect your personal information from unauthorized access,
          disclosure, alteration, or destruction.
        </p>
        <p>
          5.2. However, please note that no method of transmission over the
          internet or electronic storage is 100% secure. We cannot guarantee the
          absolute security of your information.
        </p>

        <p>
          <strong>Changes to this Policy</strong>
        </p>
        <p>
          We may update or revise this Policy from time to time. Any changes
          will be effective upon posting of the revised Policy on the Website.
          We encourage you to review this Policy periodically for any updates.
        </p>

        <p>
          <strong>------------------------------</strong>
        </p>
        <p>
          {" "}
          If you have any questions, comments, or concerns regarding this Policy
          or our privacy practices, please contact us at{" "}
          <Link to="/contact" style={{ color: "blue" }}>
            Contact us
          </Link>{" "}
          .
        </p>
      </div>
    </div>
  );
}

export default Policy;
