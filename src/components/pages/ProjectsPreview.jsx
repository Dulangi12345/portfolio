import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  function changeHeight() {
    const item = document.getElementById("item1");
    const item2 = document.getElementById("item4");
    const hidden2 = document.getElementById("hidden2");
    hidden2.style.visibility = "hidden";

    item.style.height = "400px";

    item2.style.height = "100px";
    item.style.transitionDuration = "1s";
    item.style.transitionBehavior = "ease-in-out";
    item2.style.transitionDuration = "2s";
    item2.style.transitionBehavior = "ease-in-out";
    makeVisible();
  }

  function makeVisible() {
    const hidden = document.getElementById("hidden");
    hidden.style.visibility = "visible";
    hidden.style.transitionDelay = "0.5s";
    hidden.style.transitionBehavior = "ease-in-out";
  }

  function restoreHeight() {
    const item = document.getElementById("item1");
    const item2 = document.getElementById("item4");

    item.style.height = "100px";
    item2.style.height = "400px";
    item2.style.marginBottom = "-600px";
    item2.style.transitionDuration = "1s";
    item2.style.transitionBehavior = "ease-in-out";
    item.style.transitionBehavior = "ease-in-out";
    restoreVisibility();
  }

  function restoreVisibility() {
    const hidden2 = document.getElementById("hidden2");
    hidden2.style.visibility = "visible";
    hidden2.style.transitionDelay = "0.5s";
    hidden2.style.transitionBehavior = "ease-in-out";
  }

  const cardVariants = {
    offscreen: {
      y: 300,
      rotate: 30,
      opacity: 0,
    },
    onscreen: {
      y: 50,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  3;

  return (
    <>
      {/* <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        className="skills-headline"
        style={{
          position: "relative",
          top: 0,
        }}
      >
        <div className="splahpart"></div>
        <motion.div className="card" variants={cardVariants}>
          Browse Projects
        </motion.div>
      </motion.div> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          width: "400px",
         
        }}
      >
        <div
          id="item1"
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
            id="hidden"
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
          id="item4"
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
            id="hidden2"
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

export default ProjectsPreview;
