import { Modal } from "antd";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";
import AboutUs from "./Components/ReuseComponent/AboutUs";
import Contact from "./Components/ReuseComponent/Contact";
import Contribute from "./Components/ReuseComponent/Contribute";
import Courses from "./Components/ReuseComponent/Courses";
import Footer from "./Components/ReuseComponent/Footer";
import PaperList from "./Components/ReuseComponent/PaperList";
import PaperOpen from "./Components/ReuseComponent/PaperOpen";
import ProjectsListSelected from "./Components/ReuseComponent/Project/ProjectListSelected";
import ProjectOpen from "./Components/ReuseComponent/Project/ProjectOpen";
import ProjectsList from "./Components/ReuseComponent/Project/ProjectsList";
import Term from "./Components/ReuseComponent/Term";
import VerifiedEmailPaper from "./Components/ReuseComponent/VerifiedEmailPaper";
import WhatWeDo from "./Components/ReuseComponent/WhatWeDo";
import Team from "./Components/Team";
import { AppName } from "./Strings/Strings";
import { AppContext } from "./context/AppContext";
import Notes from "./Components/ReuseComponent/Notes";
import SubjectOpen from "./Components/ReuseComponent/Notes/SubjectOpen";
import NoteOpen from "./Components/ReuseComponent/Notes/NoteOpen";
import Reviews from "./Components/ReuseComponent/Rating/Reviews";
import ReviewsWrite from "./Components/ReuseComponent/Rating/ReviewsWrite";

import { handleBackButton } from "./Components/IonicFunction";

function App() {
  handleBackButton()
  const [modal2Open, setModal2Open] = React.useState(false);
  const [modalContent,setModalContent] = React.useState(null)

  return (
    <AppContext.Provider value={{setModal2Open, setModalContent,handleModel}}>

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
          <Route exact path="/notes" element={<Notes />} />
          <Route exact path="/notes/:subject" element={<SubjectOpen />} />
          <Route exact path="/notes/:subject/:id" element={<NoteOpen />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/reviews-write" element={<ReviewsWrite />} />

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
  function handleModel  (data)  {
    setModal2Open(true);
    setModalContent(data);
  };
}

export default App;
