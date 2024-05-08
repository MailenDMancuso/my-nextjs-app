"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { deleteBlog } from "../app/utils/apiRequests";

const BlogListComponent = ({ blog }) => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  const deleteBlogItem = async (id) => {
    try {
      const result = await deleteBlog(id);

      if (result.success) {
        router.refresh();
      }
    } catch (e) {
      console.error(
        "Something went wrong while fetching blogs details. Error: ",
        error
      );
    }
  };

  return (
    <div className="border border-black-100 bg-gray-100 m-5 px-4 py-2">
      <div>{blog.title}</div>
      <div>{blog.description}</div>
      <div className="flex mt-4 gap-3 text-sm">
        <button className="btn" onClick={() => deleteBlogItem(blog._id)}>
          Delete blog item
        </button>
        <Link className="btn" href={`/blogs/${blog._id}`}>
          View blog details
        </Link>
      </div>
    </div>
  );
};

export default BlogListComponent;
