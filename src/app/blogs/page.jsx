import { getAllBlogs } from "../utils/apiRequests";
import BlogItem from "../../components/Blog";

export default async function BlogList() {
  // TODO: manage states conventions - loading, 404, error
  const blogs = await getAllBlogs();
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <>
      <h1 className="text-xl m-5">Blog List</h1>
      <div className="flex flex-wrap gap-2">
        {blogs.length ? (
          blogs.map((blog) => <BlogItem key={blog._id} blog={blog} />)
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </>
  );
}
