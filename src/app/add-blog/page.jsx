"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBlog } from "../../../utils/apiRequests";

const initialFormData = {
  title: "",
  description: "",
};

const AddBlog = () => {
  const [blogFormData, setBlogFormData] = useState(initialFormData);
  const router = useRouter();

  const handleSaveBlog = async () => {
    const data = await createBlog(blogFormData);
    if (data.success) {
      router.push("/blog-list");
    } else {
      // error handling when posting new blog - validations
      alert(data.msg.message);
    }
  };

  // TODO: add styles from bootstrap mui
  return (
    <div>
      <h1>Add new blog:</h1>
      <div className="flex flex-col gap-4">
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

        <div className="flex flex-col gap-3">
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
          <button
            className="border border-black-500 p-4 bkg-black text-white"
            onClick={handleSaveBlog}
          >
            Add block
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
