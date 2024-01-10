import Image from 'next/image'
import Hero from "@/app/components/main/Hero"
import Skills from './components/main/Skills'
import Projects from './components/main/Projects'
import Footer from './components/main/Footer'
import Transition from './components/main/Transistion'

export default function Home() {
  return (
    <main className='h-full w-full'>
      
      <div className='flex flex-col gap-20'>
        <Transition/>
<Hero />
<Skills/>
<Projects/>
<Footer/>

      </div>
    </main>
  )
}
