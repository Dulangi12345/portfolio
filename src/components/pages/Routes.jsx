import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import NavBarElement from "../navbar/NavbarElements";
import ProjectPage from "./Page";
import Page from "./Project/page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NavBarElement />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<Page />}/>
    </Routes>
  );
}
