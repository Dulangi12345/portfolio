import { dividerClasses } from "@mui/material";
import { useParams } from "react-router-dom";

const Page = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "Dummy title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet efficitur leo. Duis dignissim mauris id purus volutpat, ac consectetur nisi lobortis. Duis tempus ligula vitae nisi mollis, vitae scelerisque mi rhoncus. Curabitur nisi ante, aliquet eu est ut, maximus accumsan tortor. Aliquam posuere lectus eget urna ultrices, sed rutrum ligula condimentum. Praesent in est a libero blandit sodales. Sed at est dignissim lectus commodo faucibus. Suspendisse facilisis nisl eu purus accumsan, in lacinia quam pharetra. Nunc ut tempor nunc",
      problem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet efficitur leo. Duis dignissim mauris id purus volutpat, ac consectetur nisi lobortis. Duis tempus ligula vitae nisi mollis, vitae scelerisque mi rhoncus. Curabitur nisi ante, aliquet eu est ut, maximus accumsan tortor. Aliquam posuere lectus eget urna ultrices, sed rutrum ligula condimentum. Praesent in est a libero blandit sodales. Sed at est dignissim lectus commodo faucibus. Suspendisse facilisis nisl eu purus accumsan, in lacinia quam pharetra. Nunc ut tempor nunc",
      solution:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet efficitur leo. Duis dignissim mauris id purus volutpat, ac consectetur nisi lobortis. Duis tempus ligula vitae nisi mollis, vitae scelerisque mi rhoncus. Curabitur nisi ante, aliquet eu est ut, maximus accumsan tortor. Aliquam posuere lectus eget urna ultrices, sed rutrum ligula condimentum. Praesent in est a libero blandit sodales. Sed at est dignissim lectus commodo faucibus. Suspendisse facilisis nisl eu purus accumsan, in lacinia quam pharetra. Nunc ut tempor nunc",
      images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg" ,"image5.jpg"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief overview of the project.",
      problem: "The challenge or issue the project addresses.",
      solution: "How the project solves the problem.",
      images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg" ,"image5.jpg"]
    },
  ];

  const targetProject = projects.find(
    (project) => project.id.toString() === id
  );
  const images = targetProject.images.map((image) => (
    <div key={image}>
      <img src={`../src/assets/slider/${image}`} alt="" />
    </div>
  ));
  return (
    <div id="project-grid">
      <div id="project">
        <h1 id="project-title">{targetProject.title}</h1>
        <div>
          <h2>Dizzying description</h2>
          <p>{targetProject.description}</p>
        </div>

        <div>
          <h2>The worrisome problem</h2>
          <p>{targetProject.problem}</p>
        </div>
        <div>
          <h2>Ha! A solution</h2>
          <p>{targetProject.solution}</p>
        </div>
      </div>
      <div id="project-images">{images}</div>

    </div>
  );
};

export default Page;
