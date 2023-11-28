import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Subscribe from "./Component/Subscribe/Subscribe";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import ServicePage from "./Pages/ServicePage";
import ProjectPage from "./Pages/ProjectPage";
import TestimonialPage from "./Pages/TestimonialPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/testimonials" element={<TestimonialPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
