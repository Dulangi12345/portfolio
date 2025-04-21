import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ProjectsPreview2 = () => {
  function changeHeight() {
    const item5 = document.getElementById("item5");
    const item6 = document.getElementById("item6");
    const hidden7 = document.getElementById("hidden7");
    hidden7.style.visibility = "hidden";

    item5.style.height = "400px";
    item6.style.height = "100px";
    item5.style.transitionDuration = "1s";
    item5.style.transitionBehavior = "ease-in-out";
    item6.style.transitionDuration = "2s";
    item6.style.transitionBehavior = "ease-in-out";
    makeVisible();
  }

  function makeVisible() {
    const hidden8 = document.getElementById("hidden8");
    hidden8.style.visibility = "visible";
    hidden8.style.transitionDelay = "0.5s";
    hidden8.style.transitionBehavior = "ease-in-out";
  }

  function restoreHeight() {
    const item5 = document.getElementById("item5");
    const item6 = document.getElementById("item6");

    item5.style.height = "100px";
    item6.style.height = "400px";
    item6.style.marginBottom = "-600px";
    item6.style.transitionDuration = "1s";
    item6.style.transitionBehavior = "ease-in-out";
    item5.style.transitionBehavior = "ease-in-out";
    restoreVisibility();
  }

  function restoreVisibility() {
    const hidden7 = document.getElementById("hidden7");
    hidden7.style.visibility = "visible";
    hidden7.style.transitionDelay = "0.5s";
    hidden7.style.transitionBehavior = "ease-in-out";
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          width: "400px",
        }}
      >
        <div
          id="item5"
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
            Project 3{" "}
          </h1>

          <div
            id="hidden8"
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
          id="item6"
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
            Project 4{" "}
          </h1>

          <div
            id="hidden7"
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

export default ProjectsPreview2;
