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
      <div className="absolute border  border-[#333333] rounded-full w=[200px] h-[200px] mt-52 animate-ping " />
      <div className="absolute border  border-[#333333] rounded-full w=[300px] h-[300px] mt-52 animate-ping " />
      <div className="absolute border  border-[#333333] rounded-full w=[500px] h-[500px] mt-52 animate-ping " />
      <div className="rounded-full border  border-[#F7AB0A] opacity-10  h-[700px] w-[700px] absolute mt-52 animate-pulse" />
      <div className="" />
    </motion.div>
  );
};

export default BackgroundCircles;
