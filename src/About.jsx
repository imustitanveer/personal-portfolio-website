import { useState } from 'react'
import './App.css'
import Projects from './Projects.jsx'
import Details from './Details.jsx'
import freelance from './assets/logo.png'
import neuroaudic from './assets/neuroaudic.png'
import iucore from './assets/iucore.jpg'
import appedology from './assets/appedology.jpeg'
import iqra from './assets/iqra.png'
import ncr from './assets/ncr.jpg'
import zindigi from './assets/zindigi.png'
import getinnov from './assets/getinnov.jpeg'
import ieeep from './assets/ieeep.png'


function About() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-4xl text-white font-bold'>About Me</h1>
            <p className='text-lg text-white text-justify py-6 lg:pe-30'>Innovative and results-driven AI & Machine Learning Engineer with hands-on experience in developing and deploying deep learning models across diverse domains including real-time audio enhancement, computer vision, natural language processing, and predictive analytics. Proficient in training Large Language Models (LLMs), fine-tuning HuggingFace models, building vector database-driven RAG pipelines, and implementing ML-powered features in full-stack web applications. Demonstrated success in building edge-deployable audio processing systems, stock trading bots with ML integrations, and AI-powered conversational agents using GPT APIs, DeepFace, and custom transcription modules. Adept at delivering scalable solutions using Python, React, and cloud platforms (AWS/GCP), with a strong focus on applied AI, inference optimization, and cross-functional product delivery.</p>
    
            {/* Skills */}
            <h1 className='text-4xl text-white font-bold'>Skills</h1>
            <h2 className='text-3xl text-white font-semibold py-4'>Languages</h2>
            <div className='flex flex-row gap-2 flex-wrap'>
              <h1 className='bg-sky-950 py-1 px-4 text-sky-600 rounded-full'>Python</h1>
              <h1 className='bg-sky-950 py-1 px-4 text-sky-600 rounded-full'>JavaScript</h1>
              <h1 className='bg-sky-950 py-1 px-4 text-sky-600 rounded-full'>TypeScript</h1>
            </div>
    
            {/* Frameworks */}
            <h2 className='text-3xl text-white font-semibold py-4'>Frameworks</h2>
            <div className='flex flex-row gap-2 flex-wrap'>
              <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tensorflow</h1>
              <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Pytorch</h1>
              <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>React JS</h1>
              <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>React Native</h1>
              <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tailwind CSS</h1>
              <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>shadcn/ui</h1>
            </div>
    
            {/* Backend */}
            <h2 className='text-3xl text-white font-semibold py-4'>Backend</h2>
            <div className='flex flex-row gap-2 flex-wrap'>
              <h1 className='bg-purple-950 py-1 px-4 text-purple-500 rounded-full'>Node.js</h1>
              <h1 className='bg-purple-950 py-1 px-4 text-purple-500 rounded-full'>FastAPI</h1>
              <h1 className='bg-purple-950 py-1 px-4 text-purple-500 rounded-full'>REST API</h1>
            </div>
    
            {/* Databases */}
            <h2 className='text-3xl text-white font-semibold py-4'>Databases</h2>
            <div className='flex flex-row gap-2 flex-wrap'>
              <h1 className='bg-red-950 py-1 px-4 text-red-700 rounded-full'>Postgres</h1>
              <h1 className='bg-red-950 py-1 px-4 text-red-700 rounded-full'>SQL</h1>
              <h1 className='bg-red-950 py-1 px-4 text-red-700 rounded-full'>MongoDB</h1>
            </div>
    
            {/* Practices */}
            <h2 className='text-3xl text-white font-semibold py-4'>Practices</h2>
            <div className='flex flex-row gap-2 mb-10 flex-wrap'>
              <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>Git</h1>
              <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>Docker</h1>
              <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>AWS</h1>
              <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>CI/CD</h1>
              <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>Agile</h1>
              <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>MLOps</h1>
            </div>
    </>
  )
}

export default About