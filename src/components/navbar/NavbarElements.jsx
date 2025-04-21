import React, { useEffect, useState } from "react";
import { use } from "react";
import { Link, NavLink } from "react-router-dom";
import Skills from "../pages/Skills";
import CV from "../pages/CV";
import Figma from "../pages/Figma";
import Footer from "../pages/Footer";
import About from "../pages/About";
import Skills2 from "../pages/Skills2";
import ProjectsPreview from "../pages/ProjectsPreview";
import ProjectsAll from "../pages/ProjectsAll";
import image from "../../assets/Homepage1.jpg";

const NavBarElement = () => {
  const [newActiveLink, setNewActiveLink] = useState(null);
  const [isToggled, setToggle] = useState(false);

  const home = document.getElementById("#home");
  const skills = document.getElementById("#skills");
  const figma = document.getElementById("#figma");
  const contactMe = document.getElementById("#footer");

  const toggleMenu = () => {
    setToggle(!isToggled);
    const menu = document.getElementById("sidebar");
    if (isToggled) {
      menu.classList.remove("menu-animation");
    } else {
      menu.classList.add("menu-animation");
    }
  };

  const links = [
    {
      index: 0,
      path: "/projects",
      text: "Projects",
      activeIcon: "bi bi-file-code-fill icon-100",
      icon: "bi bi-file-code",
      section: "Home",
    },
    {
      index: 1,
      path: "/",
      text: "Home",
      icon: "bi bi-house-door",
      activeIcon: "bi bi-house-door-fill",
      section: "home",
    },
    {
      index: 2,
      path: "/",
      text: "Figma",
      icon: "bi bi-easel2",
      activeIcon: "bi bi-easel2-fill",
      section: "figma",
    },
    {
      index: 3,
      path: "/",
      text: "Skills",
      icon: "bi bi-box",
      activeIcon: "bi bi-box-fill",
      section: "skills",
    },
    {
      index: 4,
      path: "/",
      text: "Contact Me",
      icon: "bi bi-person",
      activeIcon: "bi bi-person-fill",
      section: "footer",
    },
  ];

  const NavLinks = links.map((link) => (
    <a
      key={link.index}
      onClick={() => {
        setNewActiveLink(link.index);
        scrollToSection(link.section);
      }}
      isActive={(match, location) => {
        match && setNewActiveLink(link.index);
        return match;
      }}
    >
      <div className="Link" id="Link">
        {newActiveLink === link.index ? (
          <i class={link.activeIcon}></i>
        ) : (
          <i class={link.icon}></i>
        )}

        <h4>{link.text}</h4>
      </div>
    </a>

    //normal routes
  ));

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav>
        <div className="NavBar">{NavLinks}</div>

        <div className="">
          <button className="sidebar-icon" onClick={toggleMenu}>
            <i class="bi bi-list small"></i>
          </button>
        </div>
        <div className="sidebar" id="sidebar">
          <div>{NavLinks}</div>
        </div>
      </nav>


      <div className="Grid">
        <img src={image} alt="" />
      </div>

      <div id="">
        <About />
      </div>

      <div>
        <ProjectsAll />
      </div>
 
       <div id="figma">
        <Figma />
      </div> 

      <div id="art">
        <Skills2 />
      </div>

   <div id="footer">
        <Footer />
      </div>  

      {/* <CV/> */}
    </>
  );
};

export default NavBarElement;
