import React, { lazy, useEffect, useState } from "react";
import "../Styles/styles.css";
import sanityClient from "../Helpers/client.js";
import PostItem from "./postitem";
import { Link } from "react-router-dom";
// const PostItem = lazy(() => import("./postitem"));

function BlogPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        "name": author->name,
        "authorImage": author->image,
        mainImage{
          asset->{
          _id,
          url
        },
        body,
        
      }
    }`
      )
      .then((data) => {
        setAllPosts(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-wrap m-3 rounded-3xl  p-10 w-11/12 self-center justify-center ">
      {allPostsData &&
        allPostsData.map((post) => (
          <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
            <PostItem
              key={post.slug.current}
              title={post.title}
              image={post.mainImage}
              author={post.name}
              authorimg={post.authorImage}
              body={post.body}
            />
          </Link>
        ))}
    </div>
  );
}

export default BlogPosts;
