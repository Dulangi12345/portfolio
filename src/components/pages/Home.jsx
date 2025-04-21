
import { useEffect, useState } from "react";


const HomePage = () => {
  const [falling, setFalling] = useState(false);

  // Handle the page scroll effect when falling starts
  useEffect(() => {
    if (falling) {
      // Start scrolling the page when the fall begins
      const scrollInterval = setInterval(() => {
        window.scrollBy(0, 2); // Scrolls the page 20px down every 100ms
      }, 10);

      // Stop scrolling after 5 seconds
      setTimeout(() => {
        clearInterval(scrollInterval);
      }, 5000); // Stop after 5 seconds
    }
  }, [falling]); // Effect depends on `falling` state

  // Function to start the falling animation
  const startFalling = () => {
    setFalling(true); // Set falling to true, which triggers the effect
  };

  return (
    <div>

      <div className="Grid">
        <div className="NameBox">
          {/* <h1 id="name">Portfolio</h1> */}
{/* 
          <p className="paragraph">
            I am dulangi, a software engineer with a special interest in UI UX.
            Check out my projects and get in touch with me if you need my
            services
          </p> */}
          {/* <button id="fallbutton" onClick={startFalling}>
          Fall down the rabbit hole
        </button>

        <div className="container">
          <div className="hole">
            <div className={`image ${falling ? "falling" : ""}`} id="alice"></div>
          </div>
        </div>
        </div> */}
        </div>
        <div className="ImageBox">
          <div>
            {/* <img src="src/assets/homepage1.jpg" alt="" id="bg1"/> */}
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default HomePage;
