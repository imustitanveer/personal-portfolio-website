import { useState } from 'react'
import './App.css'
import photo from './assets/photo.jpeg'
import freelance from './assets/logo.png'
import neuroaudic from './assets/neuroaudic.png'
import iucore from './assets/iucore.jpg'
import appedology from './assets/appedology.jpeg'
import iqra from './assets/iqra.png'
import ncr from './assets/ncr.jpg'
import cw from './assets/cw.png'
import figma from './assets/figma.webp'
import chess from './assets/chess.avif'
import tailwind from './assets/tailwind.png'
import rps from './assets/rps.jpg'
import mnist from './assets/mnist.png'
import aipet from './assets/aipet.gif'
import bert from './assets/bert.png'
import smarthome from './assets/smarthome.jpg'
import connect4 from './assets/connect4.jpg'
import tictactoe from './assets/tictactoe.png'
import carcrash from './assets/carcrash.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    { /* Left Side */}
      <div className='p-6 pb-0 mx-auto px-auto pt-15 bg-zinc-950 lg:bg-transparent lg:fixed lg:px-auto xl:px-40'>
        <img src={photo} className='w-48 h-48 rounded-full'></img>
        <h1 className='my-2 text-3xl text-white font-bold'>Mustassum "Musti" Tanvir</h1>
        <h2 className='my-2 text-2xl text-gray-400'>AI & Full-Stack Developer</h2>
        <h2 className='my-2 text-xl text-gray-400'>📍Karachi, Pakistan.</h2>
        <p className='text-md text-white'>Innovating with AI, Engineering the Future.</p>

        <div className='flex flex-row gap-3'>
          <button className='flex flex-row gap-2 me-6 bg-gray-950 border py-1 px-2 text-white my-4 text-md rounded-sm hover:bg-white hover:cursor-pointer hover:text-gray-950 group duration-300'>
          <svg className='w-6 h-6 text-white group-hover:text-gray-950' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1"></g><g id="SVGRepo_iconCarrier"><path d="M4 4a2 2 0 0 1 2-2h8a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm13.586 4L14 4.414V8h3.586zM12 4H6v16h12V10h-5a1 1 0 0 1-1-1V4zm0 7.5a1 1 0 0 1 1 1v2.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V12.5a1 1 0 0 1 1-1z" fill="currentColor"></path></g></svg>
            <a href='/resume.pdf' download>Resume</a>
          </button>
          <button className='group'>
            <a href="https://github.com/imustitanveer" target='_blank'>
            <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg>
            </a>
          </button>

          <button>
            <svg className='w-9 h-9 text-gray-400 hover:cursor-pointer hover:text-white' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="email"> <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" fill="currentColor"></path> </g> </g> </g></svg>
          </button>

          <button>
            <a href='https://www.linkedin.com/in/mustassum-tanvir/' target='_blank'>
            <svg className='w-8 h-8 text-gray-400 hover:cursor-pointer hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
            </a>
          </button>
        </div>

        <h1 className='text-2xl text-white font-bold'>Want to Work Together?</h1>
        <button className='bg-gray-800 p-2 text-white my-4 text-md rounded-sm hover:bg-gray-700 hover:cursor-pointer hover:text-lg duration-300'>Get in Touch</button>
      </div>

      { /* Right Side */}
    <div className='bg-zinc-950 h-full w-full pt-10 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-6'>
      <div></div>
      <div className='p-4'>
        <h1 className='text-3xl text-white font-bold'>About Me</h1>
        <p className='text-lg text-white text-justify py-6 lg:pe-30'>I'm a 22-year-old AI developer, full-stack web developer, and entrepreneur passionate about building intelligent solutions. I specialize in deep learning, cloud computing with AWS, and end-to-end product development. As the founder of NeuroAudic, I’m using AI to enhance hearing aid technology, blending innovation with real-world impact. Beyond my startup, I’ve worked as a freelancer, helping businesses and individuals build AI models, web applications, and cloud-based solutions. My journey spans from machine learning and autonomous robotics to scalable cloud infrastructure, winning multiple innovation competitions along the way. When I’m not coding, I’m exploring new tech, optimizing systems, or brainstorming the next big idea.</p>

        {/* Skills */}
        <h1 className='text-3xl text-white font-bold'>Skills</h1>
        <h2 className='text-2xl text-white font-semibold py-4'>Languages</h2>
        <div className='flex flex-row gap-2 flex-wrap'>
          <h1 className='bg-sky-950 py-1 px-4 text-sky-600 rounded-full'>Python</h1>
          <h1 className='bg-sky-950 py-1 px-4 text-sky-600 rounded-full'>JavaScript</h1>
        </div>

        {/* Frameworks */}
        <h2 className='text-2xl text-white font-semibold py-4'>Frameworks</h2>
        <div className='flex flex-row gap-2 flex-wrap'>
          <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tensorflow</h1>
          <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Pytorch</h1>
          <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>ReactJS</h1>
          <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>React Native</h1>
          <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tailwind CSS</h1>
        </div>

        {/* Backend */}
        <h2 className='text-2xl text-white font-semibold py-4'>Backend</h2>
        <div className='flex flex-row gap-2 flex-wrap'>
          <h1 className='bg-purple-950 py-1 px-4 text-purple-500 rounded-full'>Node.js</h1>
          <h1 className='bg-purple-950 py-1 px-4 text-purple-500 rounded-full'>REST APIs</h1>
        </div>

        {/* Databases */}
        <h2 className='text-2xl text-white font-semibold py-4'>Databases</h2>
        <div className='flex flex-row gap-2 flex-wrap'>
          <h1 className='bg-red-950 py-1 px-4 text-red-700 rounded-full'>Postgres</h1>
          <h1 className='bg-red-950 py-1 px-4 text-red-700 rounded-full'>SQL</h1>
          <h1 className='bg-red-950 py-1 px-4 text-red-700 rounded-full'>MongoDB</h1>
        </div>

        {/* Practices */}
        <h2 className='text-2xl text-white font-semibold py-4'>Practices</h2>
        <div className='flex flex-row gap-2 mb-10 flex-wrap'>
          <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>Git</h1>
          <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>AWS</h1>
          <h1 className='bg-yellow-950 py-1 px-4 text-yellow-600 rounded-full'>Agile</h1>
        </div>

        {/* Experience Section */}
        <h1 className='text-4xl text-white font-bold w-full'>Experience</h1>
        {/* Freelance Work */}
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={freelance} alt="freelance" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-white font-semibold'>Freelance AI Developer</h1>
              <h1 className='text-lg text-gray-400 font-semibold'>Self-Employed, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-400 font-semibold'>NOV 2022 - Present</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-lg text-gray-300 p-2 text-justify">
                <li className='mb-2'>Developed custom AI models for businesses, including image processing, NLP, and predictive analytics.</li>
                <li className='mb-2'>Built full-stack web apps with React, Node.js, and AWS for scalable cloud-based solutions.</li>
                <li className='mb-2'>Integrated TensorFlow & PyTorch models into real-world applications.</li>
                <li className='mb-2'>Automated workflows and optimized cloud deployments for various clients.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap'>
          <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tensorflow</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Pytorch</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Scikit-Learn</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Pandas</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>HTML</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>CSS</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Javascript</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tailwind CSS</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>SQL</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>MongoDB</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>AWS</h1>
          </div>
          </div>
        </div>

        {/* NeuroAudic */}
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={neuroaudic} alt="neuroaudic" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-white font-semibold'>Founder &#38; CEO</h1>
              <h1 className='text-lg text-gray-400 font-semibold'>NeuroAudic, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-400 font-semibold'>JAN 2024 - Present</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-lg text-gray-300 p-2 text-justify">
                <li className='mb-2'>Built an AI-powered hearing aid using deep learning and real-time audio enhancement.</li>
                <li className='mb-2'>Led product development, securing multiple innovation awards and startup competition wins.</li>
                <li className='mb-2'>Deployed DTLN models trained on 500+ hours of noisy sound data for noise suppression.</li>
                <li className='mb-2'>Spearheaded business strategy, handling fundraising, marketing, and technical development.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap'>
          <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tensorflow</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Raspberry Pi 5</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Deep Neural Networks</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Edge AI</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Embedded Systems</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>ONNX</h1>
          </div>
          </div>
        </div>

        {/* IU Core */}
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={iucore} alt="iucore" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-white font-semibold'>Incubatee</h1>
              <h1 className='text-lg text-gray-400 font-semibold'>IU Core, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-400 font-semibold'>JAN 2024 - JUL 2024</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Participated in startup incubation, refining business strategy, product development, and go-to-market plans for NeuroAudic.</li>
                <li className='mb-2'>Engaged in mentorship programs with industry experts to enhance AI product commercialization.</li>
                <li className='mb-2'>Conducted market research and user testing to optimize NeuroAudic’s AI-powered hearing aid.</li>
                <li className='mb-2'>Networked with investors, entrepreneurs, and industry leaders to explore funding opportunities.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap'>
          <h1 className='bg-sky-900 py-1 px-4 text-sky-500 rounded-full'>Startup Incubation</h1>
          <h1 className='bg-sky-900 py-1 px-4 text-sky-500 rounded-full'>Pitching and Fundraising</h1>
          <h1 className='bg-sky-900 py-1 px-4 text-sky-500 rounded-full'>Market Research</h1>
          <h1 className='bg-sky-900 py-1 px-4 text-sky-500 rounded-full'>Business Development</h1>
          <h1 className='bg-sky-900 py-1 px-4 text-sky-500 rounded-full'>Lean Startup Methodology</h1>
          </div>
          </div>
        </div>

        {/* Fix the Pointers on these */}
        {/* Appedology */}
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={appedology} alt="appedology" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-white font-semibold'>Negotiations Officer</h1>
              <h1 className='text-lg text-gray-400 font-semibold'>Appedology Pvt. Ltd., Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-400 font-semibold'>FEB 2022 - SEP 2022</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Led client negotiations, ensuring alignment between business goals and software development projects.</li>
                <li className='mb-2'>Drafted and reviewed project proposals, contracts, and pricing strategies to maximize profitability.</li>
                <li className='mb-2'>Acted as a liaison between clients and technical teams, ensuring clear communication and timely delivery.</li>
                <li className='mb-2'>Assisted in business development, identifying new opportunities for partnerships and collaborations.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap'>
          <h1 className='bg-sky-900 py-1 px-4 text-sky-500 rounded-full'>Client Communicaton</h1>
          <h1 className='bg-sky-900 py-1 px-4 text-sky-500 rounded-full'>Risk Management</h1>
          </div>
          </div>
        </div>

        {/* Education Section */}
        <h1 className='text-3xl text-white font-bold mt-10 mb-10'>Education</h1>
        {/* Iqra University */}
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={iqra} alt="iqra" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col items-start'>
              <h1 className='text-4xl text-white font-semibold'>Bachelor of Computer Science</h1>
              <h1 className='text-lg text-gray-400 font-semibold'>Iqra University, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-400 font-semibold'>JAN 2020 - DEC 2024</h1>
              <button 
              onClick={(e) => {
                const list = document.getElementById('unitsList');
                list.classList.toggle('hidden');
                e.currentTarget.dataset.state = list.classList.contains('hidden') ? 'closed' : 'open';
              }} 
              className='hover:cursor-pointer group flex flex-row gap-2 justify-center items-center'
              data-state="closed"
            >
              <svg className='w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180 group-hover:text-white my-auto text-gray-300' 
                  viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="inherit" stroke-width="2"></path>
              </svg>
              <h1 className='text-lg text-gray-300 font-semibold group-hover:text-white'>View Units</h1>
            </button>
            </div>
          </div>
            <ul id="unitsList" className="list-disc list-inside text-gray-300 text-lg p-2 mx-auto text-justify hidden">
                <li className='mb-2'>CSC-121 Digital Logic Design</li>
                <li className='mb-2'>CSC-131 Programming Fundamentals</li>
                <li className='mb-2'>CSC-221	Computer Organization and Assembly Language</li>
                <li className='mb-2'>CSC-222 Operating Systems</li>
                <li className='mb-2'>CSC-231 Object Oriented Programming</li>
                <li className='mb-2'>CSC-232 Data Structures and Algorithms</li>
                <li className='mb-2'>CSC-331 Database Management Systems</li>
                <li className='mb-2'>CSC-332 Design and Analysis of Algorithms</li>
                <li className='mb-2'>CSC-333 Introduction to Python</li>
                <li className='mb-2'>CSC-341 Theory of Automata</li>
                <li className='mb-2'>CSC-342 Compiler Construction</li>
                <li className='mb-2'>CSC-351 Software Engineering</li>
                <li className='mb-2'>CSC-361 Data Communication and Computer Networks</li>
                <li className='mb-2'>CSC-431 Parallel and Distributed Computing</li>
                <li className='mb-2'>CSC-412 Information Security</li>
                <li className='mb-2'>CSC-471 Artificial Intelligence</li>
                <li className='mb-2'>CS-409 Mobile Application Development</li>
                <li className='mb-2'>CS-414 Data Warehousing and Data Mining</li>
                <li className='mb-2'>CS-421 Routing and Switching</li>
                <li className='mb-2'>CS-427 Artificial Neural Networks</li>
                <li className='mb-2'>CS-483 Data Science</li>
            </ul>
          </div>
        </div>

        {/* NCR CET */}
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={ncr} alt="ncr" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col items-start'>
              <h1 className='text-4xl text-white font-semibold'>Intermediate in Computer Science</h1>
              <h1 className='text-lg text-gray-400 font-semibold'>NCR CET, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-400 font-semibold'>AUG 2017 - AUG 2019</h1>
              <button 
              onClick={(e) => {
                const list = document.getElementById('unitsList2');
                list.classList.toggle('hidden');
                e.currentTarget.dataset.state = list.classList.contains('hidden') ? 'closed' : 'open';
              }} 
              className='hover:cursor-pointer group flex flex-row gap-2 justify-center items-center'
              data-state="closed"
            >
              <svg className='w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180 group-hover:text-white my-auto text-gray-300' 
                  viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="inherit" stroke-width="2"></path>
              </svg>
              <h1 className='text-lg text-gray-300 font-semibold group-hover:text-white'>View Units</h1>
            </button>
            </div>
          </div>
            <ul id="unitsList2" className="list-disc list-inside text-gray-300 text-lg p-2 mx-auto text-justify hidden">
                <li className='mb-2'>CSC-100 Introduction to Computer Science</li>
                <li className='mb-2'>CSC-101 Applied Physics</li>
                <li className='mb-2'>CSC-102 Calculus and Analytical Geometry</li>
                <li className='mb-2'>CSC-103 Multivariate Calculus</li>
                <li className='mb-2'>CSC-111 Introduction to Information and Communication Technology</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <h1 className='text-3xl text-white font-bold py-10'>Projects</h1>
        <div className='grid grid-cols-1'>
          <div className='flex flex-row gap-4 text-gray-300 pb-10 px-6'>
          <button className='bg-gray-600 px-4 text-white py-2 rounded-2xl hover:text-white hover:cursor-pointer'>All</button>
          <button className='bg-inherit px-4 py-2 rounded-2xl hover:text-white hover:cursor-pointer'>Artificial Intelligence</button>
          <button className='bg-inherit px-4 py-2 rounded-2xl hover:text-white hover:cursor-pointer'>Web Development</button>
          </div>

          {/* ContractWalla */}
          <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center p-4 h-full w-1/4 bg-white rounded-2xl'>
            <img src={cw} alt="cw"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>ContractWalla: GPT for Lawyers</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Developed an AI-powered legal assistant that streamlines contract review and document generation.</li>
                <li className='mb-2'>Designed and trained deep learning models using DeepSeek R1 on AWS SageMaker for enhanced legal text analysis.</li>
                <li className='mb-2'>Built a secure and scalable web app with React, Tailwind CSS, and AWS for real-time contract recommendations.</li>
                <li className='mb-2'>Integrated GPT-based legal insights to assist lawyers in drafting and reviewing contracts efficiently.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Pytorch</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Javascript</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tailwind CSS</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>ReactJS</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>AWS</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>AWS SageMaker AI</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Deepseek R1</h1>
              </div>
              <button>
                <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2' href="https://contractwalla.com/" target="_blank">
                <svg className='w-6 h-6 my-auto' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
                Live Demo</a>
              </button>
            </div>
          </div>

          {/* Figma Portfolio Website */}
          <div id='web' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center p-4 h-full w-1/4 bg-white rounded-2xl'>
            <img src={figma} alt="figma"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Portfolio Website From Figma</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Transformed a Figma design into a fully functional responsive web portfolio.</li>
                <li className='mb-2'>Developed with Vite, ReactJS, and Tailwind CSS for a fast and lightweight experience.</li>
                <li className='mb-2'>Deployed using AWS Amplify for seamless hosting and continuous integration.</li>
                <li className='mb-2'>Optimized performance and accessibility for better user experience.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Javascript</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tailwind CSS</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Vite</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>AWS</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>AWS Amplify</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Figma Design</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/portfolio-website-from-figma" target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              <button>
                <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2' href="https://main.d1bihova58r1gq.amplifyapp.com/" target="_blank">
                <svg className='w-6 h-6 my-auto' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
                Live Demo</a>
              </button>
              </div>
            </div>
          </div>

          {/* AI Chess */}
          <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center p-4 h-full w-1/4 bg-white rounded-2xl'>
            <img src={chess} alt="chess"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Chess with Minmax & Alpha-Beta</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Implemented an AI-powered chess game using Minmax and Alpha-Beta pruning for efficient move evaluation.</li>
                <li className='mb-2'>Utilized Python-Chess for move generation and PyGame for the graphical interface.</li>
                <li className='mb-2'>Optimized search depth and heuristics to balance AI difficulty and computational efficiency.</li>
                <li className='mb-2'>Developed an interactive user experience with real-time board updates and move validation.</li>
                <li className='mb-2'>Hosted the source code on GitHub for open-source contributions.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>PyGame</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python-Chess</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Chess-with-Alpha-Beta-Pruning" target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              </div>
            </div>
          </div>

          {/* Smoljames TailwindCSS */}
          {/* ADD VERCEL APP LINK */}
          <div id='web' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center p-4 h-full w-1/4 bg-white rounded-2xl'>
            <img src={tailwind} alt="tailwind"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Crystal Math: SmolJames TailwindCSS Tutorial Project</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Built a web-based project using HTML, JavaScript, and TailwindCSS for a clean and responsive UI.</li>
                <li className='mb-2'>Followed SmolJames' TailwindCSS tutorial to learn best practices in modern frontend development.</li>
                <li className='mb-2'>Designed an engaging and interactive layout optimized for both desktop and mobile devices.</li>
                <li className='mb-2'>Deployed the project on Vercel for seamless accessibility.</li>
                <li className='mb-2'>Open-sourced the code on GitHub to help others learn TailwindCSS.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Javascript</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>HTML</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>TailwindCSS</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/smoljames-tailwindcss-project" target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              <button>
                <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2' href="https://main.d1bihova58r1gq.amplifyapp.com/" target="_blank">
                <svg className='w-6 h-6 my-auto' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
                Live Demo</a>
              </button>
              </div>
            </div>
          </div>

          {/* Adverserial Algo MNIST */}
          <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center p-4 h-full w-1/4 bg-white rounded-2xl'>
            <img src={mnist} alt="mnist"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Adversarial Examples for Neural Networks</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Implemented adversarial attack techniques on MNIST dataset using TensorFlow.</li>
                <li className='mb-2'>Explored the impact of FGSM (Fast Gradient Sign Method) and PGD (Projected Gradient Descent) attacks.</li>
                <li className='mb-2'>Evaluated model robustness and adversarial training strategies to improve defense mechanisms.</li>
                <li className='mb-2'>Developed a Python-based framework to automate adversarial perturbation generation.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tensorflow</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Adverserial-Examples_for_Neural-Networks_on_MNIST"target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              </div>
            </div>
          </div>

          {/* Rock Paper Scissors */}
          {/* ADD VERCEL APP LINK */}
          <div id='web' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center p-4 h-full w-1/4 bg-white rounded-2xl'>
            <img src={rps} alt="rockpaperscissors"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Rock Paper Scissors: HTML & JavaScript</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Designed and developed a browser-based Rock Paper Scissors game using HTML, CSS, and JavaScript.</li>
                <li className='mb-2'>Implemented interactive UI with event listeners for seamless user input handling.</li>
                <li className='mb-2'>Utilized JavaScript’s Math.random() to simulate AI-driven gameplay decisions.</li>
                <li className='mb-2'>Deployed the web application using Vercel for easy online accessibility.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>HTML</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>CSS</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Javascript</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/RockPaperScissors-with_HTML_and_JS" target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              <button>
                <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2' href="https://main.d1bihova58r1gq.amplifyapp.com/" target="_blank">
                <svg className='w-6 h-6 my-auto' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
                Live Demo</a>
              </button>
              </div>
            </div>
          </div>

          {/* AI Pet */}
          <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center h-full w-1/4 bg-white rounded-2xl'>
            <img src={aipet} alt="aipet"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>AI Pet</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>The AI pet can recognize its owner's face using the facenet_pytorch library. This technology utilizes neural network models to analyze facial features and compare them with a known dataset to authenticate the owner.</li>
                <li className='mb-2'>Using deepface, the pet can detect the owner's emotions, allowing for more personalized interactions. The AI pet assesses facial expressions in real-time to infer emotional states, ensuring that responses are empathetically aligned with how the owner feels.</li>
                <li className='mb-2'>The pet can engage in conversations with the owner using dialoGPT, providing a unique and interactive experience. This conversational model is fine-tuned to the context of the interaction, incorporating the owner's emotional state to deliver a pet-like communication experience.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Huggingface</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Streamlit</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Deepface</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>GPT-2</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/AI-Pet"target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              </div>
            </div>
          </div>

          {/* Topic Modeling With BERT */}
          <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center h-full w-1/4 bg-white rounded-2xl'>
            <img src={bert} alt="bert"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Topic Modeling with BERT</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Leveraging BERT for topic modeling and trend detection in social media discussions.</li>
                <li className='mb-2'>Uses a 1.6M tweet dataset from Sentiment140 and Twitter Dataset.</li>
                <li className='mb-2'>Evaluates fine-tuned BERT against traditional Latent Dirichlet Allocation (LDA).</li>
                <li className='mb-2'>Built with Streamlit, allows real-time topic modeling and comparison.</li>
                <li className='mb-2'>BERT is trained on tweets and further refined on a text classification dataset.</li>
                <li className='mb-2'>Assessed using semantic similarity tests and K-means clustering.</li>
                <li className='mb-2'>Fine-tuned BERT outperforms LDA, showing higher semantic similarity scores.</li>
                <li className='mb-2'>The fine-tuned BERT model is available for use via Google Drive.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Huggingface</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Streamlit</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Scikit-Learn</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>BERT</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Topic-Modeling_with_BERT"target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              </div>
            </div>
          </div>

          {/* AI-Controlled Smart Home */}
          <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center h-full w-1/4 bg-white rounded-2xl'>
            <img src={smarthome} alt="smarthome"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>AI-Controlled Smart Home</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Uses LSTM for activity prediction and DeepFace for real-time emotion detection.</li>
                <li className='mb-2'>Adjusts temperature, lighting, and music based on user activity and emotions.</li>
                <li className='mb-2'>Provides an interactive simulation of the AI-controlled smart home.</li>
                <li className='mb-2'>Trained on the WISDM dataset for activity recognition and facial expressions for emotion analysis.</li>
                <li className='mb-2'>Plans for voice control, additional sensors, and improved personalization.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tensorflow</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Streamlit</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Deepface</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/AI_Controlled_Smart-Home"target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              </div>
            </div>
          </div>

           {/* Connect 4 Game */}
           <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center h-full w-1/4 bg-white rounded-2xl'>
            <img src={connect4} alt="connect4"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Connect 4 Game with Pygame</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Play against an AI opponent with adjustable difficulty levels.</li>
                <li className='mb-2'>Utilizes the Minmax algorithm with Alpha-Beta pruning for optimal moves.</li>
                <li className='mb-2'>Visually appealing and informative messages displayed upon game conclusion.</li>
                <li className='mb-2'>The four connected discs that lead to a win are distinctly highlighted.</li>
                <li className='mb-2'>Smooth and interactive graphical user interface built with Pygame.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>PyGame</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Connect4-with-Minmax"target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              </div>
            </div>
          </div>

          {/* Tic Tac Toe */}
          <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center h-full w-1/4 bg-white rounded-2xl'>
            <img src={tictactoe} alt="tictactoe"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Enhanced Tic Tac Toe with AI</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>Play against an AI opponent with optimal moves calculated using the Minmax algorithm.</li>
                <li className='mb-2'>Keep track of wins, draws, and games played.</li>
                <li className='mb-2'>The game grid adjusts to the window size.</li>
                <li className='mb-2'>Reset the game to start a new match.</li>
                <li className='mb-2'>Highlight winning combinations, Button animations for enhanced visual appeal and Custom colors for player (Dodger Blue) and AI (Orange Red).</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>PyGame</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/TicTacToe-with-Minmax-Algorithm"target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              </div>
            </div>
          </div>

          {/* Car Crash Detection */}
          <div id='ai' className='flex flex-row gap-4 rounded-2xl mb-4'>
            <span className='bg-gray-600 h-auto w-1.5'></span>
            <div className='flex items-center justify-center h-full w-1/4 bg-white rounded-2xl'>
            <img src={carcrash} alt="carcrash"/>
            </div>
            <div className='flex flex-col items-start w-3/4'>
              <h1 className='text-2xl text-white font-semibold'>Car Crash Detection with CNN</h1>
              <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
                <li className='mb-2'>A custom dataset loader that reads labeled frames from CSV.</li>
                <li className='mb-2'>A Convolutional Neural Network (CNN) implementation.</li>
                <li className='mb-2'>Training scripts for model optimization.</li>
                <li className='mb-2'>Fine Tuning script for further model optimization.</li>
                <li className='mb-2'>Plots of loss and accuracy over epochs.</li>
              </ul>
              <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
                <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>PyGame</h1>
              </div>
              <div className='flex flex-row gap-4'>
              <button>
                <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Car-Crash-Detection-with-CNN"target='_blank'>
                  <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
                </a>
              </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
