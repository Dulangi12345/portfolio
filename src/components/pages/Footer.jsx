import { AnimatePresence, motion, useDragControls } from "motion/react";
import { useEffect, useState, useRef } from "react";

const Footer = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const controls = useDragControls();
  const constraintsRef = useRef(null);

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

  return (
    <>
      <div id="clouds">
        <div class="cloud-circle"></div>
        <div class="cloud-circle"></div>
        <div class="cloud-circle"></div>
        <div class="cloud-circle"></div>
        <div class="cloud-circle"></div>
        <div class="cloud-circle"></div>
        <div class="cloud-circle"></div>
        <div class="cloud-circle"></div>
        <div class="cloud-circle"></div>
      </div>

      {/* <div id="clouds">
      <div
        className="cloud1"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-80px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "-150px",
        }}
      ></div>

      <div
        className="cloud2"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-80px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
        }}
      ></div>

      <div
        className="cloud3"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-50px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "150px",
        }}
      ></div> */}
      {/* <div
        className="cloud4"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-80px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "280px",
        }}
      ></div>
      <div
        className="cloud5"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-50px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "450px",
        }}
      ></div> */}

      {/* <div
        className="cloud6"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-80px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "600px",
        }}
      ></div>

      <div
        className="cloud7"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-50px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "750px",
        }}
      ></div>

      <div
        className="cloud8"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-80px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "900px",
        }}
      ></div> */}
      {/* <div
        className="cloud9"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-50px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
        }}
      ></div>
      <div
        className="cloud10"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-80px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "1200px",
        }}
      ></div>

      <div
        className="cloud11"
        style={{
          backgroundColor: "#EFB6C8",
          marginTop: "-50px",
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "100%",
          marginLeft: "1350px",
        }}
      ></div>
      </div>  */}

      <div>
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
              Reach Out to Me!
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="contact">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            molestie varius diam, in egestas mauris gravida ut. Duis mollis,
            urna a consectetur blandit, magna purus gravida libero, vel egestas
            tellus augue a lacus. Nulla non enim ac lorem consectetur mattis vel
            in nulla. Vivamus sed ultrices ipsum
          </p>

          <ul
            id="contact-list"
            style={{
              listStyle: "none",
            }}
          >
            <li>
              {" "}
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>{" "}
                LinkedIn
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              +94 76 126 2958
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              dulangi2002@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
