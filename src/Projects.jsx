import { useState } from 'react'
import cw from './assets/cw.png'
import figma from './assets/figma.webp'
import chess from './assets/chess.avif'
import tailwind from './assets/tailwind.png'
import medilingo from './assets/medilingo.png'
import mnist from './assets/mnist.png'
import aipet from './assets/aipet.gif'
import bert from './assets/bert.png'
import smarthome from './assets/smarthome.jpg'
import connect4 from './assets/connect4.jpg'
import tictactoe from './assets/tictactoe.png'
import carcrash from './assets/carcrash.png'
import cryptobot from './assets/cryptobot.png'
import coursodigo from './assets/coursodigo.png'

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
    <div className="w-full max-w-4xl">
      {/* Tabs for Filtering */}
      <div className="flex flex-row gap-4 text-gray-300 pb-10 px-6">
        <button
          className={`px-4 py-2 rounded-xl ${
            activeTab === "all" ? "bg-gray-600 text-white" : "bg-inherit"
          } hover:text-white hover:cursor-pointer duration-300`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-xl ${
            activeTab === "personal" ? "bg-gray-600 text-white" : "bg-inherit"
          } hover:text-white hover:cursor-pointer duration-300`}
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </button>
        <button
          className={`px-4 py-2 rounded-xl ${
            activeTab === "forclients" ? "bg-gray-600 text-white" : "bg-inherit"
          } hover:text-white hover:cursor-pointer duration-300`}
          onClick={() => setActiveTab("forclients")}
        >
          For Clients
        </button>
      </div>

      {/* Project Cards */}
        {/* ContractWalla */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "forclients" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center p-4 h-auto w-1/4 bg-white rounded-2xl'>
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
            {/* Website */}
            <button>
            <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2' href="https://contractwalla.com/" target="_blank">
            <svg className='w-6 h-6 my-auto' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
            Live Demo</a>
            </button>
        </div>
        </div>

        {/* Coursodigo */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "forclients" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center p-4 h-auto w-1/4 bg-white rounded-2xl'>
        <img src={coursodigo} alt="coursodigo"/>
        </div>
        <div className='flex flex-col items-start w-3/4'>
            <h1 className='text-2xl text-white font-semibold'>Corsódigo: Course Recommendation App</h1>
            <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
            <li className='mb-2'>The app takes a user survey upon login and recommends courses based on the responses.</li>
            <li className='mb-2'>It displays the recommended courses as interactive cards with the course title, image, and description.</li>
            <li className='mb-2'>Users can expand the cards to view more details and access a link to the course.</li>
            <li className='mb-2'>The app logs user interactions with the courses to improve future recommendations over time.</li>
            <li className='mb-2'>It uses FastAPI with FAISS and Sentence Transformers to power semantic search and course recommendations.</li>
            </ul>
            <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>FAISS</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>FastAPI</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Typescript</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tailwind CSS</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Next.js</h1>
            </div>
            <div className='flex flex-row flex-wrap gap-4'>
              {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Coursodigo-Course-Recommendation-App" target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            {/* Website */}
            {/* Add Website When Deployed */}
            <button disabled>
            <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2' href="https://main.d18hp0k4mibbbl.amplifyapp.com/" target="_blank">
            <svg className='w-6 h-6 my-auto' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
            Live Demo</a>
            </button>
            </div>
        </div>
        </div>

        {/* Cryptobot */}
        {/* ADD YOUTUBE LINK */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "personal" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center p-4 h-auto w-1/4 bg-white rounded-2xl'>
        <img src={cryptobot} alt="cryptobot"/>
        </div>
        <div className='flex flex-col items-start w-3/4'>
            <h1 className='text-2xl text-white font-semibold'>TradeBotX: Crypto Trading Bot</h1>
            <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
            <li className='mb-2'>Uses ML models (Linear Regression, XGBoost, LightGBM) to predict and execute trades on BNB/USDT.</li>
            <li className='mb-2'>Tracks open/closed trades, leverage, P/L, and balance in real time with persistent state.</li>
            <li className='mb-2'>Backend APIs provide instant trade predictions based on the last 20 candles.</li>
            <li className='mb-2'>Built with React, ShadCN, and Tailwind CSS for a smooth trading experience.</li>
            </ul>
            <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Scikit-Learn</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>TypeScript</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tailwind CSS</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>shadcn/ui</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>React JS</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>FastAPI</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Docker</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>AWS</h1>
            </div>
            <div className='flex flex-row flex-wrap gap-4'>
              {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/crypto-trading-bot" target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            {/* Website */}
            <button>
            <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2' href="https://main.d18hp0k4mibbbl.amplifyapp.com/" target="_blank">
            <svg className='w-6 h-6 my-auto' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
            Live Demo</a>
            </button>
            {/* youtube */}
            <button>
            <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2 items-center' href='https://www.youtube.com/@100percentdank' target='_blank'>
            <svg className='w-9 h-9 text-gray-400 hover:cursor-pointer hover:text-white' viewBox="0 -7 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Youtube</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -368.000000)" fill="currentColor"> <path d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube"> </path> </g> </g> </g></svg>
            Youtube Video</a>
            </button>
            </div>
        </div>
        </div>

        {/* Medilingo */}
        <div id='web' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "forclients" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center p-4 h-auto w-1/4 bg-white rounded-2xl'>
        <img src={medilingo} alt="medilingo"/>
        </div>
        <div className='flex flex-col items-start w-3/4'>
            <h1 className='text-2xl text-white font-semibold'>MediLingo: Healthcare Translator</h1>
            <ul className="list-disc list-inside text-gray-300 text-lg p-2 text-justify">
            <li className='mb-2'>MediLingo enables seamless communication between doctors and patients by translating speech in real-time.</li>
            <li className='mb-2'>The app supports multilingual translation, providing accurate speech-to-text and text-to-speech functionality.</li>
            <li className='mb-2'>Designed for medical use, MediLingo ensures doctors and patients can understand each other despite language barriers.</li>
            <li className='mb-2'>Optimized for mobile devices, MediLingo offers a smooth, user-friendly experience for healthcare professionals and patients.</li>
            </ul>
            <div className='flex flex-row gap-2 flex-wrap mb-4 text-sm'>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>HTML</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>CSS</h1>
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Javascript</h1>
            </div>
            <div className='flex flex-row gap-4 flex-wrap'>
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/medilingo-healthcare-translator" target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            {/* Website */}
            <button>
            <a className='text-lg text-gray-300 font-semibold hover:text-white hover:cursor-pointer flex flex-row gap-2' href="https://medilingo-gray.vercel.app/" target="_blank">
            <svg className='w-6 h-6 my-auto' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
            Live Demo</a>
            </button>
            </div>
        </div>
        </div>

        {/* AI Chess */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "personal" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center p-4 h-auto w-1/4 bg-white rounded-2xl'>
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
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Chess-with-Alpha-Beta-Pruning" target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            </div>
        </div>
        </div>

        {/* Adverserial Algo MNIST */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "personal" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center p-4 h-auto w-1/4 bg-white rounded-2xl'>
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
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Adverserial-Examples_for_Neural-Networks_on_MNIST"target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            </div>
        </div>
        </div>

        {/* AI Pet */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "forclients" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center h-auto w-1/4 bg-white rounded-2xl'>
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
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/AI-Pet"target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            </div>
        </div>
        </div>

        {/* Topic Modeling With BERT */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "forclients" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center h-auto w-1/4 bg-white rounded-2xl'>
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
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Topic-Modeling_with_BERT"target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            </div>
        </div>
        </div>

        {/* AI-Controlled Smart Home */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "forclients" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center h-auto w-1/4 bg-white rounded-2xl'>
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
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/AI_Controlled_Smart-Home"target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            </div>
        </div>
        </div>

        {/* Connect 4 Game */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "personal" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center h-auto w-1/4 bg-white rounded-2xl'>
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
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Connect4-with-Minmax"target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            </div>
        </div>
        </div>

        {/* Tic Tac Toe */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "personal" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center h-auto w-1/4 bg-white rounded-2xl'>
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
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/TicTacToe-with-Minmax-Algorithm"target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            </div>
        </div>
        </div>

        {/* Car Crash Detection */}
        <div id='ai' className={'flex flex-row gap-4 rounded-2xl mb-4 ' + (activeTab === "all" || activeTab === "personal" ? "block" : "hidden")}>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex items-center justify-center h-auto w-1/4 bg-white rounded-2xl'>
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
            <h1 className='bg-green-900 py-1 px-4 text-green-500 rounded-full'>Tensorflow</h1>
            </div>
            <div className='flex flex-row gap-4'>
            {/* Github */}
            <button>
            <a className='text-lg font-semibold items-center flex flex-row gap-2 text-gray-300 hover:text-white group' href="https://github.com/imustitanveer/Car-Crash-Detection-with-CNN"target='_blank'>
                <svg className='w-8 h-8 text-gray-400 group-hover:cursor-pointer group-hover:text-white' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg> View Code
            </a>
            </button>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Projects