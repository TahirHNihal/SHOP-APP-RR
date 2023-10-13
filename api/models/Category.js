import mongoose from "mongoose";

//Schema
const categorySchema = mongoose.Schema(
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
    photo: {
      type: String,
      default: null,
      trim: true,
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
export default mongoose.model("Category", categorySchema);
