import React from "react";

function ResearchItem({
  image,
  alt,
  title,
  publication,
  date,
  authors,
  links = [],
  bullets = [],
  tags = [],
}) {
  return (
    <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 md:p-6 bg-white dark:bg-zinc-900 shadow-sm mb-6">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Image */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
          {image ? (
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center px-2">
              Image
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white font-[Outfit]">
                {title}
              </h2>
              <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-medium">
                {publication}
              </p>
              {authors && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {authors}
                </p>
              )}
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
              {date}
            </p>
          </div>

          {/* Links */}
          {links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Bullets */}
          {bullets.length > 0 && (
            <ul className="list-disc pl-5 mt-4 space-y-2 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs md:text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResearchItem;