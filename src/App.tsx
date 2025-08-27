{/* Shortform Section */}
<div className="mb-16">
  <h2 className={`text-2xl font-bold mb-8 ${
    isDarkMode ? 'text-white' : 'text-gray-900'
  }`}>
    Shortform Content
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {experienceWorks.shortform.map((work, index) => (
      <div key={index} className={`rounded-xl overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <VideoEmbed url={work.embed} title={work.title} />
        <div className="p-4">
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold block hover:underline ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {work.title}
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Longform Section */}
<div className="mb-16">
  <h2 className={`text-2xl font-bold mb-8 ${
    isDarkMode ? 'text-white' : 'text-gray-900'
  }`}>
    Longform Content
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {experienceWorks.longform.map((work, index) => (
      <div key={index} className={`rounded-xl overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <VideoEmbed url={work.embed} title={work.title} />
        <div className="p-4">
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold block hover:underline ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {work.title}
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

{/* FN Highlights Section */}
<div>
  <h2 className={`text-2xl font-bold mb-8 ${
    isDarkMode ? 'text-white' : 'text-gray-900'
  }`}>
    FN Highlights
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {experienceWorks.highlights.map((work, index) => (
      <div key={index} className={`rounded-xl overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <VideoEmbed url={work.embed} title={work.title} />
        <div className="p-4">
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold block hover:underline ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {work.title}
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
