import { getAllBlogs } from "../../../utils/apiRequests";
import BlogItem from "../../components/Blog";

const BlogList = async () => {
  // TODO: manage states conventions - loading, 404, error
  const blogs = await getAllBlogs();

  return (
    <div className="flex flex-col-4 gap4">
      <h1>Blog List</h1>
      {blogs?.length ? (
        blogs.map((blog) => <BlogItem key={blog._id} blog={blog} />)
      ) : (
        <>No blogs available</>
      )}
    </div>
  );
};

export default BlogList;
