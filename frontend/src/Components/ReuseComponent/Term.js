import React, { useEffect } from "react";
import "../css/Term.css";

function Term() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div style={{ marginTop: "70px" }}>
      <div class="space"></div>
      <div class="main">
        <h1>Terms of Service</h1>
        <p> Last updated: July 11, 2023</p>
        <p>
          Please read these terms and conditions carefully before using our
          website. By accessing or using our website, you agree to be bound by
          these terms and conditions. If you do not agree with any part of these
          terms and conditions, please do not use our website.
        </p>

        <p>
          <strong>Use of the Website</strong>
        </p>
        <p>
          1.1. Our website provides access to previous year question papers and
          allows users to send messages and upload PDF files for display.
        </p>
        <p>
          1.2. The content on our website is provided for informational purposes
          only. We do not guarantee the accuracy, completeness, or reliability
          of the information provided.
        </p>
        <p>
          1.3. You agree to use our website for lawful purposes and in
          compliance with all applicable laws and regulations.
        </p>

        <p>
          <strong>User Conduct</strong>
        </p>
        <p> When using our website, you agree not to:</p>
        <p> a) Violate any applicable laws or regulations.</p>
        <p> b) Infringe upon the rights of others.</p>
        <p> c) Upload or transmit any harmful or malicious content.</p>
        <p>
          d) Use our website to distribute spam, unsolicited messages, or other
          unauthorized advertising materials.
        </p>
        <p> e) Interfere with the functionality or security of our website.</p>
        <p>
          f) Attempt to gain unauthorized access to any part of our website or
          the server on which it is hosted.
        </p>

        <p>
          <strong>User-Generated Content</strong>
        </p>
        <p>
          3.1. By uploading or submitting any content to our website, including
          messages and PDF files, you grant us a non-exclusive, royalty-free,
          perpetual, and worldwide license to use, reproduce, modify, adapt,
          publish, translate, distribute, and display such content.
        </p>
        <p>
          3.2. You represent and warrant that you have the necessary rights and
          permissions to upload or submit any content to our website and that
          such content does not infringe upon any third-party rights.
        </p>
        <p>
          <strong>Intellectual Property</strong>
        </p>
        <p>
          4.1. All intellectual property rights, including copyrights,
          trademarks, and other proprietary rights, in and to our website and
          its content, are owned by or licensed to us.
        </p>
        <p>
          4.2. You may not use, reproduce, modify, adapt, distribute, or display
          any copyrighted material from our website without our prior written
          consent.
        </p>

        <p>
          <strong>Limitation of Liability</strong>
        </p>
        <p>
          5.1. We shall not be liable for any direct, indirect, incidental,
          consequential, or special damages arising out of or in connection with
          your use of our website or the content provided.
        </p>
        <p>
          5.2. We do not warrant that our website will be uninterrupted,
          error-free, or free from viruses or other harmful components.
        </p>
        <p>
          5.3. You agree to indemnify and hold us harmless from any claims,
          damages, or losses arising out of your use of our website or your
          violation of these terms and conditions.
        </p>

        <p>
          <strong>Modifications and Termination</strong>
        </p>
        <p>
          6.1. We reserve the right to modify, suspend, or terminate our website
          or any part thereof at any time without prior notice.
        </p>
        <p>
          6.2. We may also modify these terms and conditions at any time, and
          such modifications shall be effective immediately upon posting on our
          website.
        </p>

        <p>
          <strong>Governing Law and Jurisdiction</strong>
        </p>
        <p>
          7.1. These terms and conditions shall be governed by and construed in
          accordance with the laws of [Country/State].
        </p>
        <p>
          7.2. Any disputes arising out of or in connection with these terms and
          conditions shall be subject to the exclusive jurisdiction of the
          courts of [Country/State].
        </p>

        <p>
          <strong>------------------------------</strong>
        </p>
        <p>
          {" "}
          By using our website, you acknowledge that you have read, understood,
          and agreed to these terms and conditions. If you have any questions or
          concerns regarding these terms and conditions, please contact us.
        </p>
      </div>
    </div>
  );
}

export default Term;
