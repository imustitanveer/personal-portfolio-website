import { useState } from 'react'
import './App.css'
import AnimatedComponent from './components/AnimatedComponent'
import zindigi from './assets/zindigi.png'
import getinnov from './assets/getinnov.jpeg'
import ieeep from './assets/ieeep.png'

function Awards() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='text-4xl text-white font-bold w-full my-10 font-[Outfit]'>Awards</h1>

        {/* GetInnovative4Impact Prize */}
        <AnimatedComponent direction='left'>
        <div className='flex flex-row gap-4 mt-4'>
            <span className='bg-gray-600 h-auto w-1'></span>
            <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4 items-center'>
            <img src={getinnov} alt="getinnov" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col flex-wrap font-[Inter]'>
                <h1 className='text-4xl text-black dark:text-white font-semibold'>1st Position Get Innovative 4 Impact: Industry 4.0 and IOT Projects Competition</h1>
                <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold'>NED University, Karachi, Pakistan</h1>
                <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold'>APRIL 2024</h1>
            </div>
            </div>
            <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Tensorflow</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Deep Neural Networks</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Google Coral Dev Board</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>ONNX</h1>
            </div>
            </div>
        </div>
        </AnimatedComponent>

        {/* Zindigi Prize */}
        <AnimatedComponent direction='left'>
        <div className='flex flex-row gap-4 mt-4'>
            <span className='bg-gray-600 h-auto w-1'></span>
            <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4 items-center'>
            <img src={zindigi} alt="zindigi" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col flex-wrap font-[Inter]'>
                <h1 className='text-4xl text-black dark:text-white font-semibold'>1st Position Zindigi Prize Startup Competition: Campus Round</h1>
                <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold'>Iqra University, Karachi, Pakistan</h1>
                <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold'>MAY 2024</h1>
            </div>
            </div>
            <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
            <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Pitching and Fundraising</h1>
            <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Business Development</h1>
            <h1 className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full'>Lean Startup Methodology</h1>
            </div>
            </div>
        </div>
        </AnimatedComponent>
        
        {/* IEEEP STEP'24 Prize */}
        <AnimatedComponent direction='left'>
        <div className='flex flex-row gap-4 mt-4'>
            <span className='bg-gray-600 h-auto w-1'></span>
            <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4 items-center'>
            <img src={ieeep} alt="ieeep" className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col flex-wrap font-[Inter]'>
                <h1 className='text-4xl text-black dark:text-white font-semibold'>2nd Position IEEEP STEP'24: Smart Tech Exhibition Projects</h1>
                <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold'>Expo Center, Karachi, Pakistan</h1>
                <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold'>SEP 2024</h1>
            </div>
            </div>
            <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Python</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Tensorflow</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Raspberry Pi 5</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Hailo NPU</h1>
            <h1 className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full'>Embedded Systems</h1>
            </div>
            </div>
        </div>
        </AnimatedComponent>
    </>
  )
}

export default Awards