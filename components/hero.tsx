export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f5f3f0] via-[#a8e6d9] to-[#d9c8ff] flex items-center justify-center px-4 md:px-8">
      <div className="w-full max-w-5xl">
        {/* Main content box */}
        <div className="border-4 border-black bg-white shadow-[8px_8px_0px_rgba(26,26,26,0.8)] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-black mb-2">
                  Welcome to My Portfolio
                </div>
                <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight text-black">
                  Aayush Dhiman
                </h1>
              </div>
              
              <div className="space-y-3">
                <p className="text-lg font-bold uppercase text-black">Full-Stack Developer</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  Crafting scalable digital products with React, Node.js, and modern web technologies. Passionate about UI/UX design and building user-focused applications.
                </p>
              </div>

              {/* Contact info boxes */}
              <div className="grid grid-cols-1 gap-3 pt-4">
                <div className="border-4 border-black bg-[#a8e6d9] p-3">
                  <div className="text-xs font-bold uppercase mb-1">Email</div>
                  <a href="mailto:aayushdhiman8989@gmail.com" className="text-xs font-bold text-black hover:underline break-all">
                    aayushdhiman8989@gmail.com
                  </a>
                </div>
                <div className="border-4 border-black bg-[#ffd670] p-3">
                  <div className="text-xs font-bold uppercase mb-1">Phone</div>
                  <a href="tel:+917817901273" className="text-sm font-bold text-black hover:underline">
                    +91-7817901273
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4 flex-wrap">
                <a 
                  href="#projects" 
                  className="px-6 py-3 font-bold uppercase text-sm border-4 border-black bg-black text-white transition-all active:translate-x-1 active:translate-y-1 cursor-pointer shadow-[4px_4px_0px_rgba(26,26,26,0.8)] hover:bg-gray-800"
                >
                  View Work
                </a>
                <a 
                  href="mailto:aayushdhiman8989@gmail.com"
                  className="px-6 py-3 font-bold uppercase text-sm border-4 border-black bg-[#ffd670] text-black transition-all active:translate-x-1 active:translate-y-1 cursor-pointer shadow-[4px_4px_0px_rgba(26,26,26,0.8)] hover:bg-yellow-400"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com/dhimanaayush960" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-4 border-black bg-white px-4 py-2 font-bold uppercase text-sm transition-all hover:bg-black hover:text-white"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/aayush-dhiman-154382352/?isSelfProfile=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-4 border-black bg-white px-4 py-2 font-bold uppercase text-sm transition-all hover:bg-black hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Visual element */}
            <div className="hidden md:block space-y-4">
              <div className="border-4 border-black bg-[#d9c8ff] p-8 shadow-[6px_6px_0px_rgba(26,26,26,0.6)]">
                <div className="text-xs font-bold uppercase mb-4 text-black">Skills Stack</div>
                <div className="grid grid-cols-2 gap-2">
                  {['React', 'Node.js', 'React Native', 'JavaScript', 'MongoDB', 'MySQL'].map((skill) => (
                    <div key={skill} className="border-2 border-black bg-white px-3 py-2">
                      <span className="text-xs font-bold uppercase">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border-4 border-black bg-[#ffb3ba] p-4 shadow-[4px_4px_0px_rgba(26,26,26,0.5)]">
                  <div className="text-2xl font-black">3+</div>
                  <div className="text-xs font-bold uppercase">Projects</div>
                </div>
                <div className="border-4 border-black bg-[#a8e6d9] p-4 shadow-[4px_4px_0px_rgba(26,26,26,0.5)]">
                  <div className="text-2xl font-black">1+</div>
                  <div className="text-xs font-bold uppercase">Years XP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
