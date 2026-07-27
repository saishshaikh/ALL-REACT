const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Saish</h2>
            <p className="mt-3 text-sm text-gray-300">
              Building modern web experiences with React & Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/home" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300 transition">GitHub</a>
              <a href="#" className="hover:text-gray-300 transition">LinkedIn</a>
              <a href="#" className="hover:text-gray-300 transition">Twitter</a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-cyan-700 mt-10 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Saish. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
