export default function Education() {
  return (
    <section className="bg-[#f5f3f0] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="border-4 border-black bg-[#a8e6d9] p-6 mb-12 shadow-[4px_4px_0px_rgba(26,26,26,0.8)]">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black">
            Education & Certifications
          </h2>
        </div>

        {/* Education box */}
        <div className="border-4 border-black bg-white p-8 mb-8 shadow-[4px_4px_0px_rgba(26,26,26,0.8)]">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="border-4 border-black bg-[#ffd670] w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-black">🎓</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black uppercase text-black mb-1">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="font-bold text-gray-800 mb-2">
                JB Institute of Technology, Uttarakhand Technical University
              </p>
              <div className="border-2 border-black bg-[#d9c8ff] px-3 py-1 w-fit mb-3">
                <span className="text-sm font-bold">Aug 2023 – Present</span>
              </div>
              <p className="text-sm text-gray-700">
                Pursuing B.Tech in Computer Science Engineering with focus on MERN stack development, mobile applications, and UI/UX design principles.
              </p>
            </div>
          </div>
        </div>

        {/* Experience box */}
        <div className="border-4 border-black bg-white p-8 mb-8 shadow-[4px_4px_0px_rgba(26,26,26,0.8)]">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="border-4 border-black bg-[#ffb3ba] w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-black">💼</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black uppercase text-black mb-1">
                Vocational Trainee (Internship)
              </h3>
              <p className="font-bold text-gray-800 mb-2">
                Bharat Heavy Electricals Limited (BHEL)
              </p>
              <div className="border-2 border-black bg-[#a8e6d9] px-3 py-1 w-fit mb-3">
                <span className="text-sm font-bold">Jul 2025 – Aug 2025</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Assisted in developing enterprise-scale systems and automating industrial IT workflows at India's leading public-sector organization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black text-black mt-1">▸</span>
                  <span className="text-sm text-gray-700">Assisted in developing enterprise-scale systems and automating industrial IT workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black text-black mt-1">▸</span>
                  <span className="text-sm text-gray-700">Understood system documentation, process automation concepts, and technical infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-4 border-black bg-[#bae1ff] p-8 shadow-[4px_4px_0px_rgba(26,26,26,0.8)]">
          <h3 className="text-2xl font-black uppercase text-black mb-6">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Web Development', issuer: 'Internshala Trainings', link: 'https://trainings.internshala.com/view_certificate/1wvmq07uj7v/jib7gean962/' },
              { title: 'Python Project Bootcamp', issuer: 'LetsUpgrade', link: 'https://verify.letsupgrade.in/certificate/LUEPYTJUL1242402' },
              { title: 'SQL (Basic)', issuer: 'HackerRank', link: 'https://www.hackerrank.com/certificates/iframe/58abcd9e7835' },
            ].map((cert, index) => (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-4 border-black bg-white p-4 hover:bg-gray-100 transition-all cursor-pointer"
              >
                <div className="font-bold text-black mb-1">{cert.title}</div>
                <div className="text-xs font-bold text-gray-600 uppercase">{cert.issuer}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
