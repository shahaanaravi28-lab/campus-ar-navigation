const express = require("express");
const cors = require("cors");

const blockRoutes = require("./routes/blockRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/locations", blockRoutes);

