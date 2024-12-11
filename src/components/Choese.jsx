import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhyChooseSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // Image list
    const images = [
        "https://londonorganicbeauty.com/cdn/shop/articles/Natural_Beauty_Products_2.jpg?v=1650521620",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFLkhELCuQrdCNY9EAbro6QddOpaoOhd38Q&s",
        "https://static.israel21c.org/www/uploads/2019/02/main-pic-8-1520x855.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VZEbiCgb8vPApOGPuW0J50WDRYqney4bXw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jMjB9N_zaz_QPFFbhFpZtBK0rtzJVsO9NQ&s",
    ];

    // Automatically change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const imageVariants = {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 2 } },
        exit: { opacity: 0, transition: { duration: 2 } },
    };

    return (
        <div className="container mx-auto -mt-20 ">
            <div className="flex flex-col px-5 lg:flex-row items-center bg-calm-green-100/60 rounded-lg shadow-xl overflow-hidden">
                {/* Left Image Section */}
                <div className="lg:w-1/2 rounded-lg relative h-64 sm:h-96 overflow-hidden">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentImage}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage: `url(${images[currentImage]})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Text Section */}
                <div className="lg:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center font-natural text-calm-green-700 mb-4">
                        Why Choose Natural Ayurvedic Products?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Discover the holistic benefits of Ayurvedic products,
                        rooted in ancient practices to enhance your physical,
                        mental, and spiritual well-being. Unlike chemical-based
                        alternatives, Ayurvedic products are made from natural
                        ingredients that work in harmony with your body.
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-calm-green-400 mr-3"></span>
                            100% natural and chemical-free ingredients.
                        </li>
                        <li className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-calm-green-400 mr-3"></span>
                            Eco-friendly and sustainable products.
                        </li>
                        <li className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-calm-green-400 mr-3"></span>
                            Supports your body's natural healing processes.
                        </li>
                    </ul>
                    <button className="mt-8 bg-soft-yellow-400 text-calm-green-900 py-3 px-6 rounded-lg font-poppins text-lg hover:bg-soft-yellow-300 hover:shadow-lg transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;
