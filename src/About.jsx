import { useState } from 'react'
import './App.css'


function About() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-4xl text-black dark:text-white font-bold font-[Outfit]'>About Me</h1>
            <p className='text-lg text-black dark:text-white text-justify py-6 lg:pe-30 font-[Inter]'>Innovative and results-driven AI & Machine Learning Engineer with hands-on experience in developing and deploying deep learning models across diverse domains including real-time audio enhancement, computer vision, natural language processing, and predictive analytics. Proficient in training Large Language Models (LLMs), fine-tuning HuggingFace models, building vector database-driven RAG pipelines, and implementing ML-powered features in full-stack web applications. Demonstrated success in building edge-deployable audio processing systems, stock trading bots with ML integrations, and AI-powered conversational agents using GPT APIs, DeepFace, and custom transcription modules. Adept at delivering scalable solutions using Python, React, and cloud platforms (AWS/GCP), with a strong focus on applied AI, inference optimization, and cross-functional product delivery.</p>
    
            {/* Skills */}
            <h1 className='text-4xl text-black dark:text-white font-bold font-[Outfit]'>Skills</h1>
            <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>Languages</h2>
            <div className='flex flex-row gap-2 flex-wrap'>
              <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full font-[Space_Grotesk]'>Python</h1>
              <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full font-[Space_Grotesk]'>JavaScript</h1>
              <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full font-[Space_Grotesk]'>TypeScript</h1>
            </div>
    
            {/* Frameworks */}
            <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>Frameworks</h2>
            <div className='flex flex-row gap-2 flex-wrap'>
              <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'>Tensorflow</h1>
              <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'>Pytorch</h1>
              <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'>LangChain</h1>
              <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'>MLX</h1>
              <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'>Next.js</h1>
              <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'>React.js</h1>
              <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'>Tailwind CSS</h1>
              <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'>shadcn/ui</h1>
            </div>
    
            {/* Backend */}
            <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>Backend</h2>
            <div className='flex flex-row gap-2 flex-wrap'>
              <h1 className='bg-purple-500 dark:bg-purple-950 py-1 px-4 text-purple-800 dark:text-purple-500 rounded-full font-[Space_Grotesk]'>Node.js</h1>
              <h1 className='bg-purple-500 dark:bg-purple-950 py-1 px-4 text-purple-800 dark:text-purple-500 rounded-full font-[Space_Grotesk]'>FastAPI</h1>
              <h1 className='bg-purple-500 dark:bg-purple-950 py-1 px-4 text-purple-800 dark:text-purple-500 rounded-full font-[Space_Grotesk]'>REST API</h1>
            </div>
    
            {/* Databases */}
            <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>Databases</h2>
            <div className='flex flex-row gap-2 flex-wrap'>
              <h1 className='bg-red-500 dark:bg-red-950 py-1 px-4 text-red-800 dark:text-red-700 rounded-full font-[Space_Grotesk]'>ChromaDB</h1>
              <h1 className='bg-red-500 dark:bg-red-950 py-1 px-4 text-red-800 dark:text-red-700 rounded-full font-[Space_Grotesk]'>FAISS</h1>
              <h1 className='bg-red-500 dark:bg-red-950 py-1 px-4 text-red-800 dark:text-red-700 rounded-full font-[Space_Grotesk]'>Postgres</h1>
              <h1 className='bg-red-500 dark:bg-red-950 py-1 px-4 text-red-800 dark:text-red-700 rounded-full font-[Space_Grotesk]'>SQL</h1>
              <h1 className='bg-red-500 dark:bg-red-950 py-1 px-4 text-red-800 dark:text-red-700 rounded-full font-[Space_Grotesk]'>MongoDB</h1>
            </div>
    
            {/* Practices */}
            <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>Practices</h2>
            <div className='flex flex-row gap-2 mb-10 flex-wrap'>
              <h1 className='bg-yellow-500 dark:bg-yellow-950 py-1 px-4 text-yellow-700 dark:text-yellow-600 rounded-full font-[Space_Grotesk]'>Git</h1>
              <h1 className='bg-yellow-500 dark:bg-yellow-950 py-1 px-4 text-yellow-700 dark:text-yellow-600 rounded-full font-[Space_Grotesk]'>Docker</h1>
              <h1 className='bg-yellow-500 dark:bg-yellow-950 py-1 px-4 text-yellow-700 dark:text-yellow-600 rounded-full font-[Space_Grotesk]'>AWS</h1>
              <h1 className='bg-yellow-500 dark:bg-yellow-950 py-1 px-4 text-yellow-700 dark:text-yellow-600 rounded-full font-[Space_Grotesk]'>CI/CD</h1>
              <h1 className='bg-yellow-500 dark:bg-yellow-950 py-1 px-4 text-yellow-700 dark:text-yellow-600 rounded-full font-[Space_Grotesk]'>Agile</h1>
              <h1 className='bg-yellow-500 dark:bg-yellow-950 py-1 px-4 text-yellow-700 dark:text-yellow-600 rounded-full font-[Space_Grotesk]'>MLOps</h1>
            </div>
    </>
  )
}

export default About