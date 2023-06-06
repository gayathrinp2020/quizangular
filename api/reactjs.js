const express = require("express");
const router = express.Router();

// Import necessary database and model dependencies
const db = require("http://localhost:3000/api/login"); // Import your database connection module
const DataModel = require("http://localhost:3000/api/login"); // Import your data model

router.get("/", async (req, res) => {
  try {
    // Retrieve data from the database
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
