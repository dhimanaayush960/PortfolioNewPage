export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="border-4 border-white bg-black p-6">
            <h3 className="text-2xl font-black uppercase mb-2">Aayush</h3>
            <p className="text-sm text-gray-300">Full-Stack Developer & UI/UX Designer</p>
          </div>

          {/* Quick Links */}
          <div className="border-4 border-white bg-black p-6">
            <h4 className="text-sm font-black uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:underline">Home</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border-4 border-white bg-black p-6">
            <h4 className="text-sm font-black uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:aayushdhiman8989@gmail.com" className="hover:underline">Email</a></li>
              <li><a href="tel:+917817901273" className="hover:underline">Phone</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">GitHub</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="border-4 border-white bg-black p-6">
            <h4 className="text-sm font-black uppercase mb-4">Follow</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black">G</a>
              <a href="#" className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black">L</a>
              <a href="#" className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black">T</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-4 border-white pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 Aayush Dhiman. All rights reserved. Crafted with code and creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}
