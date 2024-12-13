import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFilter, FaSearch, FaDollarSign, FaStar } from "react-icons/fa"; // Import React Icons

const ProductPage = () => {
    const products = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        description: `This is the description for product ${
            index + 1
        }. It has unique features and benefits.`,
        price: `$${(index + 1) * 10}`,
        rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3 and 5
        reviews: Math.floor(Math.random() * 200) + 10, // Random number of reviews
        buys: Math.floor(Math.random() * 500) + 100, // Random number of purchases
        image: `/images/product-img${(index % 3) + 1}.jpg`, // Use 3 rotating images for demo
    }));

    const itemsPerPage = 8; // Items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [filterCategory, setFilterCategory] = useState("");
    const [filterPrice, setFilterPrice] = useState("");

    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Get paginated products
    const paginatedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="p-8 mt-10 bg-light-cream-100 flex">
            {/* Left Sidebar (Filters) */}
            <div className="w-1/4 p-4 bg-white rounded-lg shadow-md mr-6">
                <h3 className="text-xl font-semibold text-calm-green-700 mb-4 flex items-center">
                    <FaFilter className="mr-2" /> Filter
                </h3>

                {/* Category Filter */}
                <div className="mb-4">
                    <h4 className="font-semibold text-calm-green-600">
                        Category
                    </h4>
                    <select
                        className="w-full p-2 mt-2 border rounded-md"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="herbal">Herbal</option>
                        <option value="skincare">Skincare</option>
                        <option value="aromatherapy">Aromatherapy</option>
                    </select>
                </div>

                {/* Price Filter */}
                <div className="mb-4">
                    <h4 className="font-semibold text-calm-green-600">
                        Price Range
                    </h4>
                    <select
                        className="w-full p-2 mt-2 border rounded-md"
                        value={filterPrice}
                        onChange={(e) => setFilterPrice(e.target.value)}
                    >
                        <option value="">All Prices</option>
                        <option value="0-20">$0 - $20</option>
                        <option value="20-50">$20 - $50</option>
                        <option value="50+">$50+</option>
                    </select>
                </div>
            </div>

            <div className="flex-1">
                {/* Filter Bar at the Top */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-4">
                        <FaSearch className="text-calm-green-600" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <select
                            className="p-2 border rounded-md"
                            onChange={(e) => setFilterPrice(e.target.value)}
                        >
                            <option value="">Sort by Price</option>
                            <option value="price-asc">
                                Price: Low to High
                            </option>
                            <option value="price-desc">
                                Price: High to Low
                            </option>
                        </select>
                    </div>
                </div>

                {/* Featured Products Section */}
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
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-calm-green-600 text-lg font-bold mt-2">
                                    {product.name}
                                </h3>
                                <p className="text-soft-yellow-700 text-sm mb-2">
                                    {product.description}
                                </p>
                                <p className="text-calm-green-500 text-xl font-semibold mb-4">
                                    {product.price}
                                </p>

                                {/* Star Rating & Reviews */}
                                <div className="flex items-center mt-2">
                                    <div className="flex text-yellow-500">
                                        {Array.from(
                                            { length: 5 },
                                            (_, index) => (
                                                <svg
                                                    key={index}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className={`bi bi-star-fill ${
                                                        index <
                                                        Math.floor(
                                                            product.rating
                                                        )
                                                            ? "text-yellow-500"
                                                            : "text-gray-300"
                                                    }`}
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.379.245-.827-.186-.737-.611l.683-3.516-2.736-2.364c-.319-.276-.148-.759.261-.76l3.617-.031 1.319-3.418c.195-.511.9-.51 1.095 0l1.319 3.418 3.617.031c.41 0 .58.484.261.76l-2.736 2.364.683 3.516c.09.425-.358.856-.737.611l-3.076-1.88-3.076 1.88z" />
                                                </svg>
                                            )
                                        )}
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">{`${product.rating} Stars`}</span>
                                </div>

                                {/* Purchase and Reviews info */}
                                <div className="text-gray-600 text-xs mt-1">
                                    <span>{`${product.reviews} reviews`}</span>{" "}
                                    | <span>{`${product.buys} bought`}</span>
                                </div>

                                {/* Link to the unique product page */}
                                <Link
                                    to={`/product/${product.id}`}
                                    className="inline-block px-6 py-2 bg-calm-green-500 text-white rounded-full hover:bg-calm-green-600 transition-colors duration-300 mt-4"
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
