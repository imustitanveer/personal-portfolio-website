import React from 'react';

const ProjectCard = ({ image, title, description = [], tags = [], links = [], visible }) => {
  if (!visible) return null;

  return (
    <div className="flex flex-row gap-4 rounded-2xl mb-4">
      <span className="bg-gray-600 h-auto w-1" />
      <div className="flex items-center justify-center p-4 h-auto w-1/4 bg-white rounded-2xl">
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col items-start w-3/4">
        <h1 className="text-2xl text-black dark:text-white font-semibold font-[Inter]">{title}</h1>
        <ul className="list-disc list-inside text-gray-500 dark:text-gray-300 text-lg p-2 text-justify font-[DM_Sans]">
          {description.map((line, i) => (
            <li key={i} className="mb-2">{line}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-2 flex-wrap mb-4 text-sm font-[Space_Grotesk]">
          {tags.map((tag, i) => (
            <span key={i} className="bg-green-500 dark:bg-green-900 py-1 px-4 text-green-800 dark:text-green-500 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-4 flex-wrap font-[Inter]">
          {links.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center gap-2 group">
              {link.icon && <link.icon className="w-6 h-6" />}
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;