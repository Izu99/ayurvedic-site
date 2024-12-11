import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Navbar = () => {
    return (
        <div className="container mx-auto flex items-center rounded-lg px-10 py-5 justify-between">
            {/* Logo with fade-in animation */}
            <motion.img
                className="w-40"
                src="/images/logo.png"
                alt="logo"
                initial={{ opacity: 0 }} // Start with invisible
                animate={{ opacity: 1 }} // Fade to visible
                transition={{ duration: 1 }} // Smooth fade-in over 1 second
                whileHover={{ scale: 1.1 }} // Logo scales up on hover
            />

            {/* Navbar Menu Items with hover effect */}
            <ul className="flex text-lg font-semibold flex-row space-x-8 flex-grow justify-center">
                <motion.li
                    className="text-gray-700"
                    whileHover={{ scale: 1.1, color: "#2b8a3e" }} // Scale up and change color on hover
                    transition={{ duration: 0.3 }}
                >
                    <a href="/"> Home</a>
                </motion.li>
                <motion.li
                    className="text-gray-700"
                    whileHover={{ scale: 1.1, color: "#2b8a3e" }}
                    transition={{ duration: 0.3 }}
                >
                    <a className="" href="/product">
                        {" "}
                        Shop
                    </a>
                </motion.li>
                <motion.li
                    className="text-gray-700"
                    whileHover={{ scale: 1.1, color: "#2b8a3e" }}
                    transition={{ duration: 0.3 }}
                >
                    Community
                </motion.li>
                <motion.li
                    className="text-gray-700"
                    whileHover={{ scale: 1.1, color: "#2b8a3e" }}
                    transition={{ duration: 0.3 }}
                >
                    About Us
                </motion.li>
            </ul>

            {/* Cart Icon with hover effect */}
            <motion.div
                className="text-calm-green text-2xl m-4"
                whileHover={{ scale: 1.2, color: "#2b8a3e" }} // Cart icon scaling and color change
                transition={{ duration: 0.3 }}
            >
                <AiOutlineShoppingCart />
            </motion.div>
        </div>
    );
};

export default Navbar;
