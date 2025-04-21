import  { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {useDragControls } from "motion/react";
import "../../Skills.scss";
import { styled } from "@mui/material";

const Skills2 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const controls = useDragControls();
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

  // Using useTransform to map scroll progress to x translation
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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
      <motion.div ref={constraintsRef} >
        {/* <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
          className="skills-headline"
        >
          <div className="splahpart"></div>
          <motion.div className="card" variants={cardVariants}>
            Sneak A Peek At my Art!
          </motion.div>
        </motion.div> */}
          <motion.div ref={constraintsRef} id="funky-heading">
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
              My Art!
            </motion.div>
          </motion.div>
        </motion.div>
        <section
          ref={targetRef}
          className="art"
          style={{
            position: "relative",
            height: "20vh",
            // backgroundColor: "grey",
            width:'100vw'
          }}
        >
          <div
            style={{
              height: "99vh",
              position: "sticky",
              top: 0,
              // backgroundColor: "purple",
              display: "flex",
              justifyItems: "center",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                display: "flex",
                gap: "4px",
                x, 
              }}
            >
              <img
                src="src/assets/slider/image1.jpg"
                style={{
                  height: "400px",
                  width: "400px",
                }}
              />
              <img
                src="src/assets/slider/image2.jpg"
                style={{
                  height: "400px",
                  width: "400px",
                }}
              />
              <img
                src="src/assets/slider/image3.jpg"
                style={{
                  height: "400px",
                  width: "400px",
                }}
              />
              <img
                src="src/assets/slider/image4.jpg"
                style={{
                  height: "400px",
                  width: "400px",
                }}
              />
             
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Skills2;
