import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

const Hero = (props: Props) => {
  const [text, setText] = useTypewriter({
    words: [
      "Hi , This is Sai Mukesh Reddy Vancha",
      "Guy-who-loves-food.jsx",
      "<ButInLoveWithCoding />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://lh3.googleusercontent.com/Y27ebc7U7SKMxyfSb33LnVSBh5EbNNjYMGtBzDr1MDAoPIfBvtV5I9tPBzo0CBqSAlHj3U7HziKsONBFNo1hKDEviFqHOrY8Vdt39DkQ5dUQ-ckUpwcbQJgn21hyEt5Etu2OjV8-EEfqyS1jUW7PXnLX9Gg7c0WkSkuZS0qVmQhg94TOLU-93dqSM9rCnLleFGnk3VPgup06duXzb34DomGoIuFxzEzAikL0Ju5RpMO_1q_mn8NQ7WPbA3XASCnk08Lk3u9IqaV8R8mwyGYV_EQqWCWQpx-uPy0SKGvgsI0iG_AEiGpVfJHAbZcwLqDkdaqcnhkCgzbxKMtV0DrCpsJ5qvH6ELqidO8-jfK7qTe6GDK4MYfJVDDd65_AChsX9m4Ww1v57wwjwdTTurT0NAvNYzZ1SBXDBoT4OKY4PtTumTsHeV3TCyNo-PmWoBNmOEXz74FTXp0KRiNZB-uvL1iqlx_vaHiarNm2ZTTIgyRi5iFDmxrCvtHGnzuwS9qmbnBReFvoMGPxeWePpgzI07ipSGYlv7QZgce_uOUakE2XzajeCFlgzQeWJDcffsFSDI92-tGlxilHTh0gpWMvlnvL0GN4pu2xe7xg98wTPMhb95PSJZJqrJ1e4FOwZGA6I-QuBWUYndJJYq8GsIgosqCHaMWVyQXV_e6OfXOnXvAy3BzJvL5rMYVcEXexDJkLERagi_5z6O-yiZrS2l5NSZjNRT2nnmxA4nnAna002finElkOxf7hURObsTFk1LOGkkEyR6U4600ZPZUVd3567IdQKrVpd8Oons-MIpDjvWTFZuT8J-NIXaLgSLIb0c9cQz8IpLpUNQdouCg7xXeXIdybAzkuLq2t4ZLBzh99gd3h_lmF8BW0FED9LnvEtdAz2pTca2cWhas_jNd6gsmSWUBFf0oDomt0mRtvPR3K8ZFxKw=w814-h903-no?authuser=0"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt="myImage"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A"></Cursor>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="menuItemClass">About</button>
          </Link>
          <Link href="experience">
            <button className="menuItemClass">Experience</button>
          </Link >
          <Link href="skills">
            <button className="menuItemClass">Skills</button>
          </Link>
          <Link href="projects">
            <button className="menuItemClass">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
