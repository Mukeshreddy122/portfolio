import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity:[0.1,0.2,0.4,0.8,0.1,0.1],
      }}
      transition={{
        duration:2.5
      }}
      className="relative flex justify-center items-center"
    >
       <div className="rounded-full border-2  border-[#7f7f7f]   h-[300px] w-[300px] absolute mt-52 animate-ping" />
       {/* <div className="rounded-full border-2  border-[#fcb316]   h-[400px] w-[400px] absolute mt-52 animate-ping" /> */}
      <div className="rounded-full border-2  border-[#fcb316] opacity-100  h-[600px] w-[600px] absolute mt-52 animate-pulse" /> 

    </motion.div>
  );
};

export default BackgroundCircles;
