import { useEffect } from "react"


const ProjectPopUp =({item})=>{

    useEffect(() => {
        console.log(item.title);
    }, [item.title]); // Add dependencies to ensure useEffect runs only when title changes

    return (
        <div
            style={{
                backgroundColor: "pink",
                width: "200px",
                height: "200px",
                justifyContent: "center",
                position: "relative", // Added position for `left` to work
                left: 0,
            }}
        >
            <p
                style={{
                    color: "black",
                }}
            >
                {item.title}
            </p>
            <p>{item.description}</p>
        </div>
    );
};

export default ProjectPopUp;