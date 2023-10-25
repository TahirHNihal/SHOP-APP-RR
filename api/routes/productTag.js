import express from "express";
import {
  createProductTag,
  deleteProductTag,
  editProductTag,
  getAllProductTag,
  getSingleProductTag,
} from "../controllers/productTagController.js";

//Create router
const router = express.Router();

//Routes
router.get("/tag", getAllProductTag);
router.post("/tag", createProductTag);
router.get("/tag/:slug", getSingleProductTag);
router.delete("/tag/:id", deleteProductTag);
router.put("/tag/:id", editProductTag);

//Export
export default router;
