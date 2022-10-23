import React from "react";
import {Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Socials from "./components/Socials/Socials";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";

function App() {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className=".header-container">
            <Header />
          </div>
          <div className="main-container-navigations">
            <Navbar />
          </div>
          <div className="main-container-content">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <Socials />
      </div>
    </>
  );
}

export default App;
