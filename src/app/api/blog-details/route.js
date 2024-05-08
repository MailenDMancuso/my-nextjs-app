// Requests to /api/blog-details

import { NextResponse } from "next/server";
import dbConnect from "../../utils/dbConnect";
import Blog from "../../../models/blog";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");

    if (!blogId) {
      return NextResponse.json({
        success: false,
        msg: "Failed to retreive the current blog",
      });
    }

    const currentBlogDetails = await Blog.find({ _id: blogId });

    if (currentBlogDetails?.length) {
      return NextResponse.json({
        success: true,
        data: currentBlogDetails[0],
      });
    } else {
      return NextResponse.json({
        success: false,
        msg: "Failed to retreive the current blog",
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
