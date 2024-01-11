import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="p-4 md:p-10 lg:p-20 ">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        About Me
      </h1>
      <div className="w-64 h-64 overflow-hidden rounded-lg border border-[#7042f861] bg-[#0300145e]">
  <Image
    src="/aboutmespaceman.png"
    alt="About me"
    width={400}
    height={400}
    
    className='object-contain'
  />
</div>
    </div>
  )
}

export default Page
