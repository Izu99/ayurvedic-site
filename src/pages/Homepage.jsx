import React from 'react'
import HeroSection from "../components/Hero";
import FeaturedProducts from "../components/Products";
import CustomerTestimonials from "../components/Feedbacks";
import WhyChooseUs from "../components/Choese";

const Homepage = () => {
  return (
      <div>
          <HeroSection />
          <WhyChooseUs />
          <FeaturedProducts />
          <CustomerTestimonials />
      </div>
  );
}

export default Homepage