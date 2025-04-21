import ProjectsPreview from "./ProjectsPreview";
import { motion } from "motion/react";
import ProjectsPreview2 from "./ProjectsPreview2";
import ProjectsPreview3 from "./ProjectsPreview3";
import { useEffect, useRef, useState } from "react";

const ProjectsAll = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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
  return (
    <>
      <motion.div
        ref={constraintsRef}
        id="funky-heading"
        style={{
          zIndex: "20000000000",
        }}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
          className="skills-headline"
        >
          <div
            className="splahpart"
            style={{
              position: "relative",
            }}
          ></div>
          <motion.div className="card" id="text" variants={cardVariants}>
            My Projects!
          </motion.div>
        </motion.div>
      </motion.div>

      <div id="projects-all" className="projects-all">
        <div id="set1">
          <ProjectsPreview />
        </div>

        <div id="set2">
          <ProjectsPreview2 />
        </div>

        <div id="set3">
          <ProjectsPreview3 />
        </div>
      </div>
    </>
  );
};

export default ProjectsAll;
