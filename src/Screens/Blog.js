import React, { lazy } from "react";
// import "../Styles/styles.css";

import BlogPosts from "../Components/blogposts";

function Blog() {
  return (
    <div className="BlogContainer flex flex-col content-center">
      <h2 className="text-gray-800 font-bold font-sans text-3xl text-center mt-8">
        Blog Posts
      </h2>
      <h3 className="text-gray-600 font-sans text-xl text-center ">
        Welcome to my blog posts page!
      </h3>

      <BlogPosts />
    </div>
  );
}

export default Blog;
