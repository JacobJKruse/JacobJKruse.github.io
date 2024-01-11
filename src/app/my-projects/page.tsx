"use client"
import React, { useState } from "react";
import ProjectCard from "../components/main/sub/ProjectCard";
import Link from 'next/link';

const MyProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      src:"/16BitGames.png",
      title:"Com S 319 Final Project",
      description:"16-Bit Shop is my team's final project using React JS. Developed over a week and a half improving upon our midterm concept 8-bit Shop.",
      link : "/my-projects/16BitGames",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      src:"/wizard309.png",
      title:"Wizard 309",
      description:"Explore and battle with friends in a online mutiplayer adventure game for android devices. (Best Project Award Winner). Built in a team of 4 as a semester long project for Com S 309",
      link :"/my-projects/Wizard309",
      tags: ["Android", "Multiplayer", "Game Development"]
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
        <input
  type="text"
  placeholder="Search..."
  className="w-1/2 text-[#b49bff] font-bold h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 mb-4"
  onChange={(event) => {
    setSearchTerm(event.target.value);
  }}
/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.filter((val) => {
  if (searchTerm == "") {
    return val;
  } else if (
    val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    val.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (val.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase()))
  ) {
    return val;
  }
}).map((project) => (
  <Link href={project.link} key={project.title}>
    <a> {/* Add this */}
      <ProjectCard
        src={project.src}
        title={project.title}
        description={project.description}
        link={project.link}
      />
    </a> {/* And this */}
  </Link>
))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
