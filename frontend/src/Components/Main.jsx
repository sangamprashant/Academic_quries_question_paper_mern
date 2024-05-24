import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PaperOpen from "./ReuseComponent/PaperOpen";
import Contact from "./ReuseComponent/Contact";
import Courses from "./ReuseComponent/Courses";
import AboutUs from "./ReuseComponent/AboutUs";
import WhatWeDo from "./ReuseComponent/WhatWeDo";
import Team from "./Team";
import Contribute from "./ReuseComponent/Contribute";
import PaperList from "./ReuseComponent/PaperList";
import VerifiedEmailPaper from "./ReuseComponent/VerifiedEmailPaper";
import ProjectsList from "./ReuseComponent/Project/ProjectsList";
import ProjectsListSelected from "./ReuseComponent/Project/ProjectListSelected";
import ProjectOpen from "./ReuseComponent/Project/ProjectOpen";
import Term from "./ReuseComponent/Term";
import Notes from "./ReuseComponent/Notes";
import SubjectOpen from "./ReuseComponent/Notes/SubjectOpen";
import NoteOpen from "./ReuseComponent/Notes/NoteOpen";
import Reviews from "./ReuseComponent/Rating/Reviews";
import ReviewsWrite from "./ReuseComponent/Rating/ReviewsWrite";
import Policy from "./ReuseComponent/Policy";
import PageNotFound from "./PageNotFound";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/selected-paper/:subject" element={<PaperOpen />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/course" element={<Courses />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/services" element={<WhatWeDo />} />
      <Route exact path="/testimonials" element={<Team />} />
      <Route exact path="contribute" element={<Contribute />} />
      <Route exact path="/course/:branch/:course" element={<PaperList />} />
      <Route
        exact
        path="/varified/paper/:paperId"
        element={<VerifiedEmailPaper />}
      />
      <Route exact path="/projects" element={<ProjectsList />} />
      <Route
        exact
        path="/projects/:language"
        element={<ProjectsListSelected />}
      />
      <Route exact path="/project/:language/:id" element={<ProjectOpen />} />
      <Route exact path="/terms" element={<Term />} />
      <Route exact path="/notes" element={<Notes />} />
      <Route exact path="/notes/:subject" element={<SubjectOpen />} />
      <Route exact path="/notes/:subject/:id" element={<NoteOpen />} />
      <Route exact path="/reviews" element={<Reviews />} />
      <Route exact path="/reviews-write" element={<ReviewsWrite />} />
      <Route exact path="/privacy-policy" element={<Policy />} />

      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Main;
