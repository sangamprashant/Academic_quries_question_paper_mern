import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, NavBar, RatingBtn } from "@/component";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "../component/ToastContainer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ACADEMIC QUERIES",
  description: `The web application or website aims to provide users with free access to previous year question papers. Users can browse through a variety of courses or subjects for which question papers are available. The question papers can be downloaded in PDF format, allowing users to easily view and save them for their reference.

  The website serves as a centralized platform where users can conveniently find and access question papers from different courses. By offering the papers in PDF format, users have the flexibility to download and access them offline on various devices such as computers, smartphones, or tablets.
  
  This service caters to individuals who are preparing for exams, seeking additional study resources, or looking to familiarize themselves with the question patterns of previous years. By providing free access and easy download options, the website aims to support students and educators in their academic pursuits.
  
  The web page interface is designed to be user-friendly, allowing users to navigate through the available courses, select their desired papers, and initiate the download process effortlessly. The website's primary focus is on delivering a seamless experience for accessing and obtaining previous year question papers in a convenient and widely compatible PDF format.`,
  icons: {
    icon: '/favicon.ico', 
  },
};

const MainLayout = ({ children }) => (
  <>
    <Head>
      <meta name="theme-color" content="#000000" />
      <meta name="google-adsense-account" content="ca-pub-4170668216012046" />
      <meta name="description" content="Your website description here." />
      <link rel="icon" href="/favicon.ico" />
      <title>ACADEMIC QUERIES</title>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4170668216012046"
        crossOrigin="anonymous"
      ></script>
    </Head>

    <body className={inter.className}>
      <NavBar />
      {children}
      <Footer />
      <ToastContainer theme="colored"/>
      <RatingBtn/>
    </body>
  </>
);

export default MainLayout;
