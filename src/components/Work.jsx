import React from 'react'
import { motion } from 'framer-motion'

import { NFTReactNative, NFTReactNativeWebsite, Pokemonjs } from '../assets'
import '../index.css'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-body text-gray-300">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <p className="py-6">// Check out some of my recent work</p>
          </motion.div>
        </div>

        {/* Container for cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Card item */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div 
              style={{ backgroundImage: `url(${NFTReactNative})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider flex text-center">
                    React Native NFT Marketplace
                  </span>
                  <div className="pt-8 text-center">
                    <a href="https://github.com/kdeano/nft-marketplace" target="_blank" rel="noreferrer noopener">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div 
              style={{ backgroundImage: `url(${NFTReactNativeWebsite})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 duration-300">
                  <span className="text-2xl font-bold text-white tracking-wider flex text-center">
                    React NFT Marketplace App Showcase
                  </span>
                  <div className="pt-8 text-center">
                    <a href="https://fancy-block-8157.on.fleek.co" target="_blank" rel="noreferrer noopener">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a href="https://github.com/kdeano/nft-marketplace-showcase" target="_blank" rel="noreferrer noopener">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div 
              style={{ backgroundImage: `url(${Pokemonjs})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 duration-300">
                  <span className="text-2xl font-bold text-white tracking-wider flex text-center">
                    Pokemon in JavaScript
                  </span>
                  <div className="pt-8 text-center">
                    <a href="https://royal-recipe-7245.on.fleek.co/" target="_blank" rel="noreferrer noopener">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a href="https://github.com/kdeano/pokemon-js" target="_blank" rel="noreferrer noopener">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                  </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Work