import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        name: "Arjun K.",
        comment:
            "I love the Herbal Hair Oil! My hair feels so much healthier and thicker after just a few weeks.",
        image: "/images/customer-img1.jpg",
    },
    {
        id: 2,
        name: "Meera P.",
        comment:
            "The Natural Face Cream is a game changer. My skin has never looked so radiant!",
        image: "/images/customer-img2.jpg",
    },
    {
        id: 3,
        name: "Rahul S.",
        comment:
            "Switching to these Ayurvedic products was the best decision I made for my wellness journey.",
        image: "/images/customer-img3.jpg",
    },
    {
        id: 4,
        name: "Sneha R.",
        comment:
            "The Ayurvedic Shampoo is fantastic! My hair feels so clean and nourished.",
        image: "/images/customer-img4.jpg",
    },
    {
        id: 5,
        name: "Amit T.",
        comment:
            "I cannot recommend the Herbal Tea enough. It’s my go-to stress reliever!",
        image: "/images/customer-img5.jpg",
    },
];

const TestimonialCard = ({ testimonial, className }) => {
    return (
        <figure
            className={`flex flex-col items-center w-full my-10 sm:w-5/6 lg:w-5/6 mx-auto bg-light-cream rounded-xl shadow-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-calm-green-50 ${className}`}
            style={{ minHeight: "20rem" }}
        >
            <img
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.name}
                width="384"
                height="512"
            />
            <div className="text-center space-y-4">
                <div className="text-calm-green-500 text-lg font-semibold">
                    {testimonial.name}
                </div>
                <p className="text-base font-medium text-gray-700">
                    “{testimonial.comment}”
                </p>
            </div>
        </figure>
    );
};


const TestimonialsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="overflow-hidden bg-light-cream py-20">
            <div className="mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-calm-green-600 mb-10">
                    Customer Testimonials
                </h2>
                <Slider {...settings} className="flex justify-center space-x-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            className="bg-calm-green-50 h-[20rem]" // Adjust color as needed
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
