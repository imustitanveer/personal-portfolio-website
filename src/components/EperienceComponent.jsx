import React from 'react';
import AnimatedComponent from "./AnimatedComponent";

const ExperienceItem = ({ image, alt, title, company, location, date, bullets, tags, tagColor = 'green' }) => (
  <AnimatedComponent direction='left'>
    <div className='flex flex-row gap-4 mt-4'>
      <span className='bg-gray-600 h-auto w-1'></span>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-4 items-center'>
          <img src={image} alt={alt} className='w-30 h-30 p-6 bg-white rounded-full' />
          <div className='flex flex-col'>
            <h1 className='text-4xl text-black dark:text-white font-semibold font-[Inter]'>{title}</h1>
            <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>{company}, {location}</h1>
            <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold font-[Inter]'>{date}</h1>
          </div>
        </div>
        <ul className='list-disc list-inside text-lg text-gray-500 dark:text-gray-300 p-2 text-justify font-[DM_Sans]'>
          {bullets.map((item, idx) => (
            <li key={idx} className='mb-2'>{item}</li>
          ))}
        </ul>
        <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
          {tags.map((tag, idx) => (
            <h1 key={idx} className={`bg-${tagColor}-500 dark:bg-${tagColor}-900 py-1 px-4 text-${tagColor}-800 dark:text-${tagColor}-500 rounded-full`}>
              {tag}
            </h1>
          ))}
        </div>
      </div>
    </div>
  </AnimatedComponent>
);

export default ExperienceItem;