import React from "react";
import {motion} from "framer-motion"
import Skill from "./Skill";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        x: -200,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.2,
      }}
      className="h-screen flex flex-col  relative text-center   md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-aut0 items-center"
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>
      <h3 className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm py-10">Hover over a skill for currency proficiency</h3>
    <div className="grid grid-cols-4 gap-5">
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>

        

    </div>
   
   
    </motion.div>
  );
}

export default Skills;
