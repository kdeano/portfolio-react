import React from 'react'
import { motion } from 'framer-motion'

import { HTML, CSS, Tailwind, JavaScript, ReactJS, Node, CSharp, GitHub } from '../assets'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-body text-gray-300">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
            </motion.div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <p className="py-4">// These are some of the technologies I've worked with</p>
            </motion.div>
          </div>

        {/* Icons container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-20 mx-auto my-4" src={HTML} alt="HTML logo" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <p className="my-4">HTML</p>
            </motion.div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-20 mx-auto my-4" src={CSS} alt="CSS logo" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <p className="my-4">CSS</p>
            </motion.div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-20 mx-auto my-4" src={Tailwind} alt="Tailwind logo" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <p className="my-4">Tailwind</p>
            </motion.div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-20 mx-auto my-4" src={JavaScript} alt="JavaScript logo" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <p className="my-4">JavaScript</p>
            </motion.div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-20 mx-auto my-4" src={ReactJS} alt="ReactJS logo" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <p className="my-4">React</p>
            </motion.div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-20 mx-auto my-4" src={Node} alt="NodeJS logo" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <p className="my-4">NodeJS</p>
            </motion.div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-20 mx-auto my-4" src={CSharp} alt="CSharp logo" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <p className="my-4">C#</p>
            </motion.div>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-20 mx-auto my-4" src={GitHub} alt="GitHub logo" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <p className="my-4">GitHub</p>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills