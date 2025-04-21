import {
  AnimatePresence,
  motion,
  useDragControls
} from "motion/react";
import { useEffect, useState, useRef } from "react";

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const controls = useDragControls();
  const constraintsRef = useRef(null)

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

  const skills = [
    { text: "Python", logo: "python.png" },
    { text: "Java", logo: "java.jpg" },
    { text: "PHP", logo: "php.jpg" },
    { text: "ReactJS", logo: "reactjs.jpg" },
    { text: "Tailwind CSS", logo: "tailwindcss.jpg" },
    { text: "NodeJS", logo: "nodejs.jpg" },
    { text: "Firebase", logo: "firebase.jpg" },
    { text: "SQL", logo: "mysql.jpg" },
    { text: "PostgreSQL", logo: "postgresql.jpg" },
    { text: "MongoDB", logo: "mongodb.jpg" },
    { text: "C#", logo: "csharp.jpg" },
    { text: "GitHub", logo: "github.jpg" },
    { text: "Dart", logo: "dart.jpg" },
    { text: "Flutter", logo: "flutter.jpg" },
    { text: "Vue JS", logo: "vue.jpg" },
    { text: "JQuery", logo: "jquery.jpg" },
    { text: "IntelliJ", logo: "intellij.jpg" },
    { text: "Laravel", logo: "laravel.jpg" },
    { text: "VS-Code", logo: "vscode.jpg" },
  ];

  const cubeVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const skilllist = skills.map((skill ,index)=>(
    <div key={index} className="slant"> 
      {skill.text} 
    </div>
  ))

  const skillSet = skills.map((skill, index) => (
    <div key={index} style={{
      flex:"wrap",
      justifyContent:"center",
      margin:"auto",
      alignItems:"center",
      padding:"10px"
    }}>
      <div style={{
        width:"200px",
        height:"auto",
        borderRadius:"4px",
        alignItems:"center",
        display:"flex",
        flexDirection:"row",
        padding:"10px",
        boxShadow:"black 4px 4px",
        border:"black 2px solid",
        backgroundColor:"#FF8383",
        justifyContent:"center",
        hover:"pointer",
        fontFamily: "Ultra",
        fontWeight: 400,
        fontStyle: "normal"

      }}>
        <img src={`src/assets/logos/${skill.logo}`} alt="" style={{
          width:"50px",
          height:"50px",
          hover:"pointer"

        }}/>
        <span style={{
                  hover:"pointer"

        }}>{skill.text}</span>
      </div>
    </div>
  ));


  // const skillSet = skills.map((skill, index) => (
  //   <motion.div key={index} drag 
  //   dragMomentum={{
  //     left:0 , right:300
  //   }}
  //   dragConstraints={constraintsRef}
  //   dragControls={controls}>
  //     <div className="cube-background" 
  //     style={{
  //       touchAction:"none"
  //     }}
  //     onPointerDown={
  //       event=>controls.start(event)
  //     }>
  //       {/* <img
  //         src={`src/assets/logos/${skill.logo}`}
  //         alt={skill.text} // Add an alt attribute for accessibility
  //         style={{
  //           width: "50px", // Set a width for the image (adjust as needed)
  //           height: "50px", // Set a height for the image (adjust as needed)
  //         }}
  //       /> */}
  //       <div className="cube-body" ref={ref}>
  //         <motion.div className="cube" key={index}>
  //           <AnimatePresence>
  //             {isInView && (
  //               <motion.div
  //                 className="face top"
  //                 // initial={{ opacity: 0, scale: 0 }}
  //                 // animate={{ opacity: 1, scale: 0 }}
  //                 // exit={{ opacity: 1, scale: 2 }}
  //                 whileInView="onscreen"
  //                 viewport={{ amount: 0.8 }}
  //                 variants={cubeVariants}
  //                 style={{
  //                   backgroundImage: `url(src/assets/logos/${skill.logo})`,
  //                   backgroundSize: "cover",
  //                   backgroundPosition: "center",
  //                   width: "inherit",
  //                   height: "inherit",
  //                   position: "absolute",
  //                 }}
  //               >
  //                 {" "}
  //               </motion.div>
  //             )}
  //           </AnimatePresence>
  //           <motion.div
  //             className="face bottom"
  //             initial="offscreen"
  //             whileInView="onscreen"
  //             viewport={{ amount: 0.8 }}
  //             variants={cubeVariants}
  //             style={{
  //               backgroundImage: `url(src/assets/logos/${skill.logo})`,
  //               backgroundSize: "cover",
  //               backgroundPosition: "center",
  //               width: "inherit",
  //               height: "inherit",
  //             }}
  //           >
  //             {" "}
  //           </motion.div>
  //           <motion.div
  //             className="face left"
  //             initial="offscreen"
  //             whileInView="onscreen"
  //             viewport={{ amount: 0.8 }}
  //             variants={cubeVariants}
  //             style={{
  //               // backgroundImage: `url(src/assets/logos/${skill.logo})`,
  //               // backgroundSize: "cover",
  //               // backgroundPosition: "center",
  //               width: "inherit",
  //               height: "inherit",
  //               backgroundColor: "black",
  //             }}
  //           >
  //             {" "}
  //           </motion.div>
  //           <motion.div
  //             className="face right"
  //             initial="offscreen"
  //             whileInView="onscreen"
  //             viewport={{ amount: 0.8 }}
  //             variants={cubeVariants}
  //             style={{
  //               // backgroundImage: `url(src/assets/logos/${skill.logo})`,
  //               // backgroundSize: "cover",
  //               // backgroundPosition: "center",
  //               width: "inherit",
  //               height: "inherit",
  //               backgroundColor: "black",
  //             }}
  //           >
  //             {" "}
  //           </motion.div>
  //           <motion.div
  //             className="face front"
  //             initial="offscreen"
  //             whileInView="onscreen"
  //             viewport={{ amount: 0.8 }}
  //             variants={cubeVariants}
  //             style={{
  //               backgroundImage: `url(src/assets/logos/${skill.logo})`,
  //               backgroundSize: "cover",
  //               backgroundPosition: "center",
  //               width: "inherit",
  //               height: "inherit",
  //             }}
  //           >
  //             {" "}
  //           </motion.div>
  //           <motion.div
  //             className="face back"
  //             initial="offscreen"
  //             whileInView="onscreen"
  //             viewport={{ amount: 0.8 }}
  //             variants={cubeVariants}
  //             style={{
  //               backgroundImage: `url(src/assets/logos/${skill.logo})`,
  //               backgroundSize: "cover",
  //               backgroundPosition: "center",
  //               width: "inherit",
  //               height: "inherit",
  //             }}
  //           >
  //             {" "}
  //           </motion.div>
  //         </motion.div>
  //       </div>
  //       <div
  //         className="back-gradient"
  //         style={
  //           {
  //             // // backgroundImage: `url(src/assets/logos/${skill.logo})`,
  //             // // backgroundSize: "cover",
  //             // backgroundPosition: "center",
  //             // width: "inherit",
  //             // height: "inherit",
  //           }
  //         }
  //       >
  //         {" "}
  //       </div>
  //     </div>
  //   </motion.div>
  // ));

  // inView("section", ({target}) =>{
  //   animate(
  //       target.querySelector("pre"),
  //       {opacity : 1 , x :[-100 ,0]},
  //       {
  //           duration:0.9,
  //           easing:[0.17 , 0.55 , 0.55 ,1]
  //       }
  //   )
  // })

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
      <motion.div ref={constraintsRef}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
          className="skills-headline"
        >
          <div className="splahpart"></div>
          <motion.div className="card" variants={cardVariants}>
            Technical Skills
          </motion.div>
        </motion.div>
        <div>
          {/* <div style={{
            width:"100%",
            color:"white",
            display:"flex",
            gap:"20px",
            flexDirection:"row",
            rotate:"-4deg",
            zIndex:"100",
            position:"absolute",
            marginTop:"-100px",
            height:"auto",
            textAlign:"center",
            justifyContent:"center",
    

          }}>
            <span
            className="span-skills-moving"
             style={{
              display:"flex",
              flexDirection:"row",
              fontSize:"auto",
              gap:"40px",
            }}>
            {skilllist}
            {skilllist}
            {skilllist}
            {skilllist}
            {skilllist}
            </span>
          </div> */}
          <div className="skills-paragraph" style={{
            zIndex:"100000",
            position:"relative"
          }}>
            <p>
              These are some programming languages and frameworks I work with!
              But languages and frameworks go in and out of fashion. So learning the 
              basic and fundemental concepts are what matters most , to make your skills
              transferable! 
            </p>
            <div className="skills"> {skillSet}</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
