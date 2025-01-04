import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Link as LinkRouter } from "react-router-dom";

import { Logo } from "../assets";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);

    const menuItems = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "skills", label: "Skills" },
        { to: "work", label: "Work" },
        { to: "contact", label: "Contact" },
        { to: "/resume", label: "Resume", isRouterLink: true },
    ];

    const socialLinks = [
        {
            href: LINKEDIN_URL,
            label: "LinkedIn",
            icon: <FaLinkedin size={30} />,
            bgColor: "bg-theme",
        },
        {
            href: GITHUB_URL,
            label: "GitHub",
            icon: <FaGithub size={30} />,
            bgColor: "bg-[#333]",
        },
        {
            to: "contact",
            label: "Email",
            icon: <HiOutlineMail size={30} />,
            bgColor: "bg-[#6D9DC5]",
            isScrollLink: true,
        },
        {
            to: "/resume",
            label: "Resume",
            icon: <BsFillPersonLinesFill size={30} />,
            bgColor: "bg-[#db2777]",
            isRouterLink: true,
        },
    ];

    return (
        <div className="absolute lg:fixed w-full h-[100px] flex justify-between items-center px-16 text-white mx-auto">
            {/* Logo */}
            <div className="cursor-pointer">
                <Link to="home" spy smooth duration={500}>
                    <motion.div animate={{ scale: [2, 1], opacity: [0, 1] }} transition={{ duration: 1 }}>
                        <img src={Logo} alt="Logo" className="w-[50px]" />
                    </motion.div>
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex">
                {menuItems.map(({ to, label, isRouterLink }) => (
                    <li key={label} className="border-b-4 border-transparent cursor-pointer hover:border-pink-600">
                        {isRouterLink ? (
                            <LinkRouter to={to}>{label}</LinkRouter>
                        ) : (
                            <Link to={to} spy smooth duration={500}>
                                {label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* Hamburger Icon */}
            <div className="md:hidden z-10 cursor-pointer" onClick={toggleNav} role="none">
                {navOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <ul
                className={`absolute top-0 left-0 w-full h-screen bg-body flex flex-col justify-center items-center ${
                    !navOpen && "hidden"
                }`}
            >
                {menuItems.map(({ to, label, isRouterLink }) => (
                    <li key={label} className="py-6 text-4xl border-b-4 border-transparent hover:border-pink-600">
                        {isRouterLink ? (
                            <LinkRouter onClick={toggleNav} to={to}>
                                {label}
                            </LinkRouter>
                        ) : (
                            <Link onClick={toggleNav} to={to} spy smooth duration={500}>
                                {label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    {socialLinks.map(({ href, to, label, icon, bgColor, isScrollLink, isRouterLink }) => (
                        <li
                            key={label}
                            className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bgColor}`}
                        >
                            {isScrollLink ? (
                                <Link
                                    className="flex justify-between items-center w-full cursor-pointer text-gray-300"
                                    to={to}
                                    spy
                                    smooth
                                    duration={500}
                                >
                                    {label} {icon}
                                </Link>
                            ) : isRouterLink ? (
                                <LinkRouter className="flex justify-between items-center w-full text-gray-300" to={to}>
                                    {label} {icon}
                                </LinkRouter>
                            ) : (
                                <a
                                    className="flex justify-between items-center w-full text-gray-300"
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {label} {icon}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
