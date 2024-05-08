"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBlog } from "../utils/apiRequests";

const initialFormData = {
  title: "",
  description: "",
};

export default function AddBlog() {
  const [blogFormData, setBlogFormData] = useState(initialFormData);
  const router = useRouter();

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    const data = await createBlog(blogFormData);
    if (data.success) {
      router.push("/blogs");
    } else {
      // error handling when posting new blog - validations
      alert(data.msg.message);
    }
  };

  return (
    <div className="m-5">
      <h1 className="text-xl my-6">Add new blog</h1>

      <form onSubmit={handleSaveBlog}>
        <div className="flex flex-col gap-3">
          <label>Enter blog title:</label>
          <input
            className="border border-black-500 p-3 outline-none"
            name="title"
            placeholder="Enter blog title"
            value={blogFormData.title}
            onChange={(e) =>
              setBlogFormData({
                ...blogFormData,
                title: e.target.value,
              })
            }
          />
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <label>Enter blog description:</label>
          <textarea
            rows={5}
            className="border border-black-500 p-3 outline-none mb-3"
            name="description"
            placeholder="Enter blog description"
            value={blogFormData.description}
            onChange={(e) =>
              setBlogFormData({
                ...blogFormData,
                description: e.target.value,
              })
            }
          />
        </div>

        <div>
          <button type="submit" className="btn">
            Add block
          </button>
        </div>
      </form>
    </div>
  );
}
