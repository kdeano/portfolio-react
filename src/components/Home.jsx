import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

import { LogoHero } from '../assets'

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div name="home" className="w-full h-screen bg-body">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">

      {/* <div className="fixed w-full h-[400px]">
        <img className="w-3/4 mx-auto select-none" src={LogoHero} alt="Logo hero" />
      </div> */}

        <p className="pb-1 text-pink-600">Hi, my name is</p>
        <h1 className="pb-4 text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Kyle Dean</h1>
        <h2 className="pb-2 text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a full-stack developer specialising in building and designing exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
          <Link className="group flex" onClick={handleClick} to="work" spy={true} smooth={true} duration={500}>
            View Work 
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4 mt-1" />
            </span> 
          </Link>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Home