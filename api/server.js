import express from "express";
import Color from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCaregoryRoute from "./routes/productCategory.js";
import productBrandRoute from "./routes/productBrand.js";
import mongoDBConncent from "./config/db.js";

//Init Express
const app = express();
dotenv.config();

//Setup Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Set static
app.use(express.static("api/public"));

//Routes
app.use("/api/v1/product", productCaregoryRoute);
app.use("/api/v1/product", productBrandRoute);

//Environment variable
const PORT = process.env.PORT || 9090;

//Listen App
app.listen(PORT, () => {
  mongoDBConncent();
  console.log(`Server running on port ${PORT}`.bgGreen.white);
});
