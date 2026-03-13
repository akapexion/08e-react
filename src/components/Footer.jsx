import React from 'react'

const Footer = () => {
  const links = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Legal: ['Privacy', 'Terms', 'Cookie policy'],
  }

  const socials = [
    {
      label: 'Twitter',
      icon: (
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      ),
      filled: true,
    },
    {
      label: 'LinkedIn',
      icon: (
        <>
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
      filled: false,
    },
    {
      label: 'GitHub',
      icon: (
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      ),
      filled: false,
    },
  ]

  return (
    <>
    <footer className="bg-slate-950 text-white px-10 pt-12 pb-6">
      {/* Top grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 2 7 12 22 22 7" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">Acme</span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-[220px]">
            Building products that help teams move faster and ship with confidence.
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ label, icon, filled }) => (
              <a 
                key={label}
                href="#"
                aria-label={label}
                className="w-[34px] h-[34px] rounded-lg border border-white/[0.12] flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
              >
                <svg
                  width="15" height="15" viewBox="0 0 24 24"
                  fill={filled ? 'rgba(255,255,255,0.6)' : 'none'}
                  stroke={filled ? 'none' : 'rgba(255,255,255,0.6)'}
                  strokeWidth="2"
                >
                  {icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[12px] text-white/30">
          © 2026 Acme Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <p className="text-[12px] text-white/30">All systems operational</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer