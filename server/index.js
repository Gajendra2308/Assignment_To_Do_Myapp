
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());


const mongoose = require("mongoose");

require("dotenv").config();

const source = process.env.MONGODB_ATLAS_CONNECTION;

mongoose
  .connect(source)
  .then(() => console.log("✅ DB Connected Successfully"))
  .catch((error) => console.log(error));

const todoRoutes = require("./routers/todo.router");
app.use("/", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
