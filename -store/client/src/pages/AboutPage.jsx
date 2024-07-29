import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section
      className="bg-pink-vibe-50 bg-cover bg-center min-h-screen w-[98rem]"
      style={{
        backgroundImage: 'url("./src/assets/about-bg.gif")',
      }}
    >
      <div className="bg-pink-vibe-900 bg-opacity-50 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center py-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">Our Story</h1>
        </div>
        <div className="bg-white bg-opacity-90 max-w-4xl p-8 rounded-lg shadow-lg text-center">
          <p className="text-lg text-gray-800 mb-6">
            Welcome to our store! We are passionate about providing the best
            products to our customers. Our journey started with a simple idea:
            to offer quality items at great prices. Over the years, we have
            grown and evolved, but our commitment to excellence remains the
            same.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            Our mission is to deliver a seamless shopping experience and to
            bring you products that you will love. Thank you for being a part of
            our story and supporting us on this journey.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            We look forward to serving you and making your shopping experience
            delightful!
          </p>
          <Link
            to="/list"
            className="inline-block mt-8 px-8 py-3 text-lg font-medium text-white bg-pink-vibe-600 hover:bg-pink-vibe-700 rounded-full shadow-lg transition-all"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
