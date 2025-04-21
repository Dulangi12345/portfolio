import { useEffect, useRef } from "react";
import React from "react";

const Illustration = () => {
  const mutationRef = useRef();

  const createLight = () => {
    const flowercontainer = mutationRef.current;
    if (!flowercontainer) return;

    const lights = document.querySelectorAll("#whole");
    const colors = ["#C63C51", "#3B1C32", "#6A1E55", "#A64D79"];
    let color = Math.floor(Math.random() * colors.length);
    const petals = document.querySelectorAll("#flower");
    petals.forEach((petal) => {
      petal.style.background = colors[color];
    });

    lights.forEach((light) => {
      light.style.opacity = "0";

      const translateX = Math.random() * 10 - 50;
      const translateY =
        Math.random() * window.innerHeight + window.innerHeight;
      const rotate = Math.random() * 50 - 10;
      const opacity = Math.random() *0.6;

      const keyframes = [
        { transform: `translate(0px, 0px) rotate(${rotate}deg)`, opacity: "0" },
        {
          transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
          opacity: 1,
          transition: "ease-out",
        },
        {
          transform: `translate(-${translateX}px, ${translateY}px) rotate(${-rotate}deg)`,
          opacity: `${opacity}`,
          transition: "ease-out",
        },
        {
          transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
          opacity: `${opacity}`,
          transition: "ease-in-out",
        },
      ];

      const options = {
        duration: 30000,
        easing: "linear",
        iterations: Infinity,
        delay: Math.random() * 2000,
      };

      light.animate(keyframes, options);
    });
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     createLight();
  //   }, 30000);

  //   clearInterval(() => {});
  // }, []);

  return (
    <div></div>
    // <div className="frame">
    //   <div className="whole" ref={mutationRef} id="whole">
    //     <div className="topside" id="topside">
    //       <div className="square" id="flower"></div>
    //       <div className="rectangle" id="flower"></div>
    //     </div>

    //     <div className="middle">
    //       <div className="middlecircle" id="flower"></div>
    //       <div className="circle-5" id="flower"></div>
    //       <div className="circle-6" id="flower"></div>
    //     </div>

    //     <div className="bottomside">
    //       <div className="circle" id="flower"></div>
    //       <div className="triangle" id="flower"></div>
    //     </div>
    //   </div>

    //   <div className="whole" ref={mutationRef} id="whole">
    //     <div className="topside" id="topside">
    //       <div className="square" id="flower"></div>
    //       <div className="rectangle" id="flower"></div>
    //     </div>

    //     <div className="middle">
    //       <div className="middlecircle" id="flower"></div>
    //       <div className="circle-5" id="flower"></div>
    //       <div className="circle-6" id="flower"></div>
    //     </div>

    //     <div className="bottomside">
    //       <div className="circle" id="flower"></div>
    //       <div className="triangle" id="flower"></div>
    //     </div>
    //   </div>

    //   <div className="whole" ref={mutationRef} id="whole">
    //     <div className="topside" id="topside">
    //       <div className="square" id="flower"></div>
    //       <div className="rectangle" id="flower"></div>
    //     </div>

    //     <div className="middle">
    //       <div className="middlecircle" id="flower"></div>
    //       <div className="circle-5" id="flower"></div>
    //       <div className="circle-6" id="flower"></div>
    //     </div>

    //     <div className="bottomside">
    //       <div className="circle" id="flower"></div>
    //       <div className="triangle" id="flower"></div>
    //     </div>
    //   </div>

    //   <div className="whole" ref={mutationRef} id="whole">
    //     <div className="topside" id="topside">
    //       <div className="square" id="flower"></div>
    //       <div className="rectangle" id="flower"></div>
    //     </div>

    //     <div className="middle">
    //       <div className="middlecircle" id="flower"></div>
    //       <div className="circle-5" id="flower"></div>
    //       <div className="circle-6" id="flower"></div>
    //     </div>

    //     <div className="bottomside">
    //       <div className="circle" id="flower"></div>
    //       <div className="triangle" id="flower"></div>
    //     </div>
    //   </div>

    //   <div className="whole" ref={mutationRef} id="whole">
    //     <div className="topside" id="topside">
    //       <div className="square" id="flower"></div>
    //       <div className="rectangle" id="flower"></div>
    //     </div>

    //     <div className="middle">
    //       <div className="middlecircle" id="flower"></div>
    //       <div className="circle-5" id="flower"></div>
    //       <div className="circle-6" id="flower"></div>
    //     </div>

    //     <div className="bottomside">
    //       <div className="circle" id="flower"></div>
    //       <div className="triangle" id="flower"></div>
    //     </div>
    //   </div>

    //   <div className="whole" ref={mutationRef} id="whole">
    //     <div className="topside" id="topside">
    //       <div className="square" id="flower"></div>
    //       <div className="rectangle" id="flower"></div>
    //     </div>

    //     <div className="middle">
    //       <div className="middlecircle" id="flower"></div>
    //       <div className="circle-5" id="flower"></div>
    //       <div className="circle-6" id="flower"></div>
    //     </div>

    //     <div className="bottomside">
    //       <div className="circle" id="flower"></div>
    //       <div className="triangle" id="flower"></div>
    //     </div>
    //   </div>

    //   <div className="whole" ref={mutationRef} id="whole">
    //     <div className="topside" id="topside">
    //       <div className="square" id="flower"></div>
    //       <div className="rectangle" id="flower"></div>
    //     </div>

    //     <div className="middle">
    //       <div className="middlecircle" id="flower"></div>
    //       <div className="circle-5" id="flower"></div>
    //       <div className="circle-6" id="flower"></div>
    //     </div>

    //     <div className="bottomside">
    //       <div className="circle" id="flower"></div>
    //       <div className="triangle" id="flower"></div>
    //     </div>
    //   </div>

    //   <div className="whole" ref={mutationRef} id="whole">
    //     <div className="topside" id="topside">
    //       <div className="square" id="flower"></div>
    //       <div className="rectangle" id="flower"></div>
    //     </div>

    //     <div className="middle">
    //       <div className="middlecircle" id="flower"></div>
    //       <div className="circle-5" id="flower"></div>
    //       <div className="circle-6" id="flower"></div>
    //     </div>

    //     <div className="bottomside">
    //       <div className="circle" id="flower"></div>
    //       <div className="triangle" id="flower"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Illustration;
