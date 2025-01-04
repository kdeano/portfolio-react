import React from "react";
import { motion } from "framer-motion";

import { GETFORM_URL } from "../constants";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-body flex justify-center items-center p-4">
            <form method="POST" action={GETFORM_URL} className="flex flex-col max-w-[800px] w-full">
                <div className="pb-8">
                    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                    </motion.div>
                    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }}>
                        <p className="text-gray-300 py-4">{"// Submit the form below or shoot me an email - kyle.antony.dean@gmail.com"}</p>
                    </motion.div>
                </div>

                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
                <textarea
                    className="bg-[#ccd6f6] p-2 min-h-[100px] max-h-[400px]"
                    name="message"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300 ease-in-out">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
