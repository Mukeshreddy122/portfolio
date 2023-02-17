import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        x: -200,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.2,
      }}
      className="h-screen flex flex-col  relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px] xl:mt-40"
        src="https://lh3.googleusercontent.com/vVOAlI-M-gaX8hIhrBkEnwUE8ywKWuyhLKWaTsEd6tfZlvLQnUtmqluXaOkqgUFxrXAGIY3kapH7wMDlFyx7wX7EMkrJsqiINft3R2QCRCqTre8Lquh07NEmSDGEoZackia-xfos-ytRHBAoOJOcQ04vurBBxA3OL5zbeluJrcCU9ElnqzHCR0r4gjs35r6ro2L3atiE2CPG_vemp1N0PI8oErEjl9v73ScJqfnKsXTc5TVrclRLfP2YQwM17FF173RL3a5EiF6FynraGvSaEpEn78RTULluWqYq2CDn9jJQ6S8ozyhWWSt4AgsflPc2sE2cBIQ4c32yh964Gpxser62iN9enKiVW6CfaHWk04ea7bU8WJ5FVHZ_z2NeUOTrbSIoZQrTIH1quduhmYEpOqFNV-lSVGqOjD7Ypz05nQtEeQkFRqW5QozdbicBSdHqXMcHfQsvCBAsMtyg36-eJgPdfHIeapNUfI8YiMzMIWfqHQ9ko-lfnMbY87csS6-nmJiMHtGccpdwtZPEr7Bzh9ga9XM1XMW4jb2G1FM1D3is_Y59xlyKfH5t3xZfXz9EEPdXPhnfr2iwZYhuntEPnk1WzpGS2h64cCGOFtkWFD0-LhwwnjkuUcYElvgJ3VjHxLwJpQECVLwm2r2unQ1n6cSxN0skpp-3AO4qgOj_A_PsEZdDZkyKB3LDBG46klP1x-p_jsQjDbfvKYktau2Z1P60QwMecOQ22XyZo5fhBrRvGalMzG6a_eXygRKhyiiUqwcnXtQaEJAc7x6gdR-vWDomccqk_HIr8jZEp2fmOtxEc5zVa7RPbR7f3XPnza_vGBLyrNA2GsoTyjYg2Ew_aiCCgUZ5UNC-0TxnOG9eRdHU5uxaKM1dhETIx13yZCzD4duovx9YFuWzEBsObxUMPge2ugmX2nlOxGgsofPULeI3LQ=w678-h903-no?authuser=0"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little </span>
          background : ;
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
          magni. Consequatur voluptatem vitae minus eaque iusto perspiciatis
          ipsum alias velit?
        </p>
      </div>
    </motion.div>
  );
}

export default About;
