import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ProjectsPreview3 = () => {
  function changeHeight() {
    const item9 = document.getElementById("item9");
    const item10 = document.getElementById("item10");
    const hidden11 = document.getElementById("hidden11");
    hidden11.style.visibility = "hidden";

    item9.style.height = "400px";

    item10.style.height = "100px";
    item9.style.transitionDuration = "1s";
    item9.style.transitionBehavior = "ease-in-out";
    item10.style.transitionDuration = "2s";
    item10.style.transitionBehavior = "ease-in-out";
    makeVisible();
  }

  function makeVisible() {
    const hidden12 = document.getElementById("hidden12");
    hidden12.style.visibility = "visible";
    hidden12.style.transitionDelay = "0.5s";
    hidden12.style.transitionBehavior = "ease-in-out";
  }

  function restoreHeight() {
    const item9 = document.getElementById("item9");
    const item10 = document.getElementById("item10");

    item9.style.height = "100px";
    item10.style.height = "400px";
    item10.style.marginBottom = "-600px";
    item10.style.transitionDuration = "1s";
    item10.style.transitionBehavior = "ease-in-out";
    item9.style.transitionBehavior = "ease-in-out";
    restoreVisibility();
  }

  function restoreVisibility() {
    const hidden11 = document.getElementById("hidden11");
    hidden11.style.visibility = "visible";
    hidden11.style.transitionDelay = "0.5s";
    hidden11.style.transitionBehavior = "ease-in-out";
  }



  

  return (
    <>
   

      <div
        className="figma-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          width: "400px",
        }}
      >
        <div
          id="item9"
          onMouseOver={() => changeHeight()}
          onMouseOut={() => restoreHeight()}
          style={{
            height: "100px",
          }}
        >
          <h1
            className="figma-title"
            style={{
              textAlign: "left",
              padding: "20px",
              fontSize: "50px",
            }}
          >
            {" "}
            Project 1{" "}
          </h1>

          <div
            id="hidden12"
            style={{
              width: "300px",
              padding: "20px",
              textAlign: "left",
              visibility: "hidden",
            }}
          >
            Sed dignissim purus ex, ac fringilla justo sodales non. Proin non
            lacus et sem commodo pretium sed varius elit. Duis eu porta magna,
            nec fringilla quam. Aenean ut lacus sed eros tempus porttitor et et
            lorem.
          </div>
        </div>

        <div
          id="item10"
          style={{
            height: "400px",
            backgroundColor: "#E0E5B6",
          }}
        >
          <h1
            className="figma-title"
            style={{
              textAlign: "left",
              padding: "20px",
              fontSize: "50px",
            }}
          >
            {" "}
            Project 2{" "}
          </h1>

          <div
            id="hidden11"
            style={{
              width: "300px",
              padding: "20px",
              textAlign: "left",
              visibility: "visible",
            }}
          >
            Sed dignissim purus ex, ac fringilla justo sodales non. Proin non
            lacus et sem commodo pretium sed varius elit. Duis eu porta magna,
            nec fringilla quam. Aenean ut lacus sed eros tempus porttitor et et
            lorem. <br />
            <Link to={`/projects/${1}`} query={{}}>
               <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="figma-button"
                        style={{
                          width: "50%",
                          justifyContent: "center",
                        }}
                        
                      >
                        view project
                      </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPreview3;
