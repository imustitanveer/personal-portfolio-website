import { useState } from 'react'
import './App.css'
import AnimatedComponent from "./AnimatedComponent";
import freelance from './assets/logo.png'
import dam from './assets/dam.png'
import neuroaudic from './assets/neuroaudic.png'
import iucore from './assets/iucore.jpg'
import appedology from './assets/appedology.jpeg'

function Experience() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-4xl text-black dark:text-white font-bold w-full font-[Outfit]'>Experience</h1>

        {/* Dam Pvt. Ltd. */}
        <AnimatedComponent direction='left'>
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={dam} alt="dam" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-black dark:text-white font-semibold font-[Inter]'>Fullstack AI Developer</h1>
              <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>Dam Pvt. Ltd, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>APR 2025 - Present</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-lg text-gray-500 dark:text-gray-300 p-2 text-justify font-[DM_Sans]">
                <li className='mb-2'>Build fullstack web apps with modern stacks — React, FastAPI, Node.js, Python, and scalable cloud backends.</li>
                <li className='mb-2'>Develop and deploy AI solutions, including fine-tuned models using Unsloth, MLX, and scalable training pipelines.</li>
                <li className='mb-2'>Create custom AI chatbots with Retrieval-Augmented Generation (RAG), vector databases, and domain-specific tuning.</li>
                <li className='mb-2'>Deliver end-to-end systems — from UI/UX to backend infra — solving real client problems with AI, automation, and modern web tech.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
          <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Tensorflow</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Pytorch</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>MLX</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Unsloth AI</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>React.js</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Next.js</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Javascript</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Typescript</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Tailwind CSS</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>MongoDB</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>AWS</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>cPanel</h1>
          </div>
          </div>
        </div>
        </AnimatedComponent>

        {/* NeuroAudic */}
        <AnimatedComponent direction='left'>
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={neuroaudic} alt="neuroaudic" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-black dark:text-white font-semibold font-[Inter]'>Founder &#38; CEO</h1>
              <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>NeuroAudic, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>JAN 2024 - APR 2025</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-lg text-gray-500 dark:text-gray-300 p-2 font-[DM_Sans]">
                <li className='mb-2'>Built an AI-powered hearing aid using deep learning and real-time audio enhancement.</li>
                <li className='mb-2'>Led product development, securing multiple innovation awards and startup competition wins.</li>
                <li className='mb-2'>Deployed DTLN models trained on 500+ hours of noisy sound data for noise suppression.</li>
                <li className='mb-2'>Spearheaded business strategy, handling fundraising, marketing, and technical development.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
          <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Tensorflow</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Raspberry Pi 5</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Deep Neural Networks</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Edge AI</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Embedded Systems</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>ONNX</h1>
          </div>
          </div>
        </div>
        </AnimatedComponent>


        {/* Freelance Work */}
        <AnimatedComponent direction='left'>
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={freelance} alt="freelance" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-black dark:text-white font-semibold font-[Inter]'>Freelance AI Developer</h1>
              <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>Self-Employed, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>NOV 2022 - APR 2025</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-lg text-gray-500 dark:text-gray-300 p-2 font-[DM_Sans]">
                <li className='mb-2'>Developed custom AI models for businesses, including image processing, NLP, and predictive analytics.</li>
                <li className='mb-2'>Built full-stack web apps with React, Node.js, and AWS for scalable cloud-based solutions.</li>
                <li className='mb-2'>Integrated TensorFlow & PyTorch models into real-world applications.</li>
                <li className='mb-2'>Automated workflows and optimized cloud deployments for various clients.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
          <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Tensorflow</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Pytorch</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Scikit-Learn</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Pandas</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>HTML</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>CSS</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Javascript</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Tailwind CSS</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>SQL</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>MongoDB</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>AWS</h1>
          </div>
          </div>
        </div>
        </AnimatedComponent>

        {/* IU Core */}
        <AnimatedComponent direction='left'>
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={iucore} alt="iucore" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-black dark:text-white font-semibold font-[Inter]'>Incubatee</h1>
              <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>IU Core, Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>JAN 2024 - JUL 2024</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-300 text-lg p-2 font-[DM_Sans]">
                <li className='mb-2'>Participated in startup incubation, refining business strategy, product development, and go-to-market plans for NeuroAudic.</li>
                <li className='mb-2'>Engaged in mentorship programs with industry experts to enhance AI product commercialization.</li>
                <li className='mb-2'>Conducted market research and user testing to optimize NeuroAudic’s AI-powered hearing aid.</li>
                <li className='mb-2'>Networked with investors, entrepreneurs, and industry leaders to explore funding opportunities.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
          <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Startup Incubation</h1>
          <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Pitching and Fundraising</h1>
          <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Market Research</h1>
          <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Business Development</h1>
          <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Lean Startup Methodology</h1>
          </div>
          </div>
        </div>
        </AnimatedComponent>

        {/* Appedology */}
        <AnimatedComponent direction='left'>
        <div className='flex flex-row gap-4 mt-4'>
          <span className='bg-gray-600 h-auto w-1'></span>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={appedology} alt="appedology" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-black dark:text-white font-semibold font-[Inter]'>Negotiations Officer</h1>
              <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>Appedology Pvt. Ltd., Karachi, Pakistan</h1>
              <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>FEB 2022 - SEP 2022</h1>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-300 text-lg p-2 font-[DM_Sans]">
                <li className='mb-2'>Successfully negotiated settlements for unpaid medical liens with insurance adjusters in workers' compensation cases.</li>
                <li className='mb-2'>Secured optimal reimbursement for medical providers while ensuring compliance with workers' compensation regulations.</li>
                <li className='mb-2'>Engaged in persuasive negotiations with adjusters to reduce outstanding lien amounts and expedite payments.</li>
                <li className='mb-2'>Reviewed case details, medical records, and policy limits to build strong arguments for settlement discussions.</li>
                <li className='mb-2'>Maintained accurate records of negotiations, ensuring all agreements adhered to legal and regulatory requirements.</li>
          </ul>
          <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
          <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Client Communicaton</h1>
          <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Risk Management</h1>
          </div>
          </div>
        </div>
        </AnimatedComponent>
    </>
  )
}

export default Experience