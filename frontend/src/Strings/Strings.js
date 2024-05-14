// na bar
const AppName = "ACADEMIC QUERIES";
const emailAddress = "queriesacademic@gmail.com";

const heroStrings = {
  title: "Welcome to",
  spanText: "Academic Queries",
  subTitle: "EMPOWERING EDUCATION, ACADEMIC ASSISTANCE",
};
const menuItems = [
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Courses", link: "/course" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
  { title: "Contribute", link: "/contribute" },
  { title: "Testimonials", link: "/testimonials" },
];
const teamData = {
  teamHeading: "Team",
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
  sectionTitle: "What We Do",
  opportunityText: `"Kindly grant us the opportunity to elucidate our endeavors."`,
  items: [
    {
      icon: "fa fa-clock",
      title: "24/7 Available",
      link: "",
      description:
        "Around-the-clock availability for all your needs. With our 24/7 support, you can count on us day or night, ensuring prompt assistance and reliable service at any hour.",
    },
    {
      icon: "fa fa-file",
      title: "Question Paper",
      link: "",
      description: "Embrace the Questions, Always Open, Always Here for You",
    },
    {
      icon: "fa fa-upload",
      title: "Contribute Here",
      link: "/CONTRIBUTE",
      description:
        "Your contributions fuel our success. Join us and be part of a community that values your input.",
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
        { name: "Terms and Conditions", path: "/terms" },
        { name: "Privacy policy", path: "/privacy-policy" },
      ],
    },
    {
      label: "Our Services",
      data: [
        { name: "About us", path: "/about" },
        { name: "Services", path: "/services" },
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
