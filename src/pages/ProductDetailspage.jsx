import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa"; // React Icons for extra styling
import { motion } from "framer-motion"; // Assuming you want to use motion for animations

const ProductDetailPage = () => {
    const { productId } = useParams(); // Get the productId from the URL
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(""); // Selected image for product gallery
    const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options
    const [recommendedProducts, setRecommendedProducts] = useState([]); // Placeholder for recommended products

    // Simulate fetching product data
    useEffect(() => {
        const fetchProduct = async () => {
            const productData = {
                id: productId,
                name: `Product ${productId}`,
                description: `This is the description for product ${productId}. It has unique features and benefits.`,
                price: 10 * productId, // Example price
                images: [
                    "https://m.media-amazon.com/images/I/618NFh2d3HL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/71KW3m76-lL._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/81G8SvhaV2L._SX522_.jpg",
                    "https://m.media-amazon.com/images/I/81UyxKulJ6L._SX522_.jpg",
                ],
                options: [
                    { name: "Size", values: ["S", "M", "L"] },
                    { name: "Color", values: ["Green", "Blue", "Red"] },
                ], // Example options
            };
            setProduct(productData);
            setSelectedImage(productData.images[0]); // Default to first image
            setTotalPrice(productData.price);

            // Recommended products simulation
            const recommendedData = [
                {
                    id: 1,
                    name: "Product 1",
                    description: "This is product 1",
                    price: 15,
                    image: "https://m.media-amazon.com/images/I/51HljytkhkL._SY450_.jpg",
                    rating: 4.5,
                },
                {
                    id: 2,
                    name: "Product 2",
                    description: "This is product 2",
                    price: 25,
                    image: "https://m.media-amazon.com/images/I/618NFh2d3HL._SX522_.jpg",
                    rating: 4.0,
                },
                // More recommended products...
            ];
            setRecommendedProducts(recommendedData);
        };

        fetchProduct();
    }, [productId]);

    // Handle quantity change
    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        setQuantity(newQuantity);
        calculateTotalPrice(product.price, selectedOptions, newQuantity);
    };

    // Handle image selection
    const handleImageChange = (image) => {
        setSelectedImage(image);
    };

    // Handle option selection and update price accordingly
    const handleOptionChange = (optionName, value) => {
        const newOptions = { ...selectedOptions, [optionName]: value };
        setSelectedOptions(newOptions);
        calculateTotalPrice(product.price, newOptions, quantity);
    };

    // Calculate total price based on selected options and quantity
    const calculateTotalPrice = (basePrice, options, qty) => {
        let optionPrice = 0;

        // Example: Adjust price based on selected options (e.g., size, color)
        if (options["Size"]) {
            optionPrice +=
                options["Size"] === "L" ? 5 : options["Size"] === "M" ? 3 : 0;
        }
        if (options["Color"]) {
            optionPrice +=
                options["Color"] === "Red"
                    ? 2
                    : options["Color"] === "Blue"
                    ? 1
                    : 0;
        }

        const newTotalPrice = basePrice + optionPrice * qty;
        setTotalPrice(newTotalPrice);
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-8 bg-light-cream">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Product Image Gallery */}
                    <div className="md:w-1/3 p-4">
                        {/* Thumbnail images */}
                        <div className="flex flex-col space-y-2">
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Product Image ${index + 1}`}
                                    className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                                        selectedImage === image
                                            ? "border-calm-green-500"
                                            : "border-gray-200"
                                    } hover:opacity-80`}
                                    onClick={() => handleImageChange(image)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="md:w-2/3 p-4">
                        <div className="w-full h-96 object-cover relative group">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="md:w-2/3 p-6">
                        <h1 className="text-3xl font-bold text-calm-green-700">
                            {product.name}
                        </h1>
                        <p className="mt-4 text-soft-yellow-700">
                            {product.description}
                        </p>
                        <p className="mt-4 text-xl font-semibold text-calm-green-500">
                            {`Price: $${product.price}`}
                        </p>

                        {/* Quantity selector */}
                        <div className="mt-4">
                            <label htmlFor="quantity" className="mr-2">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="1"
                                className="w-20 p-2 border border-calm-green-300 rounded-md"
                            />
                        </div>

                        <p className="mt-4 text-xl font-semibold text-calm-green-500">
                            {`Total Price: $${totalPrice.toFixed(2)}`}
                        </p>

                        {/* Product Options */}
                        <div className="mt-6">
                            <h3 className="font-semibold text-calm-green-600">
                                Available Options:
                            </h3>
                            <div className="flex flex-wrap mt-2">
                                {product.options.map((option) => (
                                    <div
                                        key={option.name}
                                        className="mr-4 mb-2"
                                    >
                                        <h4 className="font-poppins text-gray-700">
                                            {option.name}:
                                        </h4>
                                        <div className="flex space-x-2 mt-1">
                                            {option.values.map((value) => (
                                                <button
                                                    key={value}
                                                    onClick={() =>
                                                        handleOptionChange(
                                                            option.name,
                                                            value
                                                        )
                                                    }
                                                    className={`px-3 py-1 border rounded-md ${
                                                        selectedOptions[
                                                            option.name
                                                        ] === value
                                                            ? "bg-calm-green-500 text-white"
                                                            : "bg-gray-200 text-gray-700 hover:bg-calm-green-100"
                                                    } transition duration-300`}
                                                >
                                                    {value}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex space-x-4">
                            <button className="bg-calm-green-500 text-white px-4 py-2 rounded-md hover:bg-calm-green-600 transition-colors duration-300 flex items-center">
                                <FaCartPlus className="mr-2" /> Add to Cart
                            </button>
                            <button className="bg-soft-yellow-700 text-white px-4 py-2 rounded-md hover:bg-soft-yellow-600 transition-colors duration-300 flex items-center">
                                <FaArrowLeft className="mr-2" /> Checkout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Customer Reviews Section */}
                <div className="mt-10y px-6 py-4">
                    <h3 className="text-2xl font-semibold text-calm-green-700">
                        Customer Reviews
                    </h3>
                    <div className="mt-6 space-y-6">
                        {/* Sample Reviews */}
                        <div className="flex items-start space-x-4 border-b pb-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/10.jpg"
                                alt="John Doe"
                                className="w-16 h-16 object-cover rounded-full"
                            />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h4 className="font-semibold text-calm-green-600">
                                        John Doe
                                    </h4>
                                    <span className="text-yellow-400">
                                        ⭐⭐⭐⭐⭐
                                    </span>
                                </div>
                                <p className="mt-2 text-gray-700">
                                    "This product exceeded my expectations! The
                                    quality is fantastic, and it looks exactly
                                    as described. Highly recommend!"
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 border-b pb-4">
                            <img
                                src="https://randomuser.me/api/portraits/women/20.jpg"
                                alt="Jane Smith"
                                className="w-16 h-16 object-cover rounded-full"
                            />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h4 className="font-semibold text-calm-green-600">
                                        Jane Smith
                                    </h4>
                                    <span className="text-yellow-400">
                                        ⭐⭐⭐⭐
                                    </span>
                                </div>
                                <p className="mt-2 text-gray-700">
                                    "Good value for the price. The color was
                                    just a bit off from the pictures, but still
                                    a great purchase overall."
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/15.jpg"
                                alt="Michael Brown"
                                className="w-16 h-16 object-cover rounded-full"
                            />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h4 className="font-semibold text-calm-green-600">
                                        Michael Brown
                                    </h4>
                                    <span className="text-yellow-400">
                                        ⭐⭐⭐⭐⭐
                                    </span>
                                </div>
                                <p className="mt-2 text-gray-700">
                                    "Absolutely love it! The fit is perfect, and
                                    the product quality is top-notch. Will buy
                                    again!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <h2 className="text-4xl text-calm-green-700 text-center mb-12 font-natural">
                    You Might Also Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {recommendedProducts.slice(0, 4).map((product) => (
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

                                {/* Star Rating */}
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
            </div>
        </div>
    );
};

export default ProductDetailPage;
