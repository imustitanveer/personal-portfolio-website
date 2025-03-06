import { useState } from 'react'
import './App.css'
import iqra from './assets/iqra.png'
import ncr from './assets/ncr.jpg'

function Education() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='text-4xl text-white font-bold my-10'>Education</h1>
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
    </>
  )
}

export default Education