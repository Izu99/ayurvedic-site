import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [formMessage, setFormMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setFormMessage("Please fill in all required fields.");
            return;
        }

        // Simulate form submission
        console.log("Form Submitted:", formData);
        setFormMessage("Thank you! Your message has been sent.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="p-8 bg-light-cream">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
                {/* Company Details */}
                <div className="mb-12">
                    <h2 className="text-4xl text-calm-green-700 text-center font-bold mb-6">
                        Contact Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center">
                            <FaMapMarkerAlt
                                size={24}
                                className="text-calm-green-500 mr-4"
                            />
                            <p>123 Greenway Lane, Nature City, Earth 12345</p>
                        </div>
                        <div className="flex items-center">
                            <FaPhoneAlt
                                size={24}
                                className="text-calm-green-500 mr-4"
                            />
                            <p>+123 456 7890</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope
                                size={24}
                                className="text-calm-green-500 mr-4"
                            />
                            <p>support@ayurveda.com</p>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mt-6">
                        <a
                            href="https://facebook.com"
                            className="text-calm-green-500 hover:text-calm-green-700"
                        >
                            <FaFacebookF size={28} />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-calm-green-500 hover:text-calm-green-700"
                        >
                            <FaInstagram size={28} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="text-calm-green-500 hover:text-calm-green-700"
                        >
                            <FaLinkedin size={28} />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="col-span-1">
                        <label
                            htmlFor="name"
                            className="block text-calm-green-700 font-semibold"
                        >
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 border border-calm-green-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label
                            htmlFor="email"
                            className="block text-calm-green-700 font-semibold"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 border border-calm-green-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label
                            htmlFor="phone"
                            className="block text-calm-green-700 font-semibold"
                        >
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 border border-calm-green-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-1">
                        <label
                            htmlFor="subject"
                            className="block text-calm-green-700 font-semibold"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 border border-calm-green-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-calm-green-700 font-semibold"
                        >
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full mt-2 p-3 border border-calm-green-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-calm-green-500 text-white py-3 rounded-md hover:bg-calm-green-600 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                {formMessage && (
                    <div className="mt-4 text-center text-calm-green-600">
                        {formMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactPage;
