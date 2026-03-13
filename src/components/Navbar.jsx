import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('Home')


  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-950 px-6 py-3.5 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="12 2 2 7 12 22 22 7" />
          </svg>
        </div>
        <span className="text-white font-semibold text-lg tracking-tight">Acme</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-1 list-none">
          <li>
            <button
              className={`px-4 py-1.5 rounded-lg text-white text-sm font-medium transition-all duration-200`}
            >
             <Link to="/"> Home </Link>
            </button>
          </li>

           <li>
            <button
              className={`px-4 py-1.5 rounded-lg text-sm text-white font-medium transition-all duration-200`}
            >
             <Link to="/about"> About </Link>
            </button>
          </li>

          
      </ul>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2 rounded-lg border border-white/25 hover:bg-white/10 transition-all duration-200 group"
        aria-label="Toggle menu"
      >
        <span className={`block w-4.5 h-0.5 bg-white rounded-full transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-4.5 h-0.5 bg-white rounded-full transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-4.5 h-0.5 bg-white rounded-full transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/10 md:hidden z-50">
          <ul className="flex flex-col p-4 gap-1 list-none">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => { setActive(link); setIsOpen(false) }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active === link
                      ? 'bg-white/15 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar