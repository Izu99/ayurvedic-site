import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const galleryImages = [
        "https://m.media-amazon.com/images/I/51HljytkhkL._SY450_.jpg",
        "https://m.media-amazon.com/images/I/618NFh2d3HL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/31JZslFTegL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61WfTqDcqKL._SY450_.jpg",
        "https://m.media-amazon.com/images/I/31tIXhbjAWS._SY450_.jpg",
        "https://m.media-amazon.com/images/I/31+2kuYFk8S._SY450_.jpg",
    ];

    return (
        <footer
            className="bg-light-cream-100 w-100 h-auto text-calm-green-700 px-8 py-16"
            style={{
                background:
                    "url(https://img.freepik.com/premium-vector/translucent-water-wave-green-colors-with-air-bubbles-isolated-transparent-background-transparency-only-vector-file_444390-5267..jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Logo and Vision */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img
                            src="/images/logo.png"
                            alt="Company Logo"
                            className="w-auto h-10 hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <p className="text-calm-green-500 leading-relaxed">
                        Our vision is to deliver the best products that inspire
                        creativity and innovation.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        {["Products", "Services", "About Us", "Contact"].map(
                            (link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="hover:text-calm-green-800 transition-colors duration-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        {[FaFacebook, FaTwitter, FaInstagram].map(
                            (Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="p-2 rounded-full bg-calm-green-500 text-white hover:bg-calm-green-400 transition-colors duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            )
                        )}
                    </div>
                </div>

                {/* Image Gallery */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Gallery</h2>
                    <div className="grid grid-cols-3 gap-2">
                        {galleryImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Item ${index + 1}`}
                                className="w-full h-24  border-2 border-calm-green-200 p-2 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-sm text-calm-green-500">
                © 2024 Company Name. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
