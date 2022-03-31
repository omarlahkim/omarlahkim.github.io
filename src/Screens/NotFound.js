import React from "react";
import "../Styles/styles.css";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <h1 className="font-sans font-bold text-4xl">
        <span role="img" aria-label="construction">
          🚧
        </span>{" "}
        ERROR 404 - NOT FOUND{" "}
        <span role="img" aria-label="construction">
          🚧
        </span>
      </h1>
    </div>
  );
}

export default NotFound;
