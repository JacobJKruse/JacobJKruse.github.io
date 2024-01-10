import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] pb-4'>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
      />

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>

      <div className='flex justify-center items-center mt-4'>
        <Link href={link}>
          <p className='px-4 py-2 rounded-full text-white font-semibold animate-gradient'>Read More</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
