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
import Signin from "./Components/Signin";
import Responses from "./Components/Responses";
import NotLoggedIn from "./Components/ReuseComponent/NotLoggedIn";
import UserUploadPaper from "./Components/ReuseComponent/UserUploadPaper";
import Admin from "./Components/Admin";
import AddType from "./Components/ReuseComponent/AddType";
import AddCourse from "./Components/ReuseComponent/AddCourse";
import GetPaperToAdmin from "./Components/ReuseComponent/GetPaperToAdmin";
import Test from "./Components/Test";
import EmailToUser from "./Components/ReuseComponent/EmailToUser";
import VerifiedEmailPaper from "./Components/ReuseComponent/VerifiedEmailPaper";
import Term from "./Components/ReuseComponent/Term";
import Policy from "./Components/ReuseComponent/Policy";
import AdminCourse from "./Components/ReuseComponent/AdminCourse";
import AdminPaper from "./Components/ReuseComponent/AdminPaper";
import AdminEditPaper from "./Components/ReuseComponent/AdminEditPaper";
import ForgotPassword from "./Components/ReuseComponent/ForgotPassword";

function App() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <BrowserRouter>
      <LoginContext.Provider
        value={{setUserLogin}}
      >
        <Navbar login={userLogin} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/terms" element={<Term/>}/>
          <Route exact path="/policy" element={<Policy/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/contact" element={<Contact  />} />
          <Route exact path="/paper" element={<Paper/>}/>
          <Route exact path="/about" element={<AboutUs/>}/>
          <Route exact path="/services" element={<WhatWeDo/>}/>
          <Route exact path="/testimonials" element={<Team/>}/>
          <Route exact path="/responses" element={<Responses/>}/>
          <Route exact path="/signin/warning" element={<NotLoggedIn/>}/>
          <Route exact path="/user/upload/paper" element={<UserUploadPaper/>}/>
          <Route exact path="/course/:branch/:course" element={<Course />}/>
          <Route exact path="/varified/paper/:paperId" element={<VerifiedEmailPaper />}/>
          <Route exact path="/admin" element={<Admin />}/>
          <Route exact path="/forgot/password" element={<ForgotPassword />}/>
          <Route exact path="/admin/course" element={<AdminCourse />}/>
          <Route exact path="/course/to/update/:branch/:course" element={<AdminPaper />}/>
          <Route exact path="/admin/modify/correction/:paperId" element={<AdminEditPaper />}/>
          <Route exact path="/admin/add/type" element={<AddType />}/>
          <Route exact path="/admin/modify/:paperId" element={<GetPaperToAdmin />}/>
          <Route exact path="/admin/response/email/:emailId" element={<EmailToUser />}/>
          <Route exact path="/admin/add/course" element={<AddCourse />}/>
          <Route exact path="/admin/upload" element={<UploadPaper/>}/>
          <Route exact path="/test" element={<Test/>}/>
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
        <ToastContainer theme="dark" />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
