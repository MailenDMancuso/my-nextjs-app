"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteBlog } from "../../utils/apiRequests";

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
    <div className="border border-red-600 m-5">
      <div>{blog.title}</div>
      <div>{blog.description}</div>
      <button onClick={() => deleteBlogItem(blog._id)}>Delete blog item</button>
      <Link href={`/blog-list/${blog._id}`}>View blog details</Link>
    </div>
  );
};

export default BlogListComponent;
