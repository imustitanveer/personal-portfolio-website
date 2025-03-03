import { useState } from 'react'
import './App.css'
import EmailForm from "./EmailForm";
import Projects from './Projects.jsx'
import photo from './assets/photo.jpeg'
import freelance from './assets/logo.png'
import neuroaudic from './assets/neuroaudic.png'
import iucore from './assets/iucore.jpg'
import appedology from './assets/appedology.jpeg'
import iqra from './assets/iqra.png'
import ncr from './assets/ncr.jpg'
import resume from './assets/resume.pdf'

function App() {
  const [count, setCount] = useState(0)
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);

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
            <a href={resume} download>Resume</a>
          </button>
          <button className='group'>
            <a href="https://github.com/imustitanveer" target='_blank'>
            <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg>
            </a>
          </button>

          <button>
            <a href='https://www.linkedin.com/in/mustassum-tanvir/' target='_blank'>
            <svg className='w-8 h-8 text-gray-400 hover:cursor-pointer hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>LinkedIn</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
            </a>
          </button>

          <button>
            <a href='https://www.youtube.com/@100percentdank' target='_blank'>
            <svg className='w-9 h-9 text-gray-400 hover:cursor-pointer hover:text-white' viewBox="0 -7 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Youtube</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -368.000000)" fill="currentColor"> <path d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube"> </path> </g> </g> </g></svg>
            </a>
          </button>
        </div>

        <h1 className='text-2xl text-white font-bold'>Want to Work Together?</h1>
        <button onClick={() => setIsEmailFormOpen(true)} className='bg-gray-800 p-2 text-white my-4 text-md rounded-sm hover:bg-gray-700 hover:cursor-pointer hover:text-lg duration-300'>Get in Touch</button>

        <EmailForm isOpen={isEmailFormOpen} onClose={() => setIsEmailFormOpen(false)} />
      </div>

      { /* Right Side */}
    <div className='bg-zinc-950 h-full w-full pt-10 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-6'>
      <div></div>
      <div className='p-4'>
        <h1 className='text-3xl text-white font-bold'>About Me</h1>
        <p className='text-lg text-white text-justify py-6 lg:pe-30'>I'm a 23-year-old AI developer, full-stack web developer, and entrepreneur passionate about building intelligent solutions. I specialize in deep learning, cloud computing with AWS, and end-to-end product development. As the founder of NeuroAudic, I’m using AI to enhance hearing aid technology, blending innovation with real-world impact. Beyond my startup, I’ve worked as a freelancer, helping businesses and individuals build AI models, web applications, and cloud-based solutions. My journey spans from machine learning and autonomous robotics to scalable cloud infrastructure, winning multiple innovation competitions along the way. When I’m not coding, I’m exploring new tech, optimizing systems, or brainstorming the next big idea.</p>

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
                <li className='mb-2'>Successfully negotiated settlements for unpaid medical liens with insurance adjusters in workers' compensation cases.</li>
                <li className='mb-2'>Secured optimal reimbursement for medical providers while ensuring compliance with workers' compensation regulations.</li>
                <li className='mb-2'>Engaged in persuasive negotiations with adjusters to reduce outstanding lien amounts and expedite payments.</li>
                <li className='mb-2'>Reviewed case details, medical records, and policy limits to build strong arguments for settlement discussions.</li>
                <li className='mb-2'>Maintained accurate records of negotiations, ensuring all agreements adhered to legal and regulatory requirements.</li>
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
          <Projects />
        </div>
      </div>
    </div>
    </>
  )
}

export default App