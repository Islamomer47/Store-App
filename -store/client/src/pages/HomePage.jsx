import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section
      className="bg-pink-vibe-50 bg-cover bg-center min-h-screen w-[98rem]"
      style={{
        backgroundImage: 'url("./src/assets/bg.gif")',
      }}
    >
      <div className="bg-pink-vibe-900 bg-opacity-50 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl text-center px-4 py-32 lg:py-48">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Welcome to Our Store
            <strong className="block text-pink-vibe-200 sm:inline">
              Discover Amazing Products.
            </strong>
          </h1>

          <p className="mt-4 text-lg text-white sm:text-xl">
            Explore our wide range of products and find the best deals just for
            you!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/list"
              className="px-8 py-4 text-lg font-medium text-white bg-pink-vibe-600 hover:bg-pink-vibe-700 rounded-full shadow-lg transition-all"
            >
              View Products
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 text-lg font-medium text-white bg-pink-vibe-600 hover:bg-pink-vibe-700 rounded-full shadow-lg transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
