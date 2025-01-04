import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { HTML, CSS, Tailwind, JavaScript, ReactJS, Node, CSharp, GitHub, Flutter, NextJS, Typescript, SQL } from "../assets";

const SkillCard = ({ logo, name }) => (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.8 }}>
            <img className="w-20 h-20 mx-auto my-4 object-contain" src={logo} alt={`${name} logo`} />
        </motion.div>
        <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
            <p className="my-4">{name}</p>
        </motion.div>
    </div>
);

SkillCard.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const Skills = () => {
    const skills = [
        { logo: HTML, name: "HTML" },
        { logo: CSS, name: "CSS" },
        { logo: Tailwind, name: "Tailwind" },
        { logo: JavaScript, name: "JavaScript" },
        { logo: Typescript, name: "Typescript" },
        { logo: ReactJS, name: "React" },
        { logo: NextJS, name: "Next.js" },
        { logo: Node, name: "NodeJS" },
        { logo: SQL, name: "SQL" },
        { logo: CSharp, name: "C#" },
        { logo: GitHub, name: "Git" },
        { logo: Flutter, name: "Flutter" },
    ];

    // Spacing becomes inconsistent on small screens - re-write to be responsive
    return (
        <div name="skills" className="w-full h-screen bg-body text-gray-300 pt-[600px] pb-[800px] md:py-0">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                {/* Title */}
                <div>
                    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    </motion.div>
                    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }}>
                        <p className="py-4">{"// These are some of the technologies I've worked with"}</p>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} logo={skill.logo} name={skill.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
