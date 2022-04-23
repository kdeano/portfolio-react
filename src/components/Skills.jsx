import React from 'react'

import { HTML, CSS, Tailwind, JavaScript, ReactJS, Node, CSharp, GitHub } from '../assets'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-body text-gray-300">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">// These are some of the technologies I've worked with</p>
        </div>

        {/* Icons container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={HTML} alt="HTML logo" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={CSS} alt="CSS logo" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Tailwind} alt="Tailwind logo" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={JavaScript} alt="JavaScript logo" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={ReactJS} alt="React logo" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Node} alt="NodeJS logo" />
            <p className="my-4">NodeJS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={CSharp} alt="CSharp logo" />
            <p className="my-4">C#</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={GitHub} alt="GitHub logo" />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills