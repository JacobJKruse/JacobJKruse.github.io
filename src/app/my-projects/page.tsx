"use client"
import React, { useState } from "react";
import ProjectCard from "../components/main/sub/ProjectCard";
import Link from 'next/link'; // import the Link component

const MyProjects = () => {
  const [isActive, setIsActive] = useState('');

  const projects = [
    {
      src: "/NextWebsite.png",
      title: "Project 1",
      description: "This is Project 1.",
      link: "/my-projects/project1/page",
    },
    {
      src: "/NextWebsite.png",
      title: "Project 2",
      description: "This is Project 2.",
      link: "/my-projects/project2/page",
    },
  
    // Add more projects here...
  ];

  return (
    <div className="p-4 md:p-10 lg:p-20 ">
      <div
        className="flex flex-col items-center justify-center py-20"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link href={project.link} key={project.title}> {/* use Link here */}
             
                <ProjectCard
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
            
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
