import React from "react";
import { Link } from "react-router-dom";
import Device from "./Device";

function projectItem(props) {
  const id = props.id;

  return (
    <Link
      to={`${props.match.url}/${id}`}
      style={{ textDecoration: "none", color: "#1d1d1f" }}
    >
      <div className="project">
        <Device device="android" content={props.deviceContent} />

        <div className="projectText">
          <h2>{props.title}</h2>
          <h4>{props.subtitle}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default projectItem;
