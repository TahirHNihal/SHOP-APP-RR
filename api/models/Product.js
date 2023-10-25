import mongoose from "mongoose";

//Schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    reg_price: {
      type: Number,
      require: true,
    },
    sale_price: {
      type: Number,
    },
    long_des: {
      type: String,
      trim: true,
    },
    short_des: {
      type: String,
      trim: true,
    },
    stock: {
      type: Number,
      default: null,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    gallery: {
      type: Array,
      default: null,
      trim: true,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
      default: [],
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
      default: [],
    },
    brands: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//Export model
export default mongoose.model("Product", productSchema);
