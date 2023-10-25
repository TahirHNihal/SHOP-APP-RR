import express from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProduct,
  getSingleProduct,
} from "../controllers/productController.js";
import { productMulter } from "../utils/multer.js";

//Create router
const router = express.Router();

//Routes
router.get("/", getAllProduct);
router.post("/", productMulter, createProduct);
router.get("/:slug", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", productMulter, editProduct);

//Export
export default router;
