import './App.css'
import iqra from './assets/iqra.png'
import ncr from './assets/ncr.jpg'
import AnimatedComponent from './components/AnimatedComponent'

function EducationCard({ image, degree, institute, duration, unitsListId, units }) {
  return (
    <AnimatedComponent direction='left'>
      <div className='flex flex-row gap-4 mt-4'>
        <span className='bg-gray-600 h-auto w-1'></span>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center'>
            <img src={image} alt={institute} className='w-30 h-30 p-6 bg-white rounded-full'/>
            <div className='flex flex-col items-start font-[Inter]'>
              <h1 className='text-4xl text-black dark:text-white font-semibold'>{degree}</h1>
              <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold'>{institute}</h1>
              <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold'>{duration}</h1>
              <button 
                onClick={(e) => {
                  const list = document.getElementById(unitsListId);
                  list.classList.toggle('hidden');
                  e.currentTarget.dataset.state = list.classList.contains('hidden') ? 'closed' : 'open';
                }} 
                className='hover:cursor-pointer group flex flex-row gap-2 justify-center items-center'
                data-state="closed"
              >
                <svg className='w-6 h-6 transition-transform duration-200 group-data-[state=open]:rotate-180 group-hover:text-gray-300 dakr:group-hover:text-white my-auto text-gray-500 dark:text-gray-300' 
                    viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 15L12 9L6 15" stroke="inherit" stroke-width="2"></path>
                </svg>
                <h1 className='text-lg text-gray-500 dark:text-gray-300 font-semibold group-hover:text-gray-300 dakr:group-hover:text-white font-[Inter]'>View Units</h1>
              </button>
            </div>
          </div>
          <ul id={unitsListId} className="list-disc list-inside text-gray-500 dark:text-gray-300 text-lg p-2 mx-auto text-justify hidden font-[DM_Sans]">
            {units.map((unit, index) => (
              <li key={index} className='mb-2'>{unit}</li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedComponent>
  )
}

function Education() {
  const iqraUnits = [
    'CSC-121 Digital Logic Design',
    'CSC-131 Programming Fundamentals',
    'CSC-221\tComputer Organization and Assembly Language',
    'CSC-222 Operating Systems',
    'CSC-231 Object Oriented Programming',
    'CSC-232 Data Structures and Algorithms',
    'CSC-331 Database Management Systems',
    'CSC-332 Design and Analysis of Algorithms',
    'CSC-333 Introduction to Python',
    'CSC-341 Theory of Automata',
    'CSC-342 Compiler Construction',
    'CSC-351 Software Engineering',
    'CSC-361 Data Communication and Computer Networks',
    'CSC-431 Parallel and Distributed Computing',
    'CSC-412 Information Security',
    'CSC-471 Artificial Intelligence',
    'CS-409 Mobile Application Development',
    'CS-414 Data Warehousing and Data Mining',
    'CS-421 Routing and Switching',
    'CS-427 Artificial Neural Networks',
    'CS-483 Data Science'
  ];

  const ncrUnits = [
    'CSC-100 Introduction to Computer Science',
    'CSC-101 Applied Physics',
    'CSC-102 Calculus and Analytical Geometry',
    'CSC-103 Multivariate Calculus',
    'CSC-111 Introduction to Information and Communication Technology'
  ];

  return (
    <>
      <h1 className='text-4xl text-black dark:text-white font-bold my-10 font-[Outfit]'>Education</h1>
      
      <EducationCard 
        image={iqra} 
        degree='Bachelor of Computer Science' 
        institute='Iqra University, Karachi, Pakistan' 
        duration='JAN 2020 - DEC 2024' 
        unitsListId='unitsList' 
        units={iqraUnits} 
      />

      <EducationCard 
        image={ncr} 
        degree='Intermediate in Computer Science' 
        institute='NCR CET, Karachi, Pakistan' 
        duration='AUG 2017 - AUG 2019' 
        unitsListId='unitsList2' 
        units={ncrUnits} 
      />
    </>
  )
}

export default Education