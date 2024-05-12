require("dotenv").config();

const path = require("path");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Body parser middleware to parse JSON
app.use(express.json());

const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);
app.use("/admin", adminRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("connected TO PORT ", process.env.PORT);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
