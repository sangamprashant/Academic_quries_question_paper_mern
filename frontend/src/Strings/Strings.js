import InfoIcon from "@mui/icons-material/Info";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SchoolIcon from "@mui/icons-material/School";
import NoteIcon from "@mui/icons-material/Note";
import SourceIcon from "@mui/icons-material/Source";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import UploadFileIcon from "@mui/icons-material/UploadFile";
// na bar
const AppName = "ACADEMIC QUERIES";
const emailAddress = "queriesacademic@gmail.com";

const heroStrings = {
  title: "Welcome to",
  spanText: "Academic Queries",
  subTitle: "EMPOWERING EDUCATION, ACADEMIC ASSISTANCE",
};
const menuItems = [
  { title: "About", link: "/about", icon: <InfoIcon /> },
  { title: "Services", link: "/services", icon: <HandshakeIcon /> },
  { title: "Courses", link: "/course", icon: <SchoolIcon /> },
  { title: "Notes", link: "/notes", icon: <NoteIcon /> },
  { title: "Projects", link: "/projects", icon: <SourceIcon /> },
  { title: "Contact", link: "/contact", icon: <ContactMailIcon /> },
  { title: "Contribute", link: "/contribute", icon: <UploadFileIcon /> },
];
const teamData = {
  teamHeading: "Our Team",
  teamMembers: [
    {
      name: "Avantika Shrivastava",
      role: "Product Manager",
      image: require("../Components/img/avantika.jpg"),
      instagram: "https://instagram.com/avantika_shrivastava",
      linkedin: "https://www.linkedin.com/in/avantika-shrivastava-b67037252",
    },
    {
      name: "Prashant Srivastav",
      role: "Chief Technology Officer (CTO)",
      image: require("../Components/img/prashant.png"),
      instagram: "https://instagram.com/sangam_prashant",
      linkedin: "https://www.linkedin.com/in/sangamprashantsrivastav",
    },
  ],
};
const contactStrings = {
  allFieldsRequired: "All fields are required.",
  messageSentSuccess: "Your message has been sent. Thank you!",
  messageSendFailed: "Failed to send the message. Please try again later.",
  contactTitle: "Contact",
  contactDescription: "We're Happy to Hear from You!",
  contactThanks:
    "Thank you for reaching out. We appreciate your interest and will get back to you soon.",
  emailAddress,
  loadingText: "Loading",
};
const whatWeDoItems = {
  sectionTitle: "Services",
  opportunityText:
    "Kindly grant us the opportunity to elucidate our endeavors.",
  items: [
    {
      icon: "fa fa-clock",
      title: "24/7 Available",
      link: "",
      description:
        "Around-the-clock availability for all your needs. With our 24/7 support, you can count on us day or night, ensuring prompt assistance and reliable service at any hour.",
    },
    {
      icon: "fa fa-file-text",
      title: "Question Paper",
      link: "",
      description: "Embrace the Questions, Always Open, Always Here for You.",
    },
    {
      icon: "fa fa-upload",
      title: "Contribute Here",
      link: "/contribute",
      description:
        "Your contributions fuel our success. Join us and be part of a community that values your input.",
    },
    {
      icon: "fa fa-file-pdf",
      title: "Project Reports",
      link: "",
      description:
        "Access comprehensive project reports in PDF format for your reference and study.",
    },
    {
      icon: "fa fa-file-powerpoint",
      title: "Presentations",
      link: "",
      description:
        "Download our detailed presentations in PDF format, designed to provide clear and concise information.",
    },
    {
      icon: "fa fa-file-text",
      title: "Notes",
      link: "",
      description:
        "Get detailed notes in PDF format to aid your learning and understanding.",
    },
  ],
};
const aboutString = {
  title: "About Us",
  content: `Academic Queries is a platform that provides free surveys from the past year to support the academic efforts of students and faculty. The surveys are available for a variety of courses and academic levels. <br /> <br /> Operating our platform is easy and user-friendly. You can browse different courses and select the specific survey you need. Once selected, the document will be available for download in PDF format for easy access on a variety of devices. We take the quality and accuracy of our surveys very seriously and we guarantee that the surveys are from trusted and reputable educational institutions. We continually update our collection to provide you with the most up-to-date surveys and ensure you have access to the most relevant and up-to-date materials. <br /> <br /> Join us on our educational journey and take advantage of previous year's surveys. Improve your exam preparation, boost your confidence and improve your academic performance with our comprehensive collection of surveys. Be part of the community by providing surveys about your course.`,
};
const footerString = {
  AppName,
  contact: [{ label: "Email", value: emailAddress }],
  links: [
    {
      label: "Useful Links",
      data: [
        { name: "Contact Us", path: "/contact" },
        { name: "Contribute", path: "/contribute" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms and Conditions", path: "/terms" },
      ],
    },
    {
      label: "Our Services",
      data: [
        { name: "About us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Our Team", path: "/testimonials" },
        { name: "Download Our App", path: "/download-app" },
      ],
    },
  ],
};

export {
  heroStrings,
  menuItems,
  AppName,
  teamData,
  contactStrings,
  whatWeDoItems,
  aboutString,
  emailAddress,
  footerString,
};
