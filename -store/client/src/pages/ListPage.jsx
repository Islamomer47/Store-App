import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products");
        setProducts(response.data);
        setFilteredProducts(response.data);

        // Extract unique categories from the products
        const uniqueCategories = [
          "all",
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-pink-vibe-50 p-4">
      {/* Hero Section */}
      <section className="relative w-full h-[30rem] mb-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://blog.icons8.com/wp-content/uploads/old-uploads/2019/08/shopping-clipart-icons-cute-color.jpg")', // Replace with your hero image URL
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-4xl font-extrabold mb-4">
                Discover Our Exclusive Products
              </h1>
              <p className="text-lg mb-6">
                Explore our latest collection and find your perfect match. From
                trendy apparel to stylish accessories, we've got something for
                everyone.
              </p>
              <Link
                to="/"
                className="px-6 py-3 bg-pink-vibe-600 hover:bg-pink-vibe-700 text-white font-semibold rounded-lg shadow-lg"
              >
                back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="px-6 py-3 border border-pink-vibe-300 rounded-md text-pink-vibe-600 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-vibe-500 transition-all"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative w-full h-[20rem]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-semibold text-pink-vibe-600 truncate">
                  {product.title}
                </h2>
                <p className="text-xl font-bold text-gray-800">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-500 capitalize">
                  {product.category}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
