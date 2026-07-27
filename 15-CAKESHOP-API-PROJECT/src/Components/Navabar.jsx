

const Navabar = () => {

    return(
     <nav className="sticky top-0 z-50 bg-gradient-to-r from-white to-rose-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 rounded-full bg-rose-400 flex items-center justify-center shadow-md">
            <span className="text-white text-xl">🍰</span>
          </div>
          <h1 className="font-serif text-2xl font-bold text-rose-900">
            Sweet <span className="text-rose-400">Crumbs</span>
          </h1>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-8 text-rose-900 font-medium">
          <li className="hover:text-rose-400 transition">Home</li>
          <li className="hover:text-rose-400 transition">Cakes</li>
          <li className="hover:text-rose-400 transition">Custom Orders</li>
          <li className="hover:text-rose-400 transition">About</li>
          <li className="hover:text-rose-400 transition">Contact</li>
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Order Now
        </button>

        {/* MOBILE ICON */}
        <div className="md:hidden text-rose-900 text-2xl">☰</div>
      </div>
  
    </nav>
    )
}

export default Navabar
