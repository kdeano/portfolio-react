import React from "react";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import PropTypes from "prop-types";

const SectionHeader = ({ title }) => (
    <div className="w-full h-[2.5rem] mt-4 bg-pink-600">
        <h1 className="text-white text-2xl font-bold px-2 py-1">{title}</h1>
    </div>
);

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

const Resume = () => {
    return (
        <div name="resume" className="w-full h-full bg-body text-gray-300 pb-20">
            <ScrollUpButton style={{ backgroundColor: "#db2777" }} ToggledStyle={{ opacity: 0.8 }} AnimationDuration={1000} />

            <div className="max-w-[1000px] mx-auto p-4 pt-[10rem] block justify-center w-full h-full">
                {/* Personal Info */}
                <h1 className="text-white text-4xl font-bold text-center">Kyle Dean</h1>
                <p className="pt-4 text-center">Oldham, Greater Manchester</p>
                <p className="text-center">+44 7834 281 669 | kyle.antony.dean@gmail.com</p>

                {/* Profile */}
                <SectionHeader title="PROFILE" />
                <p className="text-gray-200 text-left mt-2 px-2">
                    Enthusiastic developer with over seven years of personal experience and more than a year in the industry, specializing
                    in troubleshooting and problem-solving. Dedicated and committed to ensuring the success of every project.
                </p>

                {/* Education */}
                <SectionHeader title="EDUCATION & QUALIFICATIONS" />
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-white text-md lg:text-lg text-left mt-2 px-2 font-semibold">
                            Sheffield Hallam University | BSc Computer Science{""}
                            <span className="block lg:flex lg:float-right">Sep 2019 - Jun 2022</span>
                        </h2>
                        <p className="text-gray-200 text-left mt-3 px-2">
                            Grade achieved: First Class Honors (1st)
                            <br />
                            Modules include Databases, Mobile Development, Object-Oriented Programming, Algorithms, and more.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white text-md lg:text-lg text-left px-2 font-semibold">
                            Oldham College | Advanced Technical Extended Diploma{""}
                            <span className="block lg:flex lg:float-right">Sep 2017 - Jun 2019</span>
                        </h2>
                        <p className="text-left mt-3 px-2">
                            Level 3 Application Development - Distinction, Distinction
                            <br />
                            Core Maths - B, Pearson Extended Project - D
                        </p>
                        <p className="text-left mt-3 px-2">
                            Gained broad development skills in VB.NET, C#, UI/UX design, and more. Wrote a dissertation on AI and machine
                            learning.
                        </p>
                    </div>
                </div>

                {/* Key Skills */}
                <SectionHeader title="KEY SKILLS" />
                <ul className="mt-3 ml-7 space-y-1 list-disc">
                    <li>Team collaboration and task completion.</li>
                    <li>Aware of body language in team interactions.</li>
                    <li>Concise communication and vocabulary.</li>
                </ul>

                {/* Development & IT Skills */}
                <SectionHeader title="DEVELOPMENT & IT SKILLS" />
                <ul className="mt-3 ml-7 space-y-1 list-disc">
                    <li>Experienced in frameworks like React, Angular, .NET, Flutter.</li>
                    <li>Proficient in HTML, CSS, JavaScript, SQL, Dart.</li>
                    <li>Experienced with Git, Azure, DevOps, Figma, Adobe Photoshop, and Adobe Illustrator.</li>
                    <li>Good understanding of agile and testing methodologies.</li>
                </ul>

                {/* Work Experience */}
                <SectionHeader title="WORK EXPERIENCE" />
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-white text-md lg:text-lg text-left mt-2 px-2 font-semibold">
                            Full-stack Software Developer | Pecometer Software Limited{""}
                            <span className="block lg:flex lg:float-right">Sep 2023 - Present</span>
                        </h2>
                        <h3 className="px-2 text-gray-400">Developing bespoke tools and features for a large food prep company.</h3>
                        <ul className="mt-3 ml-7 space-y-1 list-disc">
                            <li>
                                Developed a bespoke diagramming tool for a client admin panel, enabling custom CMS route creation for their
                                customer website.
                            </li>
                            <li>Successfully developed large feature updates & overhauls on both customer website & mobile app.</li>
                            <li>Led multiple projects by mentoring junior developers and ensuring timely delivery.</li>
                            <li>Worked as a team to redesign admin panel UI/UX to enhance efficiency and ensure updated style guides.</li>
                            <li>Redesigned UI and functionality of customer app in Flutter for a major feature overhaul.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white text-md lg:text-lg text-left mt-2 px-2 font-semibold">
                            Software Developer | HCC Solicitors{""}
                            <span className="block lg:flex lg:float-right">Jun 2022 - Sep 2023</span>
                        </h2>
                        <h3 className="px-2 text-gray-400">Assisted with software support for a law firm.</h3>
                        <ul className="mt-3 ml-7 space-y-1 list-disc">
                            <li>Self taught the VF (VisualFiles) programming language & environment.</li>
                            <li>One of two developers who created a bespoke in-house application (C# & Azure) for the company’s needs.</li>
                            <li>
                                Crucial to assisting the management to incorporate more mainstream languages, technologies & agile methods
                                to development.
                            </li>
                            <li>Participated in an agile work environment.</li>
                            <li>
                                Played a vital role in changing the company’s letter headers and footers (graphics & development) to go
                                paperless.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Additional Information */}
                <SectionHeader title="ADDITIONAL INFORMATION" />
                <ul className="mt-3 ml-7 space-y-1 list-disc">
                    <li>
                        Created a live personal portfolio website using React and Tailwind, optimized for performance and accessibility
                        across all devices.
                    </li>
                    <li>Completed numerous online courses on Codecademy & Udemy including some of the below:</li>
                    <ul className="ml-7 list-disc">
                        <li>Create an Advanced Web App with React and Redux</li>
                        <li>Fundamentals of Cybersecurity</li>
                        <li>Intro to Flutter</li>
                        <li>Flutter & Dart - The Complete Guide [2024 Edition]</li>
                    </ul>
                    <li>
                        Assisted in developing a website for a friend's company, similar to Khan Academy and Brilliant, using the MERN
                        stack. Primarily focused on front-end development, while also contributing to back-end development.
                    </li>
                </ul>

                {/* Hobbies & Interests */}
                <SectionHeader title="HOBBIES & INTERESTS" />
                <div>
                    <p className="text-left mt-3 px-2">
                        I am a passionate football fan and had the privilege of serving as a club captain at a young age, an experience that
                        taught me the importance of effective communication and leadership. While I don't get to play as often as I'd like
                        these days, I would jump at the opportunity to return to the field.
                    </p>
                    <p className="text-left mt-3 px-2">
                        I also have a strong interest in digital design and a keen eye for UI/UX improvements. I frequently watch and engage
                        with tutorials to refine my skills and enhance the quality of the projects I work on.
                    </p>
                </div>

                {/* References */}
                <SectionHeader title="REFERENCES" />
                <p className="text-left mt-3 px-2">Please contact me for any references.</p>
            </div>
        </div>
    );
};

export default Resume;
