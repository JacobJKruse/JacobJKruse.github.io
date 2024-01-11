"use client"
import React, { useState } from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  const [isActive, setIsActive] = useState('');

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Recent Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/16BitGames.png"
          title="Com S 319 Final Project"
          description="16-Bit Shop is my team's final project using React JS."
          link = "/my-projects/16BitGames"
          
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link = "/my-projects/project2"
          
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link = "/my-projects/project1"
          
        />
      </div>
    </div>
  );
};

export default Projects;
