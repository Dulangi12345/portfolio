import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <>
      <div
       id="about-us-main"
      >
        <div
        id="about-us-first"
 
        >
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Welcome!")
                  .start();
              }}
            />
          </h1>
          <p
         
          >
            I am Dulangi, an aspriring software engineer. I compiled this
            portfolio to show you my skills and the projects I have worked on.
            The art you see on this portfolio were all designed by me. This way
            I felt I would have more creative freedom over my portfolio. If you
            feel like you need my services as a software developer or a UI/UX
            developer feel free to contact me!
          </p>
        </div>

        <div
          id="about-us-second"
    
        >
          <img src="src/assets/logotext.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
