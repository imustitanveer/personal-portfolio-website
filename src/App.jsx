import { useState } from 'react'
import './App.css'
import Details from './Details.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Awards from './Awards.jsx'
import Education from './Education.jsx'
import Projects from './Projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    { /* Left Side */}
    <div className='p-6 pb-0 mx-auto px-auto pt-15 bg-zinc-950 lg:bg-transparent lg:fixed lg:px-auto xl:px-40'>
      <Details />
    </div>

      { /* Right Side */}
    <div className='bg-zinc-950 h-full w-full pt-10 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-6'>
      <div></div>
      <div className='p-4'>
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Awards Section */}
        <Awards />

        {/* Education Section */}
        < Education />

        {/* Projects */}
        <h1 className='text-4xl text-white font-bold py-10'>Projects</h1>
        <div className='grid grid-cols-1'>
          <Projects />
        </div>
      </div>
    </div>
    </>
  )
}

export default App