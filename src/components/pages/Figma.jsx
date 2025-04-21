import React, { useEffect, useRef, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useAnimate, useDragControls, useInView } from "framer-motion";
import { motion } from "motion/react";
import FigmaPopUp from "./FigmaPopUp";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie varius diam, in egestas mauris gravida ut. Duis mollis, urna a consectetur blandit, magna purus gravida libero, vel egestas tellus augue a lacus. Nulla non enim ac lorem consectetur mattis vel in nulla. Vivamus sed ultrices ipsum,",

    featured: true,
    link: "rjwhg",
    color: "#2E073F",
  },

  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
    link: "rjwhg",
    color: "#EBD3F8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie varius diam, in egestas mauris gravida ut. Duis mollis, urna a consectetur blandit, magna purus gravida libero, vel egestas tellus augue a lacus. Nulla non enim ac lorem consectetur mattis vel in nulla. Vivamus sed ultrices ipsum,",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    link: "rjwhg",
    color: "#E0E5B6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie varius diam, in egestas mauris gravida ut. Duis mollis, urna a consectetur blandit, magna purus gravida libero, vel egestas tellus augue a lacus. Nulla non enim ac lorem consectetur mattis vel in nulla. Vivamus sed ultrices ipsum,",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
    link: "rjwhg",
    color: "#EBD3F8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie varius diam, in egestas mauris gravida ut. Duis mollis, urna a consectetur blandit, magna purus gravida libero, vel egestas tellus augue a lacus. Nulla non enim ac lorem consectetur mattis vel in nulla. Vivamus sed ultrices ipsum,",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
    color: "#EBD3F8",
    link: "rjwhg",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie varius diam, in egestas mauris gravida ut. Duis mollis, urna a consectetur blandit, magna purus gravida libero, vel egestas tellus augue a lacus. Nulla non enim ac lorem consectetur mattis vel in nulla. Vivamus sed ultrices ipsum,",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    color: "#EBD3F8",

    link: "rjwhg",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie varius diam, in egestas mauris gravida ut. Duis mollis, urna a consectetur blandit, magna purus gravida libero, vel egestas tellus augue a lacus. Nulla non enim ac lorem consectetur mattis vel in nulla. Vivamus sed ultrices ipsum,",
  },
];

const Figma = () => {
  const [scope, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openedItem, setOpenedItem] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const controls = useDragControls();
  const constraintsRef = useRef(null);

  const [openedItemDetails, setOpenedItemDetails] = useState({
    title: null,
    description: null,
  });

  //   useEffect(() => {
  //     if (isInView) {
  //       animate(scope.current, { opacity: 1 }, { duration: 0.5 });
  //     } else {
  //       animate(scope.current, { opacity: 0 }, { duration: 0.5 }); // Reset opacity when out of view
  //     }
  //   }, [isInView, animate]);

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

  const FigmaSet = itemData.map((item, index) => (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      key={index}
      className="figma-container-item"
      style={{
        position: "relative", // Ensures the description is positioned relative to the container
      }}
    >
      <img
        src={`${item.img}`}
        alt=""
        style={{
          height: "inherit",
          width: "inherit",
          borderRadius: "inherit",
        }}
      />
      <p
        className="figma-description"
        style={{
          backgroundColor: `${item.color}`,
          width: "auto", // Ensures it spans the width of the container
          height: "auto", // Sets the height for the description
          position: "absolute", // Absolutely position the description
          bottom: "0", // Places the description at the bottom of the container
          margin: "0", // Removes any default margin
          padding: "10px",
          borderRadius: "10px",

          // Adds some padding to ensure content doesn't touch the edges
        }}
      >
        <h1 className="figma-title">{item.title}</h1>

        {item.description}
        <br></br>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="figma-button"
          style={{
            width: "50%",
            justifyContent: "center",
          }}
          onClick={() => {
            setOpenedItem(item);
            setOpenedItemDetails({
              title: item.title,
              description: item.description,
            });
            setIsPopUpOpen(true);
          }}
        >
          visit template
        </motion.button>
        {/* {isHovered && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              width: "50%",
              justifyContent: "center",
              position: "absolute",
            }}
            onClick={() => {
              setOpenedItem(item);
              setOpenedItemDetails({
                title: item.title,
                description: item.description,
              });
              setIsPopUpOpen(true);
            }}
          >
            visit template
          </motion.button>
        )} */}

        {/* <p>{item.link}</p> */}
      </p>
    </motion.div>
  ));

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
          Figma Templates
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
           Figma Projects!
          </motion.div>
        </motion.div>
      </motion.div>


      <div className="figma-paragraph" style={{
        marginTop:""
      }}>
        <p>
          While I am passionate about coding and building useful software
          solutions, I love working on the UI aspect of web developement as
          well. While the way i view things and my style may not come across a
          techy, i tend to gravitate towards more artistic and colorful UI
          designs. But that does not mean I cannot be whip up a cool techy
          design whenever I want to!
        </p>
      </div>

      <div id="figma-start">{FigmaSet}</div>

      {isPopUpOpen && (
        <div className="popup">
          <FigmaPopUp
            item={{
              title: openedItemDetails.title,
              description: openedItemDetails.description,
            }}
          />
        </div>
      )}
    </>
  );
};

export default Figma;
