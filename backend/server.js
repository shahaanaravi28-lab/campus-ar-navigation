const express = require("express");
const cors = require("cors");
const path = require("path");

const blockRoutes = require("./routes/blockRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blocks", blockRoutes);

// Absolute path fix
const frontendPath = path.resolve(__dirname, "../frontend");

app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
