import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Logo } from "../assets";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";

const NavbarResume = () => {
    const [navOpen, setNavOpen] = useState(false);
    const handleClick = () => setNavOpen(!navOpen);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About", to: "/" },
        { name: "Skills", to: "/" },
        { name: "Work", to: "/" },
        { name: "Contact", to: "/" },
        { name: "Resume", to: "/resume" },
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            href: LINKEDIN_URL,
            icon: <FaLinkedin size={30} />,
            bgColor: "bg-theme",
        },
        {
            name: "GitHub",
            href: GITHUB_URL,
            icon: <FaGithub size={30} />,
            bgColor: "bg-[#333]",
        },
        {
            name: "Email",
            to: "/",
            icon: <HiOutlineMail size={30} />,
            bgColor: "bg-[#6D9DC5]",
            isLink: true,
        },
        {
            name: "Resume",
            to: "/resume",
            icon: <BsFillPersonLinesFill size={30} />,
            bgColor: "bg-[#db2777]",
            isLink: true,
        },
    ];

    return (
        <div className="absolute lg:fixed w-full h-[100px] flex justify-between items-center px-16 text-white">
            {/* Logo */}
            <div className="cursor-pointer">
                <Link to="/">
                    <motion.div animate={{ scale: [2, 1], opacity: [0, 1] }} transition={{ duration: 1 }}>
                        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
                    </motion.div>
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex">
                {navLinks.map((link) => (
                    <li key={link.name} className="border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
                        <Link to={link.to}>{link.name}</Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Menu */}
            <div className="md:hidden z-10 cursor-pointer" onClick={handleClick} role="none">
                {navOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <ul
                className={`${
                    navOpen ? "absolute" : "hidden"
                } top-0 left-0 w-full h-screen bg-body flex flex-col justify-center items-center`}
            >
                {navLinks.map((link) => (
                    <li key={link.name} className="py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600">
                        <Link to={link.to} onClick={handleClick}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    {socialLinks.map((social) =>
                        social.isLink ? (
                            <li
                                key={social.name}
                                className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.bgColor}`}
                            >
                                <Link to={social.to} className="flex justify-between items-center w-full text-gray-300">
                                    {social.name} {social.icon}
                                </Link>
                            </li>
                        ) : (
                            <li
                                key={social.name}
                                className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.bgColor}`}
                            >
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex justify-between items-center w-full text-gray-300"
                                >
                                    {social.name} {social.icon}
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default NavbarResume;
