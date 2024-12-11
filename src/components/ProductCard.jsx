import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="min-w-[250px] bg-calm-green-100/80 p-4 rounded-lg shadow-md">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-calm-green-600 text-lg font-poppins mt-2">
                {product.name}
            </h3>
            <p className="text-soft-yellow-700 text-sm">
                {product.description}
            </p>
            <p className="text-calm-green-500 text-base font-semibold">
                {product.price}
            </p>

            {/* Link to the unique product page */}
            <Link
                to={`/product/${product.id}`}
                className="text-soft-yellow-700 font-semibold"
            >
                Buy Now
            </Link>
        </div>
    );
};

export default ProductCard;
