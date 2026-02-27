export default function Projects() {
  const projects = [
    {
      title: 'BookWorm',
      subtitle: 'Full-Stack React Native App',
      date: 'Jan 2024 – Present',
      description: 'Built a full-stack React Native application enabling users to browse, manage, and track books with authentication and real-time data handling.',
      tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
      bgColor: 'bg-[#a8e6d9]',
      link: 'https://github.com/dhimanaayush960/bookworm',
    },
    {
      title: 'Emotion Based Website',
      subtitle: 'Mood-Based Interactive Web App',
      date: 'Feb 2025',
      description: 'Developed an interactive web application that adapts UI themes and music playback based on user mood.',
      tags: ['React', 'UI/UX', 'Interactive Design'],
      bgColor: 'bg-[#ffd670]',
      link: 'https://emotiontune.vercel.app/',
    },
    {
      title: 'PG Life',
      subtitle: 'Best PG\'s in Haridwar',
      date: 'Jun 2024 – Aug 2024',
      description: 'Built a PG accommodation search platform with secure authentication and structured listings.',
      tags: ['MERN', 'MySQL', 'Location-based Search'],
      bgColor: 'bg-[#d9c8ff]',
      link: 'https://aayushdhiman98.github.io/PG-Life-project/',
    },
  ];

  return (
    <section id="projects" className="bg-[#f5f3f0] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="border-4 border-black bg-[#ffb3ba] p-6 mb-12 shadow-[4px_4px_0px_rgba(26,26,26,0.8)]">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black">
            Featured Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.bgColor} border-4 border-black p-6 shadow-[4px_4px_0px_rgba(26,26,26,0.8)] transition-all hover:translate-x-1 hover:translate-y-1`}
            >
              <div className="space-y-4">
                {/* Date badge */}
                <div className="border-2 border-black bg-white px-3 py-1 w-fit">
                  <span className="text-xs font-bold uppercase">{project.date}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-black uppercase text-black">
                    {project.title}
                  </h3>
                  <p className="text-sm font-bold text-gray-800 mt-1">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="border-2 border-black bg-white px-2 py-1"
                    >
                      <span className="text-xs font-bold uppercase">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 font-bold uppercase text-sm border-4 border-black bg-black text-white transition-all active:translate-x-1 active:translate-y-1 cursor-pointer mt-4 block text-center hover:bg-gray-800"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
