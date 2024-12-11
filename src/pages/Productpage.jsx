import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductPage = () => {
    const products = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        description: `This is the description for product ${
            index + 1
        }. It has unique features and benefits.`,
        price: `$${(index + 1) * 10}`,
        image: `/images/product-img${(index % 3) + 1}.jpg`, // Use 3 rotating images for demo
    }));

    const itemsPerPage = 8; // Items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Get paginated products
    const paginatedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="p-8 mt-10 bg-light-cream-100">
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-4xl text-calm-green-700 text-center mb-12 font-natural">
                    Our Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {paginatedProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-calm-green-600 text-2xl font-bold mt-2">
                                    {product.name}
                                </h3>
                                <p className="text-soft-yellow-700 text-sm mb-2">
                                    {product.description}
                                </p>
                                <p className="text-calm-green-500 text-xl font-semibold mb-4">
                                    {product.price}
                                </p>
                                {/* Link to the unique product page with image as URL parameter */}
                                <Link
                                    to={`/product/${
                                        product.id
                                    }?image=${encodeURIComponent(
                                        product.image
                                    )}`}
                                    className="inline-block px-6 py-2 bg-calm-green-500 text-white rounded-full hover:bg-calm-green-600 transition-colors duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-12 flex justify-center items-center space-x-4">
                    <button
                        className={`px-6 py-2 rounded-full ${
                            currentPage > 1
                                ? "bg-calm-green-500 text-white"
                                : "bg-gray-300 text-gray-500"
                        }`}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                        Previous
                    </button>
                    <div className="text-calm-green-700 font-poppins">
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        className={`px-6 py-2 rounded-full ${
                            currentPage < totalPages
                                ? "bg-calm-green-500 text-white"
                                : "bg-gray-300 text-gray-500"
                        }`}
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
