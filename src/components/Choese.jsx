import React from "react";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <motion.div
            className="container mx-auto -mt-20 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="flex flex-col lg:flex-row items-center bg-calm-green-100/60 rounded-lg shadow-xl overflow-hidden">
                {/* Left Image Section */}
                <div className="lg:w-1/2">
                    <img
                        src="https://londonorganicbeauty.com/cdn/shop/articles/Natural_Beauty_Products_2.jpg?v=1650521620"
                        alt="Natural Beauty Products"
                        className="w-full h-ful p-5 object-cover rounded-[2.5rem]"
                    />
                </div>

                {/* Right Text Section */}
                <div className="lg:w-1/2 p-8">
                    <h2 className="text-3xl roboto-slab text-calm-green-700 mb-4">
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
        </motion.div>
    );
};

export default WhyChooseSection;
