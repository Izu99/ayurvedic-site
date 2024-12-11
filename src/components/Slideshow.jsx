import React from "react";
import { motion } from "framer-motion";

const Slideshow = () => {
    // Define slides with large images, text, and buttons
    const slides = [
        {
            id: 1,
            image: "https://www.dreamstime.com/olive-cosmetic-bottles-natural-beauty-product-line-cosmetics-landing-page-new-green-background-berries-leaves-water-image163632890+1",
            title: "Discover the Future of Style",
            description:
                "Explore our latest collection with modern aesthetics.",
            buttons: [
                { text: "Shop Now", link: "/shop" },
                { text: "Learn More", link: "/about" },
            ],
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QaLIIMvuHFEjkD_G6-1G4TLGR5mtbSuCnQ&s",
            title: "Experience Unmatched Quality",
            description: "Handcrafted with precision and care, just for you.",
            buttons: [
                { text: "Browse Collection", link: "/collection" },
                { text: "Contact Us", link: "/contact" },
            ],
        },
        {
            id: 3,
            image: "https://www.shutterstock.com/image-vector/cosmetics-tubes-mock-ad-banner-260nw-1468374257.jpg",
            title: "Elevate Your Everyday Life",
            description: "Premium designs to suit your unique style.",
            buttons: [
                { text: "Get Started", link: "/get-started" },
                { text: "Read Reviews", link: "/reviews" },
            ],
        },
    ];

    // Animation variants for slide transitions
    const slideVariants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };

    // Animation for text and buttons
    const textVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    };

    // Set up auto-sliding logic
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                {slides.map((slide, index) => (
                    <motion.div
                        key={slide.id}
                        className={`absolute w-full h-full ${
                            index === currentIndex ? "block" : "hidden"
                        }`}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={slideVariants}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </motion.div>
                ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
                <motion.h1
                    key={slides[currentIndex].title}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={textVariants}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    {slides[currentIndex].title}
                </motion.h1>
                <motion.p
                    key={slides[currentIndex].description}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={textVariants}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-lg md:text-2xl mb-8"
                >
                    {slides[currentIndex].description}
                </motion.p>
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={textVariants}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex space-x-4"
                >
                    {slides[currentIndex].buttons.map((button, idx) => (
                        <a
                            key={idx}
                            href={button.link}
                            className="px-6 py-3 bg-calm-green-500 hover:bg-calm-green-600 text-white text-lg rounded-md shadow-md transition-transform transform hover:scale-105"
                        >
                            {button.text}
                        </a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Slideshow;
