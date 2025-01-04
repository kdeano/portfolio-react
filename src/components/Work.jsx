import React from "react";
import { motion } from "framer-motion";

import { NFTReactNative, NFTReactNativeWebsite, Pokemonjs } from "../assets";
import "../index.css";
import {
    REACT_NATIVE_NFT_MARKETPLACE_CODE_URL,
    REACT_NFT_MARKETPLACE_CODE_URL,
    REACT_NFT_MARKETPLACE_DEMO_URL,
    REACT_POKEMONJS_CODE_URL,
    REACT_POKEMONJS_DEMO_URL,
} from "../constants";

const Work = () => {
    const projects = [
        {
            title: "React Native NFT Marketplace",
            img: NFTReactNative,
            demoLink: null,
            codeLink: REACT_NATIVE_NFT_MARKETPLACE_CODE_URL,
        },
        {
            title: "React NFT Marketplace App Showcase",
            img: NFTReactNativeWebsite,
            demoLink: REACT_NFT_MARKETPLACE_DEMO_URL,
            codeLink: REACT_NFT_MARKETPLACE_CODE_URL,
        },
        {
            title: "Pokemon in JavaScript",
            img: Pokemonjs,
            demoLink: REACT_POKEMONJS_DEMO_URL,
            codeLink: REACT_POKEMONJS_CODE_URL,
        },
    ];

    return (
        <div name="work" className="w-full md:h-screen bg-body text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                        <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    </motion.div>
                    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }}>
                        <p className="py-6">{"// Check out some of my recent work"}</p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map(({ title, img, demoLink, codeLink }) => (
                        <motion.div key={title} whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.8 }}>
                            <div
                                style={{ backgroundImage: `url(${img})` }}
                                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                            >
                                {/* Hover effects */}
                                <div className="opacity-0 group-hover:opacity-100">
                                    <span className="text-2xl font-bold text-white tracking-wider flex text-center">{title}</span>
                                    <div className="pt-8 text-center">
                                        {demoLink && (
                                            <a href={demoLink} target="_blank" rel="noreferrer noopener">
                                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                    Demo
                                                </button>
                                            </a>
                                        )}
                                        <a href={codeLink} target="_blank" rel="noreferrer noopener">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
