import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-body text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
            </div>
          </motion.div>

          </div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mx-auto">
            <div className="lg:text-right text-1xl md:text-2xl lg:text-4xl font-bold">
              <p className="pb-2 lg:pb-10">Hi. I'm Kyle Dean, nice to meet you. Please take a look around.</p>
              <p className="pb-2 lg:pb-10">I am currently finishing my final year of university.</p>
              <p>I am looking for a full-time job as a frontend developer.</p>
            </div>

            <div>
              <p className="sm:flex pb-2 lg:pb-10">I am passionate about building elegant software. I specialise in creating software for clients ranging from individuals to small businesses. I am particulary focused on frontend development, but I am experienced in backend too.</p>
              <p className="sm:flex pb-2 lg:pb-10">I have studied 3 years of BSc Computer Science at Sheffield Hallam University. During my studies, I have achieved numerous high grades including firsts (70% or higher) in various modules. Languages used include: C, C++, C#, JavaScript, Java, Clojure, SQL.</p>
              <p>If you are impressed with my work and interested in talking to me about recruitment, please send me an email or reach out to me on <span className="text-white"><a href="https://www.linkedin.com/in/kdean7" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>. You can find my resume attached to the left-hand side of the page, along with other useful links.</p>
            </div>
        </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About