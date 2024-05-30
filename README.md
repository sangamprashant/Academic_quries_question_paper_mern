# Academic Queries

Welcome to Academic Queries! Our platform aims to provide free access to a wide range of academic resources, including past question papers, project documentation, and comprehensive course notes. Designed to support the academic efforts of students and faculty, Academic Queries covers various courses and academic levels, helping users excel in their studies and research.

<!-- -----------------------------------------
                 Features
----------------------------------------- -->

## Features

- **24/7 Availability:** Users can access the website and its resources at any time, ensuring prompt assistance and reliable service day or night.
- **Question Papers:** A comprehensive collection of question papers is available, allowing users to review and practice exam questions from previous years.
- **Contribution:** Users can contribute to the community by sharing surveys, notes, and other academic materials related to their courses, enriching the platform's resource pool.
- **Projects Report:** Access comprehensive project reports in PDF format for your reference and study.
- **Project PPT:** Download our detailed presentations in PDF format, designed to provide clear and concise information.
- **Notes:** Get detailed notes in PDF format to aid your learning and understanding.
<!-- -----------------------------------------
                 Contents
----------------------------------------- -->

## Contents

The website offers the following main sections:

- **Courses:** Browse through different courses available, covering various academic disciplines.
- **Projects:** Explore project documentation and reports.
- **Notes:** Access notes on a wide range of subjects to support your studies.
- **About Us:** Learn more about Academic Queries, its mission, and how to use the platform effectively.
- **Contact:** Reach out to the team behind Academic Queries with any inquiries or feedback.
<!-- -----------------------------------------
                 Technologies Used
----------------------------------------- -->

## Technologies Used

#### Backend

- **Express.js:** A minimalist web framework for Node.js used for building the backend server.
- **MongoDB:** A NoSQL database used for storing and managing data.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js, used for schema validation and managing database interactions.
- **Nodemailer:** A module for Node.js applications to send emails, used for sending notification emails.
- **bcrypt:** A library to hash passwords, used for user authentication.
- **jsonwebtoken:** A library to generate and verify JSON Web Tokens (JWT), used for authentication and authorization.
- **cors:** A middleware for enabling Cross-Origin Resource Sharing (CORS), used for handling requests from different origins.
- **dotenv:** A module to load environment variables from a .env file, used for managing environment-specific configuration.
- **moment:** A library for parsing, validating, manipulating, and formatting dates and times, used for handling date and time operations.
- **nodemon:** A tool used for automatically restarting the server when file changes are detected during development.

#### Frontend

- **React:** A JavaScript library for building user interfaces, used for creating the frontend of the application.
- **Capacitor:** A cross-platform native runtime for web applications, used for building mobile apps from web technologies.
- **React Router:** A library for routing in React applications, used for handling navigation between different views.
- **axios:** A promise-based HTTP client for the browser and Node.js, used for making HTTP requests to the backend server.
- **Ant Design:** A React UI library with a set of high-quality React components, used for building user interface elements.
- **Firebase:** A platform developed by Google for creating mobile and web applications, used for authentication and data storage.
- **React Toastify:** A React notification library, used for displaying toast notifications.
- **uuid:** A library for generating universally unique identifiers (UUIDs), used for generating unique identifiers.
- **file-saver:** A library to save files on the client-side, used for downloading files.
- **web-vitals:** A library for tracking essential web performance metrics, used for monitoring performance.
- **React Lazy Load Image Component:** A React component for lazy-loading images, used for improving page load performance.
- **React Icons:** A library of icons for React applications, used for adding icons to the user interface.
- **Material-UI:** A popular React UI framework with Material Design components, used for building responsive and visually appealing UI components.
- **Testing Libraries:** Includes testing libraries such as `@testing-library/react` and `@testing-library/jest` for testing React components and applications.

#### Others

- **dotenv:** A module to load environment variables from a .env file, used for managing environment-specific configuration.

These technologies were chosen for their capabilities, community support, and suitability for building a modern web and mobile application.

<!-- -----------------------------------------
                 Installation and Usage
----------------------------------------- -->

## Installation and Usage

To use the Academic Queries website, simply visit [Academic Queries](https://academic-queries.vercel.app) in your web browser. There is no installation required.

You can also scan the QR code below to visit the website:

![QR Code](./assets/qr.png)

<!-- -----------------------------------------
                 Improvements
----------------------------------------- -->

## Improvements

- Enhanced performance and responsiveness for smoother user experience.
- Optimized backend processes for faster data retrieval and storage.
- Implemented user feedback mechanisms to gather insights for future enhancements.
- Streamlined navigation for easier access to different sections of the platform.
- Updated content regularly to ensure relevance and comprehensiveness.
- Integrated advanced search functionality for quicker access to specific resources.
- Implemented security measures to safeguard user data and ensure privacy.
- Enhanced mobile compatibility for seamless browsing on various devices.
- Expanded the collection of academic resources to cover a wider range of subjects and topics.
- Introduced user authentication features to personalize user experience and provide tailored recommendations.
- Collaborated with academic institutions to add more curated content and foster educational collaboration.
<!-- -----------------------------------------
                 Process
----------------------------------------- -->

## Process

1. **Analysis:** Conducted a thorough analysis of user feedback and platform performance metrics to identify areas for improvement.

2. **Planning:** Developed a comprehensive plan outlining specific improvements and enhancements to be implemented.

3. **Development:** Utilized agile development methodologies to iteratively implement and test the planned improvements.

4. **Testing:** Rigorously tested each improvement to ensure functionality, compatibility, and performance across various devices and browsers.

5. **Feedback:** Solicited feedback from users and stakeholders at each stage of the process to validate improvements and make necessary adjustments.

6. **Deployment:** Deployed the finalized improvements to the production environment in a phased manner to minimize disruption and ensure a smooth transition.

7. **Monitoring:** Continuously monitored platform performance and user feedback post-deployment to identify any issues and make further refinements as needed.

8. **Documentation:** Documented all improvements and changes made throughout the process for future reference and analysis.
<!-- -----------------------------------------
                 Learnings
----------------------------------------- -->

## Learnings

1. **User-Centric Approach:** Prioritizing user feedback and needs is paramount to delivering a successful product. Incorporating user input throughout the development process leads to more meaningful improvements and better overall user satisfaction.

2. **Agile Methodologies:** Adopting agile methodologies enables rapid iteration and flexibility in response to changing requirements and feedback. This approach facilitates continuous improvement and allows for quick course correction when necessary.

3. **Thorough Testing:** Comprehensive testing is essential to ensuring the quality and reliability of the platform. Thoroughly testing each improvement before deployment helps identify and mitigate potential issues early in the development process.

4. **Continuous Improvement:** The process of improvement is ongoing and iterative. Embracing a mindset of continuous improvement allows for constant refinement and enhancement of the platform over time, keeping it relevant and competitive in the ever-evolving landscape.

5. **Documentation and Reflection:** Documenting the improvement process and reflecting on successes and challenges is crucial for future iterations. Learning from past experiences helps refine development strategies and ensures that lessons learned are not lost.
<!-- -----------------------------------------
                 Version History
----------------------------------------- -->

## Version History
#### `v3.0.2` (June 2024)
- **Bug Fixes:**
  - Improved network status detection to provide real-time feedback on connectivity issues.
  - Enhanced UI responsiveness to display network status changes immediately.
  - Fixed a bug related to Service Worker registration on local development servers.
- **Features:**
  - Implemented a fallback UI for offline mode, allowing users to see a message and reload the app when connectivity is lost.
  - Added caching for images from Firebase to improve load times and offline accessibility.
- **Performance Enhancements:**
  - Optimized network status change handling to reduce unnecessary page reloads.
  - Streamlined back button handling on mobile devices for a smoother user experience.

#### `v3.0.1` - API Fix for Data Saving in Contributions (May 2024)

- **Bug Fixes:** Resolved issues related to data saving in the contribution feature, ensuring user submissions are stored accurately.
- **Performance Enhancements:** Optimized server response times for a smoother user experience when contributing resources.

#### `v2.0.1` - Bug Fixes and Performance Improvements (March 2024)

- **Bug Fixes:** Addressed minor bugs affecting the user interface and functionality, providing a more stable platform.
- **Performance Improvements:** Implemented backend optimizations to reduce load times and enhance overall performance.

#### `v2.0.0` - Initial Release (January 2024)

- **Launch Features:**
  - **Question Papers:** Extensive collection of past question papers for various courses.
  - **Project Reports and Presentations:** Access to comprehensive project reports and presentations in PDF format.
  - **Course Notes:** Detailed notes on numerous subjects to aid learning.
  - **24/7 Availability:** Resources accessible anytime, ensuring uninterrupted academic support.
  - **User Contributions:** Facility for users to contribute their own academic materials, enhancing the community resource pool.

## License

This project is licensed under the [MIT License](LICENSE).

#

Academic Queries strives to be the go-to platform for students and faculty seeking academic resources and support. With a commitment to excellence and continuous improvement, we aim to provide a seamless and enriching experience for our users. By offering a diverse range of resources, embracing user feedback, and leveraging cutting-edge technologies, we endeavor to foster academic success and contribute positively to the educational community.

## Screenshots

![ss](./assets/Academic%20Queries_page-0001.jpg)
![ss](./assets/Academic%20Queries_page-0002.jpg)
![ss](./assets/Academic%20Queries_page-0003.jpg)
![ss](./assets/Academic%20Queries_page-0004.jpg)
![ss](./assets/Academic%20Queries_page-0005.jpg)
![ss](./assets/Academic%20Queries_page-0006.jpg)
![ss](./assets/Academic%20Queries_page-0007.jpg)
![ss](./assets/Academic%20Queries_page-0008.jpg)
