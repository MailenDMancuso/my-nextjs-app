export const createBlog = async (blogFormData) => {
  const response = await fetch(`${process.env.API}/blog`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(blogFormData),
  });

  const data = await response.json();

  return data;
};

export const getAllBlogs = async () => {
  const response = await fetch(`${process.env.API}/blog`, {
    method: "GET",
    cache: "no-store",
  });

  const result = await response.json();

  if (result.success) {
    return result.data;
  } else {
    return [];
  }
};

export const getBlogDetails = async (id) => {
  const response = await fetch(`${process.env.API}/blog-details?id=${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const result = await response.json();

  if (result.success) {
    return result.data;
  }
};

export const deleteBlog = async (id) => {
  const response = await fetch(`${process.env.API}/blog?id=${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};
