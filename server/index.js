require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

const PORT = 2000;

app.use("/auth", userRoutes);

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL)
.then(console.log("mongoDB is connected"))
.catch((error) => console.log(error));

app.listen(PORT, () => console.log("hi there"));