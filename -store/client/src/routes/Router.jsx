import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ListPage from "../pages/ListPage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
