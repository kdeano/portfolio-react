import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Logo } from '../assets'
 
const NavbarResume = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="absolute lg:fixed w-full h-[100px] flex justify-between items-center px-16 text-white mx-auto">
      <div className="cursor-pointer">
        <Link to="/">
          <motion.div
            animate={{ scale: [2, 1], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <img src={Logo} alt="Logo" style={{width: '50px'}} />
          </motion.div>
        </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link to="/">
            About
          </Link>
        </li>
        <li className="border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link to="/">
            Skills
          </Link>
        </li>
        <li className="border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link to="/">
            Work
          </Link>
        </li>
        <li className="border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link to="/">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-body flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link onClick={handleClick} to="/">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link onClick={handleClick} to="/">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link onClick={handleClick} to="/">
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link onClick={handleClick} to="/">
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
          <Link onClick={handleClick} to="/resume">
            Resume
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-theme">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/kdean7/" target="_blank" rel="noreferrer noopener">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/kdeano" target="_blank" rel="noreferrer noopener">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6D9DC5]">
            <Link className="flex justify-between items-center w-full text-gray-300" to="/">
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db2777]">
            <Link className="flex justify-between items-center w-full text-gray-300" to="/resume">
              Resume <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavbarResume