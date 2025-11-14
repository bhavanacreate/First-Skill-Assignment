require("dotenv").config();
const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movies");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", movieRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
