import { createSlug } from "../helper/slugCreate.js";
import Brand from "../models/Brand.js";

//Get all the brand
export const getAllProductBrand = async (req, res) => {
  try {
    const data = await Brand.find();
    res.status(200).json({
      brands: data,
      message: "Brand data gatet",
    });
  } catch (error) {
    res.status(200).json({
      brands: [],
      message: "",
      error: error.message,
    });
    console.log(`${error.message}`.bgRed.white);
  }
};

//Create product brand
export const createProductBrand = async (req, res) => {
  try {
    const { name} = req.body;
    const data = await Brand.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: data,
      message: "Create brand successful",
    });
  } catch (error) {
    res.status(200).json({
      brand: [],
      message: "",
      error: error.message,
    });
    console.log(`${error.message}`.bgRed.white);
  }
};

//Get single brand
export const getSingleProductBrand = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Brand.findOne({ slug });
    res.status(200).json({
      brand: data,
      message: "Brand gated successfully",
    });
  } catch (error) {
    res.status(200).json({
      brands: [],
      message: "",
      error: error.message,
    });
    console.log(`${error.message}`.bgRed.white);
  }
};

//Delete brand
export const deleteProductBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      brand: data,
      message: "Delete brand successfully",
    });
  } catch (error) {
    res.status(200).json({
      brands: [],
      message: "",
      error: error.message,
    });
    console.log(`${error.message}`.bgRed.white);
  }
};

//Edit brand
export const editProductBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      brand: data,
      message: "Update brand data successfully",
    });
  } catch (error) {
    res.status(200).json({
      brands: [],
      message: "",
      error: error.message,
    });
    console.log(`${error.message}`.bgRed.white);
  }
};
