import { Menu } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);


  return (
    <>
        <nav className='navbar-desktop p-3 bg-linear-to-b from-blue-950 to-black text-white flex justify-between items-center'>
            <div className='logo'>
              A
            </div>
            <div className='items md:block hidden'>
              <ul className='flex gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='toggle md:hidden block' onClick={() => setToggle(!toggle)} >
                <Menu />
            </div>
        </nav>

        <nav className={` ${toggle ? "block" : "hidden"} transition delay-150 duration-300 ease-in-out hover:scale-105 navbar-mobile text-center bg-linear-to-b from-blue-950 to-black text-white`}>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </nav>
    </>
  )
}

export default Navbar
