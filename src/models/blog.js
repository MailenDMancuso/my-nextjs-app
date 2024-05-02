import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
      minLength: 4,
      maxLength: 20,
    },
    description: {
      type: String,
      required: [true, "Blog description is required"],
      trim: true,
      minLength: 4,
      maxLength: 50,
    },
    note: String,
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);

export default Blog;
