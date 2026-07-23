import './App.css'

function About() {
  return (
    <>
      <h1 className='text-4xl text-black dark:text-white font-bold font-[Outfit]'>
        About Me
      </h1>

      <p className='text-lg text-black dark:text-white text-justify py-6 lg:pe-30 font-[Inter]'>
      I’m a Forward-Deployed AI Engineer passionate about solving complex business problems with production-ready software. I work at the intersection of customers, product, and engineering, designing and deploying AI systems, scalable backends, and full-stack applications that create measurable business impact. From LLM-powered applications and RAG pipelines to enterprise platforms and workflow automation, I enjoy turning ambitious ideas into reliable products.
      </p>

      <h1 className='text-4xl text-black dark:text-white font-bold font-[Outfit]'>
        Skills
      </h1>

      {/* Languages */}
      <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>
        Languages
      </h2>

      <div className='flex flex-row gap-2 flex-wrap'>
        {['Python', 'Golang', 'JavaScript', 'TypeScript'].map((skill) => (
          <span
            key={skill}
            className='bg-sky-500 text-sky-800 dark:bg-sky-950 py-1 px-4 dark:text-sky-600 rounded-full font-[Space_Grotesk]'
          >
            {skill}
          </span>
        ))}
      </div>

      {/* AI & Machine Learning */}
      <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>
        AI & Machine Learning
      </h2>

      <div className='flex flex-row gap-2 flex-wrap'>
        {[
          'PyTorch',
          'TensorFlow',
          'LangChain',
          'Hugging Face',
          'LLMs',
          'RAG',
          'MLX',
          'Computer Vision',
          'Audio AI',
        ].map((skill) => (
          <span
            key={skill}
            className='bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full font-[Space_Grotesk]'
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Full-Stack Engineering */}
      <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>
        Full-Stack Engineering
      </h2>

      <div className='flex flex-row gap-2 flex-wrap'>
        {[
          'Node.js',
          'FastAPI',
          'Flask',
          'Next.js',
          'React.js',
          'Tailwind CSS',
          'shadcn/ui',
          'API Design',
        ].map((skill) => (
          <span
            key={skill}
            className='bg-purple-500 dark:bg-purple-950 py-1 px-4 text-purple-800 dark:text-purple-500 rounded-full font-[Space_Grotesk]'
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Data & Retrieval */}
      <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>
        Data & Retrieval
      </h2>

      <div className='flex flex-row gap-2 flex-wrap'>
        {[
          'PostgreSQL',
          'MongoDB',
          'ChromaDB',
          'FAISS',
          'Vector Search',
          'Semantic Retrieval',
        ].map((skill) => (
          <span
            key={skill}
            className='bg-red-500 dark:bg-red-950 py-1 px-4 text-red-800 dark:text-red-700 rounded-full font-[Space_Grotesk]'
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Platforms */}
      <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>
        Platforms
      </h2>

      <div className='flex flex-row gap-2 flex-wrap'>
        {['WordPress', 'WooCommerce'].map((skill) => (
          <span
            key={skill}
            className='bg-pink-500 dark:bg-pink-950 py-1 px-4 text-pink-800 dark:text-pink-500 rounded-full font-[Space_Grotesk]'
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Cloud & Delivery */}
      <h2 className='text-3xl text-black dark:text-white font-semibold py-4 font-[DM_Sans]'>
        Cloud & Delivery
      </h2>

      <div className='flex flex-row gap-2 mb-10 flex-wrap'>
        {[
          'Git',
          'Docker',
          'AWS',
          'Google Cloud',
          'CI/CD',
          'MLOps',
          'System Design',
          'Stakeholder Delivery',
        ].map((skill) => (
          <span
            key={skill}
            className='bg-yellow-500 dark:bg-yellow-950 py-1 px-4 text-yellow-700 dark:text-yellow-600 rounded-full font-[Space_Grotesk]'
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  )
}

export default About