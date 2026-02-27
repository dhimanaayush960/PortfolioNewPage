export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'React.js', 'React Native', 'Tailwind CSS', 'Figma'],
      bgColor: 'bg-[#a8e6d9]',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'JWT Auth'],
      bgColor: 'bg-[#ffd670]',
    },
    {
      title: 'Tools & Languages',
      skills: ['Git & GitHub', 'C', 'C++', 'Python', 'REST APIs'],
      bgColor: 'bg-[#d9c8ff]',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="border-4 border-black bg-[#ffb3ba] p-6 mb-12 shadow-[4px_4px_0px_rgba(26,26,26,0.8)]">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black">
            Technical Skills
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} border-4 border-black p-8 shadow-[4px_4px_0px_rgba(26,26,26,0.8)]`}
            >
              <h3 className="text-2xl font-black uppercase text-black mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="border-2 border-black bg-white px-4 py-2 flex items-center"
                  >
                    <div className="w-2 h-2 bg-black mr-3"></div>
                    <span className="font-bold text-black">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience highlight */}
        <div className="border-4 border-black bg-[#bae1ff] p-8 shadow-[4px_4px_0px_rgba(26,26,26,0.8)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-r-4 border-black pr-8">
              <div className="text-4xl font-black text-black mb-2">3+</div>
              <div className="text-sm font-bold uppercase text-black">Projects Completed</div>
              <p className="text-xs text-gray-700 mt-2">Full-stack and mobile applications</p>
            </div>
            <div className="border-r-4 border-black pr-8">
              <div className="text-4xl font-black text-black mb-2">1+</div>
              <div className="text-sm font-bold uppercase text-black">Years Experience</div>
              <p className="text-xs text-gray-700 mt-2">Hands-on development</p>
            </div>
            <div>
              <div className="text-4xl font-black text-black mb-2">5</div>
              <div className="text-sm font-bold uppercase text-black">Tech Skills Areas</div>
              <p className="text-xs text-gray-700 mt-2">Frontend, Backend, Mobile, DB, UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
