import React from "react";
import "../Styles/styles.css";

function AboutItem(props) {
  return (
    <div className="flex flex-col align-middle content-center justify-center p-4">
      <img
        alt="about"
        src={props.logo}
        className="w-auto max-h-10 m-4 self-center"
      />
      <h3 className="font-sans text-gray-100 font-bold text-center">
        {props.name}
      </h3>
      <h4 className="font-sans text-gray-300 text-center">{props.title}</h4>
      <h5 className="font-sans text-gray-400 text-center">
        {props.start} - {props.end !== "Present" ? props.end : "Present"}
      </h5>
      <p className="font-sans text-gray-400 text-center">{props.description}</p>
    </div>
  );
}

export default AboutItem;
