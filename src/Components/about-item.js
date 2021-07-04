import React from "react";
import "../Styles/styles.css";

function AboutItem(props) {
  return (
    <div className="aboutItem">
      <img src={props.logo} className="itemLogo" />
      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
      <h5>
        {props.start} - {props.end != "Present" ? props.end : "Present"}
      </h5>
      <p>{props.description}</p>
    </div>
  );
}

export default AboutItem;
