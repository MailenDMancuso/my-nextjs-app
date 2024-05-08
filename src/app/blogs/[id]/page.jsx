import { getBlogDetails } from "../../utils/apiRequests";

export default async function BlogDetails({ params }) {
  // Each page receives its params
  const blog = await getBlogDetails(params.id);

  return (
    <div className="m-5">
      <h1 className="text-xl mb-3">Blog item details:</h1>
      <div>{blog.title}</div>
      <div>{blog.description}</div>
    </div>
  );
}
