import './App.css'
import AnimatedComponent from './components/AnimatedComponent'
import { FiExternalLink } from 'react-icons/fi'
import { FaFilePdf } from 'react-icons/fa'
import paper1 from './assets/paper1.png'

const allResearch = [
  {
    image: paper1,
    alt: 'research-paper-1',
    title: 'Human-AI Collaboration in Software Development: Impacts and Future Trends',
    publication: 'Research Consortium Archive',
    authors: 'Mustassum Tanvir, Amna Sheikh',
    date: '2026',
    description: [
      'Analyzes how human–AI collaboration is transforming software development by boosting productivity, reducing errors, and enabling low-code adoption.',
      'Highlights emerging challenges like over-reliance, security risks, and ethical concerns, emphasizing the need for responsible AI integration.'
    ],
    links: [
      {
        text: 'View Paper',
        href: 'https://www.rcresearcharchive.com/index.php/Journal/article/view/674',
        icon: FiExternalLink
      },
      {
        text: 'PDF',
        href: 'https://www.rcresearcharchive.com/index.php/Journal/article/view/674/660',
        icon: FaFilePdf
      }
    ],
    tags: [
      'AI',
      'Human-AI Collaboration',
      'Software Development',
      'Productivity',
      'Code Quality',
      'AI Ethics',
      'Low-Code Platforms'
    ]
  }
]

function Research() {
  return (
    <>
      <h1 className='text-4xl text-white font-bold w-full my-10 font-[Outfit]'>
        Research Publications
      </h1>

      {allResearch.map((paper, index) => (
        <AnimatedComponent direction='left' key={index}>
          <div className='flex flex-row gap-4 mt-4'>
            <span className='bg-gray-600 h-auto w-1'></span>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-4 items-center'>
                <img
                  src={paper.image}
                  alt={paper.alt}
                  className='w-30 h-30 p-6 bg-white rounded-full object-contain'
                />

                <div className='flex flex-col flex-wrap font-[Inter]'>
                  <h1 className='text-4xl text-black dark:text-white font-semibold'>
                    {paper.title}
                  </h1>
                  <h1 className='text-lg text-gray-600 dark:text-gray-400 font-semibold'>
                    {paper.publication}
                  </h1>
                  <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold'>
                    {paper.authors}
                  </h1>
                  <h1 className='text-md text-gray-600 dark:text-gray-400 font-semibold'>
                    {paper.date}
                  </h1>
                </div>
              </div>

              <div className='flex flex-col gap-2 font-[Inter]'>
                {paper.description.map((line, i) => (
                  <p key={i} className='text-base text-gray-700 dark:text-gray-300'>
                    {line}
                  </p>
                ))}
              </div>

              <div className='flex flex-row gap-3 flex-wrap font-[Space_Grotesk]'>
                {paper.links.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={i}
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 py-1 px-4 rounded-full hover:opacity-80 transition'
                    >
                      <Icon className='text-2xl' />
                      {link.text}
                    </a>
                  )
                })}
              </div>

              <div className='flex flex-row gap-2 flex-wrap font-[Space_Grotesk]'>
                {paper.tags.map((tag, i) => (
                  <h1
                    key={i}
                    className='bg-purple-500 text-purple-800 dark:bg-purple-950 py-1 px-4 dark:text-purple-400 rounded-full'
                  >
                    {tag}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </AnimatedComponent>
      ))}
    </>
  )
}

export default Research