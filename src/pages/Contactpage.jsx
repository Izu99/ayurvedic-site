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
            {" "}
            <h2 className="text-center text-4xl font-bold text-calm-green-700 mb-8">
                Contact Us
            </h2>{" "}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                {" "}
                {/* Left Image Section */}{" "}
                <div className="md:w-2/3">
                    {" "}
                    <img
                        src="https://images.pexels.com/photos/23511158/pexels-photo-23511158/free-photo-of-herbs-salves-in-jars-with-aloe-vera-flowers.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Map background"
                        className="w-full h-5/6 object-cover mt-10 rounded-2xl shadow-md"
                    />
                </div>
                {/* Contact Form Section */}
                <form onSubmit={handleSubmit} className="md:w-2/3 space-y-6 px-2 py-10 ">
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-calm-green-700 font-semibold mb-2"
                        >
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-3 border border-calm-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-calm-green-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-calm-green-700 font-semibold mb-2"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 border border-calm-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-calm-green-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="phone"
                            className="text-calm-green-700 font-semibold mb-2"
                        >
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="p-3 border border-calm-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-calm-green-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="subject"
                            className="text-calm-green-700 font-semibold mb-2"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="p-3 border border-calm-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-calm-green-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="text-calm-green-700 font-semibold mb-2"
                        >
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="p-3 border border-calm-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-calm-green-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-calm-green-500 text-white py-3 rounded-md hover:bg-calm-green-600 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
                {formMessage && (
                    <div className="mt-4 text-center text-calm-green-600">
                        {formMessage}
                    </div>
                )}
            </div>
            {/* Contact Details Section */}
            <div className="flex flex-col my-10 items-center space-y-6">
                <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt size={24} className="text-calm-green-500" />
                    <p className="text-calm-green-600">
                        123 Greenway Lane, Nature City, Earth 12345
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <FaEnvelope size={24} className="text-calm-green-500" />
                    <p className="text-calm-green-600">support@ayurveda.com</p>
                </div>
            </div>
            {/* Map Section */}
            <div className="mt-10 w-full h-64">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d16194.322250269628!2d79.91066605802077!3d6.902047906830291!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2slk!4v1734079150786!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg shadow-md"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactPage;
