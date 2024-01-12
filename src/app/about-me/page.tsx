import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="flex flex-col md:flex-col">
      <section>
      <div className="px-4 py-2 md:px-10 md:py-2 lg:px-20 lg:py-2">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20">
            About Me
          </h1>
        </div>
      </section>
      <section className="flex md:flex-row p-4 md:p-10 lg:p-20">
        <div className="w-64 h-64 overflow-hidden rounded-lg border border-[#7042f861] bg-[#0300145e] flex-shrink-0">
          <Image
            src="/aboutmespaceman.png"
            alt="About me"
            width={400}
            height={400}
            className='object-contain'
          />
        </div>
        <div className="flex flex-col justify-center ml-4">
          <h2 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Header 1
          </h2>
          <div className="text-white">
            Hi, my name is Jacob Kruse. I have had a passion for software development since the 5th grade when I joined a First Lego League. From there, I started to explore game development using the GameMaker Engine and learning GML. I continued to learn software development practices in high school, even becoming a TA for AP Computer Science Principles for two years. Now, I am a Computer Science Major at Iowa State University with the intention of becoming a software developer.
          </div>
        </div>
      </section>
      <section className="flex md:flex-row-reverse p-4 md:p-10 lg:p-20">
        <div className="w-64 h-64 overflow-hidden rounded-lg border border-[#7042f861] bg-[#0300145e] flex-shrink-0">
          <Image
            src="/aboutmespaceman2.png"
            alt="About me"
            width={400}
            height={400}
            className='object-contain'
          />
        </div>
        <div className="flex flex-col justify-center mr-4">
          <h2 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Header 2
          </h2>
          <div className="text-white">
            This is the body section for the second header.
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
