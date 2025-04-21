import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();
  const [targetProject, setTargetProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief overview of the project.",
      problem: "The challenge or issue the project addresses.",
      solution: "How the project solves the problem.",
      images: ["image1.jpg", "image2.jpg"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief overview of the project.",
      problem: "The challenge or issue the project addresses.",
      solution: "How the project solves the problem.",
      images: ["image3.jpg", "image4.jpg"],
    },
  ];

  useEffect(() => {
    const project = projects.find(
      (project) => project.id === parseInt(id)
    );
    setTargetProject(project);
  }, [id]);

  if (!targetProject) return <div>Loading...</div>;

  return (
    <div>
      <h1>{targetProject.title}</h1>
      <p>{targetProject.description}</p>
      <p>{targetProject.problem}</p>
      <p>{targetProject.solution}</p>
      <div>
        {targetProject.images.map((image) => (
          <div key={image}>
            <img src={image} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
