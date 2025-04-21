import { dividerClasses } from "@mui/material";

const Page = ({ requestedTitle })=>{

    const artProjects = [
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
      

    const targetArtProject = artProjects.filter(artproject => artproject.title === requestedTitle );
    const images  = targetArtProject.images.map(image=> (
        <div key={image}>
            <img src={image} alt="" />
        </div>
    ))
    return(
        <div>
            <div className="blogs-paragraph">
                <h1>{targetArtProject.title}</h1>
                <p>
                    {targetArtProject.description}
                </p>
            </div>
            <div >
                {targetArtProject.problem}
            </div>
            <div>
                {images}
            </div>
        </div>
    )

}

export default Page;