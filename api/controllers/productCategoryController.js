import Category from "../models/Category.js";

//Get all the categories
export const getAllProductCategory = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: "Data gatet",
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

//Create product category
export const createProductCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Category.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Category created successfuly",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//Get single category
export const getSingleProductCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Category.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Category gated successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//delete category
export const deleteProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      category: data,
      message: "Delete category successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//Edit category
export const editProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Category.findByIdAndUpdate(
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
      category: data,
      message: "Update category data successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};
