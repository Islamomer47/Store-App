import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-pink-vibe-50 flex items-center justify-center p-4 w-[98rem]">
      {/* Product Details Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-screen-lg w-full flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[30rem] object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-pink-vibe-600 mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-800 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-pink-vibe-700 mb-4">
              Price: ${product.price}
            </p>
            <p className="text-md text-pink-vibe-500 mb-6">
              Category: {product.category}
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              to="/list"
              className="px-6 py-3 bg-pink-vibe-600 hover:bg-pink-vibe-700 text-white font-semibold rounded-lg shadow-lg transition-all"
            >
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
