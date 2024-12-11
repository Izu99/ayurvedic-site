import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/Productpage";
import ProductDetailPage from "./pages/ProductDetailspage";

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
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
