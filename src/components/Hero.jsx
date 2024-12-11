import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div className="bg-light-cream flex flex-col relative overflow-hidden min-h-screen">
            {/* Background Image (Blurred) */}
            <div
                className="absolute top-0 left-0 right-0 bottom-0 z-0"
                style={{
                    backgroundImage: "url('/images/hero-background..jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)", // Apply blur effect only on background image
                    zIndex: -1, // Keep the background behind content
                }}
            />

            <div className="container mt-10 mx-auto flex flex-1 flex-col md:flex-row items-center px-6 pb-20 relative z-10">
                {/* Text Section */}
                <div className="flex-1 roboto-slab text-center md:text-left mb-10 md:mb-0">
                    <motion.h1
                        className="text-5xl font-extrabold text-calm-green-500 -mt-40 mb-4 leading md:leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[4.22rem] text-calm-green-600 font-stylish">
                            Overall Wellness
                        </span>
                        <br />
                        through Ayurveda is our muse
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-700 mb-8 px-4 md:px-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Complete switch to chemical-free products to nourish
                        your soul.
                    </motion.p>
                    <motion.button
                        className="bg-calm-green-900 text-white py-3 px-6 rounded-lg transition duration-300 transform hover:bg-calm-green-800"
                        initial={{ scale: 1 }}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Explore More
                    </motion.button>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <motion.div
                        className="w-full h-full md:w-[500px] md:h-[600px] relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                    >
                        <motion.img
                            src="/images/hero-img.jpg"
                            alt="Ayurveda Products"
                            className="absolute object-cover rounded-full w-[30rem] h-[30rem] shadow-2xl transition-transform duration-500 hover:scale-105"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Fixed Leaves Images */}
            <motion.img
                src="/images/leaves-img1.png"
                alt="Leaf 1"
                className="absolute"
                style={{
                    top: "10%", // Manually set position
                    right: "90%", // Manually set position
                    width: "25rem", // Manually set size
                    opacity: 1,
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1 }}
            />
            <motion.img
                src="/images/leaves-img3.png"
                alt="Leaf 3"
                className="absolute"
                style={{
                    top: "60%", // Manually set position
                    left: "82%", // Manually set position
                    width: "19rem", // Manually set size
                    opacity: 1,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1.5 }}
            />
        </div>
    );
};

export default HeroSection;
