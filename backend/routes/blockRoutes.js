const express = require("express");
const router = express.Router();

// Sample locations
const locations = [
  {
    block_id: 1,
    block_name: "Library",
    lat: 9.5125,
    lng: 77.6331
  },
  {
    block_id: 2,
    block_name: "Canteen",
    lat: 9.5128,
    lng: 77.6335
  },
  {
    block_id: 3,
    block_name: "Admin Block",
    lat: 9.5130,
    lng: 77.6338
  },
  {
    block_id: 4,
    block_name: "Parking",
    lat: 9.5133,
    lng: 77.6341
  }
];

// API endpoint
router.get("/", (req, res) => {
  res.json(locations);
});

module.exports = router;