import { Routes, Route } from "react-router-dom";
import HomeNavbar from "../Components/HomePage/HomeNavbar";
import Home from "../Components/HomePage/Home";
import About from "../Components/AboutPage/About";
import HtmlSkill from "../Components/SkillsPage/HtmlSkill";
import CSSskill from "../Components/SkillsPage/CSSskill";
import JSskill from "../Components/SkillsPage/JSskill";
import ReactSkill from "../Components/SkillsPage/ReactSkill";
import NotFound from "../Components/404Page/NotFound";
import Contact from "../Components/ContactPage/Contact";

const AllRoute = () => {
  return (
    <>
      <HomeNavbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home/skills/html" element={<HtmlSkill />} />
        <Route path="home/skills/css" element={<CSSskill />} />
        <Route path="home/skills/javascript" element={<JSskill />} />
        <Route path="home/skills/react" element={<ReactSkill />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoute;
