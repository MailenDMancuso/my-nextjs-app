import { getBlogDetails } from "../../../../utils/apiRequests";

const BlogDetails = async ({ params }) => {
  // Each page receives its params
  const blog = await getBlogDetails(params.id);

  return (
    <div className="border border-red-600 m-5">
      Blog item details:
      <div>{blog.title}</div>
      <div>{blog.description}</div>
    </div>
  );
};

export default BlogDetails;
