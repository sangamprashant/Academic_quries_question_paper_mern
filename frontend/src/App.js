import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/LoginContext";
import Contact from "./Components/ReuseComponent/Contact";
import Footer from "./Components/ReuseComponent/Footer";
import AboutUs from "./Components/ReuseComponent/AboutUs";
import Paper from "./Components/ReuseComponent/Paper";
import UploadPaper from "./Components/UploadPaper";
import WhatWeDo from "./Components/ReuseComponent/WhatWeDo";
import Team from "./Components/Team";
import Course from "./Components/ReuseComponent/Course";


function App() {
  const [navActive, setNavActive] = useState("Home");

  return (
    <BrowserRouter>
      <LoginContext.Provider
        navActive={navActive}
      >
        <Navbar navActive={navActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact setNavActive={setNavActive} />} />
          <Route path="/paper" element={<Paper/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/upload" element={<UploadPaper/>}/>
          <Route path="/services" element={<WhatWeDo/>}/>
          <Route path="/testimonials" element={<Team/>}/>
          <Route path="/course/:branch" element={<Course />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
        <ToastContainer theme="dark" />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
