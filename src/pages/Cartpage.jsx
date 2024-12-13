import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // React Icons for extra styling

const CartPage = () => {
    // Sample cart items
    const initialCartItems = [
        {
            id: 1,
            name: "Organic Turmeric Powder",
            price: 15,
            quantity: 2,
            image: "/images/product-img1.jpg",
        },
        {
            id: 2,
            name: "Herbal Hair Oil",
            price: 20,
            quantity: 1,
            image: "/images/product-img2.jpg",
        },
        {
            id: 3,
            name: "Natural Face Cream",
            price: 25,
            quantity: 3,
            image: "/images/product-img3.jpg", // Corrected image format to .jpg
        },
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // Handle quantity change
    const handleQuantityChange = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Handle remove item
    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="p-8 bg-light-cream-100">
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-4xl text-calm-green-700 text-center mb-12 font-natural">
                    Shopping Cart
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-6 border-b border-light-cream-300"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            <div className="flex-1 ml-6">
                                <h3 className="text-calm-green-600 text-lg font-semibold">
                                    {item.name}
                                </h3>
                                <p className="text-soft-yellow-700 text-sm">
                                    ${item.price} each
                                </p>
                                <div className="mt-2 flex items-center">
                                    <label
                                        htmlFor={`quantity-${item.id}`}
                                        className="mr-2 text-calm-green-600"
                                    >
                                        Quantity:
                                    </label>
                                    <input
                                        type="number"
                                        id={`quantity-${item.id}`}
                                        value={item.quantity}
                                        min="1"
                                        className="w-16 p-2 border border-calm-green-300 rounded-md"
                                        onChange={(e) =>
                                            handleQuantityChange(
                                                item.id,
                                                parseInt(e.target.value)
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-calm-green-500 text-lg font-semibold mb-4">
                                    ${item.price * item.quantity}
                                </p>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-red-500 hover:text-red-700 transition-colors duration-300 p-2"
                                >
                                    <FaTrashAlt size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-6">
                        <h3 className="text-calm-green-700 text-2xl font-bold">
                            Total: ${totalPrice}
                        </h3>
                        <button className="bg-calm-green-500 text-white px-8 py-3 rounded-full hover:bg-calm-green-600 transition-colors duration-300">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
