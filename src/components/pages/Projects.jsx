import { useEffect, useRef , useState } from "react";
import ProjectPopUp from "./ProjectPopUp";

const Projects = () => {
  const canvasRef = useRef(null);
  const [isPopUpOpen, setIsPopUpOpen] =useState(null)
  const [openedItem , setOpenedItem] = useState(null)
  const [openedItemDetails , setOpenedItemDetails] = useState({ title: null, description: null });


  useEffect(() => {
    const drawGrid = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;

      const gridSize = 200;

      ctx.fillStyle = "#F5F5F7";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "black";
      ctx.lineWidth = 0.1;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(110, 150, 180, 10, 210, 140);
      ctx.stroke();



      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    drawGrid();
    window.addEventListener("resize", drawGrid);
    return () => window.removeEventListener("resize", drawGrid);
  }, []);

  const projectsArray = [
    {
      title: "Sign Langauge Translator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu scelerisque elit. Proin tempor efficitur sem, id gravida eros eleifend at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin pharetra quis lacus quis fringilla. Suspendisse tortor mi, iaculis nec egestas eget, fermentum vel odio. Sed elit arcu, dapibus vitae dignissim nec, condimentum eget ante. Phasellus tempor venenatis fringilla. Nullam non egestas ex. Vivamus vehicula felis non nulla tincidunt bibendum. Vestibulum sem diam, tempus eu consequat quis, eleifend vel mauris. Curabitur vulputate nunc et arcu luctus mollis. Duis lacinia eget lorem at cursus. In hac habitasse platea dictumst. Aliquam dapibus auctor interdum. ",
      images: ["forza5.jpg", "alice.png", "homepage1.jpg", "bg.png"],
      keywords: ["Machine learning", "OpenCV"],
      key: "1",
      techstacks: ["Python"],
    },
  ];

  const projects = projectsArray.map((project) => (
    <div className="Project" key={project.key}>
      <div>
        <div className="project-title">{project.title}</div>
        <div className="project-description">{project.description}</div>
        <div className="project-techstack">
          Technology Stack :
          {project.techstacks.map((techstack, index) => (
            <span key={index} className="project-techstacks">
              {" "}
              {techstack}
            </span>
          ))}
        </div>

        <div className="project-keys">
          Keywords :
          {project.keywords.map((keyword, index) => (
            <span key={index} className="project-keywords">
              {" "}
              {keyword}
            </span>
          ))}
        </div>
        <div>
          <button onClick={()=>{
            setOpenedItem(project);
            setOpenedItemDetails({
              title:project.title,
              description:project.description
            })
            setIsPopUpOpen(true)
          }}>Explore project</button>
        </div>
      </div>

      <div className="images-container" id="images-container">
        <div className="image-container">
          {project.images.map((image, index) => (
            <div key={index}>
              <img src={`src/assets/${image}`} alt="" />
            </div>
          ))}
        </div>
      </div>
      {
        isPopUpOpen && (
          <div>
<ProjectPopUp item={{ title:openedItemDetails.title , description:openedItemDetails.description}} />
          </div>

        )
      }
    </div>
  ));

  return (
    <>
      <canvas ref={canvasRef} id="canvas">
        {" "}
      </canvas>

      <div className="headline">
        <div className="box"></div>

        <h1>Take a look at some projects I have done! </h1>
        <p>
          I have tried using different programming languages and tech stacks to
          make myself an all rounder! An added benefit is that I get to identify
          which technologies I am most comfortable with!
        </p>
      </div>

      <div className="projectsDashboard">
        <div className="grid-container">{projects}</div>
      </div>
    </>
  );
};

export default Projects;
