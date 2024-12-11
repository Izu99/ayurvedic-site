import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetailPage = () => {
    const { productId } = useParams(); // Get the productId from the URL
    const location = useLocation(); // Get the location object to access URL parameters
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    // Simulate fetching product data
    useEffect(() => {
        const fetchProduct = async () => {
            // Extract the image URL from the URL parameters
            const urlParams = new URLSearchParams(location.search);
            const image = urlParams.get("image");

            // Fetch the product data from a server or use static data
            const productData = {
                id: productId,
                name: `Product ${productId}`,
                description: `This is the description for product ${productId}. It has unique features and benefits.`,
                price: 10 * productId, // Example price
                image, // Use the image from the URL parameter
            };
            setProduct(productData);
            setTotalPrice(productData.price);
        };

        fetchProduct();
    }, [productId, location.search]);

    // Handle quantity change
    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        setQuantity(newQuantity);
        setTotalPrice(product.price * newQuantity); // Update total price
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-8 bg-light-cream">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 md:h-full object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 p-6">
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

                        <div className="mt-6 flex space-x-4">
                            <button className="bg-calm-green-500 text-white px-4 py-2 rounded-md hover:bg-calm-green-600 transition-colors duration-300">
                                Add to Cart
                            </button>
                            <button className="bg-soft-yellow-700 text-white px-4 py-2 rounded-md hover:bg-soft-yellow-600 transition-colors duration-300">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
