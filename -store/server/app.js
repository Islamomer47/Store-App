const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "dist")));

// Routes
app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching products");
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching product details");
  }
});

// React App
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
