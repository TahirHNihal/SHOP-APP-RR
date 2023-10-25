import { createSlug } from "../helper/slugCreate.js";
import Product from "../models/Product.js";
import fs, { unlinkSync } from "fs";

//Get all the product
export const getAllProduct = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      message: "Products data gatet",
    });
  } catch (error) {
    res.status(200).json({
      categories: [],
      message: "",
      error: error.message,
    });
    console.log(`${error.message}`.bgRed.white);
  }
};

//Create product
export const createProduct = async (req, res) => {
  try {
    const { name, reg_price, sale_price, long_des, short_des, stock } =
      req.body;
    //Get product photo
    const productPhoto = req.files["product-photo"][0].filename;

    //Get product gallery photo
    const productGalPhoto = [];
    [...req.files["product-gal-photo"]].forEach((item) => {
      productGalPhoto.push(item.filename);
    });
    //Send data to database
    const data = await Product.create({
      name,
      slug: createSlug(name),
      reg_price,
      sale_price,
      long_des,
      short_des,
      stock,
      photo: productPhoto,
      gallery: productGalPhoto,
    });
    res.status(200).json({
      product: data,
      message: "Product created successfuly",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//Get single category
export const getSingleProduct = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Product.findOne({ slug });
    res.status(200).json({
      product: data,
      message: "Product gated successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//delete category
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);

    //Delete product photo
    unlinkSync(`api/public/products/${data.photo}`);
    //Delete product gallery photo
    data.gallery.forEach((item) => {
      unlinkSync(`api/public/products/${item}`);
    });

    res.status(200).json({
      product: data,
      message: "Delete product successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//Edit category
export const editProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      reg_price,
      sale_price,
      long_des,
      short_des,
      stock,
      categories,
      tags,
      brands,
    } = req.body;

    //Get edit product
    const product = await Product.findById(id);
    unlinkSync(`api/public/products/${product.photo}`);
    //Product photo update
    let photo = product.photo;
    console.log(photo);

    const data = await Product.findByIdAndUpdate(
      id,
      {
        name,
        // slug: createSlug(name),
        reg_price,
        sale_price,
        long_des,
        short_des,
        stock,
        photo,
        // gallery: productGalPhoto,
      },
      { new: true }
    );
    res.status(200).json({
      product: data,
      message: "Update product data successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};
