import express from "express";
import {
  getAllProductBrand,
  createProductBrand,
  getSingleProductBrand,
  deleteProductBrand,
  editProductBrand,
} from "../controllers/productBrandController.js";
import { productBrandMulter } from "../utils/multer.js";

//Create router
const router = express.Router();

//Routes
router.get("/brand", getAllProductBrand);
router.post("/brand", productBrandMulter, createProductBrand);
router.get("/brand/:slug", getSingleProductBrand);
router.delete("/brand/:id", deleteProductBrand);
router.put("/brand/:id", editProductBrand);

//Export
export default router;
