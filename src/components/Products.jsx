import React from "react";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: "Organic Turmeric Powder",
            description:
                "Pure and natural turmeric powder, perfect for cooking.",
            price: "$15",
            image: "/images/product-img1.jpg",
            rating: 4.8, // Rating from 1 to 5
            reviews: 120, // Number of reviews
            buys: 500, // Number of purchases
        },
        {
            id: 2,
            name: "Herbal Hair Oil",
            description: "Nourishing herbal hair oil for healthy hair.",
            price: "$20",
            image: "/images/product-img2.jpg",
            rating: 4.8, // Rating from 1 to 5
            reviews: 120, // Number of reviews
            buys: 500, // Number of purchases
        },
        {
            id: 3,
            name: "Natural Face Cream",
            description: "Hydrating face cream with natural ingredients.",
            price: "$25",
            image: "/images/product-img3.jpg",
            rating: 4.8, // Rating from 1 to 5
            reviews: 120, // Number of reviews
            buys: 500, // Number of purchases
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
        hover: {
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="p-8 mt-20">
            <div className="container mx-auto">
                <h2 className="text-calm-green-700 roboto-slab text-4xl mb-8 text-center">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="bg-calm-green-100/80 p-4 shadow-lg rounded-lg flex transition-shadow duration-300"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0px 15px 30px rgba(169, 169, 169, 0.3)", // Lighter gray shadow on hover
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.img
                                src={product.image}
                                alt={product.name}
                                className="w-1/3 h-auto object-cover rounded-lg"
                                initial={{ scale: 0.9 }}
                                animate={{
                                    scale: 1,
                                    transition: { duration: 0.5 },
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.3 },
                                }}
                            />
                            <div className="w-2/3 pl-4">
                                <h3 className="text-calm-green-600 font-poppins text-xl mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-soft-yellow-700 font-poppins text-sm mb-3">
                                    {product.description}
                                </p>
                                <p className="text-calm-green-500 font-poppins text-lg mb-3">
                                    {product.price}
                                </p>
                                <motion.button
                                    className="px-3 py-1 bg-calm-green-500 text-white rounded-lg"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Buy Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
