"use client"
import { useState, useEffect } from 'react';
import { Socials } from "../../../../constants";
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NavLinks } from '../../../../constants';
import { ComputerDesktopIcon , Bars3Icon} from '@heroicons/react/16/solid';
import Image from "next/image";
import Link from 'next/link';
import Transition from './Transistion';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRouting, setisRouting] = useState(false);
  const [isActive, setisActive] = useState('');
  const [ prevPath, setprevPath] = useState('');

  const path = usePathname();

  useEffect (() => {
    if(prevPath != path){
      setisRouting(true);
    }
  },[path,prevPath])

  useEffect(()=> {
    if(isRouting){
      setprevPath(path)
      const timeout = setTimeout(() => {
        setisRouting(false)
      },1200)
    return () => clearTimeout(timeout)
    }
  }, [isRouting])
  

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
      {isRouting && <Transition/>}
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
              
              
            {NavLinks.filter(link => ["Home", "About me", "Projects"].includes(link.name)).map((link) => 
              <Link
              key={link.name}
              href={link.link}
              onClick={() => setisActive(link.name)}
              >
                <p  className="cursor-pointer">{link.name}</p>
              </Link>
              )}
            </div>
          </div>
        )}

        {isOpen && (
          <div className="absolute top-[65px] right-0 w-48 py-2 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 rounded-lg">
           {NavLinks.filter(link => ["Home", "About me", "Projects"].includes(link.name)).map((link) => 
              <Link
              key={link.name}
              href={link.link}
              onClick={() => setisActive(link.name)}
              >
                <p  className="cursor-pointer">{link.name}</p>
              </Link>
              )}
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
