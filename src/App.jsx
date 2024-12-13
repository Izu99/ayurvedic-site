import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/Productpage";
import ProductDetailPage from "./pages/ProductDetailspage";
import CartPage from "./pages/Cartpage";
import ContactPage from "./pages/Contactpage";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route
                        path="/product/:productId"
                        element={<ProductDetailPage />}
                    />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
