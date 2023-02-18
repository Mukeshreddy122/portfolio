import React from 'react'
import {motion} from "framer-motion"
import ExperienceCard from './ExperienceCard'
type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{
        x: -200,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.2,
      }}
      className="h-screen flex flex-col overflow-hidden relative text-center text-lft  md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 my-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
     <div className='w-full flex py-10 space-x-5 overflow-x-scroll'>
      <ExperienceCard/>
      <ExperienceCard/>
      <ExperienceCard/>

      {/* experience cards */}
      {/* experience cards */}
      {/* experience cards */}

     </div>

    </motion.div>
  )
}

export default Experience