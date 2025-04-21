import { dividerClasses } from "@mui/material";

const Page = ({ requestedTitle })=>{

    const Figmaprojects = [
        {
          title: "Project 1",
          description: "A brief overview of the project.",
          problem: "The challenge or issue the project addresses.",
          solution: "How the project solves the problem.",
          images: ["image1.jpg", "image2.jpg"]
        },
        {
          title: "Project 2",
          description: "A brief overview of the project.",
          problem: "The challenge or issue the project addresses.",
          solution: "How the project solves the problem.",
          images: ["image3.jpg", "image4.jpg"]
        }
      ];
      

    const targetProject = Figmaprojects.filter(project => project.title === requestedTitle );
    const images  = targetProject.images.map(image=> (
        <div key={image}>
            <img src={image} alt="" />
        </div>
    ))
    return(
        <div>
            <div className="blogs-paragraph">
                <h1>{targetProject.title}</h1>
                <p>
                    {targetProject.description}
                </p>
            </div>
            <div >
                {targetProject.problem}
            </div>
            <div>
                {images}
            </div>
        </div>
    )

}

export default Page;