"use client"
import { useState, useEffect } from 'react';
import { Socials } from "../../../../constants";
import { ComputerDesktopIcon , Bars3Icon} from '@heroicons/react/16/solid';
import Image from "next/image";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if window is defined (i.e., if we're in a browser context)
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);

      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768);
      });
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="" className="h-auto w-auto flex flex-row items-center">
          <ComputerDesktopIcon className='text-[#b49bff]  h-10 w-10'/>
          <span className='font-bold mml-[10px] hidden md:block text-gray-300'>
            Jacob Kruse Portfolio
          </span>
        </a>

        {isMobile ? (
          <Bars3Icon className='text-[#b49bff]  h-10 w-10' onClick={toggleMenu} />
        ) : (
          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full text-[#b49bff] font-bold h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer">About me</a>
              <a href="#resume" className="cursor-pointer">Resume</a>
              <a href="#projects" className="cursor-pointer">Projects</a>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="absolute top-[65px] right-0 w-48 py-2 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 rounded-lg">
            <a href="#about-me" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">About me</a>
            <a href="#resume" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Resume</a>
            <a href="#projects" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Projects</a>
          </div>
        )}

<div className="flex flex-row gap-5">
  {Socials.map((social) => (
    <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
      <Image
        src={social.src}
        alt={social.name}
        width={24}
        height={24}
      />
    </a>
  ))}
</div>

      </div>
    </div>
  );
};

export default Navbar;
