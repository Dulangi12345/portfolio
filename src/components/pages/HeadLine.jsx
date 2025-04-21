import React, { Children, useEffect } from "react";
import { transform, useAnimate, useInView  , motion} from 'framer-motion';

const Headline = () => {

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope); 

    useEffect(() => {
    if (isInView) {
      animate(scope.current , {opacity:1  ,  transition: {ease:"ease-in-out" ,   duration:3}});
    } else {
      animate(scope.current , { opacity:0  , transition: {ease:"ease-in-out" , duration:3}}); // Reset opacity when out of view
    } 
  }, [isInView, animate]);
  return (
    <>
      <motion.div className="headline-cv" ref={scope} style={{
        opacity:0,
        rotate:"50deg",
        transition:"ease-in-out",
      }}>Technical Skills</motion.div>
      <div className="headline-cv-p">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum blandit eleifend. Donec eros ex, auctor sed auctor eget,
          lacinia ut augue. Sed erat risus, suscipit vitae fringilla quis,
          feugiat et leo. Phasellus enim mauris, luctus sed orci quis,
          scelerisque vulputate dolor. Pellentesque sodales dui odio, sed
          faucibus turpis sollicitudin a. In eu turpis mi. Suspendisse ultrices
          vehicula ante sit amet dictum. Aliquam erat volutpat.
        </p>
      </div>
    </>
  );
};

export default Headline;