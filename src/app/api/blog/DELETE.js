import { NextResponse } from "next/server";
import dbConnect from "../../../../utils/dbConnect";
import Blog from "../../../models/blog";

export async function DELETE(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");

    if (!blogId) {
      //     return NextResponse.json({
      //         success: false,
      //         msg: 'Failed to create a new blog'
      //     });
    }
    const deletedBlog = await Blog.deleteOne(blogId);

    // if (newBlogData)  {
    //     return NextResponse.json({
    //         success: true,
    //         msg: 'Blog added successfully'
    //     })
    // } else {
    //     return NextResponse.json({
    //         success: false,
    //         msg: 'Failed to create a new blog'
    //     });
    // }
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      success: false,
      msg: e,
    });
  }
}
