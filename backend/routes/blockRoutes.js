const express = require("express");
const router = express.Router();

const blocks = [
  {
    block_id: "B1",
    block_name: "Computer Science Block",
    x: 200,
    y: 150,
    floors: [
      { floor_no: 1, details: "Labs 101-105" },
      { floor_no: 2, details: "Faculty Rooms" }
    ]
  },
  {
    block_id: "B2",
    block_name: "Mechanical Block",
    x: 400,
    y: 300,
    floors: [
      { floor_no: 1, details: "Workshop & Seminar Hall" }
    ]
  }
];

router.get("/", (req, res) => {
  res.json(blocks);
});

module.exports = router;