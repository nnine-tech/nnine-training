// Blog/[blog]/page.js
import React from "react";
import BlogDetails from "@/components/BlogDetails";

export const generateStaticParams = async () => {
  // Define the static paths for the `[blog]` route
  const blogs = ["1", "2", "3","4"]; // Replace with your dynamic blog IDs or fetch from an API
  return blogs.map((blog) => ({
    blog,
  }));
};

const BlogPage = ({ params }) => {
  const { blog } = params;

  return (
    <div>
      <BlogDetails blogsId={blog} />
    </div>
  );
};

export default BlogPage;
