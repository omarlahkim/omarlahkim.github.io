import React from "react";
import sanityClient from "../Helpers/client.js";
import imageUrlBuilder from "@sanity/image-url";
// import "../Styles/styles.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function PostItem(props) {
  return (
    <div className="flex flex-row p-4 bg-black rounded-xl m-3 ">
      <img
        className="rounded-xl"
        src={urlFor(props.image).width(400).url()}
        width={500}
      />
      <div className="p-4">
        <div>
          <h3 className="font-sans font-bold text-2xl text-gray-100">
            {props.title}
          </h3>
        </div>
        <div className="flex flex-row mt-1">
          <img
            className="w-6 h-6 rounded-full"
            src={urlFor(props.authorimg).width(100).url()}
            alt="Author is Kap"
          />
          <h3 className="font-sans font-bold text-sm text-gray-200">
            {props.author}
          </h3>
        </div>
        <p className="text-gray-300">
          The title of this post was a trending Quora question, with popular
          responses boiling down to “it’s not, the unemployment rate is 3.6%,”
        </p>
      </div>
    </div>
  );
}

export default PostItem;
