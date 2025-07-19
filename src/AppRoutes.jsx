import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path ="/Experience" element={<Experience />} />
        <Route path ="/projects" element={<Projects />} />
        <Route path ="/education" element={<Education />} />
        <Route path ="/contact" element={<Contact />} />
    </Routes>
    );
};

export default AppRoutes;
