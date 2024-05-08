// Requests to /api/blog
import { NextResponse } from "next/server";
import dbConnect from "../../utils/dbConnect";
import Blog from "../../../models/blog";

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find();

    if (blogs) {
      return NextResponse.json({
        success: true,
        data: blogs,
      });
    } else {
      return NextResponse.json({
        success: false,
        msg: "Failed to create a new blog",
      });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      success: false,
      msg: e,
    });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const blogData = await req.json();
    const newBlogData = await Blog.create(blogData);

    if (newBlogData) {
      return NextResponse.json({
        success: true,
        msg: "Blog added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        msg: "Failed to create a new blog",
      });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      success: false,
      msg: e,
    });
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");

    if (!blogId) {
      return NextResponse.json({
        success: false,
        msg: "Blog id is required!",
      });
    }

    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (deletedBlog) {
      return NextResponse.json({
        success: true,
        msg: "Blog deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        msg: "Failed to delete the blog",
      });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      success: false,
      msg: e,
    });
  }
}
