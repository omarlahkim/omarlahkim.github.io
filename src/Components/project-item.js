import React from "react";
import { Link } from "react-router-dom";
import Device from "./Device";

function projectItem(props) {
  const id = props.id;

  return (
    <Link to="" style={{ textDecoration: "none", color: "#1d1d1f" }}>
      <div className="project">
        <Device device={props.platform} content={props.deviceContent} />

        <div className="">
          <h2 className="font-sans text-2xl m-6 text-gray-200 font-bold text-center">
            {props.title}
          </h2>
          <h4 className="font-sans text-sm m-6 text-gray-300 text-center">
            Techs: {props.subtitle}
          </h4>
          <p className="font-sans text-md m-6 text-gray-300 text-center">
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default projectItem;
