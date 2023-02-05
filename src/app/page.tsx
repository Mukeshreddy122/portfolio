"use client";
import { Inter } from '@next/font/google'
import About from '../../components/About'
import Header from 'components/Header'
import Hero from 'components/Hero';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory overflow-scroll z-0">
      {/* header */}
      <Header/>
      {/* hero */}
      <section id='hero' className='snap-center'>
        <Hero/>

      </section>
      {/* about */}
       {/* about */}
       <section id="about">
        <About/>
      </section>
      {/* experience */}
      {/* skills */}
      {/* projects */}
      {/* experience */}
      {/* skills */}
      {/* projeects */}
      {/* contact me */}

    </div>
  )
}
