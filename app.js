const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const productRoutes = require("./routes/productRoutes");
const donationRoutes = require("./routes/donationRoutes");

dotenv.config();

// Initialize App
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to Database
connectDB();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/products", productRoutes);
app.use("/api/donations", donationRoutes);

// Global Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
