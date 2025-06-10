const express = require("express");
const connectDB = require("./Config/databse");
const UserRoutes = require("./Routes/userRoutes");
const ProductRoutes = require("./Routes/productRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", UserRoutes);
app.use("/api/product", ProductRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
  });
});
