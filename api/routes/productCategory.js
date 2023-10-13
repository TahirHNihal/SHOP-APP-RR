import express from "express";
import {
  getAllProductCategory,
  createProductCategory,
  getSingleProductCategory,
  deleteProductCategory,
  editProductCategory,
} from "../controllers/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js";

//Create router
const router = express.Router();

//Routes
router.get("/category", getAllProductCategory);
router.post("/category", productCategoryMulter, createProductCategory);
router.get("/category/:slug", getSingleProductCategory);
router.delete("/category/:id", deleteProductCategory);
router.put("/category/:id", editProductCategory);

//Export
export default router;
