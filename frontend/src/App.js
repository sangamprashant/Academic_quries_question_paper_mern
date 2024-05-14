import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Components/ReuseComponent/Contact";
import Footer from "./Components/ReuseComponent/Footer";
import AboutUs from "./Components/ReuseComponent/AboutUs";
import WhatWeDo from "./Components/ReuseComponent/WhatWeDo";
import Team from "./Components/Team";
import VerifiedEmailPaper from "./Components/ReuseComponent/VerifiedEmailPaper";
import ProjectsList from "./Components/ReuseComponent/Project/ProjectsList";
import ProjectsListSelected from "./Components/ReuseComponent/Project/ProjectListSelected";
import ProjectOpen from "./Components/ReuseComponent/Project/ProjectOpen";
import PaperOpen from "./Components/ReuseComponent/PaperOpen";
import { SERVER } from "./config/domain";
import Courses from "./Components/ReuseComponent/Courses";
import { Modal } from "antd";
import { AppName } from "./Strings/Strings";
import { AppContext } from "./context/AppContext";
import PaperList from "./Components/ReuseComponent/PaperList";
import Term from "./Components/ReuseComponent/Term";
import Contribute from "./Components/ReuseComponent/Contribute";

function App() {
  const [modal2Open, setModal2Open] = React.useState(true);
  const [modalContent,setModalContent] = React.useState(null)

  const handleResponse = (data) => {
    setModal2Open(true);
    setModalContent(data);
  };

console.log({SERVER})

  return (
    <AppContext.Provider value={{setModal2Open, setModalContent,handleResponse}}>

    <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/selected-paper/:subject" element={<PaperOpen />} />
          <Route exact path="/contact" element={<Contact  />} />
          <Route exact path="/course" element={<Courses/>}/>
          <Route exact path="/about" element={<AboutUs/>}/>
          <Route exact path="/services" element={<WhatWeDo/>}/>
          <Route exact path="/testimonials" element={<Team/>}/>
          <Route exact path="contribute" element={<Contribute/>}/>
          <Route exact path="/course/:branch/:course" element={<PaperList />}/>
          <Route exact path="/varified/paper/:paperId" element={<VerifiedEmailPaper />}/>

          <Route exact path="/projects" element={<ProjectsList/>}/>
          <Route exact path="/projects/:language" element={<ProjectsListSelected/>}/>
          <Route exact path="/project/:language/:id" element={<ProjectOpen/>}/>
          <Route exact path="/terms" element={<Term/>}/>
          
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
        <ToastContainer theme="dark" />
        <Modal
          title={`${AppName}' says`}
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          {modalContent}
        </Modal>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
