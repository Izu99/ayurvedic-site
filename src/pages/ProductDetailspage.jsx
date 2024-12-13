import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa"; // React Icons for extra styling

const ProductDetailPage = () => {
    const { productId } = useParams(); // Get the productId from the URL
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedImage, setSelectedImage] = useState(""); // Selected image for product gallery
    const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options

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
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
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
            </div>
        </div>
    );
};

export default ProductDetailPage;
