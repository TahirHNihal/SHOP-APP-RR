import Tag from "../models/Tag.js";

//Get all the tags
export const getAllProductTag = async (req, res) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      tags: data,
      message: "Tag data gated",
    });
  } catch (error) {
    res.status(200).json({
      tags: [],
      message: "",
      error: error.message,
    });
    console.log(`${error.message}`.bgRed.white);
  }
};

//Create product tag
export const createProductTag = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Tag.create({
      name,
      slug,
    });
    res.status(200).json({
      tag: data,
      message: "Tag created successfuly",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//Get single tag
export const getSingleProductTag = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Tag.findOne({ slug });
    res.status(200).json({
      tag: data,
      message: "Tag gated successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//delete tag
export const deleteProductTag = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      category: data,
      message: "Delete tag successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//Edit tag
export const editProductTag = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(
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
      tag: data,
      message: "Update tag data successfully",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};
