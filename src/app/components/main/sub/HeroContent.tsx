"use client"
import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../../../utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from "next/image"

// Custom hook to get the window dimensions
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const HeroContent = () => {
  const { width } = useWindowDimensions();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col md:flex-row items-center justify-center px-20 mt-40 w-full z-[20] ${width > 768 ? 'justify-between' : ''}`}
    >
      <div className='flex flex-col gap-5 justify-center m-auto text-start pl-0 md:pl-10'>
        <motion.div 
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
        <h1 className='Welcome-text text-[13px]'>Full Stack Developer Portfolio</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(.5)}
        className='flex flex-col gap-5 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
       <span> Hello World! <br/>
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> I&apos;m Jacob,<br/></span>
    <span style={{ fontSize: '1em', WebkitTextStroke: '1px white', color: 'transparent' }}>Software Developer.</span>


</span>



           

        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Devloper with experience in Websites,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex justify-center items-center md:self-start"
      >
        <Image
          src="astrocode.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
    
   
  )
}
